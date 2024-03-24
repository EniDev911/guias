---
layout: default
title: Configurar ícono en Tkinter
---

En Tkinter podemos usar los siguiente métodos para configurar íconos para las ventanas:

- `iconbitmap()`
- `iconphoto()`

### Iconbitmap

En Windows podemos recurrir al método `iconbitmap()` para establecer el ícono de la ventana a partir de un archivo con extensión `.ico`. Este formato de Microsoft es más practico porque permite tener múltiples imágenes de diversos tamaños (16x16, 32x32, 64x64, etc.) incluidos en un solo archivo `.ico`.

> algunos programas como [Greenfish Icon Editor](http://greenfishsoftware.org/gfie.php) (Gratuito) permiten editar los archivos `.ico`
{: .prompt-info }

Así, por ejemplo, el siguiente código establece el archivo `icon.ico` como ícono de la ventana:

{% include code-header.html %}
```python
import tkinter as tk

root = tk.Tk()
root.iconbitmap('icon.ico')

root.mainloop()
```

### Iconphoto

Si tenemos el ícono de nuestra aplicación, la forma más sencilla de configurarlo en la ventana es con `iconphoto()`:

{% include code-header.html %}
```py
import tkinter as tk

root = tk.Tk()
icono = tk.PhotoImage(file="icon-16.png")
root.iconphoto(True, icono)

root.mainloop()
```

>  El primer argumento de `iconphoto` es un booleano que indica si ese mismo ícono debe aplicarse a ventanas secundarias.
{: .prompt-info }