---
layout: default
title: "Funciones de información"
---

## CHARSET()

Devuelve el conjunto de caracteres del argumento de la cadena proporcionada:


{% capture ej_charset %}
{% highlight sql %}
SELECT CHARSET('abc');
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result %}
{% highlight shell %}
+----------------+
| CHARSET('abc') |
+----------------+
| utf8mb4        |
+----------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_charset()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_charset
	bloque_normal=result
%}


---

<!-- ## CURRENT_ROLE()

Devuelve una cadena que contiene los **roles activos** para la sesión actual, separados por comas, o **NONE** si no hay ninguno. El valor refleja la configuración de la variable del sistema `sql_quote_show_create`.

```sql

``` -->

## VERSION()

Devuelve una cadena que indica la versión del servidor MySQL:

{% capture ej_version %}
{% highlight sql %}
SELECT VERSION();
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_version %}
{% highlight shell %}
+-----------+
| VERSION() |
+-----------+
| 8.0.27    |
+-----------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_version()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_version
	bloque_normal=result_version
%}

---

## USER()

- `system_user()`: es sinónimo de `user()`
- `session_user()`: es sinónimo de `user()`

Devuelve el **nombre de usuario** actual de MySQL y el nombre de **host** como una cadena:

{% capture ej_user %}
{% highlight sql %}
SELECT USER();
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_user %}
{% highlight shell %}
+----------------+
| USER()         |
+----------------+
| root@localhost |
+----------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_user()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_user
	bloque_normal=result_user
%}

A partir de la versión de MySQL 8.0.34, esta función se puede utilizar como valor predeterminado para una columna:

{: .clipboard }
```sql
CREATE TABLE t (c VARCHAR(288) DEFAULT (USER()));
```

---

## ROW_COUNT()

Devuelve el número de filas afectadas por una declaración **DML** como por ejemplo `INSERT`:

{% capture ej_rowcount %}
{% highlight sql %}
CREATE TABLE t1 (c1 INT);
INSERT INTO t1 VALUES(1),(2),(3);
SELECT ROW_COUNT();
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_rowcount %}
{% highlight shell %}
+-------------+
| ROW_COUNT() |
+-------------+
|           3 |
+-------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_row_count()'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_rowcount
	bloque_normal=result_rowcount
%}
