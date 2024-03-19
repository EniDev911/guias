---
layout: default
title: "Estructuras condicionales"
css:
  custom: |-
    td { width: fit-content }
---


En bash las condicionales se materializa con declaraciones `if then else` para evaluar una expresión.

## Comparando en Bash

Para comparar en **Bash** se utiliza los corchete `[]` y es muy importante que la expresión que definamos dentro de los corchetes tiene que estar separado mínimo un espacio, ya que estos corchetes operan como cualquier otro comando o de otra forma nos dará un error.

Por otro lado, también se pueden utilizar los corchetes dobles `[[]]` para realizar comparaciones. Los dobles corchetes resultan ser una mejora respecto a los simples. Así, las diferencias entre uno y otro son las siguientes:

- No tienes que utilizar comillas con las variables. Los dobles corchetes trabajan perfectamente con los espacios. Ej: `[ -f "$file" ]` es equivalente a `[[ -f $file ]]`.
- Los corchetes dobles pueden utilizar los operadores `||` y `&&`, asi como las comparaciones de cadenas.
- Con los corchetes dobles podemos usar el operador `=~` para expresiones regulares. Ej: `[[ $respuesta =~ ^s(i)?$ ]]`.
- Es posible también con los corchetes dobles utilizar comodines. Ej: `[[ abc =  a* ]]`.


<a name="otros-comparadores"></a>
## Otros comparadores

|Operador|Descripción|
|--------|-----------|
|`-d`|te permitirá saber si un directorio o carpeta existe|
|`-f`|te permitirá saber si un archivos existe|
|`-r`|te permite saber si un archivo tiene permiso de lectura|
|`-s`|con esta opción podemos saber si el tamaño de un archivo es mayor a 0; quiere decir, que no se trata de un archivo vacío|
|`-w`|te permitirá identificar si un archivo tienen permiso de escritura|
|`-x`|te permitirá identificar si un archivo tienen permiso de ejecución|

---

## Condicionales: if then else

Para comenzar con una primera comparación muy simple como saber si un número es par o impar. Tal como lo muestra la siguiente ilustración:

{% capture fw_ej1 %}
graph LR
  id1([Inicio])
  id1-->b["10%2=0"]
  b-->|Si| c[Es par]
  b-->|No| d[Es impar]
  linkStyle default stroke: #f2f5a6
  classDef default fill:#191919,stroke:#f2f5a6,stroke-width:1px,color:#ccc
{% endcapture %}

{% include flowchart.html
	body=fw_ej1
 %}

Para lograrlo, podemos hacer el siguiente script:

{% capture ej_par_impar %}
{% highlight shell %}
#!/bin/bash

if [[ $((10 % 2)) == 0 ]]
then
    echo Par
else
    echo Impar
fi
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='bash'
	data-ext='sh'>
</enidev-button>
{% endcapture %}

{% capture result_ej_par_impar %}
{% highlight shell %}
Par
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_par_impar'
	tab_1='script.sh'
	tab_2='Resultado'
	bloque_1=ej_par_impar
	bloque_normal=result_ej_par_impar
%}

Otro caso es comprar si dos cadenas son iguales. Para ello podemos crear un nuevo archivo y darle permisos de ejecución:

{: .clipboard }
```bash
touch comparar-cadenas.sh && chmod +x $_
```

Comparar dos cadenas:

{% capture ej_comparar_string %}
{% highlight shell %}
#!/bin/bash

VAR1="Bourne Again"
VAR2="bourne again"

if [[ "$VAR1" == "$VAR2" ]]
then
	echo "Las cadenas son iguales"
else
	echo "Las cadenas no son iguales"
fi
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='bash'
	data-ext='sh'>
</enidev-button>
{% endcapture %}
{% capture result_ej_comparar_string %}
{% highlight shell %}
Las cadenas no son iguales
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_comparar_string'
	tab_1='comparar-cadenas.sh'
	tab_2='Resultado'
	bloque_1=ej_comparar_string
	bloque_2=result_ej_comparar_string
%}

Como podemos observar `$VAR1` no es igual a `$VAR2` a pesar de que tengan el mismo texto, como podemos imaginar es porque se distingue mayúsculas de minúsculas.

---

## Saber si un archivo o carpeta existe

En un script, para saber si un archivo existe o no, como es una comparación, debemos usar los operadores correspondiente que se listan [aquí](#otros-comparadores).

Así, si queremos saber si una carpeta existe, por ejemplo, para evitar crearla de nuevo o intentar borrarla en caso de asi desearlo, podemos lograrlo con el siguiente script:

{% capture ej_if_file_dir %}
{% highlight shell %}
#!/bin/bash
directory="test"
if [[ -d $directory ]]
then
	echo "Ya existe el directorio: $directory"
else
	mkdir $directory
	echo "Se creo la el directorio: $directory"
fi
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='bash'
	data-ext='sh'>
</enidev-button>
{% endcapture %}

{% capture result_ej_if_file_dir %}
{% highlight shell %}
Se creo la el directorio: test
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_if_file_dir'
	tab_1='script.sh'
	tab_2='Resultado'
	bloque_1=ej_if_file_dir
	bloque_normal=result_ej_if_file_dir
%}

Del mismo modo, podemos comprobar si tenemos un determinado archivo o no:

{% capture ej_if_file %}
{% highlight shell %}
#!/bin/bash
filename="test.txt"

if [[ -d $filename ]]
then
	echo "Ya existe el archivo: $filename"
else
	touch $filename
	echo "Se creo el archivo: $filename"
fi
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='bash'
	data-ext='sh'>
</enidev-button>
{% endcapture %}

{% capture result_ej_if_file %}
{% highlight shell %}
Se creo el archivo: test.txt
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_if_file'
	tab_1='script.sh'
	tab_2='Resultado'
	bloque_1=ej_if_file
	bloque_normal=result_ej_if_file
%}

Ahora si quisieramos evaluar en la misma estructura si es un archivo, directorio o no existe, lo podemos lograr añadiendo una declaración más en el bloque `if / elif / else`:

{% capture ej_if__elif_file_dir %}
{% highlight shell %}
#!/bin/bash
foo="foobar"
if [[ -f $foo ]]
then
	echo "$foo: es un archivo"
elif [[ -d $foo ]]
then
	echo "$foo: es una carpeta"
else
	echo "No existe"
fi
{% endhighlight %}
<enidev-button 
	data-btn='compiler' 
	data-lang='bash'
	data-ext='sh'>
</enidev-button>
{% endcapture %}
{% capture result_ej_if__elif_file_dir %}
{% highlight shell %}
Se creo el archivo: test.txt
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_if__elif_file_dir'
	tab_1='script.sh'
	tab_2='Resultado'
	bloque_1=ej_if__elif_file_dir
	bloque_normal=result_ej_if__elif_file_dir
%}

## Más ejemplos practicos

Conectarse con servidor mediante una clave ssh si esta clave existe:

{% capture ej_if_ssh %}
{% highlight shell %}
#!/bin/bash

eval $(ssh-agent -s)
if [[ -f "$HOME/.ssh/github_rsa" ]]
then
	ssh-add "$HOME/.ssh/github_rsa"
fi
{% endhighlight %}
{% endcapture %}
{% capture result_ej_if_ssh %}
{% highlight shell %}
Agent pid 834
Identity added: /home/.ssh/github_rsa (enidev911@email.com)
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='ej_ej_if_ssh'
	tab_1='script.sh'
	tab_2='Resultado'
	bloque_1=ej_if_ssh
	bloque_normal=result_ej_if_ssh
%}