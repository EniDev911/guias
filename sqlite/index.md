---
layout: default
title: Contenid
---



## PAPERS

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.sqlite %}
 	<li style="margin: 8px 0"><a href="{{ paper.link }}"><img height="30" src="{{ '/assets/images/logos/sqlite.ico' | relative_url }}" style="margin-right: 15px; vertical-align: middle;"> {{ paper.name }}</a></li>
 {% endfor %}	
</ul>
