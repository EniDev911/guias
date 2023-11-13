---
layout: default
title: Python
---

## Papers

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.python.papers %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>

## Tipos de datos

<ul style="list-style: none; padding: 0">
 {% for item in site.data.python.tipos %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ item.link }}">{{ item.name | upcase }}</a></li>
 {% endfor %}	
</ul>


## Tutoriales

<div class="flex">
 {% for item in site.data.python.tutoriales %}
 <div class="col">
  {% include card-paper.html 
  	title=item.title
  	img=item.img
  	href=item.link
  	%}
  </div>
 {% endfor %}	
</div>
