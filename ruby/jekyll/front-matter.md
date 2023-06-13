---
layout: default
title: "Front matter"
render_with_liquid: false
---


### render_with_liquid

Dentro los bloques para interpretar sintaxis de **Liquid** debemos hacerlo a través de etiquetas `{% raw %}` y `{% endraw %}`, pero si establecemos la opción `render_with_liquid: false` podemos deshabilitar **Liquid** por completo para un documento en particular. 

Ejemplo estándar: 


```liquid
{% highlight liquid %}
{% raw %}
      {% if page.categories[0] != "snippets" %}
        {% include promote-bookmarks.dev.html %}
      {% endif %}
{% endraw %}
{% endhighlight %}
```

### Utilizar la materia primA

Cambiemos el <span class="tag">title</span> en el sitio para que se llene usando la materia preliminar:  

```html
---
title: Home
---
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    <h1>{{ "Hola mundo!" | downcase }}</h1>
  </body>
</html>
```
Tenga en cuenta que para que Jekyll procese cualquier etiqueta de Liquid en su página, debe incluir un **front matter** en el documento. El fragmento más mínimo de contenido que se espera es:  

````markdown
---
---
````