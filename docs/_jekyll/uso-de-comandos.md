---
layout: default
title: "Jekyll - uso de comandos"
categories: ["guía"]
css:
  custom: >-
    strong code { background: #212121; color: #fc5 !important }
    ol li { border-bottom: 1px solid #ccc; margin: 8px 0; padding-bottom: 8px }
    div.language-shell pre { border: 0; border-left: 3px solid #ccc; background: #111; box-shadow: none }
    div.language-shell pre code { border: 0; background: #111; }
    .highlight .err { color: #a5d6ff !important; background-color: transparent !important; }
    .emgithub-file .code-area td.hljs-ln-line { font-size: 18px !important }
    .emgithub-file .code-area pre code.hljs { border: none; background: #191919; border-radius: 0; }
    .emgithub-file { border-radius: 0 !important; border: none; }
---

La gema **jekyll** pone a nuestra disposición un ejecutable para la terminal.

El programa **jekyll** tiene varios comandos pero la estructura es muy simple:

{% include code-header.html %}
```plaintext
jekyll command [argument] [option] [argument_to_option]
```

- `jekyll new PATH --blank`: Crea un nuevo sitio Jekyll en blanco en la ruta especificada.
- `jekyll build || jekyll b`: Realiza una creación única de su sitio en `./_site`.
- `jekyll help`: Muestra ayuda, opcionalmente para un subcomando determinado, por ejemplo `jekyll help build`.
- `jekyll clean`: Elimina todos los archivos generados (carpeta de destino, archivo de metadatos, cachés de Sass y Jekyll)


## Comenzar un proyecto desde 0

Crear un nuevo proyecto en blanco de jekyll

{: .clipboard }
```bash
jekyll new portfolio --blank
```

Al ser un proyecto en blanco, no debería tardar demasiado en crearse y a continuación nos muestra un mensaje de que el proyecto se ha creado:

```text
New jekyll site installed in /home/user/potfolio.
```

Para entonces, podemos entrar al proyecto con el comando `cd`:

{: .clipboard }
```bash
cd portfolio
```

## Añadir Jekyll

Dentro del proyecto usamos **Bundler** para crear un **Gemfile** vacío y luego agregamos Jekyll como dependencia:

{: .clipboard }
```bash
bundle init
bundle add jekyll
```

## Servir el sitio

Ahora ejecutamos **Bundler** para construir el proyecto y servirlo en local:

{: .clipboard }
```bash
bundle exec jekyll serve
```

Por último abrimos el navegador en [`http://127.0.0.1:4000/`](http://127.0.0.1:4000/){:target='_blank' class='link'}:

![img - nuevo_proyecto](assets/nuevo_proyecto.png)


Antes de empezar a ver la estructura de carpeta y contenido de los archivos, es altamente recomendable instalar la siguiente extensión para tener soporte de sintaxis de Liquid. 

Para <abbr title="visual studio code">vs code</abbr>:

![img - extension vs code](assets/extension_sintaxis_vscode.png)

Para <abbr title="Sublime Text">ST3 - ST4</abbr>:

![img - extension st](assets/extension_sintaxis_sublimetext.png)

---

## Estructura del proyecto

Jekyll utiliza el lenguaje de plantilla [`Liquid`](https://shopify.github.io/liquid/){:target='_blank' class='link'} para procesar los templates o plantillas como quieras decirle.

Una buena manera de comenzar a ver todo lo relacionado a las plantilla, es un buen momento para desplegar la carpeta `📁 layouts` y abrir el archivo `default.html`:

![img - liquid layout](assets/explicacion_liquid.png)

Los números indicados se explican a continuación:

1. **`{% raw %}{{ site.lang | default: "en-US" }}{% endraw %}`** : este es un filtro de Liquid para facilitar el valor de la configuración del idioma. Primero buscará si existe un valor definido para la clave `lang` dentro del archivo `_config.yml`.
2. **`{% raw %}{{ site.lang | default: "en-US" }}{% endraw %}`** : este filtro facilita la configuración del título de la página ( pestaña del navegador ). Primero buscará si existe un valor definido en para la clave `title` en el [`front matter`](https://jekyllrb.com/docs/front-matter/){:target='_blank' class='link'} del documento (*página actual*) o cargará el valor que define la clave `title` en el archivo `_config.yml`.
3. **`{% raw %}{{ "/assets/css/main.css" | relative_url }}{% endraw %}`** : este filtro es bastante útil ya que carga el archivo de estilo en caso de que el sitio sea servido en local partiendo desde la raíz del proyecto o si el sitio esta alojado por ejemplo en **github pages** y se muestra desde un repositorio, quiere decir desde una subcarpeta.
4. **`{% raw %}{{ content }}{% endraw %}`** esta es la variable global que va representar el contenido de la publicación o página que se está cargando actualmente.

Lo que tenemos entonces es nuestro contenedor para las páginas o publicaciones que escribamos en un futuro, cuando hemos visitado el sitio por primera vez tenía algo de contenido como un título y un parrado, que no es más que lo siguiente:

![img - default_index](assets/index_root.png)

Como podemos observar el **front matter** es la zona de un documento para indicar que layout vamos a usar, es un sistema bien simple además podemos definir más datos en formato de **clave** - **valor** y usarlo como más nos acomode, en breve vamos a ver más casos para añadir datos en las páginas por ahora entendemos que nuestra página esta cargando el layout predeterminado que se generó cuando creamos el proyecto:

![img - default_layout_index](assets/front_matter_index.png)



---

## Crear un menu de navegación

Ya que hemos visto la explicación sobre la estructura del proyecto, entoces vamos a trabajar el código de HTML que corresponde a la navegación aislado en la carpeta destinada para los parciales `📁 _includes`.

Antes de eso para poder facilitar los estilos para crear la barra de navegación vamos añadir el **CDN de boostrap** al layout principal.

```shell
📂 portfolio
└── 📂 _layouts
    └── default.html # 👈 layout principal
```

Y agregamos lo siguiente:

<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FEniDev911%2Fassets%2Fblob%2Fmain%2Fjekyll%2F_layouts%2Fdefault.html&style=vs2015&type=code&showBorder=on&showCopy=on"></script>


Agregado boostrap. Veamos la disposición para el partial:

```shell
📂 portfolio
└── 📂 _includes
    └── navigation.html # 👈 fragmento reutilizable
```

Y dentro vamos a colocar una navegación simple como la siguiente:

<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FEniDev911%2Fassets%2Fblob%2Fmain%2Fjekyll%2F_includes%2Fnavigation.html&style=vs2015&type=code&showCopy=on"></script>


Ya se que puede resultar complicado entender pero vamos a ilustrar mejor este código vamos explicar por parte:

![img - navigation liquid](assets/navigation_liquid.png)


1. **`{% raw %}{% for item in site.data.navigation %}{% endfor %}{% endraw %}`** : dentro de estas etiquetas estamos iterando sobre un conjunto de datos que están disponibles en `_data/navigation.yml`.
2. **`"{% raw %}{{ item.link }}{% endraw %}"`** : por cada miembro del conjunto estamos creando un enlace y estamos definiendo su atributo `href` con el valor que tiene la clave `link` del item actual.
3. **`{% raw %}{% if page.url == item.link %}{% endif %}{% endraw %}`** : estamos evaluando si la url que de la página actual coincide con la definida el valor de la clave `item.link` y le asignamos un estilo diferente al link visitado actualmente de la navegación.
4. **`{% raw %}{{ item.name }}{% endraw %}`** : estamos mostrando el nombre del enlace que se mostrará en la navegación.

Explicado las etiquetas anteriores, el resto solo es HTML de toda la vida y estilos de bootstrap.

---

## Crear datos para la navegación

Ya teniendo la navegación creada, si visitamos el sitio nos daremos cuenta que aún no se muestra y es por dos razones:

- Debemos crear los datos del menú
- Debemos añadir el partial al layout principal

Ya que hemos visto la explicación sobre las equitas que iteraban sobre un conjunto de datos, pero ese conjunto no lo hemo creado aún y para trabajar con esos datos de forma estructurada debemos desplegar la carpeta destinada para los archivos de datos `📁 _data`.


Antes de eso para poder facilitar los datos para la navegación veamos la disposición para los datos:

```shell
📂 portfolio
└── 📂 _data
    └── navigation.yml # 👈 datos del menu
```

Nuestro menu en un principio tendra los siguientes datos:

{: .clipboard }
```yml
- name: "Home"
  link: /
- name: "About"
  link: about.html
- name: "Proyectos"
  link: projects.html
```

---

## Agregar la nevagación al layout principal

Ahora si volvemos abrir el layour principal y agregamos la etiqueta de Liquid que permitirá renderizar el menú:

```shell
📂 portfolio
└── 📂 _layouts
    └── default.yml # 👈 layout principal
```

<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FEniDev911%2Fassets%2Fblob%2Fmain%2Fjekyll%2F_layouts%2Fdefault1.html%23L12-L18&style=vs2015&type=code&showLineNumbers=on&showCopy=on"></script>

Como se puede observar, si vamos al navegador y actualizamos tendríamos que ver nuestra navegación:

![img - nav1](assets/nav_1.png)

---

## Crear una sección hero

La idea ahora consiste en diseñar el área para el banner ( *hero* ) de la página que se debe colocar entre la navegación y el inicio de su contenido. El banner de la sección hero suele ser algo de texto acompañada de una imagen, pero no tiene por qué serlo. Asi que simplemente crearemos algo donde podamos establecer un título y subtítulo como lo muestra el siguiente concepto:

{:align="center"}
![img - mockup_nav](assets/mockup_hero.png)

Lo primero que haremos es abrir el layout principal para trabajarlo, podríamos perfectamente hacerlo a través de un documento parcial pero eso queda a gusto del consumidor, así que nos ponemos dentro del archivo y agregamos lo siguiente a continuación del **include** de la navegación:

<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FEniDev911%2Fassets%2Fblob%2Fmain%2Fjekyll%2F_layouts%2Fdefault2.html%23L15-L30&style=vs2015&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"></script>

Con esto, podemos poner en marcha la página de **about** para jugar haber se nos muestra el título y subtítulo dinámicamente:

![img - fm-about](assets/fm_about.png)

Si vamos al navegador y actualizamos tendríamos ahora ir a la página de **about** y ver el título y subtítulo:

![img - about](assets/about_w_ti_sub.png)

---

## Separar el contenido del diseño

Generalmente se considera una buena práctica mantener el contenido separado de la lógica y el diseño.

Lograr la separación usando Jekyll es bastante sencillo usando [`colecciones`](https://jekyllrb.com/docs/collections/){:target='_blank' class='link'} ya tenemos nuestra plantilla predeterminada que luego usaremos para inyectar el contenido desde un archivo [**markdown**](https://es.wikipedia.org/wiki/Markdown){:target='_blank' class='link'} aquí se nos abre un sinfín de formas de controlar aspectos del diseño a a partir desde el **front matter** del archivo como por ejemplo el añadir una imagen de fondo por decir algo pero aquí vamos ir a lo fácil y vamos a dejar solo lo justo y necesario para que el portafolio se vea minimalista pero convincente.

Las colecciones en Jekyll son ideales para gestionar el contenido repetido que no está ordenado naturalmente por fechas.

Para nuestro portafolio va ser muy simple ya que el contenido lo divideremos en lo que de aquí en adelante le llamaremos **secciones**, y el contenido de cada sección se agrupará usando una colección de Jekyll que llamaremos con el mismo nombre.

Para comenzar, definimos una colección dentro del archivo `_config.yml`:


{% capture config_yamel %}
{% highlight yml %}
collections:
  sections:
{% endhighlight %}
{% endcapture %}

{% include tabs.html 
  id='config_yamel'
  tab_1='&#95;config.yml'
  bloque_1=config_yamel
%}