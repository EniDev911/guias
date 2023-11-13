---
layout: default
title: Contenido
---


## Papers

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.bash.papers %}
 	<li style="margin: 8px 0">{{ forloop.index }} <a href="{{ paper.link }}">{{ paper.name | upcase }}</a></li>
 {% endfor %}	
</ul>
