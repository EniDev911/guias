---
layout: default
title: Colecciones en Jekyll
categories: ["guía"]
type: "guia"
---


## ¿Qué son las colecciones de Jekyll?

Las colecciones en Jekyll son similares a las publicaciones que creamos en la carpeta `_post`. Entonces, ¿cuál es la diferencia?. Aquí un resumen simple:

- Utilizar **publicaciones** cuando se desea escribir artículos independientes, con fecha de publicación.
- Utilizar **colecciones** cuando se desea agrupar contenido relacionado, que pueda tener su propia página, pero la fecha no es importante.

---

## Crear una colección en Jekyll

Para utilizar una colección, primero debemos definirla en el archivo `_config.yml`. Por ejemplo, aquí una colección de gatos en dos ejemplos distintos:

```yml
collections:
  - gatos
```

```yml
collections:
  gatos:
    output: true
```

> Al definir una colección como una matriz, sus páginas no se representarán de forma predeterminada. Para habilitar esto, se debe especificar `output: true` en la colección.

Ahora podemos agregar documentos detro de la carpeta `_gatos` (*importante el guión bajo al comienzo*).

### Usando las colecciones

Ahora que tenemos nuestra colección configurada, podemos usarla. Para este ejemplo, lo mostraremos en una vista de galería. Para ello creamos un archivo llamado `galeria.html` en la raíz del sitio, con la siguiente portada (*front matter*):

```yml
layout: default
title: Galería
```

Ahora todo lo que tenemos que hacer es recorrer nuestra colección, que se ha convertido en una variable global en `site` en nuestro archivo `_config.yml`. Para comenzar, agregamos el siguiente contenido debajo del *front matter*:

{: .clipboard }
```liquid
{% raw %}{% for gato in site.gatos %}
  <img src="{{ gato.image }}" alt="{{ gato.image_alt }}">
  <span>{{ gato.description }}</span>
{% endfor %}{% endraw %}
```

Ahora podemos ver las imágenes en nuestra galería.

---

## Colecciones como páginas

También es posible generar los elementos de nuestra colección como páginas independientes. Para ello, necesitamos hacer tres cosas:

- Agregar la clave `output: true` dentro de la colección en el `_config.yml`
- Crear una layout para mostrar cada item de la colección
- Cambiar de layout para la colección que desea usar

---


## Agrupar colecciones

Desde la versión `3.7.0` de jekyll es posible almacenar todas las colecciones en un mismo lugar usando la siguiente configuración:

```yml
colecttions_dir: mi_coleccion
```

Estos nos permite organizar nuestras colecciones con la siguiente estructura:

```txt
mi_coleccion/
  _coleccion1/
  _coleccion2/
  _coleccion3/
  _coleccion4/
```