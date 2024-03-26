---
layout: default
title: "Tutorial Reportlab"
categories: ["tutorial"]
image_path: '/assets/images/python/reportlab'
---

Reportlab es un conjunto de herramientas (*toolkit*) de código abierto para crear documentos PDF usando Python. Es una librería con muchas funciones, desde simples textos y figuras geométricas hasta grandes gráficos e ilustraciones.


Para utilizar Reportlab, basta con instalarlo mediante pip:

{% include code-header.html %}
```bash
pip install reportlab
```

## Crear una instancia de canvas

Cuando crea una nueva instancia de `canvas`, debemos proporcionar el nombre del archivo PDF que se está creando y estará asociado:

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

Como habrás adivinado, los dos primeros argumentos que se pasan a `.drawString()` corresponden a los ejes (**x**, **y**) para indicar la posición en la que aparecerá el texto. A diferencia de la mayoría de los librerías, en Reportlab el origen de las coordenadas (es decir, la posición (0, 0)) está en la parte inferior izquierda.

> Recuerda que las coordenadas son invertidas. Por lo que posicionar un texto en la esquina superior izquierda debemos conocer el tamaño de alto del documento.
{: .prompt-info }

Dicho esto, es fundamental saber cuáles son las medidas de cada hoja a la hora de generar el documento. El alto y el ancho corresponden a las medidas estándar A4, que se utilizan de forma predeterminada al instanciar un `Canvas`. Una hoja A4 se compone de **595,2** puntos de ancho (*width*) y **841,8** puntos de alto (*height*).

Entonces si quisieramos posicionar un texto en la parte superior izquierda con un margen de 50 puntos, tendríamos que hacer lo siguiente:

{% tabs ex_reportlab2 %}
{% tab ex_reportlab2 python %}
{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas

canvas = Canvas('hello-world.pdf')
canvas.drawString(50, 791.8, "Hello world")

canvas.save()
```
{% endtab %}
{% tab ex_reportlab2 resultado %}
![img - helloworld_pdf]({{ page.image_path | relative_url }}/hello-world-left-top.png)
{% endtab %}
{% endtabs %}


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

La tupla `(612.0, 792.0)` representa una hoja de tamaño carta. Sin embargo Reportlab proporciona el módulo `reportlab.lib.pagesizes` para obtener las dimensiones de otros estándares, como el carta (*letter*):

Veamos el siguiente código:

{% include code-header.html %}
```python
from reportlab.lib.pagesizes import A4, letter

print(letter) # (612.0, 792.0)
print(A4) # (595.2755905511812, 841.8897637795277)
```

Así, para crear un documento para tamaño carta, haríamos lo siguiente:

{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import letter


canvas = Canvas("hello-world.pdf", pagesize=letter)
```

Ahora que conocemos el alto y el ancho de nuestra hoja, podemos usarlo para calcular diferentes posiciones dentro de ella. Por ejemplo, para escribir el ejemplo de poner el texto en la esquina superior izquierda con márgenes de aproximadamente 50 puntos sería más fácil:

{% include code-header.html %}
```python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen.canvas import Canvas

w, h = letter

canvas = Canvas("hello-world.pdf", pagesize=letter)
canvas.drawString(50, h - 50, "Hello World")
canvas.save()
```

---

### Formas y líneas geométricas

Reportlab permite dibujar líneas, rectángulos, círculos y otras figuras de forma sencilla.


#### Dibujar recta

Por ejemplo para dibujar una recta llamamos al método `.line()` indicando la posición de los dos puntos del segmento (**x1**, **y1**, **x2**, **y2**):

{% tabs ex_drawline %}
{% tab ex_drawline python %}
{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import letter

canvas = Canvas("draw_line.pdf", pagesize=letter)

w, h = letter

x = 50
y = h - 50

canvas.line(x, y, x + 200, y)
canvas.save()
```
{% endtab %}
{% tab ex_drawline resultado %}
![img - helloworld_pdf]({{ page.image_path | relative_url }}/draw-line.png)
{% endtab %}
{% endtabs %}

#### Dibujar rectángulo

Para dibujar un rectángulo llamamos al método `.rect()` indicando la posición en puntos y además el ancho y alto de la figura (`rect(x, y, width, height)`):

{% tabs ex_drawrect %}
{% tab ex_drawrect python %}
{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import letter

canvas = Canvas("draw_rect.pdf", pagesize=letter)

w, h = letter

x = 50
y = h - 250

canvas.rect(x, y, 300, 200)
canvas.save()
```
{% endtab %}
{% tab ex_drawrect resultado %}
![img - helloworld_pdf]({{ page.image_path | relative_url }}/draw-rect.png)
{% endtab %}
{% endtabs %}


#### Dibujar rectángulo con borde redondiado

Para dibujar un rectángulo con borde es similar al método `.rect()` sólo que aquí llamamos al método `.roundRect()` indicando un quinto argumento que define el radio por el cual se curvan los extremos (`rect(x, y, width, height, radius)`):

{% tabs ex_drawroundrect %}
{% tab ex_drawroundrect python %}
{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import letter

canvas = Canvas("draw_roundRect.pdf", pagesize=letter)

w, h = letter

x = 50
y = h - 250

canvas.roundRect(x, y, 300, 200, 30)
canvas.save()
```
{% endtab %}
{% tab ex_drawroundrect resultado %}
![img - helloworld_pdf]({{ page.image_path | relative_url }}/draw-roundRect.png)
{% endtab %}
{% endtabs %}

#### Dibujar círculo

En el caso de los círculos se indica la posición del centro seguido del radio (`circle(x, y, radius)`):

{% tabs ex_drawcircle %}
{% tab ex_drawcircle python %}
{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import letter

canvas = Canvas("draw_circle.pdf", pagesize=letter)

w, h = letter

x = 150
y = h - 150

canvas.circle(x, y, 100)
canvas.save()
```
{% endtab %}
{% tab ex_drawcircle resultado %}
![img - helloworld_pdf]({{ page.image_path | relative_url }}/draw-circle.png)
{% endtab %}
{% endtabs %}

#### Dibujar elipse

En el caso de los elipses los argumentos son similares a los de las líneas o recta indicando la posición de los dos puntos del segmento (`ellipse(x, y, x2, y2)`):

{% tabs ex_drawellipse %}
{% tab ex_drawellipse python %}
{% include code-header.html %}
```python
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import letter

canvas = Canvas("draw_ellipse.pdf", pagesize=letter)

w, h = letter

x = 50
y = h - 50

canvas.ellipse(x, y, x + 200, y - 100)
canvas.save()
```
{% endtab %}
{% tab ex_drawellipse resultado %}
![img - helloworld_pdf]({{ page.image_path | relative_url }}/draw-ellipse.png)
{% endtab %}
{% endtabs %}

---

### Estilos

Hasta ahora, tanto el texto como las figuras que hemos dibujado han utilizado los estilos por defecto (básicamente colores blanco y negro)