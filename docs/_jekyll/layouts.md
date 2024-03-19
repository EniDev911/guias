---
layout: default
title: Layouts
categories: ["guía"]
---

Jekyll admite [Markdown](https://daringfireball.net/projects/markdown/syntax) y HTML para las páginas. Markdown es una excelente opción para escribir las páginas con una estructura de contenido simple (solo párrafos, encabezados e imágenes), ya que es menos detallado que el HTML sin formato.

Creamos un archivo `about.md` en la raíz:

{% include code-header.html %}
```bash
touch about.md
```

Para la estructura, lo que se suele hacer es copiar lo que tiene nuestro archivo `index.html` y modificarlo para la página de **about**. El problema de hacer eso es el código duplicado. Digamos que desea agrupar una hoja de estilo para su sitio, tendría que ir a cada página y agregarla en el <span class="tag">head</span>. Algo que no es muy incomodo para un sitio de dos páginas, pero hacerlo para 100 páginas. Incluso los cambios simples llevarán mucho tiempo.

### Crear un layout

Usar un diseño (*layout*) es una opción mucho mejor. Los diseños son plantillas que envuelven el contenido. Se almacenan en un directorio llamado `_layouts`.

Creamos un archivo `_layouts/default.html`:

{% include code-header.html %}
```bash
touch _layouts/default.html
```

Añadimos el siguiente contenido:  

{% include code-header.html file='_layouts/default.html' %}
```html
{% raw %}<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
	<title>{{ page.title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>{% endraw %}
```

Notarás que esto es indéntico a `index.html`, excepto que no hay un tema principal y el contenido de la página se remplaza con una variable {% raw %}`{{ content }}`{% endraw %} que es una variable especial que tiene el valor del contenido renderizado de la página a la que se llama.

Ahora para que `index.html`, `about.md` usen este diseño, puede establecer una variable `layout` en el ***front matter***. El diseño (*layout*) envuelve el contenido de la página, por lo que todo lo que necesitas hacer es:  


{% include code-header.html file='about.md' %}
```markdown
---
layout: default
title: About
---
# Acerca de la página
```