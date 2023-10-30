---
layout: default
title: Contenido
---


## STORAGE


<ul style="list-style: none; padding: 0">
 {% for paper in site.data.javascript.storage %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>

## LIBS


<ul style="list-style: none; padding: 0">
 {% for paper in site.data.javascript.libs %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>