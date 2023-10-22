---
layout: default
title: Archivo de datos
---

Además de las variables integradas disponibles de Jekyll, podemos crear nuestros propios datos personalizados en los siguientes formatos:

- [YAML](https://yaml.org/)
- [JSON](https://www.json.org/json-en.html)
- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)
- [TSV](https://en.wikipedia.org/wiki/Tab-separated_values)

Crear un archivo en `_data/navigation.yml` con lo siguiente:  

{: .clipboard }
{% highlight yml %}
- name: Home
  link: /
- name: About
  link: /about
{% endhighlight %}

Jekyll pone este archivo de datos a su disposición a través de `site.data.navigation`. En lugar de generar cada enlace, podemos iterar sobre los datos:  

{: .clipboard }
{% highlight liquid%}
{% raw %}<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.link }}" 
      {% if page.url == item.link %} 
      style="color: red;"{% endif %}>
        {{ item.name }}
    </a>
  {% endfor %}
</nav>{% endraw %}
{% endhighlight %}

>La salida será exactamente la misma. La diferencia es que ha facilitado la adición de nuevos elementos de navegación.