---
layout: default
title: "Psql cliente de línea de comandos"
image_path: '/assets/images/postgres/psql'
css:
  custom: >-
    thead { background: #000; border: 1px solid #AAA }
    tbody { border: 1px solid #AAA }
    tbody tr:hover { background: #cfcfcf30; cursor: pointer; }    
---

## ¿Qué es Psql?

**Psql** es una aplicación cliente que viene incluido en el paquete de PostgreSQL regular y está basado en la terminal. Nos permite establecer una conexión a un servidor de PostgreSQL donde debemos proporcionar las opciones de conexión como **argumentos** correctamente a través de la línea de comandos, establecida la conexión se abre una sesión interactiva para realizar consultas [**SQL**](https://es.wikipedia.org/wiki/SQL){:target="_blank"} y enviarlas a nuestro servidor y ver los resultados. Además, psql proporciona una serie de [**`matacomandos`**](#metacommand) y varias funciones similares a las de un shell para facilitar la escritura de scripts y la automatización de una amplia variedad de tareas.


## Opciones en línea de comandos

Para conectarse al servidor, necesita saber el **nombre de la base de datos de destino**, **el nombre de host**, **nombre de usuaurio**, **puerto del servidor**, etc..., y con que **nombre de usuario** desea conectarse. Se puede informar a **psql** sobre esos parámetros a través de las **opciones de la línea de comandos** `-d`, `-h`, `-U`, `-p` respectivamente.

### Conectarse desde psql

Conectarse a postgres con el usuario `postgres`, al host `localhost`, y a la base de datos `postgres`

{% tabs connect %}
{% tab connect psql %}
{% include code-header.html %}
```bash
psql -h localhost -U postgres -d postgres
```
{% endtab %}
{% tab connect salida %}
```text
$ psql -U postgres -W -p 5432 -h localhost
Password for user postgres:
psql (10.15 (Ubuntu 10.15-0ubuntu0.18.04.1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

postgres=#
```
{% endtab %}
{% endtabs %}


Si se encuentra un argumento que no pertenece a ninguna opción, se interpretará como el nombre de la base de datos (o el nombre de usuario, si el nombre de la base de datos ya está dado). 

**No todas estas opciones son obligatorias**, hay valores predeterminado útiles. Por ejemplo:

- Si omite el nombre de host, psql se conectará a través de un socket de dominio Unix a un servidor a un host local, o a través de TCP/IP a **localhost**.

- El número de puerto predeterminado se determina en tiempo de compilación. Dado que el servidor de la base de datos utiliza el mismo valor predeterminado **5432**, no se tendrá que especificar el puerto en la mayoría de los casos. 

- El nombre de usuario predeterminado es el nombre de usuario de su sistema operativo, al igual que el nombre de la base de datos predeterminada.

### Demostración

![img - gif]({{ page.image_path | relative_url }}/connect_cmd.gif)

Tengamos en cuenta que no se puede simplemente conectarse a cualquier base de datos con cualquier nombre de usuario.

> El usuario que desea conectarse debe tener los permisos previamente creados por un usuario con rol de administrador o superusuario del sistema de base de datos.  
{: .prompt-info }

Esta utilidad de línea de comandos acepta las siguientes opciones al momento de invocarla:

```bash
Empleo:
psql [OPCIONES]... [BASE-DE-DATOS [USUARIO]]
        
Opciones generales:

  -c, --command=ORDEN # ejecutar sólo una orden SQL y sale 
  -d, --dbname=NOMBRE # nombre de base de datos a conectarse (por omisión: «postgres»)
  -f, --file=ARCHIVO # ejecutar órdenes desde archivo, luego salir
  -l, --list # listar bases de datos, luego salir
  -v, --set=, --variable=NOMBRE=VALOR # definir variables de psql Ej: -v ON_ERROR_STOP=1
  -V, --version # mostrar información de versión, luego salir
  -X, --no-psqlrc # no leer archivo de configuración (~/.psqlrc)
  -1 («uno»), --single-transaction  # ejecuta órdenes en una única transacción
  -?, --help[=opcs] # mostrar esta ayuda, luego salir
  --help=commands # listar órdenes backslash, luego salir
  --help=variables # listar variables especiales, luego salir
        
Opciones de entrada y salida:
  -a, --echo-all # mostrar las órdenes del script
  -b, --echo-errors # mostrar órdenes fallidas
  -e, --echo-queries # mostrar órdenes enviadas al servidor
  -E, --echo-hidden # consultas generadas por órdenes internas
  -L, --log-file=ARCHIVO # envía el registro de la sesión a un archivo
  -n, --no-readline # deshabilitar edición de línea de órdenes (readline)
  -o, --output=ARCHIVO # enviar resultados de consultas a archivo (u |orden)
  -q, --quiet # modo silencioso (sin mensajes, sólo resultados)
  -s, --single-step # modo paso a paso (confirmar cada consulta)
  -S, --single-line # modo de líneas (fin de línea termina la orden SQL)
        
Opciones de formato de salida:
  -A, --no-align # modo de salida desalineado
  --csv # modo de salida de tabla CSV (valores separados por comas)
  -F, --field-separator=CADENA # separador de campos para salida desalineada (por omisión: «|»)
  -H, --html # modo de salida en tablas HTML
  -P, --pset=VAR[=ARG] # definir opción de impresión VAR en ARG (ver orden \pset)
  -R, --record-separator=CADENA # separador de registros para salida desalineada (por omisión: salto de línea)
  -t, --tuples-only # sólo muestra registros
  -T, --table-attr=TEXTO # definir atributos de marcas de tabla HTML (ancho, borde)
  -x, --expanded # activar modo expandido de salida de tablas
  -z, --field-separator-zero # definir separador de campos para salida desalineada al byte cero
  -0, --record-separator-zero # definir separador de filas para salida desalineada al byte cero
        
Opciones de conexión:
  -h, --host=NOMBRE # nombre del anfitrión o directorio de socket (por omisión: «socket local»)
  -p, --port=PUERTO # puerto del servidor (por omisión: «5432»)
  -U, --username=NOMBRE # nombre de usuario (por omisión: «postgres»)
  -w, --no-password # nunca pedir contraseña
  -W, --password # forzar petición de contraseña (debería ser automático)
```

## Estableciendo variables de entornos

Cuando los valores predeterminado no son del todo correctos, puede ahorrarse algo de escritura configurando las siguientes variables de entorno:  


**`PGUSER`** : (windows cmd) 

{% include code-header.html %}
```bat
setx PGUSER postgres
```

**`PGPASSWORD`** : (windows cmd)

{% include code-header.html %}
```bat
setx PGPASSWORD postgre
```

![img - set variables]({{ page.image_path | relative_url }}/setx_variables.png)

> Considere usar mejor un archivo pgpass
{: .prompt-info }


---

## Conexión en formato de URI

Una forma alternativa de especificar los parámetros de conexión es una cadena o un URI tipo `conninfo`, que se usa en lugar del nombre de una base de datos. Este mecanismo le da un control muy amplio sobre la conexión.

Un ejemplo sería:

{% include code-header.html %}
```bash
psql postgresql://hostname:5432/mydb?user=username
```

### Demostración

![img - gif]({{ page.image_path | relative_url }}/connect_uri_cmd.gif)


---

## Archivo de contraseñas

El archivo `.pgpass` se debe almacenar en el directorio de inicio de un usuario puede contener contraseñas que se utilizarán si la conexión requiere una contraseña (y si no se ha especificado ninguna contraseña). En Windows, el archivo se nombra en el directorio de datos `%APPDATA%\postgresql\pgpass.conf` (donde **`%APPDATA%`** se refiere al subdirectorio de Datos de la aplicación en el perfil del usuario). 

Como alternativa, el archivo de contraseñas que se utilizará se puede especificar mediante el parámetro de conexión passfile o la variable de entorno **PGPASSFILE**.

Este archivo debe contener líneas en el siguiente formato:

```text
hostname:port:database:username:password
```

### Ejemplo

Estableciendo la variable **PGPASSFILE** en cmd Windows 

![img - gif]({{ page.image_path | relative_url }}/pgpass_variable.gif)

Podemos agregar un comentario en una línea precediéndola con un `#`. Cada uno de los primeros cuatro campos puede ser un valor literal, o un comodín `*` para que coincida con cualquier cosa y de esa manera no nos solicite ingresar credenciales para conectarnos a otra base de datos o desde un cliente como **pgadmin** que nos muestra un mensaje de error al proporcionar valores literales.

Un ejemplo sería:  

```text
localhost:5432:*:postgres:postgre
```

Aunque este artículo es completamente de **psql**, te voy a dejar un ejemplo de como establecer este archivo desde el programa **PgAdmin** en la siguiente ilustración:

  
![img - gif]({{ page.image_path | relative_url }}/pgadmin_pgpass.gif)


En los sistemas Unix, los permisos en un archivo de contraseña deben prohibir cualquier acceso al mundo o grupo; lograr esto mediante un comando como `chmod 0600 ~/.pgpass`. Si los permisos son menos estrictos que esto, el archivo se ignorará. En Windows, se supone que el archivo se almacena en un directorio que es seguro, por lo que no se realizan comprobaciones de permisos especiales

---

<a name="meta-comandos"></a>
## Meta Comandos

Cualquier cosa que ingrese en psql que comience con una barra invertida **`\`** sin comillas es un meta-comando de **psql** que es procesado por psql mismo. Estos comandos hacen que **psql** sea más útil para la administración o la creación de scripts.  

<table>
  <thead>
    <th align="left">Comando</th>
    <th align="left">Descripción</th>
  </thead>
  <tbody align="left">
    <tr onclick="location.href = '#mc-a'">
      <th>
        <code class="language-plaintext">\a</code>
      </th>
      <th>
        Activa o Desactiva el formato alineado de la tabla.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-connect'">
      <th>
          <code class="language-plaintext">\c [params]</code>
      </th>
      <th>
          Establece una nueva conexión a un servidor PostgreSQL.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-title'">
      <th>
          <code class="language-plaintext">\C [title]</code>
      </th>
      <th>
          Establece o Anula el título de las tablas que se imprimen en los resultados de una consulta.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-cd'">
      <th>
          <code class="language-plaintext">\cd [directory]</code>
      </th>
      <th>
          Cambia el directorio de trabajo actual a <code><b>directory</b></code>. Sin argumentos, cambia el directorio de inicio del usuario actual.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-conninfo'">
      <th>
          <code class="language-plaintext">\conninfo</code>
      </th>
      <th>
          Muestra información sobre la conexión de base de datos actual.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-copyright'">
      <th>
          <code class="language-plaintext">\copyright</code>
      </th>
      <th>
          Muestra información sobre los términos de licencia.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-echo'">
      <th>
          <code class="language-plaintext">\echo [text]</code>
      </th>
      <th>
        Imprime los argumentos evaluados en la salida estándar, separados por espacios y seguidos de una nueva línea, si se coloca entre (<code>`</code>) se interpreta como un comando.  
      </th>
    </tr>
    <tr onclick="location.href='#mc-timing'">
      <th>
          <code class="language-plaintext">\timing</code>
      </th>
      <th>
          Activa o Desactiva la visualización del tiempo en milisegundos que tarda cada instrucción SQL.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-x'">
      <th>
          <code class="language-plaintext">\x</code>
      </th>
      <th>
    Activa o Desactiva el formato de tabla expandido en el resultado de cada instrucción SQL o meta-comando.      
      </th>
    </tr>
    <tr onclick="location.href = '#mc-help'">
      <th>
          <code class="language-plaintext">\h - \help [command]</code>
      </th>
      <th>
    Brinda ayuda de sintaxis en el comando SQL especificado. Si <code>command</code> no se especifica <b>psql</b> enumerará todos los comandos para los que hay ayuda disponible. Si <code>command</code> es un asterisco (<code>*</code>), se muestra la ayuda de sintaxis en todos los comandos SQL.      
      </th>
    </tr>
    <tr onclick="location.href = '#mc-html'">
      <th>
          <code class="language-plaintext">\H - \html</code>
      </th>
      <th>
  Activa el formato de salida de consulta HTML. Si el formato HTML ya está activado, se vuelve al formato de texto alineado predeterminado. Este comando es por compatibilidad y comodidad, pero tenemos <code>\pset</code> para configurar otras opciones de salida.        
      </th>
    </tr>
    <tr onclick="location.href = '#mc-command">
      <th>
          <code class="language-plaintext">\! [command]</code>
      </th>
      <th>
          Permite ejecutar comandos de la <b>shell de Linux</b> o de <b>CMD de windows</b> desde la propia consola de psql.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-include'">
      <th>
          <code class="language-plaintext">\i - \include</code>
      </th>
      <th>
        Lee la entrada del archivo <code>filename</code> y la ejecuta.
      </th>
    </tr>
    <tr onclick="location.href = '#mc-l'">
      <th>
          <code class="language-plaintext">\l - \l+ [pattern]</code>
      </th>
      <th>
        Muestra un listado de las bases de datos que existen en la instancia del servidor PostgreSQL junto a sus nombres, propietarios, juego de caracteres y privilegios de acceso. Si se especifica <code>pattern</code>, solo se listan las bases de datos cuyo nombre coincidan con el patrón. Si se agrega el símbolo "+", también se muestran los tamaños de las bases de datos, los tablespace y las descripciones.
      </th>
    </tr>
    <tr onclick="location.href= '#mc-s'">
      <th><code class="language-plaintext">\s [filename]</code></th>
      <th>Imprime por consola o en un archivo <code>filename</code> si se especifica, un historial de los comandos utilizados.</th>
    </tr>
    <tr onclick="location.href = '#mc-o'">
      <th><code class="language-plaintext">\o - \out [filename]</code></th>
      <th>Permite guardar el resultado de las futuras consultas en el archivo <code>filename</code>. El resultado incluye todas las tablas, respuestas de comandos y mensajes de tipo "notices" del servidor, pero no los mensajes de error.</th>
   </tr>
  </tbody>
</table>


<a name="mc-a"></a>
### Meta Comando para alineación

Si el formato de salida de la tabla no está alineado, se cambia a alineado. Este comando es mantenido por compatibilidad y comodidad, se puede utilizar **`\pset`** para una solución más general. Ej:

![img - aligned]({{ page.image_path | relative_url }}/aligned.gif)

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#meta-comandos)

---

<a name="mc-connect"></a>
### Meta Comando para cambiar de conexión

Establece una nueva conexión a un servidor de **PostgreSQL**. Los parámetros de conexión se pueden especificar usando la sintaxis posicional o usando una cadena de conexión como lo muestra la siguiente ilustración:

![img -- cambiar conexión](https://raw.githubusercontent.com/EniDev911/assets/main/png/db/postgres/meta-comando-connect.png)

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#meta-comandos)

---

<a name="mc-title"></a>
### Meta Comando para para establecer un título a las tablas


Establece o Anula el título de las tablas que se imprimen en los resultados de una consulta. Ej:

![img - mc-title]({{ page.image_path | relative_url }}/meta-comando-title.png){:height='400'}

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#meta-comandos)

---

<a name="mc-copyright"></a>
### Meta Comando para para imprimir la Licencia

Muestra los términos de copyright y distribución de PostgreSQL  

![img - mc-copyright]({{ page.image_path | relative_url }}/copyright.png){:height='400'}

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#meta-comandos)

---

<a name="mc-timing"></a>
### Meta Comando para medir el tiempo de las sentencias SQL

Activa o Desactiva la visualización del tiempo en milisegundos que tarda cada instrucción SQL.

![img - timing png](https://raw.githubusercontent.com/EniDev911/assets/main/png/db/postgres/meta-comando-timing.png){:height='400'}

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#meta-comandos)

---

<a name="mc-x"></a>
### Meta Comando para cambiar la orientación de la salida

Activa o Desactiva el formato de tabla expandido en el resultado de cada instrucción SQL o meta-comando.

![img - gif xtend]({{ page.image_path | relative_url }}/xtend.gif)

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#meta-comandos)

---

<a name="echo"></a>
## Meta Comando para imprimir en consola


![img - echo gif]({{ page.image_path | relative_url }}/echo.gif)

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge)](#metacommand)

---

<a name="mc-html"></a>
## Meta Comando para cambiar la salida a HTML

![img - html gif](https://raw.githubusercontent.com/EniDev911/assets/main/gif/postgre/meta-command/HTML.gif)

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#metacommand)

---

<a name="mc-conninfo"></a>
### Meta Comando para ver la información de la conexión actual

![timing png](https://raw.githubusercontent.com/EniDev911/assets/main/png/db/postgres/meta-comando-conninfo.png)

[![](https://img.shields.io/badge/regresar%20a%20tabla-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#meta-comandos)

---

<a name="interpolar-sql"></a>
## Interpolación SQL

Una característica clave de las **variables en psql** es que pueden sustituirlas (*interpolarlas*) en sentencias SQL normales, así como en los argumentos de los **meta-comandos**. Además psql proporciona funciones para garantizar que los valores de las variables utilizados como identificadores y literales de SQL se cite correctamente. La sintaxis para interpolar un valor sin comillas es anteponer dos puntos (`:`) al nombre de la variable. Por ejemplo:  

{% include code-header.html %}
```shell
\set var 'usuarios'
SELECT * FROM :var;
```

consultaría la tabla con el valor `usuarios` asignada a la variable. Considerar que esto puede no ser seguro: el valor de la variable se copia literalmente, por lo que puede contener comillas no balanceadas o incluso comandos de barra invertida. Debemos asegurarnos de que el valor tenga sentido donde lo utilicemos.

Cuando se va a utilizar un valor como identificador o literal de SQL, lo más seguro es disponer que se incluya entre comillas. Para citar el valor de una variable como literal SQL, escriba dos puntos (`:`) seguidos del nombre de la variable entre comillas simples.  Para citar el valor como un identificador SQL, escriba dos puntos seguidos del nombre de la variable entre comillas dobles. Estas construcciones tratan correctamente las comillas y otros caracteres especiales incrustados en el valor de la variable. El ejemplo anterior se escribiría de manera más segura de esta manera:

{% include code-header.html %}
```shell
\set var 'usuarios'
SELECT * FROM :"var";
```

La interporlación de variables no se realizará dentro de literales e identificadores de SQL entre comillas. Por lo tanto, una construcción como `':var'` no funciona para producir un literal entrecomillado a partir del valor de una variable (y no sería seguro si funcionara, ya que no manejaría correctamente las comillas incrustadas en el valor).

Un ejemplo de uso de este mecanismo es copiar el contenido de un archivo en una columna de tabla. Primero se carga el archivo en una variable y luego interpolamos el valor de la variable como una cadena entrecomillada:  

{% include code-header.html %}
```shell
\set content `cat my_file.txt`
INSERT INTO my_table VALUES (:'content');
```

Otro ejemplo, es almacenando una setencia completa SQL en una variable y luego solo llamar a la variable:  

{% include code-header.html %}
```psql
\set dbs 'SELECT datname FROM pg_database;'
:dbs
```
{: .language-psql }


## Personalizar el prompt

{% include code-header.html %}
```psql
\set PROMPT1 '%[%033[1;33;40m%]%n@%/%R%[%033[0m%]%# '
```
{: .language-psql }
