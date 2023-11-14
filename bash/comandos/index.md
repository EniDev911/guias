---
layout: default
title: "Comandos Bash"
css:
  custom: |-
      strong { color: #aa2;}
      thead { background: #000; border: 1px solid #AAA }
      tbody { border: 1px solid #AAA }
      tbody tr:hover { background: #cfcfcf30; }   
---


## Archivos y directorios

<table>
  <thead>
    <th align="left">Comando</th>
    <th align="left">Descripción</th>
  </thead>
  <tbody align="left">
    <tr onclick="location.href = '#c-mv'">
      <th>
        <code class="language-plaintext">mv</code>
      </th>
      <th>
        Permite renombrar o mover un archivo o carpeta.
      </th>
    </tr>
    <tr onclick="location.href = '#c-cp'">
      <th>
        <code class="language-plaintext">cp</code>
      </th>
      <th>
        Permite copiar uno o más archivos.
      </th>
    </tr>
    <tr onclick="location.href = '#c-'">
      <th>
        <code class="language-plaintext">ln -s</code>
      </th>
      <th>
      	Crea un enlace símbolico
      </th>
    </tr>  
  </tbody>
</table>

## El comando PWD

En una terminal de linux, normalmente a la izquierda nos muestra la carpeta donde nos encontramos. Sin embargo, dependiendo de la configuración del terminal, es posible que no aparezca. Si queremos saber en que carpeta nos encontramos, podemos utilizar el comando `pwd` (*`print work directory`*).


{: .clipboard  }
```bash
pwd
```

## El comando tree

Si no sabemos cual es la estructura de carpetas donde estamos, podemos utilizar el comando `tree`, el cuál nos muestra un árbol

## Identificar archivos

### El comando file

Existe un comando no demasiado conocido llamado `file` con el cuál puedes saber que tipo de archivo estás trabajando. En principio identificamos los archivos por sus extensiones, si es un `.txt` es un archivo de texto y si es `.mp3` se trata de un archivo de audio. Sin embargo, estas extensiones son una convención. Nada nos impide renombrar un archivo `.txt` como `.mp3`:


```bash
file listado.mp3
listado.mp3: Unicode text, UTF-8 text
```

Como podemos observar el comando `file` no se guiará por la extensión, sino que analizará su contenido, más concretamente a su [`número mágico`](https://es.wikipedia.org/wiki/N%C3%BAmero_m%C3%A1gico_(inform%C3%A1tica)){:target='_blank' class='link'}.


<a name="c-cp"></a>
### El comando cp

Una operación básica a la hora de usar una terminal es la de **copiar archivos**. Nos encontramos continuamente haciendo copias de archivos o carpetas, ya sea de una ruta a otra o sobre la misma carpeta donde nos encontramos. Para ello usamos el comando `cp` (*`copy`*), que se suele utilizar de la siguiente forma:


```bash
cp origen.txt /home/destino.txt
```

En este sencillo ejemplo hemos copiado el archivo **origen.txt** a la carpeta **/home** cambiándole el nombre a **destino.txt**.


La forma en la que especificamos las rutas, pueden simplificarse y hacerse más flexible dependiendo de si utilizamos **rutas absolutas** o **rutas relativas**:
<table>
  <thead>
    <th>Tipo</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <th><strong>Ruta absoluta</strong></th>
      <th>Ruta completa de la carpeta o archivo desde la raíz. Ej: (<code class="language-plaintext">/home/user</code>)</th>
    </tr>
    <tr>
      <th><strong>Ruta actual</strong></th>
      <th>Ruta donde nos encontramos actualmente. Ej: (<code class="language-plaintext">.</code>)</th>
    </tr>
    <tr>
      <th><strong>Ruta padre</strong></th>
      <th>Ruta a la carpeta anterior de donde nos encontramos actualmente. Ej: (<code class="language-plaintext">..</code>)</th>
    </tr>
    <tr>
      <th><strong>Ruta relativa</strong></th>
      <th>Ruta completa, pero sólo a partir de la carpeta donde nos encontramos. Ej: (<code class="language-plaintext">../bin</code>)</th>
    </tr>
  </tbody>
</table>

Por otro lado, es importante conocer los parámetros del comando `cp` que pueden resultar útiles, como por ejemplo el parámetro `-r` que nos permite hacer **copias recursivas**, esto es, no sólo copiar archivos, sino **carpetas y su contenido**, ya que por defecto `cp` solo copia archivos.


Los parámetros más importante son los siguientes:


<table>
  <thead>
    <th>Parámetro</th>
    <th>Significado</th>
  </thead>
  <tbody>
    <tr>
      <th><code class="language-plaintext">-r</code> (<em>recursive</em>)</th>
      <th>Permite copiar carpetas y su contenido.</th>
    </tr>
    <tr>
      <th><code class="language-plaintext">-u</code> (<em>update</em>)</th>
      <th>Copia sólo cuando no hay un archivo de destino. Si existe, sólo cuando el origen es más nuevo.</th>
    </tr>
    <tr>
      <th><code class="language-plaintext">-n</code> (<em>no clobber</em>)</th>
      <th>No sobreescribe en el destino un archivo que ya existe.</th>
    </tr>
    <tr>
      <th><code class="language-plaintext">-v</code> (<em>verbose</em>)</th>
      <th>Por defecto, este comando trabaja en silencio. Con este parámetro muestra lo que está haciendo.</th>
    </tr>
  </tbody>
</table>

---

## CREAR CARPETA O ARCHIVOS

### El comando mkdir

Mediante el comando `mkdir`, seguido de un nombre de carpeta, podemos crear nuevas carpetas vacías.

Si queremos crear una estructura de varias carpetas una dentro de otra, en vez de hacerlo una por una. El siguiente ejemplo vamos a crear una nueva estructura con una carpeta **parent**, que dentro tiene una carpeta **child** y dentro de ella, una carpeta **grandchild**:


{: .clipboard }
```bash
mkdir -p parent/child/grandchild
```

### El comando touch

Por otro lado, el comando `touch` sería la versión de `mkdir` orientada a los archivos en vez de carpetas. Si necesitamos crear un archivo vacío, por ejemplo, para editar más tarde, podemos hacerlo simplemente con:

{: .clipboard }
```bash
touch file.txt
```

El comando anterior crearía un archivo vacío con el nombre de `file.txt`. Si ya existiera el archivo, simplemente actualiza su fecha de modificación.


## CREAR ENLACES

### El comando ln

El comando `ln` (*link names*) permite crear **enlaces entre archivos**, una especie de referencias o acceso directos a los archivos, rutas o carpetas. Existen dos tipos de enlaces:

- **Los enlaces duros**: son los archivos que apuntan a otro archivo basándose en su número interno. Se crean utilizando el comando `ln`. De esta forma podemos tener varios archivos con el mismo contenido, pero sus copias no duplican el contenido de los archivos originales, sino que son una referencia al primero. Son poco utilizados.

- **Los enlaces simbólicos** (*enlaces blandos*): son un tipo de referencia a otros archivos, pero esta vez basándose en su ubicación. Se crean utilizando el comando y parámetro `ln -s`. De esta forma, cuando accedemos a un enlace simbólico, realmente estamos accediendo al archivo que apunta. Si creamos un enlace símbolico y borramos su archivo original, el enlace se muestra en rojo y se considerará un **enlace simbólico roto**.


```bash
ln -s original.txt link
```

Como podemos ver, con el mando `ln` creamos el enlace, y con el parámetro `-s` indicamos que sea simbólico.


Estos enlaces pueden ser útiles cuando necesitamos que en la carpeta actual exista el contenido de otra carpeta, pero no queremos duplicar la información (*son carpetas con mucho espacio ocupado*) o queremos mantenerlo actualizado y simplemente queremos una referencia de una carpeta a otra.


## Borrar archivos

Probablemente, otro de los comandos más utilizados en la terminal es `rm` (*remove*), que sirve para **eliminar archivos o carpeta** de nuestro sistema. Hay que tener mucho cuidado con él, ya que una vez un archivo es eliminado, aunque no es imposible, es complicado recuperarlo.

<table>
  <thead>
    <th>Parámetro</th>
    <th>Significado</th>
  </thead>
  <tbody>
    <tr>
      <th><code class="language-plaintext">-f</code> (<em>force</em>)</th>
      <th>Fuerza a hacer el borrado, sin preguntar.</th>
    </tr>
    <tr>
      <th><code class="language-plaintext">-r</code> (<em>recursive</em>)</th>
      <th>Elimina recursivamente carpetas y su contenido.</th>
    </tr>
    <tr>
      <th><code class="language-plaintext">-d</code> (<em>dir</em>)</th>
      <th>Elimina carpetas vacías.</th>
    </tr>
    <tr>
      <th><code class="language-plaintext">-v</code> (<em>verbose</em>)</th>
      <th>Por defecto, este comando trabaja en silencio. Con este parámetro muestra lo que está haciendo.</th>
    </tr>
  </tbody>
</table>


Como se menciona anteriormente, el comando `rm` realmente no borra un archivo, sino que lo **&lt;&lt;marca&gt;&gt;** en el disco como reutilizable. Si la zona donde residía es sobrescrita con otro archivo, probablemente sea imposible de recuperar, en caso contrario hay cierta posibilidad.


>**Nota**: Si desea eliminar por completo un archivo, sin posibilidad de recuperación, es mejor utilizar el comando `shred -u` seguido del nombre del archivo. Este comando sobreescribe con información aleatoria el archivo, y luego lo elimina.