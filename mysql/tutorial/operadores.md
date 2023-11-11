---
layout: default
title: "Operadores"
---

## Operdores de comparación

**Distinto**:

{% capture ej_distinto %}
{% highlight sql %}
SELECT 1 <> 1;
SELECT 1 <> 2;
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_distinto %}
{% highlight shell %}
+--------+
| 1 <> 1 |
+--------+
|      0 |
+--------+

+--------+
| 1 <> 2 |
+--------+
|      1 |
+--------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_op_distinto'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_distinto
	bloque_normal=result_distinto
%}

**IS** \| **IS NOT** (expresiones booleanas)

Comprueba si un valor booleano, donde el valor booleano puede ser `TRUE`, `FALSE` o `UNKNOWN`:

{% capture ej_is_isnot %}
{% highlight sql %}
SELECT 1 IS TRUE, 0 IS FALSE, NULL IS UNKNOWN;
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_is_isnot %}
{% highlight shell %}
+-----------+------------+-----------------+
| 1 IS TRUE | 0 IS FALSE | NULL IS UNKNOWN |
+-----------+------------+-----------------+
|         1 |          1 |               1 |
+-----------+------------+-----------------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_op_is_isnot'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_is_isnot
	bloque_normal=result_is_isnot
%}

**IGUAL QUE (=)**

{% capture ej_equal %}
{% highlight sql %}
SELECT 1 = 0;
SELECT '0' = 0;
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_equal %}
{% highlight shell %}
+-------+
| 1 = 0 |
+-------+
|     0 |
+-------+

+---------+
| '0' = 0 |
+---------+
|       1 |
+---------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_op_equal'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_equal
	bloque_normal=result_equal
%}

**MAYOR O IGUAL QUE (>=)**

{% capture ej_g_equal %}
{% highlight sql %}
SELECT 0 >= 1;
SELECT 2 >= 2;
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='mysql' 
	data-ext='sql'>
</enidev-button>
{% endcapture %}

{% capture result_g_equal %}
{% highlight shell %}
+--------+
| 0 >= 1 |
+--------+
|      0 |
+--------+

+--------+
| 2 >= 2 |
+--------+
|      1 |
+--------+
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_op_g_equal'
	tab_1='script.sql'
	tab_2='Resultado'
	bloque_1=ej_g_equal
	bloque_normal=result_g_equal
%}