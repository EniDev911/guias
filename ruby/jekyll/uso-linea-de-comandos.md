---
layout: default
title: "Uso de líne de comandos"
css:
  custom: >-
    strong { color:  #d44; }
---

La gema **jekyll** pone a nuestra disposición un ejecutable para la terminal.

El programa **jekyll** tiene varios comandos pero la estructura es muy simple:

{% highlight shell %}
jekyll command [argument] [option] [argument_to_option]
{% endhighlight %}

- `jekyll new PATH --blank`: Crea un nuevo sitio Jekyll en blanco en la ruta especificada.
- `jekyll build || jekyll b`: Realiza una creación única de su sitio en `./_site`.
- `jekyll help`: Muestra ayuda, opcionalmente para un subcomando determinado, por ejemplo `jekyll help build`.
- `jekyll clean`: Elimina todos los archivos generados (carpeta de destino, archivo de metadatos, cachés de Sass y Jekyll)