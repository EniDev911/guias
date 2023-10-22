---
layout: default
title: "Front matter"
num: 5
---


El `Front Matter` es un fragmento de [YAML](https://yaml.org/) que se encuentra entre dos líneas de tres guiones (*-*) en la parte superior de un archivo. Una de las cosas que podemos establecer en este fragmento son variables para página, por ejemplo:  

```
---
num: 5
---
```

Estas variables preliminares están disponibles en Liquid en la variable **page**. Por ejemplo, para generar la variable anterior, usaría:  

```liquid
{% raw %}{{ page.num }}{% endraw %}
```


### render_with_liquid

Dentro los bloques para interpretar sintaxis de **Liquid** debemos hacerlo a través de etiquetas {`% raw %`} {` % endraw %`}, pero si establecemos la opción `render_with_liquid: false` podemos deshabilitar **Liquid** por completo para un documento en particular. 


````markdown
---
layout: default
render_with_liquid:  false
---
````

### Utilizar la materia prima

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