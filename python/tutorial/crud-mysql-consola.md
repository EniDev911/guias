---
layout: default
title: "Crud Python - MySQL"
css:
  custom: |
    strong, h3 { color: #5397D2 }
    .entityTitleText { fill: #ff4910 !important; text-transform: uppercase; stroke:#000; stroke-width:0.5em; paint-order:stroke; stroke-linejoin:round }
    svg[id^="mermaid-"] { min-width: 280px; max-width: 530px; font-size: 20px; }
---

## Prerrequisitos

1) **MySQL Server**: MySQL debe estar instalado y ejecutándose. Revisa algunas de mis guías de instalación [aquí]({{ '/mysql/' | relative_url }}){:target='_self' class='link'}

2) **Python**: Asegúrese de tener Python instalado.


## Contexto

Antes de sumergirnos en el ejemplo **CRUD** con **Python** y **SQLite**, digamos que queremos crear una aplicación que administre las visitas en un edificio. La aplicación creada debe tener la funcionalidad para **crear**, **actualizar**, **leer** y **eliminar** visitas. Tenemos que guardar esos datos de la visita en una **base de datos MySQL**.


Primero pensemos en una clase para definir la estructura de una visita y así facilitarnos el trabajo. En un nuevo archivo llamado **visita.py** añadimos lo siguiente:

{% capture clase_visita %}
{% highlight python %}
{{ site.data.examples.python.crud_mysql_visitas.clase_visita }}
{% endhighlight %}
{% endcapture %}

{% include tabs.html
    id='clase_de_visita'
    tab_1='modelos/visita.py'
    bloque_1=clase_visita
%}


> `@property` es un decorador incorporado para el uso de captadores y definidores en Python orientado a objetos

---

## Instalar el conector

Para poder comunicarnos con **MySQL** necesitamos un controlador que permita esa comunicación y para ello, tenemos el paquete [`mysql-connector-python`](https://pypi.org/project/mysql-connector-python/){:target='_blank' class='link'} que es un controlador escrito en Python y no depende de bibliotecas adicionales como **client C MySQL** y además implementa la especificación **DB API v2.0** su instalación es simplemente a través del siguiente comando:

{: .clipboard }
```bash
pip install mysql-connector-python
```

---

## Conectarse a MySQL

Necesitamos crear un objeto de conexión para poder operar sobre nuestra base de datos. En este caso, nuestra base de datos ya debe existir asi que en el siguiente ejemplo los valores en el diccionario se deben remplazar las claves `user`, `password`, `database` según corresponda, vale decir que más adelante usaremos una técnica mejor para manejar estas configuraciones con datos sensibles:


{% capture conexion_ej %}
{% highlight python %}
{{ site.data.examples.python.crud_mysql_visitas.iniciar_conexion }}
{% endhighlight %}
{% endcapture %}

{% include tabs.html
    id='conexion_mysql'
    tab_1='ejemplo_conexion.py'
    bloque_1=conexion_ej
%}

---

## Crear un cursor

Todas las declaraciones [DDL](https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_ddl){:target='_blank' class='link'} se deben ejecutar usando una estructura conocida como cursor. Un cursor nos permite interactuar con la base de datos a través de comandos **SQL**, podemos crear un cursor llamando al método **.cursor()** del objeto de conexión creado previamente:

{: .clipboard }
```py
try:
    con = mysql.connector.connect(**db_config)

    if con.is_connected():
        print("Conexión exitosa a MySQL")
        cursor = con.cursor()
        cursor.execute('show databases;')

except mysql.connector.Error as e:
    print(f"Error: {e}")
```

Para ver que se puede hacer con el cursor y ver todos los miembros asociados al método, te recomiendo ejecutar las siguientes líneas después de la creación del cursor (*puede ejecutar el siguiente bloque reproduciendo el ejemplo en sqlite*):

{: .clipboard }
<div style="position: relative;">
{% highlight python %}
print(inspect.getdoc(cursor))
[print(x[0]) for x in inspect.getmembers(cursor)]
{% endhighlight %}
<enidev-button 
    data-btn="compiler" 
    data-lang="python" 
    data-ext="py"
    data-content="{{ site.data.examples.python.tutorial.modulo_sqlite3.inspect_cursor }}"></enidev-button>
</div>

Con el cursor a nuestra disposición podemos llamar al método **.execute()** para ejecutar el comando **SQL** para definir la tabla. 

> **Nota**: En un servidor MySQL o cualquier gestor con arquitectura **cliente-servidor** es común que las tablas sean objetos de larga duración y, a menudo suelen ser utilizadas por más de una aplicación cuyas aplicaciones pueden estar desarrolladas en diferentes lenguajes de programación. Normalmente, podríamos trabajar con tablas que ya están configuradas, en lugar de crearlas dentro de nuestra aplicación


Nuestra tabla tendrá los siguiente estructura:


<pre class="mermaid" style="display: flex; justify-content: center; background: transparent !important; color: #fff; border: none; box-shadow: none;">
---
title: TABLA DE VISITAS
---
erDiagram
    VISITAS {
        rut VARCHAR(15) PK "Primary key"
        nombre VARCHAR(50) "NOT NULL"
        apellido VARCHAR(50) "NOT NULL"
        telefono VARCHAR(12) "NOT NULL"
        direccion VARCHAR(100) 
    }
</pre>

El comando **SQL** que deberíamos ejecutar es de varias líneas, por ende cuando entremos en el método **.execute()** del cursor usaremos **comillas triples** (*docstring*) para envolver el comando **SQL** de la siguiente manera:

{: .clipboard }
```py
cursor.execute("""
    CREATE TABLE IF NOT EXISTS visitas(
        rut VARCHAR(15) PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        telefono VARCHAR(12) NOT NULL,
        direccion VARCHAR(50))
    """)
```

> Hemos agregado la cláusula `IF NOT EXISTS` para evitar errores cada vez que ejecutemos el script


Ahora podemos ejecutar el script de ejemplo **ej_conexion.py** y esperar los resultados:

{: .clipboard }
```bash
python ejemplo_conexion.py
```

Si no obtenemos ningún error, eso significa que hemos creado la tabla de clientes correctamente.

---

## Insertar datos en la tabla

Ahora que ya hemos creado la tabla enla base de datos, agregaremos datos a la tabla de clientes. Para eso podemos usar el comando **SQL - INSERT** y aprovechando la **clase visita** para crear representaciones exactas:

{% capture ejemplo_insertar %}
{% highlight python %}
{{ site.data.examples.python.crud_mysql_visitas.ej_insertar }}
{% endhighlight %}
{% endcapture %}

{% include tabs.html
    id='ejemplo_insertar'
    tab_1='ejemplo_insertar.py'
    tab_2='modelos/visita.py'
    bloque_1=ejemplo_insertar
    bloque_2=clase_visita
%}

---

## Mejorar el código

Para trabajar de una mejor manera, vamos aplicar una pequeña capa de abstracción para que nuestro código sea más escalable comenzando por crear una clase que administre la conexión a la base de datos y además permita abrir y cerrar la conexión al servidor una vez se ejecuten las sentencias sql.

## Cargar variables de entornos

Una mejora importante es añadir un nuevo paquete para cargar nuestras credenciales de conexión al servidor por medio de variables de entorno. Este paquete se llama `dotenv` y se instala de la siguiente manera:

{: .clipboard }
```bash
pipenv install python-dotenv
```

Las variables de entorno nos permiten gestionar la configuración de nuestras aplicaciones por separado de nuestro código fuente. La separación de configuraciones facilita que las aplicaciones se puedan implementar en diferentes entornos. 

Una vez instalado el paquete debemos crear un nuevo archivo en la raíz del proyecto llamado `.env` (***es importante agregar este archivo a la lista de nuestro .gitignore si estamos trabajando con el control de versiones git***) la definición de variables de entorno es muy simple, en cada línea, definimos una variable de entorno y le asignamos su valor mediante el operador `=`. **Ejemplo**:


{% capture variables_env %}
{% highlight ini %}
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DBNAME=visitas_db
MYSQL_HOST=localhost
MYSQL_PORT=3306
{% endhighlight %}
{% endcapture %}


<div style="position: relative">
{{ variables_env }}
<enidev-button></enidev-button>
</div>

Ahora podemos crear la clase en un nuevo archivo dentro de la carpeta llamada **db** y con el nombre de **conexion.py**:

{% capture clase_conexion %}
{% highlight python %}
{{ site.data.examples.python.crud_mysql_visitas.clase_database }}
{% endhighlight %}
{% endcapture %}

{% include tabs.html
    id='clase_conexion'
    tab_1='db/conexion.py'
    tab_2='modelos/visita.py'
    tab_3='.env'
    bloque_1=clase_conexion
    bloque_2=clase_visita
    bloque_3=variables_env
%}

## Crear una clase para las operaciones del CRUD




