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
pyinstaller –onefile app.py –windowed
```