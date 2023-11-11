---
layout: default
title: "Funciones de cadena"
---


## CONCAT(str1, str2, ...)

Concatena las cadenas pasadas como argumentos:

{% capture ej_concat %}
{% highlight sql %}
SELECT CONCAT('My', 'S', 'QL');
SELECT CONCAT('My', NULL, 'QL');
SELECT CONCAT(91.1);
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_concat %}
{% highlight shell %}
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
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_concat()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_concat
	bloque_normal=result_concat
%}



---

## CONCAT_WS(separator, str1, str2, ...)

Concatena las cadenas pasadas como argumentos con un separador:

{% capture ej_concatws %}
{% highlight sql %}
SELECT CONCAT_WS(',', 'First Name', 'Last Name');
SELECT CONCAT_WS('-', 'First Name', NULL, 'Last Name');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_concatws %}
{% highlight shell %}
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
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_concat_ws()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_concatws
	bloque_normal=result_concatws
%}



---

## LOWER \| LCASE

Convierte una cadena en minúscula:

{% capture ej_lower %}
{% highlight sql %}
SELECT LOWER('PROSCHEME');
SELECT LCASE('EniDEv911');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_lower %}
{% highlight shell %}
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
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_lower()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_lower
	bloque_normal=result_lower
%}


---


## UPPER \| UCASE

Convierte una cadena en mayúscula:


{% capture ej_upper %}
{% highlight sql %}
SELECT UCASE('hello world');
SELECT UPPER('HellO WorLd');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_upper %}
{% highlight shell %}
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
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_upper()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_upper
	bloque_normal=result_upper
%}


---

## REPEAT(str, count)

Devuelve una cadena **N** cantidad de veces:

{% capture ej_repeat %}
{% highlight sql %}
SELECT REPEAT('MySQL ', 3);
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_repeat %}
{% highlight shell %}
+---------------------+
| REPEAT('MySQL ', 3) |
+---------------------+
| MySQL MySQL MySQL   |
+---------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_repeat()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_repeat
	bloque_normal=result_repeat
%}


---

## LEFT(str, len)

Devuelve la cadena sin los espacios en blanco que pudiera contener al principio:

{% capture ej_left %}
{% highlight sql %}
SELECT LEFT('Hello', 2); 
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_left %}
{% highlight shell %}
+------------------+
| LEFT('Hello', 2) |
+------------------+
| He               |
+------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_left()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_left
	bloque_normal=result_left
%}


---


## RIGHT(str, len)

Devuelve la cadena sin los espacios en blanco que pudiera contener al final:

{% capture ej_right %}
{% highlight sql %}
SELECT RIGHT('Hello', 2); 
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_right %}
{% highlight shell %}
+-------------------+
| RIGHT('Hello', 2) |
+-------------------+
| lo                |
+-------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_right()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_right
	bloque_normal=result_right
%}


---

## MID(str, pos, len)

Retorna los caracteres indicado una posición y la longitud:

- `MID()`: es sinónimo de `SUBSTRING()`

{% capture ej_mid %}
{% highlight sql %}
SELECT MID('Hello World',2, 6); 
SELECT SUBSTRING('Hola',2,1); 
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_mid %}
{% highlight shell %}
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
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_mid()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_mid
	bloque_normal=result_mid
%}


---

## LTRIM(str)

Devuelve la cadena sin los espacios en blanco que pudiera contener al principio:

{% capture ej_ltrim %}
{% highlight sql %}
SELECT LTRIM('              Hola');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_ltrim %}
{% highlight shell %}
+-----------------------------+
| LTRIM('              Hola') |
+-----------------------------+
| Hola                        |
+-----------------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_ltrim()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_ltrim
	bloque_normal=result_ltrim
%}


---

## RTRIM(str)

Devuelve la cadena sin los espacios en blanco que pudiera contener al final:

{% capture ej_rtrim %}
{% highlight sql %}
SELECT RTRIM('Hello World          ');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_rtrim %}
{% highlight shell %}
+--------------------------------+
| RTRIM('Hello World          ') |
+--------------------------------+
| Hello World                    |
+--------------------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_rtrim()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_rtrim
	bloque_normal=result_rtrim
%}


---

## TRIM(str)

{% capture ej_trim %}
{% highlight sql %}
SELECT TRIM('      Hello World      ');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_trim %}
{% highlight shell %}
+---------------------------------+
| TRIM('      Hello World      ') |
+---------------------------------+
| Hello World                     |
+---------------------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_trim()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_trim
	bloque_normal=result_trim
%}


---

## REPLACE(str, from, to)

Devuelve la cadena pero cambiando secuencias de caracteres por otras:

{% capture ej_replace %}
{% highlight sql %}
SELECT REPLACE('Holo', 'ol', 'ell'); 
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_replace %}
{% highlight shell %}
+------------------------------+
| REPLACE('Holo', 'ol', 'ell') |
+------------------------------+
| Hello                        |
+------------------------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_replace()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_replace
	bloque_normal=result_replace
%}


---

## REVERSE(str)

Devuelve la cadena del revés:

{% capture ej_reverse %}
{% highlight sql %}
SELECT REVERSE('Hola');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_reverse %}
{% highlight shell %}
+-----------------+
| REVERSE('Hola') |
+-----------------+
| aloH            |
+-----------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_reverse()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_reverse
	bloque_normal=result_reverse
%}


---

## CHAR_LENGTH(str) \| CHARACTER_LENGTH(str)

Devuelve la longitud de la cadena en caracteres:

{% capture ej_char_length %}
{% highlight sql %}
SELECT CHAR_LENGTH('Hello World');
SELECT LENGTH('HELLO');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_char_length %}
{% highlight shell %}
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
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_char_length()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_char_length
	bloque_normal=result_char_length
%}

<p align="center">
<a href="https://www.buymeacoffee.com/9111592" target="_blank">
<img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/support/buymeacoffee.png" height="80"></a>
</p>
