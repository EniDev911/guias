---
layout: default
title: Módulo MySQL-Connector-Python
css:
  custom: |-
    strong { color: #f92 }
---

## Método connect()

Este método configura una conexión, estableciendo una sesión con el servidor **MySQL**. Si no se dan argumentos, utiliza los valores predeterminados configurados en variables de entornos o archivo de opciones.

Se puede establecer una conexión con el servidor usando el método `.connect` del módulo:

{: .clipboard }
```py
import mysql.connector
cnx = mysql.connector.connect(user='joe', database='test')
```

O se puede usar la clase `MySQLConnection`:

{: .clipboard }
```py
from mysql.connector import MySQLConnection
cnx = MySQLConnection(user='joe', database='test')
```

---

## Propiedad mysql.connector.apilevel

Esta propiedad devuelve una cadena que indica el nivel de **API** de base de datos (DB-API) admitido:

```py
print(mysql.connector.apilevel)
```

---

## Método MySQLConnection.cursor()

Este método devuelve un objeto [`MySQLCursor()`](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor.html){:target='_blank' class='link'}. El objeto es una instancia [`cursor.CursorBase`](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor.html){:target='_blank' class='link'} en otras palabras con este método se pueden crear instancias que pueden ejecutar operaciones como sentencias **SQL**. Los objetos del cursor interactúan con el servidor MySQL usando un objeto de `MySQLConnection`.

![img - connection]({{ '/assets/images/python/mysql-connector.png' | relative_url}})

Para crear un cursor, se usa el método `.cursor()` de un objeto de conexión:

{: .clipboard }
```py
import mysql.connector

cnx = mysql.connector.connect(database='test')
cursor = cnx.cursor()
```

También es posible crear una instancia de un cursor pasando un objeto `MySQLConnection` a la clase `MySQLCursor`:

{: .clipboard }
```py
import mysql.connector
from mysql.connector.cursor import MySQLCursor

cnx = mysql.connector.connect(user='user_app', password='user_pass', database='test')
cursor = MySQLCursor(cnx)
```

---

## Método MySQLCursor.execute()

**SINTAXIS**:

```plaintext
cursor.execute(operation, params=None, multi=False)
iterator = cursor.execute(operation, params=None, multi=True)
```

Este método ejecuta una operación (consulta o comando) dada al servidor.

Si el parámetro `multi` está configurado en `True`, el método `.execute()` puede ejecutar múltiples declaraciones especificadas en la operación. Esto retorna un iterador que permite procesar el resultado de cada declaración. Sin embargo, el uso de parámetros no funciona bien en este caso y suele ser mejor idea ejecutar cada instrucción por sí sola.

El siguiente ejemplo realiza dos operaciones en una sola operación del método `execute()` y muestra el resultado de cada declaración:

{% capture ej_multi %}
{% highlight python %}
from mysql.connector import MySQLConnection

cnx = MySQLConnection(user="user", password="pass_user", database="test_db")

cursor = cnx.cursor()

for result in cursor.execute("select 1; select now(); select 2;", multi=True):
    if result.with_rows:
        print(f"Resultados producidos por la declaración '{result.statement}': ")
        print(result.fetchall())
{% endhighlight %}
{% endcapture %}

{% capture result %}
{% highlight shell %}
Resultados producidos por la declaración 'select 1':
[(1,)]
Resultados producidos por la declaración 'select now()':
[(datetime.datetime(2023, 11, 9, 14, 17, 10),)]
Resultados producidos por la declaración 'select 2':
[(2,)]
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_multi'
	tab_1='ej_multi.py'
	tab_2='Resultado'
	bloque_1=ej_multi
	bloque_normal=result
%}

---

## MySQLCursor.fetchall()

El método recupera todas (o todas las filas restantes) de un conjunto de resultados de una consulta a la base de datos y retorna una **lista de tuplas**. Si no hay más filas disponibles, devuelve una **lista vacía**.


El siguiente ejemplo muestra como podemos recuperar las dos primeras filas de un conjunto de resultados y luego recuperar el resto de filas restantes:

{% capture ej_fetchall %}
{% highlight python %}
from mysql.connector import MySQLConnection

cnx = MySQLConnection(user="root", password="root", database="mysql")
cursor = cnx.cursor()
cursor.execute("SELECT user FROM mysql.user;")

head_rows = cursor.fetchmany(size=2)
remaining_rows = cursor.fetchall()

print(head_rows)
print(remaining_rows)
{% endhighlight %}
{% endcapture %}

{% capture result_ej_fetchall %}
{% highlight shell%}
[('marco',), ('mysql.infoschema',)]
[('mysql.session',), ('mysql.sys',), ('root',)]
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_fetchall'
	tab_1='ej_fetchall.py'
	tab_2='Resultado'
	bloque_1=ej_fetchall
	bloque_normal=result_ej_fetchall
%}

> **Nota**: debemos recuperar todas las filas de la consulta actual antes de ejecutar nuevas sentencias utilizando la misma conexión.

---

## MySQLCursor.store_result()

Este método nos retorna un objeto iterable que se puede utilizar para procesar conjuntos de resultados producidos por un procedimiento almacenado ejecutado mediante el método `callproc()`. Los conjuntos de resultados permanecen disponibles hasta que utilice el cursor para ejecutar otra operación o llamar a otro procedimiento almacenado.

El siguiente ejemplo ejecuta un procedimiento almacenado que produce dos conjuntos de resultados y luego el método `stored_results()` los utiliza para recuperarlos:

{% capture sql_proc %}
{% highlight sql %}
-- EJECUTAR EN EL CLIENTE MYSQL
CREATE DATABASE ej_storeprocedure;
USE ej_storeprocedure;
CREATE table productos(
   id INT NOT NULL AUTO_INCREMENT,
   producto VARCHAR(40) NOT NULL,
   cantidad INT NOT NULL,
   precio DECIMAL(19,2) NOT NULL,
   marca VARCHAR(20) NOT null,
   PRIMARY KEY(id)
);
-- INSERTAMOS PRODUCTOS 
insert into productos values
(NULL, "Alpha",20, 250.00, "Biomax"),
(NULL, "Alpha Plus", 30, 480.00, "Biomax"),
(NULL, "Beta", 50, 270.00, "Caroten"),
(NULL, "Gamma", 15, 370.00, "Caroten"),
(NULL, "Delta Plus", 55, 170.00, "Dubix");
-- CREAR EL PROCEDIMIENTO
delimiter //
CREATE PROCEDURE productoId(IN idProd int)
BEGIN
	SELECT producto, cantidad, precio, marca
	FROM productos WHERE id = idProd;
END //
delimiter ;
{% endhighlight %}
{% endcapture %}

{% capture ej_callproc %}
{% highlight python %}
from mysql.connector import MySQLConnection

cnx = MySQLConnection(user="root", password="root", database="ej_storeprocedure")
cursor = cnx.cursor()

cursor.callproc("productoID", (4,))

print(cursor.stored_results())
for result in cursor.stored_results():
    print(result.fetchall())
{% endhighlight %}
{% endcapture %}

{% capture result_ej_callproc %}
{% highlight shell %}
[('Gamma', 15, Decimal('370.00'), 'Caroten')]
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_callproc'
	tab_1='script.py'
	tab_2='script.sql'
	tab_3='Resultado'
	bloque_1=ej_callproc
	bloque_2=sql_proc
	bloque_normal=result_ej_callproc
%}

---

## La propiedad MySQLCursor.with_rows

Esta propiedad es de solo lectura y nos retorna `True` o `False` para indicar si la operación ejecutada más reciente podría haber generado filas.

La propiedad `with_rows` es útil cuando es necesario determinar si una declaración produce un conjunto de resultados y necesita recuperar filas.

El siguiente ejemplo recupera las filas de una declaración `SELECT`, pero solo informará el valor de filas afectadas para la declaración `UPDATE`:

{% capture ej_with_rows %}
{% highlight python %}
import mysql.connector

cnx = mysql.connector.connect(user='user_app', database='test')
cursor = cnx.cursor()
operation = 'SELECT 1; UPDATE t1 SET c1 = 3 WHERE c1 = 2; SELECT c1 FROM t1;'
for result in cursor.execute(operation, multi=True):
  if result.with_rows:
    print(result.fetchall())
  else:
    print("Número de filas afectadas: {}".format(result.rowcount))
cnx.commit()
{% endhighlight %}
{% endcapture %}

{% capture sql_script_test %}
{% highlight sql %}
-- EJECUTAR EN EL CLIENTE MYSQL
CREATE DATABASE test;
USE test;
CREATE TABLE t1 (c1 INT);
INSERT INTO t1(c1) VALUES(2),(4),(5);
{% endhighlight %}
{% endcapture %}

{% capture result_ej_rowcount %}
{% highlight shell %}
[(1,)]
Número de filas afectadas: 1
[(3,), (4,), (5,)]
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_with_rows'
	tab_1='script.py'
	tab_2='script.sql'
	tab_3='Resultado'
	bloque_1=ej_with_rows
	bloque_2=sql_script_test
	bloque_normal=result_ej_rowcount
%}

> **OJO**: El hecho de que nos informe el número de filas afectadas no quiere decir que este cambio se ejecutó en el servidor. Para ello debemos ejecutar la confimración con `cnx.commit()`.

