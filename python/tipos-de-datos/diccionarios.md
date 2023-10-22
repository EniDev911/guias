---
layout: default
title: "Diccionarios"
---

 <img src="https://badges.aleen42.com/src/python.svg" alt="badge python" height="50">


## ¿Qué es un Diccionario de datos?

Un diccionario es una estructura de datos y un tipo de dato en Python con características especiales que nos permite almacenar cualquier tipo de valor como enteros, cadenas, listas e incluso otras funciones.  

Estos diccionarios nos permiten además identificar cada elemento por una clave (*key*).


- Para definir un diccionario, se encierra el listado de valores entre llaves **`{}`**. Las parejas de clave valor se separan con comas, y la clave y el valor se separan con dos puntos.  

- Podemos acceder al elemento de un diccionario mediante la clave de este elemento, como veremos a continuación.  

{: .clipboard }
```py
diccionario = {'nombre': 'Marcos', 'edad': 32, 'hobbies': ['Leer', 'Patinar']}
print(diccionario['nombre']) # Marcos
print(diccionario['edad']) # 22
print(diccionario['hobbies']) # ['Leer', 'Patinar']
```

También es posible insertar una lista dentro de un diccionario. Para acceder a cada uno de los elementos usamos los índices:  

{: .clipboard }
```py
print(diccionario['hobbies'][0]) # Leer
print(diccionario['hobbies'][1]) # Patinar
print(diccionario['hobbies'][0][0]) # L
```

Para recorrer todo el diccionario podemos uso del bucle for:  

{: .clipboard }
```py
for key in diccionario:
	print(key, ":", diccionario[key])
	# nombre: Marcos
	# edad: 32
	# cursos: ['Leer', 'Patinar']
```


<h2 align="center">
<img height="50" src="https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54"><br>
MÉTODOS DE DICCIONARIO</h2> 


## dict()

Recibe como parámetro una representación y si es factible devuelve un diccionario de datos.  

{: .clipboard }
```py
dic = dict(nombre='marco', apellido='contreras')
print(dic)
# {'nombre': 'marco', 'apellido': 'contreras'}
```

## zip()

Recibe como párametro dos elementos iterable, ya sea una cadena, una lista o una tupla. Ambos parámetros deben tener el mismo número de elementos se devolverá un diccionario relacionando el mismo elemento de cada uno de los iterables.  

{: .clipboard }
```py
dic = dict(zip('abcd', [1,2,3,4]))
print(dic)
# {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

## items()

Devuelve una lista de tuplas, cada tupla se compone de dos elementos, el primero será la clave y el segundo su valor.

```py
dic = {'a':1, 'b':2, 'c':3, 'd':4}
items = dic.items()
print(items)
# dict_items([('a', 1), ('b', 2), ('c', 3), ('d', 4)])
```

## keys()

Retorna una lista de elementos, los cuales serán las claves de nuestro diccionario.  

{: .clipboard }
```py
dic = {'a':1, 'b':2, 'c':3, 'd':4}
keys = dic.keys()
print(keys)
# ['a', 'b', 'c', 'd']
```

## values()

Retorna una lista de elementos, los cuales serán los valores de nuestro diccionario.  

{: .clipboard }
```py
dic = {'a':1, 'b':2, 'c':3, 'd':4}
values = dic.values()
print(values)
# [1, 2, 3, 4]
```
