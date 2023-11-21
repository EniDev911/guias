---
title: Badges
layout: default
img: https://mach-911.github.io/guias/assets/png/banner.png
---


## Cabeceras

Los encabezados en markdown se producen colocando un número determinado de almohadillas `#` antes del texto correspondiente al nivel de encabezamiento deseado (HTML ofrece hasta seis niveles). Los encabezamientos posibles se pueden ver en la siguiente tabla:


{% capture headers %}
{% highlight md %}
# Esto es un &lt;h1&gt; en html
## Esto es un &lt;h2&gt; en html
### Esto es un &lt;h3&gt; en html
#### Esto es un &lt;h4&gt; en html
##### Esto es un &lt;h5&gt; en html
###### Esto es un &lt;h6&gt; en html
{% endhighlight %}
{% endcapture %}
{% capture result_headers %}
{% highlight html %}
<h1>Esto es un &lt;h1&gt; en html</h1>
<h2>Esto es un &lt;h2&gt; en html</h2>
<h3>Esto es un &lt;h3&gt; en html</h3>
<h4>Esto es un &lt;h4&gt; en html</h4>
<h5>Esto es un &lt;h5&gt; en html</h5>
<h6>Esto es un &lt;h6&gt; en html</h6>
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='cabeceras'
	tab_1='file.md'
	bloque_1=headers
	tab_2='Resultado'
	bloque_2=result_headers
%}

---

## Enlaces

Markdown admite dos maneras de crear enlaces **en línea** y por **referencia**.

{% capture enlaces_1 %}
{% highlight md %}
[Con título](https://<url>.com "título")
[Sin titulo](https://<url>.com)
{% endhighlight %}
{% endcapture %}
{% capture result_enlaces_1 %}
{% highlight html %}
<a href="https://<url>.com" title="título">Con título</a>
<a href="https://<url>.com">Con título</a>
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='enlaces'
	tab_1='file.md'
	bloque_1=enlaces_1
	tab_2='Resultado'
	bloque_2=result_enlaces_1
%}

---

## Formato

El formato básico del texto, es decir negritas y cursivas, tachado (*markdown no tiene para subrayar texto*). Se pueden realizar de varias maneras:

{% capture formato %}
{% highlight text %}
**Esto es negrita**
__Esto también es negrita__
*Esto es cursiva*
_Esto también es cursiva_
***Esto es negrita y cursiva***
___Esto también es negrita y cursiva___
~~Esto es tachado~~
{% endhighlight %}
{% endcapture %}
{% capture result_formato %}
{% highlight html %}
<strong>Esto también es negrita</strong>
<em>Esto es cursiva</em>
<em>Esto también es cursiva</em>
<strong><em>Esto es negrita y cursiva</em></strong>
<strong><em>Esto también es negrita y cursiva</em></strong>
<del>Esto es tachado</del>
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='formato'
	tab_1='file.md'
	bloque_1=formato
	tab_2='Resultado'
	bloque_2=result_formato
%}

---

## Listas

Markdown permite crear dos tipos de listas, ordenadas y desordenadas, es decir numeradas o listas de puntos. Para distinguir los tipos y como se crean, nada mejor que verlo con ejemplos:

{% capture listas %}
{% highlight text %}
Lista numerada (ordenada)

1. Este es el primer elemento
2. Este es el segundo elemento
3. Este es el tercer elemento

Lista de puntos (desordenada)

* Un elemento de la lista
* Otro elemento de la lista
* Tercer elemento de la lista

Se pueden emplear también + y - en vez de *

* Un elemento de la lista
+ Otro elemento de la lista
- Tercer elemento de la lista

Se pueden mezclar distintos tipos de listas y anidar unas dentro de otras.

1. Esto es una lista ordenada
2. Segundo elemento de la lista ordenada
    1. Esta es una lista ordenada
 anidada dentro de otra
        * Lista desordenada anidada a tercer nivel
        * Segundo elemento de esta lista
    2. Este es el segundo elemento
de la lista ordenada anidada
{% endhighlight %}
{% endcapture %}
{% capture result_listas %}
{% highlight html %}
<ol>
	<li>Este es el primer elemento</li>
	<li>Este es el segundo elemento</li>
	<li>Este es el tercer elemento</li>
</ol>
<p>Lista de puntos (desordenada)</p>
<ul>
	<li>Un elemento de la lista</li>
	<li>Otro elemento de la lista</li>
	<li>Tercer elemento de la lista</li>
</ul>
<p>Se pueden emplear también + y - en vez de *</p>
<ul>
	<li>Un elemento de la lista</li>
	<li>Otro elemento de la lista</li>
	<li>Tercer elemento de la lista</li>
</ul>
<p>Se pueden mezclar distintos tipos de listas y anidar unas dentro de
otras.</p>
<ol>
	<li>Esto es una lista ordenada</li>
	<li>Segundo elemento de la lista ordenada
		<ol>
			<li>Esta es una lista ordenada anidada dentro de otra
				<ul>
					<li>Lista desordenada anidada a tercer nivel</li>
					<li>Segundo elemento de esta lista</li>
				</ul>
			</li>
		<li>Este es el segundo elemento de la lista ordenada anidada</li>
		</ol>
	</li>
</ol>
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='listas'
	tab_1='file.md'
	bloque_1=listas
	tab_2='Resultado'
	bloque_2=result_listas
%}


---

## Casillas de verificación

Puede crear una lista de casillas de verificación usando la siguiente sintaxis:

{% capture casillas_verificacion %}
{% highlight md %}
### Sistema solar exploración, 1950s - 1960s

- [ ] Mercurio
- [x] Venus
- [x] Tierra (Órbita/Luna)
- [x] Martes
- [ ] Júpiter
- [ ] Saturno
- [ ] Urano
- [ ] Neptuno
- [ ] Cometa Halley
{% endhighlight %}
{% endcapture %}
{% capture result_casillas_verificacion %}
{% highlight html %}
<h3>Sistema solar exploración, 1950s - 1960s</h3>
<ul>
	<li><input type="checkbox" disabled/> Mercurio</li>
	<li><input type="checkbox" disabled checked/> Venus</li>
	<li><input type="checkbox" disabled checked/> Tierra (Órbita/Luna)</li>
	<li><input type="checkbox" disabled checked/> Martes</li>
	<li><input type="checkbox" disabled/> Júpiter</li>
	<li><input type="checkbox" disabled/> Saturno</li>
	<li><input type="checkbox" disabled/> Urano</li>
	<li><input type="checkbox" disabled/> Neptuno</li>
	<li><input type="checkbox" disabled/> Cometa Halley</li>
</ul>
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='casillas_verificacion'
	tab_1='file.md'
	bloque_1=casillas_verificacion
	tab_2='Resultado'
	bloque_2=result_casillas_verificacion
%}

