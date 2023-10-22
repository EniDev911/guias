---
layout: default
title: Includes
---

La etiqueta `include` permite incluir contenido de otro archivo almacenado en una carpeta `_includes`. Las inclusiones son útiles para tener una única fuente de código que se repite en todo el sitio o para mejorar la legibilidad.

Un ejemplo de lo anterior podría ser la navegación, a veces es mejor moverlo a una inclusión.


- Creamos un archivo en `_includes/navigation.html` con el siguiente código:

```html
<nav>
  <a href="/">Home</a>
  <a href="/about.html">About</a>
</nav>
```

- Dentro del archivo `_layouts/default` lo incluimos de la siguiente manera: 


```html
{% raw %}<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    {% include navigation.html %}
    {{ content }}
  </body>
</html>{% endraw %}
```