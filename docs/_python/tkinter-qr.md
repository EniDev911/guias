---
layout: default
title: "Código QR en Tkinter"
categories: ["tutorial"]
---


## Librerías necesarias

Hay muchas librerías disponibles en Python para generar códigos QR. Sin embargo la razón para optar po `pyqrcode` es la imagen en formato **.xbm** que se puede integrar fácilmente con Tkinter, por lo que no es necesario guardar la imagen primero y luego mostrarla. Aunque de igual manera podemos guardar la imagen en el sistema local usando la biblioteca `pypng`.

{% include code-header.html %}
```bash
pip install pyqrcode
```

Para guardar la imagen en formato **.png**, es necesario instalar `pypng`:

{% include code-header.html %}
```bash
pip install pypng
```

## Generar código QR

{% include code-header.html %}
```py
my_qr = pyqrcode.create('my_url')
my_qr = my_qr.xbm(scale=10)
my_img = tk.BitmapImage(data=my_qr)
```

Para usar `my_img` dentro de un widget **Label** para mostrar el código QR generado (no se almacena la imagen en el sistema local):

{% include code-header.html %}
```py
l1.config(image=my_img)
```


## Guardar QR

### Guardar como archivo SVG

Podemos guardar la imagen (código QR) en formato (SVG):

{% include code-header.html %}
```py
my_qr.svg('path/to/my_qr.svg', scale=8)
```

### Guardar como archivo PNG

Aquí como se mencionaba, es necesario instalar la librería de `pypng` para guardar la imagen (PNG) en el sistema de archivos local:

{% include code-header.html %}
```py
my_qr.png(
	'path/to/my_qr.svg',
	scale=6,
	module_color=[0, 0, 0, 128],
	background=[0xff, 0xcc, 0xcc]
	)
```


