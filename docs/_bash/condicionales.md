---
layout: default
title: "Estructuras condicionales"
categories: ["guía"]
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

{% include code-header.html %}
```bash
#!/bin/bash

if [[ $((10 % 2)) == 0 ]]
then
    echo Par
else
    echo Impar
fi
```


Otro caso es comprar si dos cadenas son iguales. Para ello podemos crear un nuevo archivo y darle permisos de ejecución:

{% include code-header.html %}
```bash
touch comparar-cadenas.sh && chmod +x $_
```

Comparar dos cadenas:

{% include code-header.html %}
```bash
#!/bin/bash

VAR1="Bourne Again"
VAR2="bourne again"

if [[ "$VAR1" == "$VAR2" ]]
then
	echo "Las cadenas son iguales"
else
	echo "Las cadenas no son iguales"
fi
```

Como podemos observar `$VAR1` no es igual a `$VAR2` a pesar de que tengan el mismo texto, como podemos imaginar es porque se distingue mayúsculas de minúsculas.

---

## Saber si un archivo o carpeta existe

En un script, para saber si un archivo existe o no, como es una comparación, debemos usar los operadores correspondiente que se listan [aquí](#otros-comparadores).

Así, si queremos saber si una carpeta existe, por ejemplo, para evitar crearla de nuevo o intentar borrarla en caso de asi desearlo, podemos lograrlo con el siguiente script:

{% include code-header.html %}
```bash
#!/bin/bash
directory="test"
if [[ -d $directory ]]
then
	echo "Ya existe el directorio: $directory"
else
	mkdir $directory
	echo "Se creo la el directorio: $directory"
fi
```

Del mismo modo, podemos comprobar si tenemos un determinado archivo o no:

{% include code-header.html %}
```bash
#!/bin/bash
filename="test.txt"

if [[ -d $filename ]]
then
	echo "Ya existe el archivo: $filename"
else
	touch $filename
	echo "Se creo el archivo: $filename"
fi
```

Ahora si quisieramos evaluar en la misma estructura si es un archivo, directorio o no existe, lo podemos lograr añadiendo una declaración más en el bloque `if / elif / else`:

{% tabs elif_ex %}
{% tab elif_ex bash %}
{% include code-header.html %}
```bash
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
```
{% endtab %}
{% tab elif_ex resultado %}
```text
Se creo el archivo: test.txt
```
{% endtab %}
{% endtabs %}


## Más ejemplos practicos

Conectarse con servidor mediante una clave ssh si esta clave existe:

{% tabs ssh_ex %}
{% tab ssh_ex bash %}
{% include code-header.html %}
```bash
eval $(ssh-agent -s)
if [[ -f "$HOME/.ssh/github_rsa" ]]
then
	ssh-add "$HOME/.ssh/github_rsa"
fi
```
{% endtab %}
{% tab ssh_ex resultado %}
```text
Agent pid 834
Identity added: /home/.ssh/github_rsa (enidev911@email.com)
```
{% endtab %}
{% endtabs %}