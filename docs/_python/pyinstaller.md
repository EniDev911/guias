---
layout: default
title: "Empaquetar Aplicaciones con PyInstaller"
---

## ¿Qué es PyInstaller?

PyInstaller es una herramienta de código abierto que toma los scripts de Python y todas sus dependencias, las empaqueta en un solo archivo ejecutable y crea una distribución independiente. Esto significa que ouedes distribuir tu programa o aplicación de Python sin necesidad de que los usuarios tengan Python instalado en sus sistemas.


### Instalar PyInstaller

Para comenzar, asegúrate de tener PyInstaller instalado en tu sistema. Si aún no lo tienes, podemos hacerlo con pip:

{% include code-header.html %}
```bash
pip install pyinstaller
```

### Ejecutar PyInstaller

{% include code-header.html %}
```bash
pyinstaller --onefile my_app.py
```

Esconder la consola del interprete:

{% include code-header.html %}
```bash
pyinstaller --onefile app.py --windowed
```

### Opciones específicas de Windows

`-w, --windowed, --noconsole`
: Esta opción oculta la ventana de la consola de fondo.

`-i, --icon`
: Aplica un ícono al ejecutable:

{% include code-header.html %}
```bash
pyinstaller --icon='path/to/icon' app.py
```

### Empaquetar íconos en un archivo ejecutable

Si nuestra aplicación solo tiene como objetivo sistemas Windows, entonces empaquetar los íconos en el ejecutable es muy sencillo porque Tkinter soporta cargar íconos directamente desde archivos ejecutables (.exe) usando el método `iconbitmap()`, podemos usar el siguiente código para cargar en la ventana de la aplicación el ícono empaquetado dentro del archivo ejecutable de Windows:

{% include code-header.html %}
```python
import sys, tkinter as tk

root = tk.Tk()
root.iconbitmap(sys.executable)

root.mainloop()
```

A continuación convertimos el programa en un ejecutable:

{% include code-header.html %}
```txt
pyinstaller --icon=icon.ico --windowed app.py
```
{: .language-cmd }