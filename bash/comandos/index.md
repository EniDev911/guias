---
layout: default
title: "Comandos Bash"
css:
  custom: |-
      strong { color: #aa2;}
      thead { background: #000; border: 1px solid #AAA }
      tbody { border: 1px solid #AAA }
      tbody tr:hover { background: #cfcfcf30; cursor: pointer; }   
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