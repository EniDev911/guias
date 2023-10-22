---
layout: default
title: "Entornos virtuales con pipenv"
css:
  custom: >-
    strong { color: #7FA3AE}
---


<img src="https://badges.aleen42.com/src/python.svg" alt="badge python" height="50">

<a name="top"></a>

- ### CONTENIDO
	+ [¿Qué es?](#que-es)
	+ [Cambiar directorio de los entornos al crearlo](#cambiar-destino-pipenv)
	+ [Instalación](#instalacion)
	+ [Crear un entorno virtual](#crear-entorno-virtual)
	+ [Instalar paquetes](#install_package)
	+ [Eliminar paquetes](#uninstall_package)
	+ [Archivo Pipfile](#pipfile)
	+ [Desactivar un entorno virtual](#exit)
	+ [Ejecutar un script](#run_script)


---

<a name="que-es"></a>
## ¿Qué es Pipenv?
**Pipenv** es una herramienta que a punta a traer lo mejor del mundo de empaquetado.

Automáticamente crea y maneja un entorno virtual para tus proyectos, también como agregar/remover paquetes desde tu archivo **Pipfile.lock**, que es usado para producir un determinado build.

Pipenv está destinado principalmente a proporcionar a usuarios y desarrolladores de aplicaciones un metodo sencillo para configurar un entorno de trabajo.

---

<a name="cambiar-destino-pipenv"></a>
## Cambiar el directorio de destino de Pipenv

Por defecto, Pipenv guarda todos sus entornos virtuales en un solo lugar. Usualmente esto no es un problema, pero si te gustaría cambiarlo para comodidad de desarrollo, o si esta causando *issues* en servidores de construcción puedes setear la variable de entorno **`PIPENV_VENV_IN_PROJECT`** para crear un entorno virtual dentro de la raíz de tu proyecto.

---

## Cambiando la versión por defecto de Python
 
Por defecto, Pipenv inicializará un proyecto usando cualquier versión de python que tenga python3. Además de iniciar un proyecto con las banderas ``--three`` o ``--two``, también puedes setear la variable PIPENV_DEFAULT_PYTHON_VERSION para especificar cual versión usa cuando se inicie un proyecto.

--- 

<a name="instalacion"></a>
## Instalación


[![PyPi](https://badgen.net/badge/icon/pypi?icon=pypi&label)](https://pypi.org/project/pipenv/)

{: .clipboard }
{% highlight bash %}
pip install --user pipenv
{% endhighlight %}

>**Nota**: Esto se hace para prevenir romper cualquier paquete de sistema. Si **pipenv** no esta disponible en tu shell después de la instalación, vas a necesitar agregar la carpeta raiz de binarios del usuario a tu **PATH** en mi caso `C:\Users\home\AppData\Roaming\Python\Python38\Scripts`

---

<a name="crear-entorno-virtual"></a>
## Crear un entorno virtual con Pipenv

Crea un entorno virtual con la versión 3 de Python:

{: .clipboard }
{% highlight bash %}
pipenv --three
{% endhighlight %}

Crea un entorno virtual con la versión 2 de Python (debe tener instalado en su sistema python 2.x)

{: .clipboard }
{% highlight bash %}
pipenv --two
{% endhighlight %}


Activar un entorno virtual (si no existe, lo crea en el directorio actual) 

{: .clipboard }
{% highlight bash %}
pipenv shell
{% endhighlight %}

---

<a name="exit"></a>
## Salir de un entorno virtual activo de Pipenv

Salir del entorno virtual previamente activado:

{: .clipboard }
{% highlight bash %}
exit
{% endhighlight %}

---

<a name="install_package"></a>
## Instalar paquetes

{: .clipboard }
{% highlight bash %}
pipenv install requests
{% endhighlight %}


---

### <a name="uninstall_package"></a>Eliminar un paquete - o eliminar todos los paquetes


```bash
pipenv uninstall django
#o 
pipenv uninstall--all
```

---

### <a name="pipfile"></a>Pipfile

```
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[dev-packages]

[packages]
django = "*"

[requires]
python_version = "3.5"
```

- **source**:  nos muestra el enlace de donde se descargan los paquetes.
- **dev-packages**: aquí se registran las librerías solo para desarrollo.
- **packages**: aquí se registran todos los paquetes requeridos para el proyecto, cuando instalemos los paquetes con el comando : `pipenv install` se descarán los paquetes que fueron leidos en esta sección.

También puedes hacer esto:

{: .clipboard }
{% highlight bash %}
pipenv install -e
{% endhighlight %}

>Esto le dirá a Pipenv para hacer lock a todas tus dependencias declaradas en tu setup.py.

Instalar las dependencias de un archivo **Pipfile**

{: .clipboard }
{% highlight bash %}
pipenv install
{% endhighlight %}

---

<a name="run_script"></a>
## Ejecutando un script usando pipenv run:


{: .clipboard }
{% highlight bash %}
pipenv run python main.py
{% endhighlight %}

También para evitar escribir el comando tan largo podemos activar el entorno virtual simplemente con: 

```bash
pipenv shell
# ahora ejecutar el archivo
python main.py
```
