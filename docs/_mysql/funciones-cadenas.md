---
layout: default
title: "Funciones de cadena"
---


## CONCAT(str1, str2, ...)

Concatena las cadenas pasadas como argumentos:

{% tabs concat_sql %}
{% tab concat_sql sql %}
{% include code-header.html %}
```sql
SELECT CONCAT('My', 'S', 'QL');
SELECT CONCAT('My', NULL, 'QL');
SELECT CONCAT(91.1);
```
{% endtab %}
{% tab concat_sql resultado %}
```text
+-------------------------+
| CONCAT('My', 'S', 'QL') |
+-------------------------+
| MySQL                   |
+-------------------------+

+--------------------------+
| CONCAT('My', NULL, 'QL') |
+--------------------------+
| NULL                     |
+--------------------------+

+--------------+
| CONCAT(91.1) |
+--------------+
| 91.1         |
+--------------+
```
{% endtab %}
{% endtabs %}




---

## CONCAT_WS(separator, str1, str2, ...)

Concatena las cadenas pasadas como argumentos con un separador:

{% tabs concatws_sql %}
{% tab concatws_sql sql %}
{% include code-header.html %}
```sql
SELECT CONCAT_WS(',', 'First Name', 'Last Name');
SELECT CONCAT_WS('-', 'First Name', NULL, 'Last Name');
```
{% endtab %}
{% tab concatws_sql name_tab %}
```text
+-------------------------------------------+
| CONCAT_WS(',', 'First Name', 'Last Name') |
+-------------------------------------------+
| First Name,Last Name                      |
+-------------------------------------------+

+-------------------------------------------------+
| CONCAT_WS('-', 'First Name', NULL, 'Last Name') |
+-------------------------------------------------+
| First Name-Last Name                            |
+-------------------------------------------------+
```
{% endtab %}
{% endtabs %}


---

## LOWER \| LCASE

Convierte una cadena en minúscula:

{% tabs lower_sql %}
{% tab lower_sql sql %}
{% include code-header.html %}
```sql
SELECT LOWER('PROSCHEME');
SELECT LCASE('EniDEv911');
```
{% endtab %}
{% tab lower_sql resultado %}
```text
+--------------------+
| LOWER("PROSCHEME") |
+--------------------+
| proscheme          |
+--------------------+

+--------------------+
| LCASE("EniDev911") |
+--------------------+
| enidev911          |
+--------------------+
```
{% endtab %}
{% endtabs %}

---

## UPPER \| UCASE

Convierte una cadena en mayúscula:

{% tabs upper_sql %}
{% tab upper_sql sql %}
{% include code-header.html %}
```sql
SELECT UCASE('hello world');
SELECT UPPER('HellO WorLd');
```
{% endtab %}
{% tab upper_sql resultado %}
```text
+----------------------+
| UCASE('hello world') |
+----------------------+
| HELLO WORLD          |
+----------------------+

+----------------------+
| UPPER('HellO WorLd') |
+----------------------+
| HELLO WORLD          |
+----------------------+
```
{% endtab %}
{% endtabs %}

---

## REPEAT(str, count)

Devuelve una cadena **N** cantidad de veces:

{% tabs repeat_sql %}
{% tab repeat_sql sql %}
{% include code-header.html %}
```sql
SELECT REPEAT('MySQL ', 3);
```
{% endtab %}
{% tab repeat_sql resultado %}
```text
+---------------------+
| REPEAT('MySQL ', 3) |
+---------------------+
| MySQL MySQL MySQL   |
+---------------------+
```
{% endtab %}
{% endtabs %}

---

## LEFT(str, len)

Devuelve la cadena sin los espacios en blanco que pudiera contener al principio:

{% tabs left_sql %}
{% tab left_sql sql %}
{% include code-header.html %}
```sql
SELECT LEFT('Hello', 2); 
```
{% endtab %}
{% tab left_sql resultado %}
```text
+------------------+
| LEFT('Hello', 2) |
+------------------+
| He               |
+------------------+
```
{% endtab %}
{% endtabs %}

---

## RIGHT(str, len)

Devuelve la cadena sin los espacios en blanco que pudiera contener al final:

{% tabs right_sql %}
{% tab right_sql sql %}
{% include code-header.html %}
```sql
SELECT RIGHT('Hello', 2); 
```
{% endtab %}
{% tab right_sql resultado %}
```text
+-------------------+
| RIGHT('Hello', 2) |
+-------------------+
| lo                |
+-------------------+
```
{% endtab %}
{% endtabs %}

---

## MID(str, pos, len)

Retorna los caracteres indicado una posición y la longitud:

- `MID()`: es sinónimo de `SUBSTRING()`

{% tabs mid_sql %}
{% tab mid_sql sql %}
{% include code-header.html %}
```sql
SELECT MID('Hello World',2, 6); 
SELECT SUBSTRING('Hola',2,1); 
```
{% endtab %}
{% tab mid_sql resultado %}
```text
+--------------------------+
| MID('Hello World', 2, 6) |
+--------------------------+
| ello W                   |
+--------------------------+

+-----------------------+
| SUBSTRING('Hola',2,1) |
+-----------------------+
| o                     |
+-----------------------+
```
{% endtab %}
{% endtabs %}


---

## LTRIM(str)

Devuelve la cadena sin los espacios en blanco que pudiera contener al principio:


{% tabs ltrim_sql %}
{% tab ltrim_sql sql %}
{% include code-header.html %}
```sql
SELECT LTRIM('              Hola');
```
{% endtab %}
{% tab ltrim_sql resultado %}
```text
+-----------------------------+
| LTRIM('              Hola') |
+-----------------------------+
| Hola                        |
+-----------------------------+
```
{% endtab %}
{% endtabs %}

---

## RTRIM(str)

Devuelve la cadena sin los espacios en blanco que pudiera contener al final:

{% tabs rtrim_sql %}
{% tab rtrim_sql sql %}
{% include code-header.html %}
```sql
SELECT RTRIM('Hello World          ');
```
{% endtab %}
{% tab rtrim_sql resultado %}
```text
+--------------------------------+
| RTRIM('Hello World          ') |
+--------------------------------+
| Hello World                    |
+--------------------------------+
```
{% endtab %}
{% endtabs %}

---

## TRIM(str)

{% tabs trim_sql %}
{% tab trim_sql sql %}
{% include code-header.html %}
```sql
SELECT TRIM('      Hello World      ');
```
{% endtab %}
{% tab trim_sql resultado %}
```text
+---------------------------------+
| TRIM('      Hello World      ') |
+---------------------------------+
| Hello World                     |
+---------------------------------+
```
{% endtab %}
{% endtabs %}


---

## REPLACE(str, from, to)

Devuelve la cadena pero cambiando secuencias de caracteres por otras:

{% tabs replace_sql %}
{% tab replace_sql sql %}
{% include code-header.html %}
```sql
SELECT REPLACE('Holo', 'ol', 'ell'); 
```
{% endtab %}
{% tab replace_sql resultado %}
```text
+------------------------------+
| REPLACE('Holo', 'ol', 'ell') |
+------------------------------+
| Hello                        |
+------------------------------+
```
{% endtab %}
{% endtabs %}

---

## REVERSE(str)

Devuelve la cadena del revés:

{% tabs reverse_sql %}
{% tab reverse_sql sql %}
{% include code-header.html %}
```sql
SELECT REVERSE('Hola');
```
{% endtab %}
{% tab reverse_sql resultado %}
```text
+-----------------+
| REVERSE('Hola') |
+-----------------+
| aloH            |
+-----------------+
```
{% endtab %}
{% endtabs %}

---

## CHAR_LENGTH(str) \| CHARACTER_LENGTH(str)

Devuelve la longitud de la cadena en caracteres:

{% tabs char_length_sql %}
{% tab char_length_sql sql %}
{% include code-header.html %}
```sql
SELECT CHAR_LENGTH('Hello World');
SELECT LENGTH('HELLO');
```
{% endtab %}
{% tab char_length_sql resultado %}
```text
+----------------------------+
| CHAR_LENGTH('Hello World') |
+----------------------------+
|                         11 |
+----------------------------+

+-----------------+
| LENGTH('HELLO') |
+-----------------+
|               5 |
+-----------------+
```
{% endtab %}
{% endtabs %}

<p align="center">
<a href="https://www.buymeacoffee.com/9111592" target="_blank">
<img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/support/buymeacoffee.png" height="80"></a>
</p>