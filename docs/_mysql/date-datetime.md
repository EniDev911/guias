---
layout: default
title: "Funciones de fecha y hora"
categories: ["guía"]
---

[comment]: <> (Reference: https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-date)

**MySQL** cuando almacena una fecha lo hace deacuerdo a la norma ISO_8601 esto es **YYYY-mm-dd**.

<a name="top"></a>
La siguiente tabla contiene algunas de las funciones de fecha y hora:  

|Nombre             |Descripción|
|-------------------|-----------|
|[`ADDDATE()`](#addsubdate)|Agregar valores de tiempo (intervalos) a un valor de fecha|
|[`ADDTIME()`](#addtime)|Agregar tiempo|
|[`CONVERT_TZ`](#converttz)|Convertir de una zona horaria a otra|
|[`CURDATE()`](#curdate)|Devolver la fecha actual|
|[`CURRENT_DATE()`](#curdate), [`CURRENT_DATE`](#curdate)|Sinónimos de **`CURDATE()`**|
|[`CURTIME()`](#curtime)|Devoler la hora actual|
|[`CURRENT_TIME()`](#curtime), [`CURRENT_TIME`](#curtime)|Sinónimos de **`CURTIME()`**|
|[`CURRENT_TIMESTAMP()`](#now), [`CURRENT_TIMESTAMP`](#now)|Sinónimos de **`NOW()`**|
|[`DATE()`](#date)|Extraiga la parte de la fecha de una expresión de fecha o fecha y hora|
|[`DATE_ADD`](#addsubdate)|Agregar valores de tiempo (intervalos) a un valor de fecha|
|[`DATE_FORMAT`](#dateformat)|Dar formato a la fecha como se especifica|
|[`DATE_SUB`](#addsubdate)|Restar un valor de tiempo (intervalo) de una fecha|
|[`DATEDIFF`](#datediff)|Restar dos fechas|
|[`DAYNAME()`](#dayname)|Devolver el nombre del día de la semana de una fecha|
|[`DAYOFMONTH()`](#dayofmonth)|Devuelve el día del mes (0-31)|
|[`DAYOFWEEK()`](#dayofweek)|Devuelve el índice del día de la semana del argumento|
|[`DAYOFYEAR()`](#dayofyear)|Devolver el día del año (1-366)|
|[`EXTRACT()`](#extract)|Extraer parte de una fecha|
|[`FROM_DAYS()`](#fromdays)|Convertir un número de día en una fecha|
|[`FROM_UNIXTIME()`](#unixtime)|Formatear la marca de tiempo de Unix como una fecha|
|[`GET_FORMAT()`](#getformat)|Devolver una cadena de formato de fecha|
|[`HOUR()`](#hour)|Extrae la hora|
|[`LAST_DAY()`](#lastday)|Devuelve el último día del mes para el argumento|
|[`LOCALTIME()`](#now), [`LOCALTIME`](#now)|Sinónimo de **`NOW()`**|
|[`LOCALTIMESTAMP`, `LOCALTIMESTAMP()`](#localtimestamp)|Sinónimo **`NOW()`**|
|[`MAKEDATE()`](#makedate)|Crear una fecha a partir del año y el día del año|
|[`MAKETIME()`](#maketime)|Crear un tiempo a partir de hora, minuto, segundo.|
|[`MICROSECOND()`](#microsecond)|Devuelve los microsegundos del argumento.|
|[`MINUTE`](#minute)|Devuelve el minuto del argumento.|
|[`MONTH()`](#month)|Devolver en el mes a partir de la fecha pasada como argumento.|
|[`MONTHNAME()`](#monthname)|Devuelve el nombre del mes.|
|[`NOW()`](#now)|Devolver la fecha y hora actual.|
|[`PERIOD_ADD`](#periodadd)|Agregar un período a un año-mes.|
|[`PERIOD_DIFF`](#perioddiff)|Devuelve el número de meses entre periodos.|


<!-- ADDDATE - SUBDATE  -->
<a name="addsubdate"></a>
### ADDATE

**Sintaxis:**


```plaintext
ADDDATE(date, INTERVAL expr unit) 
ADDDATE(expr, days) 
SUBDATE(date, INTERVAL expr unit)
```

&#x1F4CD; **`ADDDATE()`** es sinónimo de **`DATE_ADD()`**.  
&#x1F4CD; **`SUBDATE()`** es sinónimo de **`DATE_SUB()`**.

**Ejemplo:**

{% include code-header.html %}
```sql
SELECT DATE_ADD('2020-01-02', INTERVAL 31 DAY);
SELECT ADDDATE('2020-01-02', INTERVAL 31 DAY);
/* '2020-02-02' */
SELECT DATE_SUB('2020-01-02', INTERVAL 31 DAY);
SELECT SUBDATE('2020-01-02', INTERVAL 31 DAY);
/* 2019-12-02 */
```

Cuando se invoca sin la forma de **INTERVAL** en el segundo argumento, MySQL lo trata como un número entero de días que se agregarán a *expr*.  

{% include code-header.html %}
```sql
SELECT ADDDATE('2020-01-02', 31);
/* '2020-02-02' */
SELECT SUBDATE('2020-01-02', 31);
/* 2019-12-02 */
```

---  

<!-- ADDTIME  -->
<a name="addtime"></a>
### ADDTIME

Sintaxis 

```plaintext
ADDTIME(expr1, expr2)
```
Devuelve el resultado de la suma de *`expr2`* y *`expr1`* donde *`expr1`* es una expresión de hora o de fecha y hora, y *`expr2`* es una expresión de hora.  

**Ejemplo**  

{% include code-header.html %}
```sql
SELECT ADDTIME('2007-12-31 23:59:59.999999', '1 1:1:1.000002');
/* '2008-01-02 01:01:01.000001' */
SELECT ADDTIME('01:00:00.999999', '02:00:00.999998');
/* '03:00:01.999997' */
```


**Ejemplo 1** : Añadir tiempo a un campo de fecha y hora

Considerando tener la siguiente tabla llamada **`USERS`**:  

{% include code-header.html %}
```sql
CREATE TABLE `users`(
  `user_id` INT(11) NOT NULL,
  `username` VARCHAR(10) NOT NULL,
  `up` DATETIME,
  `status` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

Para insertar valores usando la función **`CURRENT_TIMESTAMP()`** en el campo **up**:  

```sql
INSERT INTO `users` (`user_id`, `username`, `up`, `status`)
VALUES (1010010101, 'Jhon Doe', CURRENT_TIMESTAMP(), 1);
```

Mostrar la fecha y hora actual en el campo <b>up</b> de la tabla <b>users</b>:  

```sql
SELECT up FROM users;
```

Resultado:  

```text
+---------------------+
| up                  |
+---------------------+
| 2022-03-24 07:45:14 |
+---------------------+
```

Mostrar el campo <b>up</b> sumandole una hora al tiempo:  

```sql
SELECT ADDTIME(up, '1:00:00') FROM users;
```

Resultado:  

```text
+------------------------+
| ADDTIME(up, '1:00:00') |
+------------------------+
| 2022-03-24 08:45:14    |
+------------------------+
```


[Regresar a la tabla](#top) &#x2934;

---

<!-- CONVERT_TZ  -->
<a name="converttz"></a>
### CONVERT_TZ

**Sintaxis**:

```txt
CONVERT_TZ(dt, rom_tz, to_tz)
```

Convierte un valor *dt* de fecha y hora a la zona horaria proporcionada por *from_tz* a la zona horaria proporcionada por *to_tz* y devuelve el valor resultante. Esta función regresa **NULL** si los argumentos no son válidos.  

```sql
SELECT CONVERT_TZ('2022-01-01 12:00:00', 'GMT', 'MET');
/* '2022-01-01 13:00:00' */
SELECT CONVERT_TZ('2022-01-01 12:00:00', '+00:00', '+10:00');
/* '2022-01-01 22:00:00' */
```

[Regresar a la  tabla](#top) &#x2934;

---

<!-- CURDATE  -->
<a name="curdate"></a>
### CURDATE

Devuelve el valor actual de la fecha en el formato de **`YYYY-MM-DD`** o **`YYYYMMDD`** dependiendo si la función se usa en el contexto de cadena o numérico.  

&#x1F4CD; **`CURRENT_DATE`**, **`CURRENT_DATE()`** son sinónimo de **`CURDATE()`**  

```sql
SELECT CURDATE();
/* '2022-10-13' */
SELECT CURDATE() + 0;
/* 20221013 */
```

**Ejemplo 1**: Insertar en una tabla un valor de fecha usando la función **`CURDATE()`**

Considerando tener la siguiente tabla llamada **`USERS`**:  

```sql
CREATE TABLE `users`(
  `user_id` INT(11) NOT NULL,
  `username` VARCHAR(10) NOT NULL,
  `up` DATE,
  `status` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

Para insertar valores usando la función `CURDATE()` en el campo **up**:  

```sql
INSERT INTO `users` (`user_id`, `username`, `up`, `status`)
VALUES (1010010101, 'Jhon Doe', CURDATE(), 1);
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- CURTIME  -->
<a name="curtime"></a>
### CURTIME([fsp])

Devuelve la hora actual como un valor en el formato **`hh:mm:ss`** o **`hhmmss`**, dependiendo de si la función se usa en el contexto de cadena o numérico. El valor se expresa en la zona horaria de la sesión.  
El argumento *fps* se proporciona para especificar una precisión de segundos fraccionarios de 0 a 6, el valor devuelto incluye una parte de segundos fraccionarios de esa cantidad de dígitos. 

```sql
SELECT CURTIME();
/* '23:50:26' */
SELECT CURTIME(3);
/* '23:50:26.010' */
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- DATE -->
<a name="date"></a>
### DATE(expr)

Extrae la parte de la fecha de la expresión (expr) de fecha o fecha y hora. 
```sql
SELECT DATE('2020-12-31 01:02:03');
/* '2020-12-31' */
```

**Ejemplo 1**: Extraer fecha de un campo fecha y hora

Considerando tener la siguiente tabla llamada `USERS`:  

```sql
CREATE TABLE `users`(
	`user_id` INT(11) NOT NULL,
	`username` VARCHAR(10) NOT NULL,
	`birthday` DATE NOT NULL,
	`up` DATETIME NOT NULL,
	`status` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8
```

Para insertar valores usando la función `CURRENT_TIMESTAMP` en el campo <b>up</b>:  

```sql
INSERT INTO `users` (`user_id`, `username`, `birthday`, `up`, `status`)
VALUES (1010010101, 'Jhon Doe', '1990-11-05', CURRENT_TIMESTAMP(), 1);
```

Para mostrar solo la fecha del campo <b>up</b>:  

```sql
SELECT username, DATE_FORMAT(birthday, '%W %M %Y') as birthday,
DATE(up) as up FROM users;
```

Resultado:  

```text
+----------+----------------------+------------+
| username | birthday             | up         |
+----------+----------------------+------------+
| Jhon Doe | Monday November 1990 | 2022-03-24 |
+----------+----------------------+------------+
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- DATEDIFF -->
<a name="datediff"></a>
### DATEDIFF(expr1, expr2)

**`DATEDIFF()`** devuelve un valor en días desde una fecha hasta la otra. *expr1* y *expr2* son expresiones de fecha o de fecha y hora. Solo las partes de la fecha de los valores se utilizan en el cálculo.  

```sql
SELECT DATEDIFF('2020-12-31 23:59:59', '2020-12-30');
/* 1 */
SELECT DATEDIFF('2020-11-30 23:59:59', '2020-12-31');
/* -31 */
```

[Subir al principio](#top) &#x2934;

---

<!-- DATEFORMAT -->
<a name="dateformat"></a>
### DATE_FORMAT(date, format)

Da formato al valor *date* según la cadena *format*.  Los especificadores que se muestran en la siguiente tabla se pueden utilizar en la cadena *format*. El carácter '`%`' es obligatorio antes que los caracteres del especificador de formato. Los especificadores también se aplican a otras funciones: **`STR_TO_DATE()`**, **`TIME_FORMAT()`**, **`UNIX_TIMESTAMP()`**.


### Tabla de especificadores

<table>
	<thead>
		<tr>
			<th>Especificador</th>
			<th>Descripción</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>%a</td>
			<td><p>Nombre abreviado del día de la semana (Sun..Sat)</p></td>
		</tr>
		<tr>
			<td>%b></td>
			<td><p>Nombre del mes abreviado (Jan..Dec)</p></td>
		</tr>
		<tr>
			<td>%c</td>
			<td><p>Mes numérico (0..12)</p></td>
		</tr>
		<tr>
			<td>%D</td>
			<td><p>Día del mes con sufijo en inglés (0th, 1st, 2nd, 3rd, ...)</p></td>
		</tr>
		<tr>
			<td>%d</td>
			<td><p>Día del mes, numérico (00..31)</p></td>
		</tr>
		<tr>
			<td>%e</td>
			<td><p>Día del mes, numérico (0..31)</p></td>
		</tr>
		<tr>
			<td>%f</td>
			<td><p>Microsegundos (000000..999999)</p></td>
		</tr>		
		<tr>
			<td>%H</td>
			<td><p>Hora (00..23)</p></td>
		</tr>
		<tr>
			<td>%h o %l (ele)</td>
			<td><p>Hora (01..12)</p></td>
		</tr>
		<tr>
			<td><b>%i</b></td>
			<td><p>Minutos, numérico (00..59)</p></td>
		</tr>
		<tr>
			<td><b>%j</b></td>
			<td><p>Día del año (001..366)</p></td>
		</tr>
		<tr>
			<td><b>%k</b></td>
			<td><p>Hora (0..23)</p></td>
		</tr>
		<tr>
			<td><b>%l</b></td>
			<td><p>Hora (1..12)</p></td>
		</tr>
		<tr>
			<td><b>%M</b></td>
			<td><p>Nombre del mes (January..December)</p></td>
		</tr>
		<tr>
			<td><b>%m</b></td>
			<td><p>Mes, numérico (00..12)</p></td>
		</tr>
		<tr>
			<td><b>%p</b></td>
			<td><p>AM o PM</p></td>
		</tr>
		<tr>
			<td><b>%r</b></td>
			<td><p>Hora, 12 horas <i><b>hh:mm:ss</b></i> seguido de AM o PM</p></td>
		</tr>
		<tr>
			<td><b>%S</b> o <b>%s</b></td>
			<td><p>Segundos (00..59)</p></td>
		</tr>
		<tr>
			<td><b>%T</b></td>
			<td><p>Hora, 24 horas (<b><i>hh:mm:ss</i></b>)</p></td>
		</tr>
		<tr>
			<td><b>%U</b></td>
			<td><p>Semana (00..53), donde Domingo es el primer día de la semana; <b><code>WEEK()</code></b> modo 0</p></td>
		</tr>
		<tr>
			<td><b>%u</b></td>
			<td><p>Semana (00..53), donde Lunes es el primer día de la semana; <b><code>WEEK()</code></b> modo 1</p></td>
		</tr>
		<tr>
			<td><b>%V</b></td>
			<td><p>Semana (01..53), donde Lunes es el primer día de la semana; <b><code>WEEK()</code></b> modo 2; usado con <b>%X</b></p></td>
		</tr>
		<tr>
			<td><b>%v</b></td>
			<td><p>Semana (01..53), donde Lunes es el primer día de la semana; <b><code>WEEK()</code></b> modo 3; usado con <b>%x</b></p></td>
		</tr>
		<tr>
			<td><b>%W</b></td>
			<td><p>Nombre del día de la semana (Sunday..Saturday)</p></td>
		</tr>
		<tr>
			<td><b>%w</b></td>
			<td><p>Día de la semana (0=Sunday.. 6=Saturday)</p></td>
		</tr>
		<tr>
			<td><b>%X</b></td>
			<td><p>Año de la semana donde el Domingo es el primer día de la semana, numérico, cuatro dígitos; usado con <b>%V</b></p></td>
		</tr>
		<tr>
			<td><b>%x</b></td>
			<td><p>Año de la semana donde el Domingo es el primer día de la semana, numérico, cuatro dígitos; usado con <b>%v</b></p></td>
		</tr>
		<tr>
			<td><b>%Y</b></td>
			<td><p>Año, numérico, cuatro dígitos</p></td>
		</tr>
		<tr>
			<td><b>%y</b></td>
			<td><p>Año, numérico, dos dígitos</p></td>
		</tr>
	</tbody>
</table>


```sql
SELECT DATE_FORMAT('2020-10-04 22:23:00', '%W %M %Y');
/* 'Sunday October 2009 */
```

[Regresar a la tablas](#top) &#x2934;

---

<!-- DAYNAME -->
<a name="dayname"></a>
### DAYNAME(date)

Devuelve el nombre del día de la semana para el el argumento de fecha. El idioma para el nombre está controlado por el valor de la variable del sistema `lc_time_names` del servidor. (Para ver la configuración `SELECT @@lc_time_names`, cambiarla Ej: `set lc_time_names = 'es_MX'`).

```sql
SELECT DAYNAME('2021-02-03');
/* wednesday */
set lc_time_names = 'es_MX';
SELECT DAYNAME('2021-02-03');
/*  miércoles */
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- DAYOFMONTH -->
<a name="dayofmonth"></a>
### DAYOFMONTH(date)

Devuelve el día del mes para el argumento de fecha, en el rango de 1 hasta 31, o 0 para fechas como '0000-00-00' o '2021-00-00' que tienen una parte del día cero.

```sql
SELECT DAYOFMONTH('2021-02-03');
/* 3 */
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- DAYOFWEEK -->
<a name="dayofweek"></a>
### DAYOFWEEK(date)

Devuelve el índice del día de la semana para el argumento de fecha. (1=domingo, ..., 7=sábado). Estos valores de índice corresponden al estándar ODBC.

```sql
SELECT DAYOFWEEK('2021-02-03');
/* 4 */
```

[Regresar a la tabla](#top) &#x2934;

<!-- DAYOFYEAR -->
<a name="dayofyear"></a>
### DAYOFYEAR(date)

Devuelve el día del año para el argumento fecha, en el rango de 1 hasta 366.

```sql
SELECT DAYOFYEAR(CURDATE());
SELECT DAYOFYEAR('2022-03-24');
/* 83 */
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- EXTRACT -->
<a name="extract"></a>
### EXTRACT(unit FROM date)

La función **`EXTRACT()`** utiliza los mismos argumentos con tipos de especificadores *unit* que la función **[`DATE_ADD()`](#addsubdate)** o **[`DATE_SUB()`](#addsubdate)**, pero extrae partes de la fecha en lugar de realizar operaciones aritméticas de fechas.

```sql
SELECT EXTRACT(YEAR FROM '2022-03-02');
/* 2022 */
SELECT EXTRACT(MONTH FROM CURDATE());
/* 3 */
SELECT EXTRACT(MINUTE FROM CURTIME());
/* 25 */
```

[Subir al principio](#top) &#x2934;

---

<!-- FROM_DAYS -->
<a name="fromdays"></a>
### FROM_DAYS(N)

Dado un número de día **N**, devuelve un valor **DATE**.  

```sql
SELECT FROM_DAYS(738603);
/* 2022-03-24 */
```

[Subir al principio](#top) &#x2934;

---

<!-- GET_FORMAT -->
<a name="getformat"></a>
### GET_FORMAT


**Sintaxis**

```txt
GET_FORMAT({DATE|TIME|DATETIME}, {'EUR'|'USA'|'JIS'|'ISO'|'INTERNAL'})
```

Devuelve una cadena de formato. Esta función es útil en combinación con [`DATE_FORMAT()`](#dateformat) y las funciones [`STR_TO_DATE`](#strtodate).  
Los valores posibles para el primer argumento dan como resultado varias cadenas de formato posibles (para los especificadores utilizados, consulte la tabla en la descripción de la función [`DATE_FORMAT()`](#dateformat)).  


Ver tabla de especificadores:


<table>
	<thead>
		<tr>
			<th style="width: 40%;" align="left">Llamada de función</th>
			<th style="width: 30%;" align="left">Resultado</th>
			<th style="width: 30%;" align="left">Ejemplo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>GET_FORMAT(DATE, <b>'USA'</b>)</td>
			<td><b>'%m.%d.%Y'</b></td>
			<td><b>'12.30.2021'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATE, <b>'JIS'</b>)</td>
			<td><b>'%Y-%m-%d'</b></td>
			<td><b>'2021-12-30'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATE, <b>'ISO'</b>)</td>
			<td><b>'%Y-%m-%d'</b></td>
			<td><b>'2021-12-30'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATE, <b>'EUR'</b>)</td>
			<td><b>'%d.%m.%Y'</b></td>
			<td><b>'30.12.2021'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATE, <b>'INTERNAL'</b>)</td>
			<td><b>'%Y%m%d'</b></td>
			<td><b>'20211230'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATETIME, <b>'USA'</b>)</td>
			<td><b>'%Y-%m-%d %H.%i.%s'</b></td>
			<td><b>'2021-12-30 07.45.14'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATETIME, <b>'JIS'</b>)</td>
			<td><b>'%Y-%m-%d %H:%i:%s'</b></td>
			<td><b>'2021-12-30 07:45:14'</b></td>
		</tr>		
		<tr>
			<td>GET_FORMAT(DATETIME, <b>'ISO'</b>)</td>
			<td><b>'%Y-%m-%d %H:%i:%s'</b></td>
			<td><b>'2021-12-30 07:45:14'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATETIME, <b>'EUR'</b>)</td>
			<td><b>'%Y-%m-%d %H.%i.%s'</b></td>
			<td><b>'2021-12-30 07.45.14'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(DATETIME, <b>'INTERNAL'</b>)</td>
			<td><b>'%Y%m%d%H%i%s'</b></td>
			<td><b>'20211230074514'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(TIME, <b>'USA'</b>)</td>
			<td><b>'%h:%i:%s %p'</b></td>
			<td><b>'07:45:14 AM'</b></td>
		</tr>
		<tr>
			<td>GET_FORMAT(TIME, <b>'JIS'</b>)</td>
			<td>'%H:%i:%s'</td>
			<td>'07:45:14'</td>
		</tr>
		<tr>
			<td>GET_FORMAT(TIME, <b>'ISO'</b>)</td>
			<td>'%H:%i:%s'</td>
			<td>'07:45:14'</td>
		</tr>
		<tr>
			<td>GET_FORMAT(TIME, <b>'EUR'</b>)</td>
			<td>'%H.%i.%s'</td>
			<td>'07.45.14'</td>
		</tr>
		<tr>
			<td>GET_FORMAT(TIME, <b>'INTERNAL'</b>)</td>
			<td>'%H%i%s'</td>
			<td>'074514'</td>
		</tr>
	</tbody>
</table>

<!-- EJEMPLOS -->
<!-- Ejemplo 1 -->
**Ejemplo 1** : uso básico

Aquí una demostración de como funciona:  

```sql
SELECT GET_FORMAT(DATE, 'USA');
```

Resultado:  

```text
+------------------------+
| GET_FORMAT(DATE,'USA') |
+------------------------+
| %m.%d.%Y               |
+------------------------+
```

Entonces, este ejemplo devuelve la cadena de formato para USA. Ahora podemos tomar esa cadena de formato y usarla en varias funciones de formato **`date`**.  Ejemplo:  

```sql
SELECT DATE_FORMAT('2020-03-07', '%m.%d.%Y') AS 'Formateado';
```

resultado:  

```text
+----------+
|Formateado|
+----------+
|03.07.2020|
+----------+
```

Sin embargo, también podemos pasar esta función directamente a la función `DATE_FORMAT()`. Por ejemplo:  

```sql
SELECT DATE_FORMAT('2020-03-07', GET_FORMAT(DATE, 'USA')) AS 'Formateado';
```

Así que esto nos evita tener que recordar qué cadena de formato usar, `GET_FORMAT()` lo hace por nosotros.


<!-- Ejemplo 2-->
**Ejemplo 2** : valores de fecha

Este ejemplo enumera todas las variaciones del segundo argumento cuando el primer argumento es `DATE`.  

```sql
SELECT
  GET_FORMAT(DATE, 'USA') AS 'USA',
  GET_FORMAT(DATE, 'JIS') AS 'JIS',
  GET_FORMAT(DATE, 'ISO') AS 'ISO',
  GET_FORMAT(DATE, 'EUR') AS 'EUR',
  GET_FORMAT(DATE, 'INTERNAL') AS 'INTERNAL';
```

Resultado:  

```text
+----------+----------+----------+----------+----------+
| USA      | JIS      | ISO      | EUR      | INTERNAL |
+----------+----------+----------+----------+----------+
| %m.%d.%Y | %Y-%m-%d | %Y-%m-%d | %d.%m.%Y | %Y%m%d   |
+----------+----------+----------+----------+----------+
```

<!-- Ejemplo 3-->
**Ejemplo 3** : valores de fecha y hora

Este ejemplo enumera todas las variaciones del segundo argumento cuando el primer argumento es `DATETIME`.

```sql
SELECT
  GET_FORMAT(DATETIME, 'USA') AS 'USA',
  GET_FORMAT(DATETIME, 'JIS') AS 'JIS',
  GET_FORMAT(DATETIME, 'ISO') AS 'ISO',
  GET_FORMAT(DATETIME, 'EUR') AS 'EUR',
  GET_FORMAT(DATETIME, 'INTERNAL') AS 'INTERNAL';
```

Resultado:  

```text
+-------------------+-------------------+-------------------+-------------------+--------------+
| USA               | JIS               | ISO               | EUR               | INTERNAL     |
+-------------------+-------------------+-------------------+-------------------+--------------+
| %Y-%m-%d %H.%i.%s | %Y-%m-%d %H:%i:%s | %Y-%m-%d %H:%i:%s | %Y-%m-%d %H.%i.%s | %Y%m%d%H%i%s |
+-------------------+-------------------+-------------------+-------------------+--------------+
```

<!-- Ejemplo 4-->
**Ejemplo 4** : valores de tiempo

Este ejemplo enumera todas las variaciones del segundo argumento cuando el primer argumento es `TIME`.

```sql
SELECT
  GET_FORMAT(TIME, 'USA') AS 'USA',
  GET_FORMAT(TIME, 'JIS') AS 'JIS',
  GET_FORMAT(TIME, 'ISO') AS 'ISO',
  GET_FORMAT(TIME, 'EUR') AS 'EUR',
  GET_FORMAT(TIME, 'INTERNAL') AS 'INTERNAL';
```

Resultado:  

```text
+-------------+----------+----------+----------+----------+
| USA         | JIS      | ISO      | EUR      | INTERNAL |
+-------------+----------+----------+----------+----------+
| %h:%i:%s %p | %H:%i:%s | %H:%i:%s | %H.%i.%s | %H%i%s   |
+-------------+----------+----------+----------+----------+
```

Entonces podemos pasar la función `GET_FORMAT()` directamente a la función `TIME_FORMAT()`. Ejemplo:  

```sql
SELECT TIME_FORMAT(140529, GET_FORMAT(TIME, 'USA')) AS 'Formateado';
```

Resultado:  

```text
+-------------+
| Formateado  |
+-------------+
| 02:05:29 PM |
+-------------+
```

[Subir al principio](#top) &#x2934;

---

<!-- HOUR -->
<a name="hour"></a>
### HOUR(time)

Devuelve la hora en el argumento tiempo. El rango del valor es de 0 a 23 para valores de hora del día. Sin embargo, el rango de valores en realidad es mucho mayor, por lo que la función `HOUR()` puede devolver valores mayores que 23.

```sql
SELECT HOUR('16:14:03');
SELECT HOUR(NOW());
/* 16 */
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- LAST_DAY  -->
<a name="lastday"></a>
### LAST_DAY(date)

Toma un valor de fecha o fecha y hora y devuelve el valor correspondiente al último día del mes. Devuelve **NULL** su el argumento no es válido.  

```sql
SELECT LAST_DAY('2022-03-23');
SELECT LAST_DAY(NOW());
/* 2022-03-31 */
```

[Subir al principio](#top) &#x2934;

---

<!-- NOW -->
<a name="now"></a>
### `NOW([fps])`

Devuelve la fecha y la hora actual un valor constante que indica la hora a la que comenzó a ejecutarse la instrucción. (Dentro de una función o activador/trigger almacenado, **`NOW()`** devuelve la hora a la que la función o declaración de activación comenzó a ejecutarse). Esto difiere del comportamiento de **`SYSDATE()`**, que devuelve la hora exacta a la que se ejecuta.  

```sql
SELECT NOW(), SLEEP(2), NOW();
/*
+---------------------+----------+---------------------+
| NOW()               | SLEEP(2) | NOW()               |
+---------------------+----------+---------------------+
| 2022-03-25 02:10:45 |        0 | 2022-03-25 02:10:45 |
+---------------------+----------+---------------------+ 
*/
SELECT SYSDATE(), SLEEP(2), SYSDATE();
/*
+---------------------+----------+---------------------+
| SYSDATE()           | SLEEP(2) | SYSDATE()           |
+---------------------+----------+---------------------+
| 2022-03-25 02:12:42 |        0 | 2022-03-25 02:12:44 |
+---------------------+----------+---------------------+
*/
```

[Regresar a la tabla](#top) &#x2934;

---

<!-- STR_TO_DATE -->
<a name="strtodate"></a>
### STR_TO_DATE(str, format)

Esta función es inversa de la función [`DATE_FORMAT()`](#dateformat). Toma una cadena *str* y una cadena de formato *format*. La función `STR_TO_DATE()` devuelve un valor **`DATETIME`** si la cadena de formato contiene partes de fecha y hora, o un valor **`DATE`** o **`TIME`** si la cadena solo contiene partes de fecha u hora. Si la fecha, la hora o el valor de fecha y hora extraído de *str* es ilegal, `STR_TO_DATE()` regresa **`NULL`** y produce una advertencia.  
El servidor escanea la cadena *str* intentando coincidir con *format*. La cadena de formato puede contener caracteres literales y especificadores. Los caracteres literales en *format* deben coincidir literalmente en *str*.

{% include code-header.html %}
```sql
SELECT STR_TO_DATE('05,11,1990', '%d,%m,%Y');
/* 1990-11-05 */
SELECT STR_TO_DATE('November 5, 1990', '%M %d,%Y');
```

---

<!-- MAKETIME -->
<a name="maketime"></a>
### MAKETIME(hour, minute, second)

Devuelve un valor de tiempo calculado a partir de los argumentos. El argumento *second* puede tener una parte fraccionaria.  

{% include code-header.html %}
```sql
SELECT MAKETIME(12, 15, 30);
/* '12:15:30' */
```