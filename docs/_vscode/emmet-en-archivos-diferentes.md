---
layout: default
title: 'Configurar emmet en otro tipo de archivos'
---


En las configuraciones buscamos el icono para abrir el archivo **JSON** de las configuraciones y agregamos las siguientes líneas:


### Para archivos `.erb`:

{% include code-header.html file='settings.json' %}
```json
"emmet.includeLanguages": {
    "erb": "html"
}
```


