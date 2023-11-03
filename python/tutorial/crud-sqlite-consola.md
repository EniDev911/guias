---
layout: default
title: "Crud Python - Sqlite3"
css:
  custom: |
    strong, h3 { color: #5397D2 }
    .entityTitleText { fill: #fff !important }
    svg[id^="mermaid-"] { min-width: 280px; max-width: 530px; font-size: 20px; }
libs:
  - name: fontAwesone
    cdn: //kit.fontawesome.com/6b8f0c7049.js
---

## Contexto


Antes de sumergirnos en el ejemplo **CRUD** con **Python** y **SQLite**, digamos que queremos crear una aplicación que maneje los datos del cliente. La aplicación creada debe tener la funcionalidad para **crear**, **actualizar**, **leer** y **eliminar** clientes. Tenemos que guardar esos datos del cliente en una **base de datos sqlite**.


Primero creamos una clase para definir la representación de un clientes y así facilitarnos el trabajo. En un nuevo archivo llamado **cliente.py** añadimos lo siguiente:

{% include tabs_python.html
    id='clase_de_cliente'
    tab_1='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}


> `@property` es un decorador incorporado para el uso de captadores y definidores en Python orientado a objetos

---

## Abrir una nueva conexión

Necesitamos crear un objeto de conexión para representar nuestra base de datos. En este caso, nuestra base de datos tendrá el nombre de **clientes.db** este nombre lo usaremos al invocar al método **.connect()** del módulo de sqlite3 y si no encuentra la ubicación del archivo lo crea:

{: .clipboard }
```py
import sqlite3

conexion = sqlite3.connect('clientes.db')
```

## Crear un cursor

Un cursor nos permite interactuar con la base de datos a través de comandos **SQL**, podemos crear un cursor llamando al método **.cursor()** del objeto de conexión creado previamente:

{: .clipboard }
```py
import sqlite3

conexion = sqlite3.connect('clientes.db')
cursor = conexion.cursor()
```

Con el cursor a nuestra disposición podemos llamar al método **.execute()** para ejecutar el comando **SQL** para crear la tabla.

Nuestra tabla tendrá los siguiente estructura:


<pre class="mermaid" style="display: flex; justify-content: center; background: transparent !important; color: #fff; border: none; box-shadow: none;">
---
title: TABLA DE CLIENTES
---
erDiagram
    CLIENTES {
        id INTEGER PK "Primary key"
        nombre VARCHAR(50) "NOT NULL"
        apellido VARCHAR(50) "NOT NULL"
        telefono VARCHAR(12) "NOT NULL"
        email VARCHAR(50) "NOT NULL"
        direccion VARCHAR(100) 
        ciudad VARCHAR(50) 
    }
</pre>

El comando **SQL** que deberíamos ejecutar es de varias líneas, por ende cuando entremos en el método **.execute()** del cursor usaremos **comillas triples** (*docstring*) para envolver el comando **SQL** de la siguiente manera:

{: .clipboard }
```py
cursor.execute("""
    CREATE TABLE IF NOT EXISTS clientes(
        id INTEGER PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        telefono VARCHAR(12) NOT NULL,
        email VARCHAR(50) NOT NULL,
        direccion VARCHAR(100),
        ciudad VARCHAR(50))
    """)

conexion.commit()
```

> Hemos agregado la cláusula `IF NOT EXISTS` para evitar errores cada vez que ejecutemos el script


Ahora podemos ejecutar el script de ejemplo **ej_conexion.py** y esperar los resultados:

{: .clipboard }
```bash
python ej_conexion.py
```

Si no obtenemos ningún error, eso significa que hemos creado la tabla de clientes correctamente.


## Insertar datos en la tabla

Ahora que ya hemos creado la tabla enla base de datos, agregaremos datos a la tabla de clientes. Para eso podemos usar el comando **SQL - INSERT** y aprovechando la clase de cliente para crear representaciones exactas:


{% include tabs_python.html
    id='ej_insertar'
    tab_1='ej_insertar.py'
    tab_2='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.ej_insertar
    bloque_2=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}


Lo primero que podemos observar es que no fue necesario proporcionar un **email** al momento de instanciar la clase, ya que este dato lo estamos obteniendo desde el método **email de la clase** que creamos al principio y lo podemos usar como una propiedad gracias al decorador **@property**.

---

## Forma adecuada de agregar un objeto a la base de datos

Hay dos formas de insertar objetos en una base de datos correctamente. Dado que el enforque de formato de cadena es vulnerable a la inyección SQL, es mejor usar cualquiera de las siguientes formas:

ParamStyle que ofrece la [**`DB-API`**](https://peps.python.org/pep-0249/#paramstyle){:target="_blank" class="link"} colocando el símbolo `?`.


{: .clipboard }
```py
customer_1 = Customer('marco', 'contreras', '+569-84687949', 'av foo #432', 'coquimbo')

cursor.execute("INSERT INTO clientes VALUES (?,?,?,?,?,?)",
            (cliente_1.nombre, cliente_1.apellido,
             cliente_1.telefono, cliente_1.email,
             cliente_1.direccion, cliente_1.ciudad))
connection.commit()
```

Marcador de posición de [**`DB-API`**](https://peps.python.org/pep-0249/#paramstyle){:target="_blank" class="link"} a través de claves y valores de diccionario:

{: .clipboard }
```py
cliente_1 = Cliente('marco', 'contreras', '+569-84687949', 'av suecia 327', 'coquimbo')

cursor.execute("""
	INSERT INTO clientes 
	VALUES (:nombre, :apellido, :telefono, :email, :direccion, :ciudad)
    """, 
	{
		'nombre':cliente_1.first_name, 
		'apellido':cliente_1.last_name, 
		'telefono':cliente_1.phone,
		'email':cliente_1.email,
		'direccion': cliente_1.address,
		'ciudad': cliente_1.city 
	})

connection.commit()
connection.close()
```

Como vemos en el ejemplo anterior, en vez de usar los `?` como marcador de posición, usamos los `:` con un nombre que describe el marcador de posición. En el método de ejecución le estamos pasando un diccionario como segundo argumento. Las claves del diccionario serán los nombres de los marcadores de posición y los valores serán las propiedades del objero instanciado previamente.

---


## Mejorar el código

Para facilitarnos un poco la existencia de repetir el proceso de abrir una conexión y crear un cursor, sería mejor si creamos dos nuevas funciones dentro de un módulo llamado **conexion.py**:

{% include tabs_python.html
    id='modulo_conexion'
    tab_1='db/conexion.py'
    tab_2='db/schema.sql'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_2=site.data.examples.python.crud_sqlite_clientes.schema_sql
%}

En el código anterior, el método **.execute()** del cursor se envuelve dentro del bloque **with** y así no necesitemos ejecutar el método **commit()** de la conexión y de paso nos garantiza el cierre de los recursos como la conexión que estamos usando. Y por último estamos invocando a la función para crear la tabla y estar seguro que existirá la tabla cada vez que usemos estas funciones en el futuro. 

---

## Función para crear nuevos clientes

Para el **CRUD** vamos a comenzar definiendo la función **crear_cliente** que se encargará de insertar nuevos registros de clientes en la base de datos:

{% include tabs_python.html
    id='crear'
    tab_1='crud.py'
    tab_2='db/conexion.py'
    tab_3='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.crear
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}


Para probar esta implementación, necesitamos crear algunos objetos usando la clase **Cliente**. Por ejemplo, creamos 4 objetos de prueba:

{: .clipboard }
```py
cliente1 = Cliente('mauricio', 'larrea', '+569-24188149',
                    'av suecia 327', 'alto hospicio')
cliente2 = Cliente('marcelo', 'riveros', '+569-89587929',
                    'av dinamarca 237', 'valparaiso')
cliente3 = Cliente('pedro', 'pascal', '+569-89087949',
                    'av japón 387', 'antofagasta')
cliente4 = Cliente('ignacio', 'guerrero', '+569-89089849',
                    'av china 127', 'iquique')
```

Luego insertamos estos objetos en la base de datos invocando a la función **crear_cliente** y le pasamos cada uno de los objetos como argumento:

{: .clipboard }
{% highlight py  %}
# invocar la función para crear clientes
crear_cliente(cliente1)
crear_cliente(cliente2)
crear_cliente(cliente3)
crear_cliente(cliente4)
{% endhighlight %}


---

## Función para consultar los clientes

Ahora definamos una función **obtener_clientes** que devolverá a todos los clientes que están en la base de datos:

{% include tabs_python.html
    id='obetener_todos'
    tab_1='crud.py'
    tab_2='db/conexion.py'
    tab_3='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.obtener_todos
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}

> **Nota**: El método ([`.fetchall()`](https://docs.python.org/3/library/sqlite3.html#:~:text=to%20the%20next.-,fetchall(),that%20the%20arraysize%20attribute%20can%20affect%20the%20performance%20of%20this%20operation.,-close()){:target='_blank' class='link'}) de un cursor nos devuelve todas las tuplas en una lista.

Y otra función que nombraremos en singular **obtener_cliente** que devolverá a un cliente según el id proporcionado:

{% include tabs_python.html
    id='obetener_uno'
    tab_1='crud.py'
    tab_2='db/conexion.py'
    tab_3='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.obtener_uno
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}

> **Nota**: El método ([`.fetchone()`](https://docs.python.org/3/library/sqlite3.html#sqlite3.Cursor.fetchone){:target='_blank' class='link'}) de un cursor nos devuelve la primera tupla en la lista de los resultados.

---


## Función para actualizar un cliente

Ahora definamos una función **actualizar_cliente** que actualizará los datos del cliente y se realizará según el **id** del cliente proporcionado:

{% include tabs_python.html
    id='update'
    tab_1='crud.py'
    tab_2='db/conexion.py'
    tab_3='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.actualizar
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}


## Función para eliminar un cliente

La función que definiremos a continuación es `eliminar_cliente(id_cliente)` para eliminar a un cliente según su **id**:


{% include tabs_python.html
    id='eliminar'
    tab_1='crud.py'
    tab_2='db/conexion.py'
    tab_3='modelos/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.eliminar
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}

## Crear un menú para usuarios

Vamos a empezar pensando en las opciones del menú junto con sus acciones. Para ello creamos un nuevo archivo **main.py** y la primera función que definiremos será `pedir_datos(cliente=())` para cuando se seleccione la opción de **crear un cliente** o **actualizar un cliente** y recibirá opcionalmente una tupla con los datos del cliente o de lo contrario una tupla vacía y así podemos mostrar un mensaje u otro en el **prompt** y mantener un valor u otro.


Antes que se definan las funciones, tenemos que importar las funciones del módulo **crud.py** y la clase **Cliente**:

{: .clipboard }
```py
from modelos.cliente import Cliente
from crud import (
    actualizar_cliente,
    obtener_clientes,
    obtener_cliente,
    eliminar_cliente,
    crear_cliente,
)
```

Luego ya podemos definir una función que se encargará de pedir los datos para crear o actualizar a un 

{% include tabs_python.html
    id='pedir_datos'
    tab_1='main.py'
    tab_2='db/conexion.py'
    tab_3='modelo/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.pedir_datos
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}


Ahora podemos continuar creando otra función para mostrar el menú junto a las opciones:


{% include tabs_python.html
    id='mostrar_menu'
    tab_1='main.py'
    tab_2='db/conexion.py'
    tab_3='modelo/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.mostrar_menu
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}

Una función que va a leer la opción ingresada y retorna una opción válida:

{% include tabs_python.html
    id='leer_opcion'
    tab_1='main.py'
    tab_2='db/conexion.py'
    tab_3='modelo/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.leer_opcion
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}


Y otra función que nos permita ejecutar la opción seleccionada y la acción asociada:

{% include tabs_python.html
    id='ejecutar_opcion'
    tab_1='main.py'
    tab_2='db/conexion.py'
    tab_3='modelo/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.ejecutar_opcion
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}

Y finalmente la función menu que llamará al resto de las funciones para iniciar el programa y lo ejecutamos:

{% include tabs_python.html
    id='menu_main'
    tab_1='main.py'
    tab_2='db/conexion.py'
    tab_3='modelo/cliente.py'
    bloque_1=site.data.examples.python.crud_sqlite_clientes.menu
    bloque_2=site.data.examples.python.crud_sqlite_clientes.conexion
    bloque_3=site.data.examples.python.crud_sqlite_clientes.clase_cliente
%}

## Descargar el proyecto

<a href="https://github.com/EniDev911/crud-python-sqlite-consola/archive/refs/heads/main.zip">
    <i class="fa-solid fa-download"></i> Descargar
</a>