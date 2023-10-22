---
layout: default
title: "Paginación"
---


En muchos sitios web, especialmente en blogs, es muy común dividir la lista principal de publicaciones en listas más pequeñas y mostrarlas en varias páginas. Jekyll ofrece un complemento de paginación, para que pueda generar automáticamente los archivos y carpetas apropiados que necesita para los listados paginados.


Para Jekyll 3, incluir el complemento `jekyll_paginate` en el `Gemfile` y en el archivo `_config.yml`.

> **La paginación solo funciona dentro de archivos HTML**  
> La paginación no funciona desde archivos Markdown del sitio Jekyll. La paginación funciona cuando se llama desde un archivo HTML, llamado `index.html`, que opcionalmente puede residir y producir paginación desde dentro de un subdirectorio, a través del valor de configuración de `paginate_path`.