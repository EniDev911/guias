---
layout: default
title: "Tutorial Reportlab"
categories: ["tutorial"]
---

### Instalación de Reportlab

Para utilizar Reportlab, basta con instalarlo mediante pip:

{% include code-header.html %}
```bash
pip install reportlab
```

Cuando crea una nueva instancia de `canvas`, debemos proporcionar el nombre del archivo PDF que se está creando:

{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas

canvas = Canvas("hello.pdf")
```

### Escribir en el documento

Ahora que tenemos una instancia de `Canvas` que se le ha asignado a la variable `canvas` y que está asociado con un nombre de archivo que se generará en nuestro directorio de trabajo actual cuando lo guardemos.

Para agregar algo de texto al archivo PDF, usamos el método `.drawString()`, como se muestra a continuación:

{% include code-header.html %}
```python
canvas.drawString(72, 72, "Hello World!")
```

### Guardar documento

Para guardar el PDF en un archivo, utilizamos el método `.save()`:

{% include code-header.html %}
```python
canvas.save()
```

Hay algunos puntos a tener en cuenta sobre el archivo PDF que se acaba de crear:

- El tamaño de página predeterminado es A4, que no es el mismo que el tamaño de página carta estándar de EE. UU.
- La familia de fuentes por defecto es Helvetica con un tamaño de 12 puntos.

### Configuración del tamaño de página

Cuando se crea una instancia de `Canvas`, puede definir el tamaño de la página con el argumento opcional `pagesize`. Este parámetro acepta una tupla de valores de punto flotante que representan el ancho y alto de la página en puntos.

Por ejemplo, para establecer el tamaño de página en 8.5 pulgadas por 11 pulgadas de alto sería de la siguiente forma:

{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas

canvas = Canvas("hello.pdf", pagesize=(612.0, 792.0))
```

La tupla `(612.0, 792.0)` representa una hoja de tamaño carta.