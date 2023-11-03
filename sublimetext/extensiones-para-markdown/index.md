---
layout: default
title: "Extensiones para markdown"
css:
  custom: |-
    strong { color: peru }
    thead { background: #000; border: 1px solid #AAA }
    tbody { border: 1px solid #AAA }
    tbody tr:hover { background: #000;}
---

![markdown](https://img.shields.io/badge/markdown-%23000000.svg?logo=markdown&logoColor=white)
[![sublimetext](https://img.shields.io/badge/sublime_text-%23575757.svg?logo=sublime-text&logoColor=important)](https://www.sublimetext.com/){:target='_blank'}


## Instalar MarkdownEditing

Recien instalado, SublimeText no ofrece ningún soporte específico de Markdown, **sin resaltado de sintaxis y formato especial en cursiva o negrita**, **atajos de teclado** además **sin vista previa de salida HTML**.

Para agregar estas características debemos instalar algunos complementos *plugins* y configurar algunas preferencias siguiendo estos pasos:  


**1)** Abrimos **package control** (<kbd>Crtl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd>) luego escribimos **install** y seleccionamos la opción ***Install Package***

![img - install-package](./assets/install_package.png)


**2)** Escribir el nombre del paquete, en este caso tiene el nombre de ***MarkdownEditing***

![img - install-package](./assets/markdown_editing.png)


**3)** Reinicia ***SublimeText***


>**Nota:** Posiblemente al instalarlo te encuentres con una ventana emergente de error como la siguiente:  
![img - Error](assets/error.png)  
Esto se debe que cuando se descarga la extensión te cargará automaticamente el archivo README.MD del mismo paquete instalado, por lo que de manera inmediata te arrojará este error, por otro lado, para poder evitar este mensaje de error es muy sencillo, vamos a buscar en la barra del menú debemos abrir **Preferences** =\> **Settings**, y quitamos Markdown de la lista en **"ignored_packages"** en las Preferencias del usuario:


Editamos `Preferences.sublime-settings -- User`:

```js
{
"ignored_packages":
  [
    "Markdown", // 👈 sacar de esta lista 
    "Vintage",
  ]
 }
```


Despues de reiniciar Sublimetext, todas las funciones del paquete MarkdownEditing se aplicarán solo a los archivos con extensión `.md y .markdown`.


<a href="#top">![](https://img.shields.io/badge/Volver%20al%20contenido-%E2%86%A9-orange?style=for-the-badge)</a>

---

## Características de MarkdownEditing

El paquete contiene algunos esquemas de colores para los archivos Markdown en el editor y proporciona **formato en línea de Markdown**. Eso significa negritas, editor de título, cursivas para palabras envueltas en los simbolos de asteriscos `<**>`. Los textos con las reglas marcadas para las citas de bloque y el código fuente también se sombrearán de manera diferente. Manejará inteligentemente listas de viñetas y listas numeradas con solo presionar la tecla <kbd>Enter</kbd>, lo que puede ahorrarle mucho tiempo al escribir asi como incluirá los **cierres automáticamente de comillas dobles** **`<">`**, **paréntesis** **`<( )>`**, **guiones bajos** **`<_>`**, astericos **`<*>`**, etc.  

Para seleccionar un esquema de colores que este paquete incorpora, podemos cambiarlo seleccionando otro esquema desde el  menú **Preferences** =\> **Packages Settings** =\> **Markdown Editing** =\> **Change color scheme...**

### Capturas

<div style="display: flex; flex-flow: row no-wrap; gap: 10px; justify-content: center;">
	<p>
	  <b>ArcDark</b><br>
	  <img src="assets/mde_arcdark.png" alt="img - ArcDark scheme" height="200" width="200"/>
	</p>
	<p>
	  <b>Dark</b><br>
	  <img src="assets/mde_dark.png" alt="img - Dark scheme" height="200" width="200"/>
	</p>
	<p>
	  <b>Focus</b><br>
	  <img src="assets/mde_focus.png" alt="img - Focus scheme" height="200" width="200"/>
	</p>
	<p>
	  <b>Yellow</b><br>
	  <img src="assets/mde_yellow.png" alt="img - Yellow scheme" height="200" width="200"/>
	</p>
</div>

---

## Atajos de teclado de MarkdownEditing &#9875;

|Combinación|Descripción|
|:---------:|-----------|
|<kbd>Alt</kbd>+<kbd>b</kbd>|Escribir el texto en negrita.|
|<kbd>Alt</kbd>+<kbd>i</kbd>|Escribir el texto en italica.|
|<kbd>Alt</kbd>+<kbd>t</kbd>|Crea una nueva lista de tareas (GFM).|
|<kbd>Alt</kbd>+<kbd>x</kbd>|Marca como realizada la tarea actual (GFM).|
|<kbd>Shift</kbd>+<kbd>Enter</kbd>|Anidar lista de tareas (GFM), luego se repite la combinación <kbd>Alt</kbd>+<kbd>t</kbd>|
|<kbd>Shift</kbd>+<kbd>tab</kbd>|Desanidar listas.|
|<kbd>Ctrl</kbd>+<kbd>d</kbd>|Selecciona la palabra en el cursor, luego presiona el asterísco(\*) se convierte en italic si le das dos veces se convierte en bold.|


<a href="#top">![](https://img.shields.io/badge/Volver%20al%20contenido-%E2%86%A9-orange?style=for-the-badge)</a>

---

## Visualizar archivos de Markdown en el navegador &#9875;

Ya tenemos instalada la extensión que nos provee la edición de archivos Markdown en SublimeText, esta extensión no tiene forma de ver nuestro archivo específico de Markdown en el navegador. Para ello debemos de instalar otro complemento que es fundamental para la previsualización en el navegador de nuestros archivos Markdown, el complemento lo buscamos con el nombre de **MarkdownPreview** y nos ayudará para obtener una vista previa en el navegador de nuestros archivos Markdown.


**1)** Abrimos **package control** (<kbd>Crtl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd>) luego escribimos **install** y seleccionamos la opción ***Install Package***

![img - install-package](./assets/install_package.png)


**2)** Escribir el nombre del paquete, en este caso tiene el nombre de ***MarkdownPreview***


![img - markdown-preview](./assets/markdown_preview.png)


**3)** Renicia ***SublimeText***.


---

## Configurar un atajo para la previsualización

Para aprovechar su capacidad podemos configurar un atajo de teclado de la siguiente manera:

Vamos a **Preferences** =\> **Key Bindings - User** y añadimos entre los corchetes lo siguiente.

```json
{ 
  "keys": ["alt+m"], 
  "command": "markdown_preview", 
  "args": {
    "target": "browser", 
    "parser":"markdown"
  } 
}
```

>El atajo lo puedes cambiar remplazando el valor dentro de `["alt+m"]`

Guardamos cambios con <kbd>CTRL</kbd> + <kbd>S</kbd>

