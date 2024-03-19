---
layout: default
title: Filtros | Liquid
categories: ["guía"]
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