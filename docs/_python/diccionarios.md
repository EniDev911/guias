---
layout: default
title: "Diccionarios"
---


## ¿Qué es un Diccionario de datos?

Un diccionario es una estructura de datos y un tipo de dato en Python con características especiales que nos permite almacenar cualquier tipo de valor como enteros, cadenas, listas e incluso otras funciones.  

Estos diccionarios nos permiten además identificar cada elemento por una clave (*key*).


- Para definir un diccionario, se encierra el listado de valores entre llaves **`{}`**. Las parejas de clave valor se separan con comas, y la clave y el valor se separan con dos puntos.  

- Podemos acceder al elemento de un diccionario mediante la clave de este elemento, como veremos a continuación.  

{% include code-header.html %}
```python
diccionario = {'nombre': 'Marcos', 'edad': 32, 'hobbies': ['Leer', 'Patinar']}
print(diccionario['nombre']) # Marcos
print(diccionario['edad']) # 22
print(diccionario['hobbies']) # ['Leer', 'Patinar']
```

También es posible insertar una lista dentro de un diccionario. Para acceder a cada uno de los elementos usamos los índices:  

{% include code-header.html %}
```py
print(diccionario['hobbies'][0]) # Leer
print(diccionario['hobbies'][1]) # Patinar
print(diccionario['hobbies'][0][0]) # L
```

Para recorrer todo el diccionario podemos uso del bucle for:  

{% include code-header.html %}
```py
for key in diccionario:
	print(key, ":", diccionario[key])
	# nombre: Marcos
	# edad: 32
	# cursos: ['Leer', 'Patinar']
```

---

## MÉTODOS DE DICCIONARIO

### dict()

Recibe como parámetro una representación y si es factible devuelve un diccionario de datos.  

{% include code-header.html %}
```py
dic = dict(nombre='marco', apellido='contreras')
print(dic)
# {'nombre': 'marco', 'apellido': 'contreras'}
```

### zip()

Recibe como párametro dos elementos iterable, ya sea una cadena, una lista o una tupla. Ambos parámetros deben tener el mismo número de elementos se devolverá un diccionario relacionando el mismo elemento de cada uno de los iterables.  

{% include code-header.html %}
```py
dic = dict(zip('abcd', [1,2,3,4]))
print(dic)
# {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

### items()

Devuelve una lista de tuplas, cada tupla se compone de dos elementos, el primero será la clave y el segundo su valor.

{% include code-header.html %}
```py
dic = {'a':1, 'b':2, 'c':3, 'd':4}
items = dic.items()
print(items)
# dict_items([('a', 1), ('b', 2), ('c', 3), ('d', 4)])
```

### keys()

Retorna una lista de elementos, los cuales serán las claves de nuestro diccionario.  

{% include code-header.html %}
```py
dic = {'a':1, 'b':2, 'c':3, 'd':4}
keys = dic.keys()
print(keys)
# ['a', 'b', 'c', 'd']
```

### values()

Retorna una lista de elementos, los cuales serán los valores de nuestro diccionario.  

{% include code-header.html %}
```py
dic = {'a':1, 'b':2, 'c':3, 'd':4}
values = dic.values()
print(values)
# [1, 2, 3, 4]
```
