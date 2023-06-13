---
layout: default
title: Contenido
---

|<img height="30" src="{{ '/assets/images/logos/ruby.png' | relative_url }}" />|[rails: urls corta, ejemplo con api](./rails/urls-abreviadas-para-rails)|
|--|:-|
|<img height="30" src="{{ '/assets/images/logos/ruby.png' | relative_url }}" />|[rails: generando formularios](./rails/generando-formularios)|

### Jekyll

<table>
<tbody>
{% for item in site.data.jekyll %}
 <tr onclick="window.open('{{ item.link }}', '_parent')" style="cursor:pointer">
 	<td>{{ forloop.index }}</td>
 	<td class="item">
  	 {{ item.name | upcase }}
 	</td>
 </tr>
{% endfor %}
</tbody>
</table>