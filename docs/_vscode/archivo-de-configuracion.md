---
layout: default
title: Archivo de configuración
---

El editor de configuración es la interfaz de usuario que permite revisar y modificar los valores de configuración que se almacenan en el archivo `setting.json`.

Podemos revisar y editar este archivo directamente, abriendo desde la barra lateral, las configuraciones:

![img - settings](https://enidev911.github.io/fullstackjsg33/src/guides/vs-code/use-guide/assets/img/file/settings1.png)

![img - settings2](https://enidev911.github.io/fullstackjsg33/src/guides/vs-code/use-guide/assets/img/file/open_settings_json.png)

Dentro podemos modificar algunos parámetros directamente en el archivo **JSON**, su estructura es muy simple, en la columna izquierda van las opciones y en la derecha se asigna el valor para esa opción:

![img - settings3](https://enidev911.github.io/fullstackjsg33/src/guides/vs-code/use-guide/assets/img/file/settings_json1.png)


### Abrir el archivo JSON

Si prefiere trabajar directamente siempre sobre el archivo settings.json, podemos establecer la siguiente modificación en el archivo de configuración:

{% include code-header.html file='settings.json' %}
```json
"workbench.settings.editor": "json"
```

### Formato

{% include code-header.html file='settings.json' %}
```json
"editor.formatOnPaste": true
```

{% include code-header.html file='settings.json' %}
```json
"editor.formatOnSave": true
```

{% include code-header.html file='settings.json' %}
```json
"editor.formatOnType": true
```

### Fuentes

{% include code-header.html %}
```json
{
	"editor.cursorStyle": "line-thin", 
	"editor.cursorBlinking": "blink",
	"editor.hideCursorInOverviewRuler": true,
}
```

