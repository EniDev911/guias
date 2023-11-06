---
layout: default
title: "Transformación de String"
---
<img src="https://badges.aleen42.com/src/python.svg" alt="badge python">

Recordemos que las cadenas son inmutables; por ende, todos los métodos a continuación no actuán sobre el objeto original sino que retorna uno nuevo.  

### `capitalize()`
Retorna la cadena con su primera letra en mayúscula.

{: .clipboard .compiler.python}
```py
print("hello world".capitalize()) # Hello world
```

### `swapcase()`

Cambia las mayúsculas por minúsculas y viceversa.  

{: .clipboard .compiler.python}
```py
print("Hello World".swapcase()) # hEELO wORLD
```

### `upper()`

Retornan una copia de la cadena con todas sus letras en mayúsculas.  

{: .clipboard .compiler.python}
```py
print("Hello".upper()) # HELLLO
```

### `casefold()` o `lower()`

Retornan una copia de la cadena con todas sus letras en minúsculas.  

{: .clipboard .compiler.python}
```py
print("HELLO WORLD".casefold()) # hello world
print("HELLO WORLD".lower()) # hello world
```

### `center()`, `ljust()`, `rjust()`

Estos métodos alinean una cadena en el centro, la izquierda, o la derecha respectivamente. Toman un argumento, la cantidad de caracteres respecto de la cual se producirá la alineación.   

{: .clipboard .compiler.python}
```py
print("hello".center(10)) # ..hello...
print("hello".ljust(10)) # hello.....
print("hello".rjust(10)) # .....hello
```

Estos métodos son especialmente útiles al imprimir en forma de tabla para que esta se mantenga alineada. Un segundo argumento indica que carácter se deben llenar los espacios vacíos:  

{: .clipboard .compiler.python}
```py
print("hello".center(10)) # por defecto son espacios
print("hello".center(10, "*")) # ***Hola***
```

### `encode()`

Retorna una versión codificada de la cadena.  

{: .clipboard .compiler.python}
```py
txt = "My username is EniDev911"
print(txt.encode(encoding="ascii", errors="ignore"))  
```

---

## Métodos de separación y unión

<img src="https://badges.aleen42.com/src/python.svg">

### `split()`

El método para dividir una cadena según un carácter separador el más empleado es **`split()`**. Cuyo separador por defecto son espacios en blancos y saltos de líneas.  

{: .clipboard .compiler.python}
```py
str = "Hello World!\n¡Hola Mundo!".split()
print(str)
# ['Hello', 'World!', '¡Hola', 'Mundo']
```

El indicador o separador se puede pasarse  como argumento.  

{: .clipboard .compiler.python}
```py
str = "Hello World!\n¡Hola Mundo!".split(" ")
print(str)
# ['Hello', 'World!\n¡Hola', 'Mundo']
```
O bien , para separar únicamente según saltos de líneas con el método `splitlines()`.

{: .clipboard .compiler.python}
```py
str = "Hello World!\n¡Hola Mundo!".splitlines()
print(str)
# ['Hola Mundo!', 'Hello World!'] (equivalente a split("\n"))
```

> Un segundo argumento en **`split()`** indica cuál es el máximo de divisiones que puede tener lugar.

### `join()`

Retorna una cadena uniendo todos los elementos de un iterable:

{: .clipboard .compiler.python}
```py
text = ['Python', 'is', 'a', 'fun', 'programming', 'language']
print(' '.join(text)) # Python is a fun programming language
```