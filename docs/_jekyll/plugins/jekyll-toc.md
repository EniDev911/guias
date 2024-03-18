---
layout: default
title: Tabla de contenido en Jekyll
categories: ['plugin']
---

Este complemento está escrito completamente en [Liquid](https://shopify.github.io/liquid/) y puedes usarlo a través de un {% raw %}`{% include %}`{% endraw %}.

## Uso

1. Descargar el archivo [toc.html](https://github.com/allejo/jekyll-toc/releases/download/v1.2.1/toc.html).
2. Movemos ese archivo a la carpeta `_includes`.
3. Usamos en el layout que accedemos a la variable global {% raw %}`{{ content }}`{% endraw %}.

{% include code-header.html %}
```liquid
{% raw %}{% include toc.html html=content %}{% endraw %}
```
