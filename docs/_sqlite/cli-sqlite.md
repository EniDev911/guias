---
layout: default
title: "CLI SQlite"
css:
  custom: |
    strong { color: #DA3;  }
    strong { color:  #d94; }
    thead { background: #000; border: 1px solid #AAA }
    tbody { border: 1px solid #AAA }
    tbody tr:hover { background: #111; cursor: pointer; }
    h3 { color: #dd5; } 
---


[![bagde](https://img.shields.io/badge/sqlite-%2307405e.svg?logo=sqlite&logoColor=white){:height="50"}](../)


## Primeros Pasos

SQLite proporciona un programa de línea de comandos simple llamado **sqlite3** (o **sqlite3.exe** en Windows) que permite al usuario ingresar y ejecutar instrucciones SQL manualmente en una base de datos SQLite.   

Iniciamos el programa **sqlite3** escribiendo "sqlite3" en el símbolo del sistema, seguido opcionalmente por el nombre del archivo que contiene la base de datos SQlite o archivo zip. Si el archivo pasado como argumento no existe, se creará automáticamente un nuevo archivo de base de datos con el nombre dado. Si no especifica ningún archivo de base de datos en la línea de comandos, se crea una base de datos temporal y se elimina automáticamente cuando se cierra el programa **sqlite3**.  

Al iniciarse, el programa **sqlite3** mostrará un breve mensaje de banner y luego le perdirá que ingrese instrucciones SQL. Cada sentencia SQL debe terminar con un punto y coma.  

Por ejemplo, para crear una nueva base de datos SQLite llamada `sistema.db` con una tabla llamada `usuarios`.

**Invocamos el programa pasando el nombre de la base de datos**:

{: .clipboard }
```bash
sqlite3 sistema.db
```

**Luego creamos una tabla para almacenar a los usuarios**:

{: .clipboard }
```sql
CREATE TABLE usuarios (id INT, nombre TEXT);
```

**Podemos crear dos usuarios con el comando** [`INSERT`](https://en.wikipedia.org/wiki/Insert_(SQL)){:target='_blank' class='link'}:

{: .clipboard }
```sql
INSERT INTO usuarios (id, nombre) VALUES (1, 'marco');
INSERT INTO usuarios (id, nombre) VALUES (2, 'marcelo');
```


![step1](assets/cli_01.png)

> Para salir del programa sqlite3 solo debe escribir **`.q`** o con <kbd>Ctrl</kbd> + <kbd>c</kbd> y luego <kbd>Enter</kbd>.

--- 

## Comandos especiales

La mayoría de las veces, sqlite3 solo lee líneas de entrada y las pasa a la biblioteca SQLite para su ejecución. Pero las líneas de entradas que comienzan con un (**`.`**) son interceptadas e interpretadas por el propio programa sqlite3. Estos comandos de puntos se utilizan normalmente para cambiar el formato de salida de las consultas o para ejecutar ciertas declaraciones de consulta preempaquetadas. 

Originalmente, solo había unos pocos comandos de puntos (*`dot-commands`*), pero a lo largo de los años se han acumulado muchas funciones nuevas, de modo que hoy existen más de 60.  

Para obtener una lista de comandos de puntos disponibles, puede ingresar **`.help`** sin argumentos o ingrese **`.help TOPIC`** para obtener información detallada sobre `TOPIC`. La lista de comandos de puntos disponible es la siguiente:  


<table>
  <thead>
    <th align="left">Comando</th>
    <th align="left">Descripción</th>
    <th align="left">Predeterminado</th>
  </thead>
  <tbody align="left">
    <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.archive</code>
      </td>
      <td>
        Administrar archivos SQL
      </td>
      <td><strong>.</strong></td>
    </tr>
    <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.auth</code>
      </td>
      <td>
       Mostrar devoluciones de llamada del autorizador
      </td>
      <td><strong>OFF</strong></td>
    </tr>
    <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.backup</code> <strong>?DB? FILE</strong>
      </td>
      <td>
      Crea un respaldo de la base de datos actual a el <code class="language-plaintext">&lt;file&gt;</code> especificado
      </td>
      <td><strong>MAIN</strong></td>
    </tr>
    <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.bail</code> <strong>ON | OFF</strong>
      </td>
      <td>
      Detener después de encontrar un error
      </td>
      <td><strong>OFF</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.binary</code> <strong>ON | OFF</strong>
      </td>
      <td>
      Activa o desactiva la salida binaria
      </td>
      <td><strong>OFF</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.cd</code> <strong>DIR</strong>
      </td>
      <td>
      Cambiar el directorio de trabajo a otro especificado
      </td>
      <td><strong>./</strong> (actual)</td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.changes</code> <strong>ON | OFF</strong>
      </td>
      <td>
     Mostrar el número de filas modificadas por SQL
      </td>
      <td><strong>OFF</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.check</code> <strong>GLOB</strong>
      </td>
      <td>
    Falla si la salida de <code class="language-plaintext">.testcase</code> no coincide
      </td>
      <td><strong>OFF</strong></td>
   </tr>
   <tr onclick="location.href = '#dot-command-clone'">
      <td>
        <code class="language-plaintext">.clone</code> <strong>NEWDB</strong>
      </td>
      <td>
    Clona la base de datos actual en <code class="language-plaintext">&lt;NEWDB&gt;</code> (directorio)
      </td>
      <td><strong>.</strong></td>
   </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.databases</code>
      </td>
      <td>
   Lista nombres y archivos de bases de datos adjuntas
      </td>
      <td><strong>./</strong> (actual)</td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.dbconfig</code> <strong>? val?</strong>
      </td>
      <td>
  Listar o cambiar las opciones de <code class="language-plaintext">sqlite3_db_config()</code>
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.dump</code> <strong>? OBJECTS</strong>
      </td>
      <td>
 Representar el contenido de la base de datos como SQL
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.excel</code> <strong>? val?</strong>
      </td>
      <td>
 Mostrar el resultado del siguiente comando en la hoja de cálculo
      </td>
      <td><strong>.</strong></td>
   </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.mode</code> <strong>? val?</strong>
      </td>
      <td>
 Cambia el formato de salida puede cambiar entre: (<strong>ascii</strong>, <strong>box</strong>, <strong>csv</strong>, <strong>column</strong>, <strong>html</strong>, <strong>insert</strong>, <strong>json</strong>, <strong>line</strong>, <strong>list</strong>, <strong>markdown</strong>, <strong>quote</strong>, <strong>table</strong>, <strong>tabs</strong>, <strong>tcl</strong>)
      </td>
      <td><strong>LIST</strong></td>
   </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.separator</code>
      </td>
      <td>
 Cambia el separador de columnas, este se ve afectado según el <code class="language-plaintext">.mode</code> es posible que deba repetir este comando dependiendo el modo
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.width</code>
      </td>
      <td>
Un ancho de 0 significa que el ancho de la columna se elige automáticamente. Por lo tanto, el comando sin argumento restablece todos los anchos de columnas a cero. Ej <code class="language-plaintext">.width 2 8</code>
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.open</code>
      </td>
      <td>
Cierra la base de datos actual y abre el archivo especificado, si no existe, lo crea
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#output'">
      <td>
        <code class="language-plaintext">.output</code> <strong>FILE</strong>
      </td>
      <td>
Enviar salida a <code class="language-plaintext">&lt;FILE&gt;</code> o salida estándar si se omite <code class="language-plaintext">&lt;FILE&gt;</code>
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.prompt</code> <strong>ARGS</strong>
      </td>
      <td>
Cambia el prompt por el nuevo ARGS
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.quit</code>
      </td>
      <td>
Salir del programa
      </td>
      <td><strong>.</strong></td>
    </tr>
  <tr onclick="location.href = '#read'">
      <td>
        <code class="language-plaintext">.read</code> <strong>FILE</strong>
      </td>
      <td>
Lee <code class="language-plaintext">&lt;FILE&gt;</code> desde la entrada estándar
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.schema</code>
      </td>
      <td>
Muestra las sentencias ejecutadas para la creación del schema
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.shell</code>
      </td>
      <td>
Ejecutar CMD ARGS.. en un shell del sistema
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.system</code>
      </td>
      <td>
Ejecutar CMD <strong class="language-plaintext">ARGS</strong> en un shell del sistema
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#'">
      <td>
        <code class="language-plaintext">.show</code>
      </td>
      <td>
Muestra los valores actuales para varias configuraciones
      </td>
      <td><strong>.</strong></td>
    </tr>
   <tr onclick="location.href = '#dot-command-tables'">
      <td>
        <code class="language-plaintext">.tables</code>
      </td>
      <td>
Enumera los nombres de las tablas puede utilizarlo para buscar patrones Ej: (<code class="language-plaintext">.tables ima%</code>)
      </td>
      <td><strong>.</strong></td>
    </tr>
  </tbody>
</table>

---

<a name="output"></a>
### Escribir resultados en un archivo

De forma predeterminada, sqlite3 envía los resultados de la consulta a la salida estándar. Podemos cambiar esto usando los comandos **`.output`** y **`.once`**. Simplemente pasamos el nombre de un archivo de salida como argumento para el comando **`output`** y todos los resultados de la consulta posterior se escribirán en ese archivo. Ejemplo:  

![step2](assets/cli_02.png)

---

<a name="read"></a>
### Leer SQL desde un archivo

El comando **`.read`** toma un solo argumeto que es el nombre de un archivo desde el cual se quiere leer el texto de entrada.

![step3](assets/cli_03.png)

El comando **`.read`** deja de leer temporalmente desde el teclado y en su lugar toma su entrada del archivo nombrado. Al llegar al final del archivo, la entrada vuelve al teclado. El achivo de secuencia de comandos puede contener **dot-command**.  

---

<a name="dot-command-clone"></a>
### .clone NEWDB

Este comando es usado para clonar los datos en otra base de datos a partir de la base de datos actual:

![img - dc-clone](assets/dc-clone.png){:height="170"}

## SQLite: Funciones de E/S de archivo

El shell de la línea de comandos agrega dos funciones SQL definidas por la aplicación que facilitan la lectura del contenido de un archivo en una columna de la tabla y la escritura del contenido de una columna en un archivo respectivamente.  

La función **`readfile(X)`** lee todo el contenido del archivo X y devuelve ese contenido como un **BLOB**. Esto se puede usar para cargar contenido en una tabla. Por ejemplo:  

{: .clipboard }
```sql
CREATE TABLE imagenes(nombre TEXT,tipo TEXT,imagen BLOB);
INSERT INTO imagenes(nombre,tipo,imagen)
VALUES('icon','png',readfile('icon.png'));
```

La función SQL **`writefile(X, Y)`** escribe el blob **`Y`** en el archivo llamado **`X`** y devuelve el número de bytes escritos. Utilice esta función para extraer el contenido en una tabla. Por ejemplo:  

{: .clipboard }
```sql
SELECT writefile('icon.png', imagen) FROM imagenes WHERE nombre = 'icon';
```

### Consulta del esquema de la base de datos

El programa sqlite3 proporciona varios comandos de conveniencia que son útiles para mirar el esquema de la base de datos. No hay nada de lo que hacen estos comandos que no se pueda hacer por otros medios. Estos comandos se proporcionan simplemente como un atajo.  


Para ver una lista de las tablas de la base de datos, se puede introducir `.tables`

Ahora para ver el esquema, donde veremos las sentencias SQL ejecutadas para la definición del esquema usamos `.schema` o `.fullschema`

```sql
.tables
birds
.fullschema --indent
CREATE TABLE IF NOT EXISTS "schema_migrations"("version" varchar NOT NULL PRIMARY KEY);
CREATE TABLE IF NOT EXISTS "ar_internal_metadata"(
  "key" varchar NOT NULL PRIMARY KEY,
  "value" varchar,
  "created_at" datetime(6) NOT NULL,
  "updated_at" datetime(6) NOT NULL
);
CREATE TABLE IF NOT EXISTS "birds"(
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" varchar,
  "species" varchar,
  "created_at" datetime(6) NOT NULL,
  "updated_at" datetime(6) NOT NULL
);
```
   

<a name="dot-command-tables"></a>
### Ver las tablas existentes


El comando `.tables` es similar a configurar el modo de lista y luego ejecutar la siguiente consulta:  


{: .clipboard }
```sql
SELECT name FROM sqlite_schema 
WHERE type IN ('table','view') AND name NOT LIKE 'sqlite_%'
ORDER BY 1;
```
