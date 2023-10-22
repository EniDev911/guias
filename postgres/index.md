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
	{% for article in site.data.postgres.install %}
	<tr>
		<td onclick="window.open('{{ article.window_link }}', '_parent')" style="cursor:pointer"><a>{{ article.window }}</a></td>
		<td onclick="window.open('{{ article.linux_link }}', '_parent')" style="cursor:pointer"><a>{{ article.linux }}</a></td>
	</tr>
	{% endfor %}
	</tbody>
</table>


## PAPERS


<ul style="list-style: none; padding: 0">
 {% for article in site.data.postgres.articles %}
 	<li style="margin: 8px 0"><a href="{{ article.link }}"><img height="25" src="{{ '/assets/images/logos/postgresql.png' | relative_url }}" style="margin-right: 15px; vertical-align: middle;"> {{ article.name }}</a></li>
 {% endfor %}	
</ul>

## SQL

<ul style="list-style: none; padding: 0">
 {% for article in site.data.sql %}
 	<li style="margin: 8px 0"><a href="{{ article.link | relative_url }}">{{ article.name }}</a></li>
 {% endfor %}	
</ul>