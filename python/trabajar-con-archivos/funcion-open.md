---
layout: default
title: Trabajando con archivos - Python
css:
  custom: |
    strong, h3 { color: #5397D2 }
---


 <img src="https://badges.aleen42.com/src/python.svg" alt="badge python" height="50">


La función **`open()`** se usa para abrir archivos almacenados. Devuelve el contenido del archivo como objeto python.   

**Sintaxis**:

{: .clipboard }
```python
open(file_name, mode)
```

**Parámetros**: 

- **file_name**: este parámetro como su nombre indica, es el nombre de archivo que queremos abrir.  

- **mode**: este parámetro es una cadena que se utiliza para especificar el modo en que se abrirá el archivo. Las siguientes cadena son las operaciones que se pueden utilizar para activar un modo especifico:  
	+ `'r'`:  abierto para lectura (por defecto).
	+ `'w'`:  abierto para escritura, truncando primero el archivo.
	+ `'x'`:  abierto para creación en exclusiva (**falla si el archivo ya existe**). 
	+ `'a'`:  abierto para escritura, añadiendo al final del cursor si el archivo ya existe. 
	+ `'b'`:  modo binario.
	+ `'t'`: modo texto (por defecto).
	+ `'+'`: abierto para actualizar (lectura y escritura).
	

### Ejemplos

Para crear un archivo de texto llamado `archivo.txt`: 

{: .clipboard }
```python
file = open("archivo.txt", "x")
```

Leer y escribir un archivo:

{: .clipboard }
```python
file = open("archivo.txt", "w")
file.write("Aprendiendo a escribir en archivos con Python.")
file.close()

# leemos el archivo
file = open("archivo.txt")
print(file.read())
```

Agregar contenido al archivo:


{: .clipboard }
```python
file = open("archivo.txt", "a")
file.write("Añadiendo más texto en el archivo")
file.close()

# leemos el archivo
file = open("archivo.txt")
print(file.read())
```

