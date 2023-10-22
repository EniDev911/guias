---
layout: default
title: "Contenido"
---


## PAPERS

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.mysql.papers %}
 	<li style="margin: 8px 0"><a href="{{ paper.link }}"><img height="25" src="{{ '/assets/images/logos/mysql.png' | relative_url }}" style="margin-right: 15px; vertical-align: middle;"> {{ paper.name }}</a></li>
 {% endfor %}	
</ul>