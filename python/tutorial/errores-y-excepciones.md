---
layout: default
title: Errores y Excepciones
---

## KEYWORDS TRY - EXCEPT - FINALLY


- El bloque **`try`** permite probar un bloque de código en busca de errores.  
- El bloque **`except`** le permite manejar el error.  
- El bloque **`finally`** le permite ejecutar código, independiente de los resultados de los bloques `try - except`


### Manejo de excepciones

Cuando ocurre un error, una excepción como le llamamos, python normalmente se detendrá y generará un mensaje de error.  

Estas excepciones se pueden manejar usando la declaración `try`:  

**Ejemplo**: 

{: .clipboard .compiler.python }
```python
# El bloque try generará una excepción, porque 'x' no está definida
try:
	print(x)
except:
	print("Una excepción a ocurrido")
```


### Muchas excepciones

Puede definir tantos bloques de excepción **`except`** como desee, por ejemplo,si desea ejecutar un bloque de código especial para un tipo de error especial:  

{: .clipboard .compiler.python }
```python
try:
	print(x)
except NameError:
	print("Variable 'x' no está definida")
except:
	print("Algo más salió mal")
```

### Else

Puede utilizar la palabra reservada **`else`** para definir un bloque de código que se ejecutará si no se produjeron errores.

### finally

Resulta ser útil para cerrar objetos y limpiar recursos  

Ejemplo:

{: .clipboard .compiler.python }
```python
try:
	f = open("demo.txt")
	try:
		f.write("Lorem ipsum")
	except:
		print("Ocurrió un error para escribir en el archivo")
	finally:
		f.close()
except:
	print("Ocurrió un error al tratar de abrir el archivo")
```

Asi el programa puede continuar sin dejar el objeto de archivo abierto.  


## PLANTEAR UNA EXCEPCION : RAISE

Como programador de Python, puede optar por lanzar una excepción si se produce una condición. Para lanzar o generar una excepción, usamos la palabra reservada **`raise`**. 

**Ejemplo**:  

{: .clipboard .compiler.python }
```python
x = -1 

if x <= 0:
	raise Exception("Lo siento, el número debe ser mayor a 0")
```


La palabra reservada **`raise`** se utiliza para generar  una excepción. Puede definir que tipo de error generar y el texto que se imprimirá al usuario.  


**Ejemplo**:  

{: .clipboard .compiler.python }
```python
# Generar un TypeError si 'x' no es un número entero

x = 'hello'
if not type(x) is int:
	raise TypeError("Solo números enteros son admitidos")
```
