---
layout: default
title: "DB Browser para Sqlite"
categories: ["guía"]
image_path: '/assets/images/sqlite/dbbrowser'
---

DB Browser es un software útil, gratis de código abierto que se puede utilizar para administrar, procesar y explorar bases de datos SQLite.


## Crear una base de datos

Para crear una base de datos es muy sencillo, sólo debemos realizar dos pasos:

![img - new database]({{ page.image_path | relative_url }}/new-database.png)

1. Presionar el botón de nueva base de datos.
2. Elegir el destino donde se almacenará el archivo de la base de datos y dar un nombre.

---

## Crear tabla en la base de datos

Una vez creamos una base de datos inmediatamente nos permite crear una primera tabla:

![img - new table]({{ page.image_path | relative_url }}/new-table.png)

1. Debemos establecer el nombre para la tabla.
2. Añadir nuevas columnas para la tabla actual.

Cuando añadimos una nueva columna se nos va añadir el recuadro de columnas:

![img - columns]({{ page.image_path | relative_url }}/columns.png)

Seguido debemos ir agregando las columnas necesarias y por último crear la tabla:

![img - columns]({{ page.image_path | relative_url }}/create-table.png)

1. Tenemos 3 columnas para la tabla; nombre, apellido, celular. Cada una de ella de tipo texto con longitudes limitadas.
2. El código SQL generado en relación a las acciones anteriores.
3. Al darle clic en aceptar se crea la tabla en el archivo de base de datos.

---

## Agregar filas e insertar

Si observamos la pestaña examinar (*Browse data*) podremos ver los encabezados de las columnas entre otras cosas como las siguientes:

![img - browse-dara]({{ page.image_path | relative_url }}/browse-data.png)

1. La ruta del archivo de base de datos que estamos conectado.
2. La pestaña del explorador de datos.
3. La barra de herramientas para manipular la tabla que seleccionamos.
4. El área de donde se presentan los datos contenido en las tablas.

Para insertar un nuevo registro, tenemos que ver lo siguiente:

![img - nre record]({{ page.image_path | relative_url }}/insert-new-record.png)

1. El botón que permite añadir un nuevo registro.
2. Por defecto se presenta una fila con valores NULL, valores que podemos editar directamente dando clic en cada casilla.
3. El área para editar las celdas además nos da la posibilidad de importar, exportar y previsualizar la información que queramos ingresar.

Una vez ingresada la información en cada celda, la base de datos actualizará la tabla con el nuevo registro y sino podemos siempre actualizar los cambios presionando el boton de **escribir cambios** (*write changes*) o usar el atajo de teclado <kbd>CTRL</kbd> + <kbd>S</kbd>.


---

## Importar

Para importar, tenemos que tener una fuente de datos que puede ser desde un archivo **CSV** o **SQL**, para empezar importaremos desde un [archivo CSV que puedes ver aquí](https://raw.githubusercontent.com/EniDev911/assets/main/csv/csv_Banco.csv){:target='_blank' class='link'} y descargarlo usando el atajo <kbd>CTRL</kbd> + <kbd>S</kbd>. Luego en DB Browser creamos una nueva base de datos o abrimos una existente para después en el menú seleccionar la opción importar desde un archivo CSV:

{:align='center'}
![img - import csv]({{ page.image_path | relative_url }}/import-csv.png){:height='500'}

Luego tenemos que revisar las opciones que vienen marcadas y ajustarlas de acuerdo al formato específico del archivo cargado:

{:align='center'}
![img - import csv]({{ page.image_path | relative_url }}/preview-data-csv.png)

1. Aquí en esta área se configura las opciones del formato:
	- el nombre de la tabla, por defecto pone el nombre del archivo que se carga.
	- Habilita los nombres de la columnas, en la mayoría de los casos debe estar activado.
	- El separador de campo, debemos verificar que sea el correcto (el previsualizador nos ayuda mostrando las filas como corresponde).
	- El forma de codificación.
	- Limpia las celdas de espacios blancos que pueda encontrar al comienzo y al final.
2. Presenta los primeros 19-20 registros del archivo.
3. Se crea la tabla con toda la información con todos los registros que tenga el archivo.

---

## Exportar

DB Browser también nos permite exportar tablas que tengamos en la base de datos a distintos formatos como **SQL**, **CSV**, **JSON** asi como para importar desde otra fuente, debemos ir a menú y seleccionar la opción exportar (debemos tener una conexión a un archivo de base de datos previamente):

{:align='center'}
![img - export as json]({{ page.image_path | relative_url }}/export-as-json.png){:height='500'}

Como podemos observar tenemos la opción para exportar a **JSON**, seleccionamos la opción y a continuación debemos considerar lo siguiente:

{:align='center'}
![img - options export as json]({{ page.image_path | relative_url }}/options-export-json.png){:height='400'}

1. Seleccionar las tablas que queremos exportar.
2. Habilita un formato legible, de lo contrario lo comprime en una sola línea.
3. Al dar guardar, nos abrirá una modal para seleccionar el destino del archivo.

---

## Crear vistas

En caso de que no sepas que es una vista, una vista simplemente es un conjunto de resultados de una consulta almacenada. Una vista es la forma de empaquetar una consulta en un objeto con nombre almacenado en la base de datos.

Esta tarea es un poco más avanzada que lo que hemos anteriormente sobre DB Browser, sin embargo aplicando algunos pasos bien sencillos podemos lograr crear vistas sin problemas. Vamos a trabajar el el área de explorador de datos (*browse data*) y seleccionaremos la tabla que tengamos más registros y aplicaremos algunos filtros:

![img - filter in tables]({{ page.image_path | relative_url }}/filter-in-tables.png)

En el área de filtros estamos aplicando los siguientes criterios:

1. Que el campo Puntaje_Credito sean clientes que tengan más de 750 puntos.
2. Que en el campo Pais sólo sean clientes de Francia.
3. Que en el campo Edad sean sólo clientes entre 20 y 40 años de edad.

A continuación debemos exportar esta presentación de los datos como una vista:

![img - export as view]({{ page.image_path | relative_url }}/export-as-view.png)

Luego colocamos un nombre a la vista:

{:align='center'}
![img - export as view]({{ page.image_path | relative_url }}/named-view.png){:height='170'}

Tenemos entonces la vista creada, podemos verla al desplegar la listas de tablas y acceder a ella:

![img - find view]({{ page.image_path | relative_url }}/find-view-browse-data.png)