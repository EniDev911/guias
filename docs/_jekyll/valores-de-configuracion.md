---
layout: default
title: Configuración
---

Jekyll brinda mucha flexibilidad para personalizar la forma en que se construye el sitio. Estas opciones se pueden especificar en un archivo `_config.yml` o `_config.toml` ubicado en el dirtectorio raíz del proyecto, o se pueden especificar como indicadores como argumentos en la terminal cuando se invoca al ejecutable **jekyll**.


## Opciones de configuración

### Opciones globales

|Configuración|Descripción|Opción|Bandera|
|-------------|-----------|------|-----|
|**Fuente del sitio**|Cambiar el directorio donde Jekyll leerá archivos|`source: DIR`|`-s, --source DIR`|
|**Destino del sitio**|Cambiar el directorio donde Jekyll escribirá archivos|`destination: DIR`|`-d, --destination DIR`|
|**Seguro**|Deshabilite los complementos que no están en lista blanca|`safe: BOOL`|`--safe`|