---
layout: default
title: "Contenido"
---

## Instalación

<table>
	<thead>
		<th>Windows</th>
		<th>Linux</th>
	</thead>
	<tbody>
	{% for article in site.data.mysql.install %}
	<tr>
		<td onclick="window.open('{{ article.window_link }}', '_parent')" style="cursor:pointer"><a>{{ article.window }}</a></td>
		<td onclick="window.open('{{ article.linux_link }}', '_parent')" style="cursor:pointer"><a>{{ article.linux }}</a></td>
	</tr>
	{% endfor %}
	</tbody>
</table>

## PAPERS

<ul style="list-style: none; padding: 0">
 {% for paper in site.data.mysql.papers %}
 	<li style="margin: 8px 0"><a href="{{ paper.link }}"><img height="25" src="{{ '/assets/images/logos/mysql.png' | relative_url }}" style="margin-right: 15px; vertical-align: middle;"> {{ paper.name }}</a></li>
 {% endfor %}	
</ul>

## Tutoriales

<div class="flex">
 {% for item in site.data.mysql.tutoriales %}
  {% include card-paper.html 
  	title=item.title
  	img=item.img
  	href=item.link
  	%}
 {% endfor %}	
</div>
