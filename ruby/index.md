---
layout: default
title: Contenido
---


## Helper de formularios

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.rails.ActionView %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>

---

## Active Record

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.rails.ActiveRecord %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>

---


### Ejercicios

- [sistema de reacciones](rails/ejercicios/relaciones-mucho-a-mucho-reacciones)

---

## Jekyll (generador de sitios estáticos)

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.jekyll %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>

---

### Ejercicios - Rails

<table>
<tbody>
{% for item in site.data.rails.Exercises %}
 <tr onclick="window.open('{{ item.link }}', '_parent')" style="cursor:pointer">
 	<td>{{ forloop.index }}</td>
 	<td class="item">
  	 {{ item.name | upcase }}
 	</td>
 </tr>
{% endfor %}
</tbody>
</table>
