---
layout: default
title: Filtros | Liquid
categories: ["guía"]
css:
  custom: |-
   output {  
   	padding: 10px;
   	background-color: #ccc9;
   	font-weight: bold;
   	border-radius: 5px;
   	border: 1px solid #ccc;
   	color: #181818;
   }
---

Los filtros cambian la salida de un objeto de Liquid. Se utilizan dentro de una salida y están separados por carácter de pipe (`|`).

## Transformación string

{% include code-header.html %}
```liquid
{% raw %}{{ "hola" | capitalize }}
{% comment %} Renderiza a 'Hola' {% endcomment %}
{{ "Hola" | dowcase }}
{% comment %} Renderiza a 'hola' {% endcomment %}
{{ "hola" | upcase }}
{% comment %} Renderiza a 'HOLA' {% endcomment %}{% endraw %}
```

## Usar múltiples filtros

{% include code-header.html %}
```liquid
{% raw %}{% comment %} Renderiza a hola {% endcomment %}
{{ "hola" | upcase | remove: 'HO' }}
{% comment %} Renderiza a 'LA' {% endcomment %}{% endraw %}
```

## Tamaño

{% include code-header.html %}
```liquid
{% raw %}{% assign frutas = "naranja,manzana,sandía" | split: ',' %}
{{ frutas | size }}
{% comment %} Renderiza a '3' {% endcomment %}
{{ 'frutas' | size }}
{% comment %} Renderiza a '6' {% endcomment %}
{% endraw %}
```

## Notación de puntos

{% include code-header.html %}
```liquid
{% raw %}{% assign frutas = "naranja,manzana,sandía" | split: ',' %}
{% if frutas.size <= 3 %}
  Hay poca variedad de frutas
{% endif %}
{% comment %} Renderiza a 'Hay poca variedad de frutas' {% endcomment %}{% endraw %}
```

## where

<p style="display: inline; background: #111; padding: 3px; border-radius: 5px;"><span style="color: olive">array</span> | <span style="color: darkyellow">where</span> : <span style="color: crimson">string</span>, <span style="color: crimson">string</span></p>

{% include code-header.html %}
```liquid
{% raw %}{% assign my_posts = site.posts | where:"author","enidev911" %}
<ul>
  {% for post in my_posts %}
  <li><a href="{{post.url}}">{{post.title}}</a></li>
  {% endfor %}
</ul>
{% comment %} Renderiza solo si el author del post es 'enidev911' {% endcomment %}{% endraw %}
```

---

## escape

{% include code-header.html %}
```liquid
{% raw %}{{ '<p>Lorem ipsum...</p>' | escape }}
{% comment %} Renderiza: 
  '&lt;p&gt;Lorem ipsum...&lt;/p&gt;' 
{% endcomment %}{% endraw %}
```

---

## Ordenamiento

### sort

Primero ordenaremos una colección o lista como las publicaciones y luego la mostraremos con un bucle for:

{% include code-header.html %}
```liquid
{% raw %}{% assign sorted-posts = site.posts | sort: 'title' %}
{% for post in sorted-posts limit: 5 %}
  <li>{{post.title}}</li>
{% endfor %}{% endraw %}
```

### sort | reverse

Podemos organizarlo en orden inverso de los títulos

{% include code-header.html %}
```liquid
{% raw %}{% assign sorted-posts = site.posts | sort: 'title' | reverse %}
{% for post in sorted-posts limit: 5 %}
  <li>{{post.title}}</li>
{% endfor %}{% endraw %}
```

## Filtros


### join

Combina los elementos de una matriz en una sola cadena usando un argumento separador:

{% include code-header.html %}
```liquid
{% raw %}{% assign authors = "enidev911, neck, darkonen" | split: ", " %}
{{ authors | join: " and "}}{% endraw %}
```

Producción:
<output>
{% assign authors = "enidev911, neck, darkonen" | split: ", " %}
{{ authors | join: " and "}}
</output>

### where

Muchas veces queremos que las publicaciones se dividan en diferentes categorías y se muestren como una lista. Esto se puede lograr con el filtro `where`.

Considerando este sitio web, por ejemplo. La mayoría de mis publicaciones son sobre colecciones de distintas temáticas y cada una tiene alguna categoría como `categories: ["guía", "tutorial", "etc"]`. 

Filtremos todas las publicaciones que tienen de categoría **guía**:

{% include code-header.html %}
```liquid
{% raw %}{% assign sorted-posts = site.posts | where: "categories", "guía" %}
{% for post in sorted-posts limit: 5 %}
  <li>{{post.title}}</li>
{% endfor %}{% endraw %}
```

Ahora, consideremos que tenemos diferentes autores que escriben artículos en el blog. Esta puede ser una excelente manera de separar las publicaciones según su autor:

{% include code-header.html %}
```liquid
{% raw %}{% assign sorted-posts = site.posts | where: "author", "enidev911" %}
{% for post in sorted-posts limit: 5 %}
  <li>{{post.title}}</li>
{% endfor %}{% endraw %}
```
