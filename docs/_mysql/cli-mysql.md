---
layout: default
title: "Cliente de línea de comandos Mysql"
categories: ["guía"]
css:
  custom: |-
    thead { background: #000; border: 1px solid #AAA }
    tbody { border: 1px solid #AAA }
    tbody tr:hover { background: #cfcfcf30; cursor: pointer; }
---


## INTRODUCCIÓN

Cuando instalamos MySQL, dentro del paquete de instalación contiene un programa para conectarnos al servidor mediante la línea de comandos, que se llama **mysql** y nos permite abrir una sesión como cliente para ejecutar sentencias **SQL** con capacidades de edición. Es compatible con el uso interactivo y no interactivo. Cuando se usa de forma interactiva, los resultados de la consulta se presentan en un formato de tabla [ASCII](https://es.wikipedia.org/wiki/ASCII). Cuando se usa de forma no interactiva (por ejemplo, como filtro), el resultado se presenta en formato separado por tabuladores. El formato de salida se puede cambiar usando las [opciones de comando](#optionscmd).

---

<a name="localizar-cliente"></a>
## LOCALIZAR EL CLIENTE EN WINDOWS

De acuerdo al modo de instalación las rutas de la ubicación de MySQL puede variar, a continuación voy a mencionar las rutas que generalmente son por defecto según el paquete de instalación y la plataforma.


### XAMP

![img - path-xamp](assets/path-xamp.png)


### WAMP

![img - path-wamp](assets/path-wamp.png)


### EXTRAIDO DESDE UN ZIP

![img - path-manual](assets/path-manual.png)


---

## CONECTARSE AL SERVIDOR

Una vez tenemos localizado el programa podemos conectar con el servidor de MySQL por línea de comandos. Desde la consola o terminal invocamos al programa **mysql** y le indicamos en los argumentos las opciones básicas de conexión (**host**, **usuario**, **puerto**, etc).

**Ejemplo**: 

{% include code-header.html %}
```bash
mysql -h localhost -u root -P 3306 -p
```

{:align='center'}
![img - connect](assets/connect.png){:height='340'}

Estos parámetros son sencillo, aunque dependiendo del método de autenticación podría variar pero simplemente necesitamos especificar 2:  

- `-u`: el usuario que se configuró en el proceso de instalación u otro existente creado por un usuario administrador.
- `-p`: el password para el usuario configurado.

Si su servidor se ejecuta en su propia máquina, no es necesario especificar el parámetro `-h` ya que mysql por defecto usa la opción de **localhost**.


---

<a name="opciones-linea-de-comandos"></a>
## OPCIONES DE LÍNEA DE COMANDOS

**mysql** admite varias opciones, que se pueden especificar en la línea de comandos o en los archivos de opciones usando las directivas **`[mysql]`** y **`[client]`**. Voy a dejar en la siguiente tabla algunas de las más utilizadas.  


<table>
  <thead>
    <th align="left">Opción</th>
    <th align="left">Descripción</th>
    <th align="left">Valor Predeterminado</th>
  </thead>
  <tbody>
    <tr onclick="location.href = '#autorehash'">
      <th>
        <code class="language-plaintext">--auto-rehash</code>
      </th>
      <th>Habilita la terminación automática.</th>
      <th>True</th>
    </tr>
    <tr onclick="location.href = '#autovertical'">
      <th>
        <code class="language-plaintext">--auto-vertical-output</code>
      </th>
      <th>Habilita la visualización de conjuntos de resultados verticales.</th>
      <th>False</th>
    </tr>
    <tr onclick="location.href = '#batch'">
      <th>
        <code class="language-plaintext">--batch</code>
      </th>
      <th>No utiliza el archivo de historial.</th>
      <th>False</th>
    </tr>
    <tr onclick="location.href = '#database'">
      <th>
        <code class="language-plaintext">--database</code>
      </th>
      <th>La base de datos que desea conectarse.</th>
      <th>None</th>
    </tr>
    <tr onclick="location.href = '#opt-delimiter'">
      <th>
        <code class="language-plaintext">--delimiter</code>
      </th>
      <th>Establece el delimitador de consultas.</th>
      <th>;</th>
    </tr>
    <tr onclick="location.href = '#execute'">
      <th>
        <code class="language-plaintext">--execute | -e</code>
      </th>
      <th>Ejecuta la sentencia, devuele la salida y se cierra.</th>
      <th>;</th>
    </tr>
    <tr onclick="location.href = '#host'">
      <th>
        <code class="language-plaintext">--host | -h</code>
      </th>
      <th>Indica el host para la conexión.</th>
      <th>localhost</th>
    </tr>
    <tr onclick="location.href = '#html'">
      <th>
        <code class="language-plaintext">--html | -H</code>
      </th>
      <th>Producir salida html.</th>
      <th></th>
    </tr>
    <tr onclick="location.href = '#user'">
      <th>
        <code class="language-plaintext">--user | -u</code>
      </th>
      <th>El usuario que se conectará.</th>
      <th>ODBC</th>
    </tr>
    <tr onclick="location.href = '#password'">
      <th>
        <code class="language-plaintext">--password | -p</code>
      </th>
      <th>Solicitara el password al usuario que se conectará.</th>
      <th>None</th>
    </tr>
    <tr onclick="location.href = '#namedcommands'">
      <th>
        <code class="language-plaintext">--named-commands</code>
      </th>
      <th>Habilita comandos mysql con nombres.</th>
      <th></th>
    </tr>
    <tr onclick="location.href = '#port'">
      <th>
        <code class="language-plaintext">--named-commands</code>
      </th>
      <th>El número de puerto TCP/IP para la conexión.</th>
      <th>3306</th>
    </tr>
    <tr onclick="location.href = '#silent'">
      <th>
        <code class="language-plaintext">--silent | -s</code>
      </th>
      <th>Modo silencioso.</th>
      <th>False</th>
    </tr>
  </tbody>
</table>


>Si quiere ver todas las opciones posibles puede ir a la [documentación oficial](https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html){:target='_blank' class='link'}

---

<a name="autorehash"></a>
### -\-auto-rehash

Esta opción está activada de forma predeterminada, lo que **permite completar el nombre de la base de datos**, **la tabla** y **la columna**. Para deshabilitar use `--disable-auto-rehash`. Eso hace que mysql se inicie más rápido.
>**Nota**: Esta función requiere un cliente MySQL compilado con la biblioteca readline . Por lo general, la biblioteca readline no está disponible en Windows.

### Ejemplos

**En la línea de comando**  

{% include code-header.html %}
```bash
mysql -u root -p  --auto-rehash
```

**En el archivo de opciones:** 

{% include code-header.html file='my.ini' %}
```ini
# para el programa mysql
[mysql]
auto-rehash=True
# para deshabilitarlo
no-auto-rehash=True
```

{:align='center'}
![img - auto-rehash](assets/auto_rehash.png){:height='400'}

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="autovertical"></a>
### -\-auto-vertical-output

Esta opción permite visualizar los resultados al modo de salida vertical si el resultado es más ancho que el ancho del terminal.  


### Ejemplos

**En la línea de comando**  

{% include code-header.html %}
```bash
mysql -u root -p  --auto-vertical-output
```
> Adicionalmente podemos obtener resultados en este formato en la sesión interactiva terminando cada declaración con `\G`


**En el archivo de opciones:** 

{% include code-header.html file='my.ini' %}
```ini
# para el programa mysql
[mysql]
auto-vertical-output=True
# o de forma abreviada
# auto-vertical-output
```

{:align='center'}
![img - auto-vertical-output](assets/auto_vertical_output.png){:height='400'}

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="batch"></a>
### -\-batch \| -B

Imprime los resultados usando la pestaña como separador de columnas, con cada fila en una nueva linea. Con esta opción, **mysql** no usa el archivo de historial ni imprime mensajes adicionales tampoco muestra el prompt al conectarse.

```bash
mysql -u root -p  -B
```

En el archivo de opciones: 

```ini
# para el programa mysql
[mysql]
batch=True
```

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="database"></a>
### -\-database | -D

La base de datos a utilizar. Esta opción también es útil principalmente en un archivo de opciones establecer a que bases de datos pueden conectarse las aplicaciones o el programa en sí.

### Ejemplos

**En la línea de comando**

{: .clipboard }
```bash
mysql -u root -p -D test
```

**En el archivo de opciones**

>En caso de que no especifique otra base de datos, intentará conectarse a la que esteblece este archivo  

{: .clipboard }
```ini
# para los programas externos
[client]
database=test
# para el programa mysql
[mysql]
database=test
```
<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="opt-delimiter"></a>
### -\-delimiter

Establece el delimitador el delimitador de sentencias. El valor predeterminado es el punto y coma (`;`).  

### Ejemplos

**En la línea de comando**    

```bash
mysql -u root -p --delimiter .
```

**En el archivo de opciones**  

```ini
[mysql]
delimiter=.
silent=True
table=True
```

{:align='center'}
![img - delimiter](assets/delimiter.png){:height='400'}


<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="execute"></a>
### -\-execute \| -e

Ejecuta la sentencia y sale. El formato es el mismo que genera el producido por la opción [**`--batch`**](#batch).  

### Ejemplo

Volcar la salida en un archivo y con formato HTML:

{: .clipboard }
```bash
mysql -u root -p -e "SELECT * FROM tablename;" -H > results.html
```

{:align='center'}
![img - execute option](assets/execute-cli.png){:height='330'}

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="password"></a>
### -\-password \| -p

La contraseña de la cuenta de MySQL utilizada para conectarse al servidor. El valor es opcional si no se proporciona, **mysql** solicita que lo ingrese.


### Ejemplos

**En la línea de comando**  

{: .clipboard }
```bash
mysql -u root -p 
```
> Se considera inseguro proporcionar el password mediante la línea de comandos, en versiones posterios a la 5.6 ya no se puede proporcionar el valor en la misma línea. Por lo que solo puede colocar este valor cuando se lo solicita MySQL.  


**En el archivo de opciones** 

{: .clipboard }
```ini
# para el programa mysql
[mysql]
database=test
password=proPassword
```

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="silent"></a>
### -\-silent \| -s

El modo silencioso da como resultado un formato de salida no tabular y el escape de caracteres especiales.  El escape de caracteres se puede deshabilitar usando el modo sin procesar. Esta opción mantiene el prompt visible.

### Ejemplos

**En la línea de comando**  

```bash
mysql -u root -p -s 
```
**En el archivo de opciones**  

```ini
[mysql]
database=test
silent
```

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="host"></a>
### -\-host \| -h

Conectarse al servidor MySQL en el host dado.

La opción `--dns-srv-name` tiene prioridad sobre la opción `--host` en caso de que se den ambas. La opción `--dns-srv-name` hace que la conexión utilice la función `mysql_real_connect_dns_srv()` de la [**API**](https://es.wikipedia.org/wiki/Web_API#:~:text=Una%20API%20es%20una%20interfaz,funciones%20de%20un%20determinado%20software.) de [**C**](https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)) en lugar de `mysql_real_connect()`. Sin embargo, si el comando **`connect`** se usa posteriormente en tiempo de ejecución y especifica un argumento de nombre de host, ese nombre de host tiene prioridad sobre cualquier opción `--dns-srv-name` proporcionada al inicio de **mysql** para especificar un registro DNS SRV.  

### Ejemplos

**En la línea de comando**  

{: .clipboard }
```bash
mysql -h 127.0.0.1 -u root -p 
```
**En el archivo de opciones**  

{: .clipboard  }
```ini
[mysql]
database=test
host=localhost
```

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="html"></a>
### -\-html \| -H

Produce que cada vez que ejecutemos comandos, la salida se agreguen las etiquetas HTML para generar tablas. Usando la instrucción `INTO OUTFILE` podemos crear archivos en html. Ej: 
```sql
SELECT num_factura, fecha_factura, item, cantidad FROM facturas;
INTO OUTFILE 'c:/temp/facturas.txt'
```

{:align='center'}
![img - html-output](assets/html-output.png){:height='250'}

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="user"></a>
### -\-user \| -u

El nombre de usuario de la cuenta de MySQL que se usará para conectarse el servidor.  

**En la línea de comando**  

```bash
mysql -h 127.0.0.1 -u root -p 
```
**En el archivo de opciones**  

```text
[mysql]
database=test
user=root
host=localhost
```

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="namedcommands"></a>
### -\-named-commands \| -G

Habilite los comandos **mysql con nombre**. Se permiten comandos de formato largo, no solo comandos de formato corto. Por ejemplo `quit | q` ambos son reconocidos. Para deshabilitar los comandos con nombres use `--skip-named-commands`

<a href="#opciones-linea-de-comandos">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>


---

<a name="optionssesion"></a>

## OPCIONES EN LA SESIÓN EN MYSQL

Ahora que estamos conectado **mysql** envía cada instrucción SQL que emite al servidor para que se ejecute. También hay un conjunto de comandos que el cliente **mysql** interpreta. Para obtener una lista escribimos el comando **help** o el símbolo de interrogación **?** en el prompt.  


**Lista de los comandos del cliente:**  

![img - command-session](assets/command-help.png)

**Traducido**

```text
mysql> help

Lista de todos los comandos de MySQL:  
Tenga en cuenta que todos los comandos de texto deben estar al principio de la línea y terminar con ';'

?         (\?) Sinónimo del comando `help`
clear     (\c) Borra la instrucción de entrada actual.
connect   (\r) Vuelve a conectarse al servidor, Los argumentos opcionales son db y host.
delimiter (\d) Establecer delimitador de declaración.
edit      (\e) Editar el comando con $EDITOR. (no funciona en la versión 8)
ego       (\G) Envía el comando al servidor mysql, muestra el resultado verticalmente.
exit      (\q) Salir de mysql. Lo mismo que `quit`.
go        (\g) Envía el comando mysql server.
help      (\h) Muestra esta ayuda.
nopager   (\n) Deshabilitar paginación de salida. (El comando solo funciona en Unix.)
source    (\.) Ejecuta un archivo de script SQL. Toma un nombre de archivo como argumento.
status    (\s) Obtener información de estado del servidor.
system    (\!) Ejecute un comando, el comando solo funciona en Unix. 
               (desde 8.0.19,funciona en Windows.)
warnings  (\W) Mostrar advertencias después de cada declaración.
nowarning (\w) No mostrar advertencias después de cada declaración.

charset   (\C) Cambiar a otro conjunto de caracteres. Podría ser necesario para el procesamiento
               con juegos de caracteres multi-bytes.

Para obtener ayuda del lado del servidor, escriba `help contents`
```

### <a name="optionssesion-table"></a> Tabla de opciones

|Opción|Descripción|
|:-----|:----------|
|[**`clear (\c)`**](#c-clear)|Borrar la instrucción de la entrada actual.|
|[**`connect (\r)`**](#c-connect)|Vuelve a conectarse al servidor, Los argumentos opcionales son db y host.|
|[**`delimiter (\d)`**](#c-delimiter)|Establecer delimitador de declaración.|
|[**`edit (\e)`**](#c-edit)|Editar el comando con $EDITOR.|
|[**`ego (\G)`**](#c-ego)|Envía el comando al servidor mysql, muestra el resultado verticalmente.|
|[**`exit (\q)`**](#c-quit)|Envía el comando al servidor mysql, muestra el resultado verticalmente.|
|[**`go (\g)`**](#c-quit)|Envía el comando al servidor.|
|[**`help (\h)`**](#c-help)|Muestra esta ayuda.|
|[**`nopager (\n)`**](#c-help)|Deshabilita la paginación de salida. (El comando solo funciona en Unix)|


<a name="c-clear"></a>
### clear

Borra la instrucción de la entrada actual, quiere decir que se ignorará todo lo ingresado anteriormente.  

### Ejemplo

![pic](assets/clear-in.png)

<a href="#optionssesion-table">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="c-delimiter"></a>
### delimiter

![pic](assets/delimiter_.png)

<a href="#optionssesion-table">![](https://img.shields.io/badge/regresar%20tabla%20opciones-%E2%86%A9-gray?style=for-the-badge&logo=files&logoColor=%23F93)</a>

---

<a name="optionsprompt"></a>
## OPCIONES PARA EL PROMPT

EL comando **`prompt`** puede alterar la configuración predeterminada. La cadena para definir el aviso puede contener las siguientes secuencias especiales.  

|Opción|Descripción|
|:-----|:----------|
|[**`\c`**](#count)|Un contador que se incrementa para cada declaración que se emita.|
|[**`\D`**](#date)|La fecha actual completa.|
|[**`\d`**](#dbs)|La base de datos predeterminada.|
|[**`\h`**](#_host)|El host del servidor.|
|[**`\l`**](#_delimiter)|El delimitador actual.|
|[**`\m`**](#minute)|Minutos de la hora.|
|[**`\n`**](#newline)|Un carácter de nueva línea.|
|[**`\O`**](#monthletter)|El mes actual en formato de tres letras (Jan, Feb,...).|
|[**`\o`**](#monthnumeric)|El mes actual en formato numérico.|
|[**`\P`**](#ampm)|am PM.|
|[**`\p`**](#port)|El puerto TCP/IP actual o archivo de socket.|
|[**`\R`**](#hourm)|La hora actual, en horario militar de 24 horas(0-23).|
|[**`\r`**](#hourm)|La hora actual, hora estándar de 12 horas (1-12).|
|[**`\S`**](#dotcom)|Punto y coma.|
|[**`\s`**](#second)|Segundos de la hora actual.|
|[**`\t`**](#tab)|Un carácter de tabulación.|
|[**`\U`**](#userhost)|Su nombre de cuenta completo usuario@host.|
|[**`\v`**](#version)|La versión del servidor.|

<p align="left">
  <a name="count"></a><b><code>\c</code> - count</b><br>
  <code>prompt [\c][\'sql statement\']&#62;&nbsp;</code><br>
  <img src="assets/count.png" alt="prompt count" width="400">
</p>

<p align="left">
  <a name="date"></a><b><code>\D</code> - date</b><br>
  <code>prompt [\D][\U]&#62;&nbsp;</code><br>
  <img src="assets/date.png" alt="prompt date" width="400">
</p>

<p align="left">
  <a name="dbs"></a><b><code>\d</code> - database<br>
  <code>prompt \d&#62;&nbsp;</code><br>
<img src="assets/db.png" alt="prompt database" width="400">
</p>

<p align="left">
  <a name="_host"></a><b><code>\h</code> - host</b><br>
  <code>prompt \h&#62;&nbsp;</code><br>
<img src="assets/host.png" alt="prompt host" width="400">
</p>

<p align="left">
  <a name="_delimiter"></a><b><code>\l</code> - delimiter</b><br>
  <code>prompt \h\l\h&#62;&nbsp;</code><br>
  <img src="assets/delimiter.png" alt="prompt delimiter" width="400">
</p>

<p align="left">
  <a name="minute"></a><b><code>\m</code> - minute</b><br>
  <code>prompt [\r][\m][\s]&#62;&nbsp;</code><br>
  <img src="assets/minute.png" alt="prompt minute" width="400">
</p>

<p align="left">
  <a name="newline"></a><b><code>\n</code> - new line</b><br>
  <code>prompt (mysql \v)\n[\U]&#62;&nbsp;</code><br>
  <img src="assets/newline.png" alt="prompt newline" width="400">
</p>

<p align="left">
  <a name="ampm"></a><b><code>\P</code> - pm am</b><br>
  <code>prompt [\r \P]&#62;&nbsp;</code><br>
  <img src="assets/ampm.png" alt="prompt am pm" width="400">
</p>

<p align="left">
  <a name="monthletter"></a><b><code>\O</code> - month</b><br>
  <code>prompt [\O, \Y]&#62;&nbsp;</code><br>
  <img src="assets/monthletter.png" alt="prompt monthletter" width="400">
</p>

<p align="left">
  <a name="monthnumeric"></a><b><code>\o</code> - month numeric</b><br>
  <code>prompt [\w, \o, \Y]&#62;&nbsp;</code><br>
  <img src="assets/monthnumeric.png" alt="prompt monthnumeric" width="400">
</p>

<p align="left">
  <a name="port"></a><b><code>\p</code> - port</b><br>
  <code>prompt \'Port\':[\p]&#62;&nbsp;</code><br>
  <img src="assets/port.png" alt="prompt port" width="400">
</p>

<p align="left">
  <a name="hourm"></a><b><code>\R</code> - hour 24 - format</b><br>
  <code>prompt [\R\S\s]&#62;&nbsp;</code><br>
  <img src="assets/hourm.png" alt="prompt hour" width="400">
</p>

<p align="left">
  <a name="dotcom"></a><b><code>\S</code> - dot - comma</b><br>
  <code>prompt \'Second\'\S\s&#62;&nbsp;</code><br>
  <img src="assets/dotcommand.png" alt="prompt dotcomma" width="400">
</p>

<p align="left">
  <a name="second"></a><b><code>\s</code> - second</b><br>
  <code>prompt \'Second\'\S\s&#62;&nbsp;</code><br>
  <img src="assets/second.png" alt="prompt second" width="400">
</p>

<p align="left">
  <a name="userhost"></a><b><code>\U</code> - usuario & host</b><br>
  <code>prompt (\U)&#62;&nbsp;</code><br>
  <img src="assets/userhost.png" alt="prompt user host" width="400">
</p>

<p align="left">
  <a name="version"></a><b><code>\v</code> - version mysql</b><br>
  <code>prompt (mysql \v)\n[\U]&#62;&nbsp;</code><br>
  <img src="assets/version.png" alt="prompt version" width="400">
</p>

<p align="left">
  <a name="tab"></a><b><code>\t</code> - tab</b><br>
  <code>prompt [\u\t\d]&#62;&nbsp;</code><br>
  <img src="assets/tab.png" alt="prompt tab" width="400">
</p>
