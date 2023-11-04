---
layout: default
title: "Paradigma de POO"
css:
  custom: |
    strong { color: #fa3 }
    h3 { padding: 0 9px; border-left: 3px solid #f2f5a6; background: #181918; display: inline-block; margin-top: 6px }
    h3:hover { background: #000; }
---

## ¿Que es la programación orientada a objetos?

El paradigma **orientado a objetos** es una metodología que permite organizar la información de acuerdo a la interacción de entidades. Un **objeto** es la representación informatica de un objeto físico o imaginario puede ser simple o complejo dependiendo de la dimensión de sus 3 propiedades:

### 1) Estado
### 2) Comportamiento
### 3) Identidad

## Estado de un objeto

El estado de un objeto está definido por un conjunto de datos llamados **atributos** que almacenan las características del objeto en determinado momento.

## Comportamiento de un objeto

Esta definido por sus métodos que son básicamente funciones que permiten la interacción con el programa y otros objetos.

## Identidad

En programación el objeto se define por medio de un identificador con el que se declara, es decir, un valor númerico constante que **identifica de modo unívoco al objeto** durante el tiempo en el que está definido

## Declaración de una clase en Python

Para declarar una clase en Python debemos usar la palabra reservada `class` seguida de un espacio y el nombre de la clase y dos puntos. Ejemplo:

{: .clipboard }
```py
class Persona:
	pass
```

Como podemos observar el nombre de la clase escribirse en minúsculas y comenzar con mayúscula, se hace esto por convención y buenas practicas.


## Método constructor

En Python los atributos se declaran dentro de un método especial que se ejecuta automáticamente al crear un objeto. A este método se le llama **constructor** y tiene una sintaxis especial que Python reconoce como reservada. Se desarrolla de la siguiente manera:

{: .clipboard }
```py
class Persona:
	def __init__(self):
		pass
```

Python requiere la palabra `self` para acceder al resto de los métodos y atributos dentro de la clase es por eso que `self` debe ser el primer parámetro de los métodos de clase.

Para crear los atributos `edad` y `nombre` dentro del constructor, usamos la siguiente sintaxis:

{: .clipboard }
```py
class Persona:
	def __init__(self):
		self.edad = 20
		self.nombre = 'juan'
		print("Se ha creado a", self.nombre, "de", self.edad, "años")
```

## Crear un objeto

Para verificar que la clase es correcta, creamos un objeto de la siguiente manera:

{: .clipboard .compiler.python }
```py
class Persona:
	def __init__(self):
		self.edad = 20
		self.nombre = 'juan'
		print("Se ha creado a", self.nombre, "de", self.edad, "años")

juan = Persona()
```

Como se observa se declaró una variable llamada `juan` seguida del operador `=` seguido del nombre de la clase agregando paréntesis `()` al final.

---

## Declaración de métodos



## Métodos en Python

Haciendo uso de los decoradores, es posible crear diferentes tipos de métodos:

- Los métodos de instancia **normales**
- Métodos de clases usando el decorador `@classmethod`
- Y método estático usando el decorador `@staticmethod`

## Método de instancia

Los **métodos de instancia** son métodos normales, reciben como parámetro de entrada a `self` que hace referencia a la instancia que llama al método. También pueden recibir otros argumentos como entrada.

Ejemplo:

```py
class Persona:
	def hablar(self, arg1, arg2):
		return f"{} {} {}".format(self, arg1, arg2)
```

Debemos saber entonces que los **métodos de instancia**:

- Pueden **acceder y modificar los atributos del objeto**.
- Pueden **acceder a otros métodos**
- Dado que desde el objeto `self` se puede acceder a la clase con `self.class` y esto nos permite también **modificar el estado de la case**.

## Método estático

Por último, los métodos estáticos se pueden definir con el decorador `@staticmethod` y no acepta como parámetro ni la instancia ni la clase. Es por ello que no **pueden modificar el estado ni de la clase ni de la instancia**. Por supuesto que pueden aceptar parámetros de entrada.

**Ejemplo**:

{: .clipboard }
```py
class Clase:
    @staticmethod
    def metodoestatico():
        return "Método estático"

# Para invocar al método es posible tanto usando La clase o una instancia de esta.
mi_clase = Clase()

Clase.metodoestatico()
mi_clase.metodoestatico()
```

Por lo tanto el uso de los **métodos estáticos** pueden resultar útil para indicar que un método no modificará el estado de la instancia. Es cierto que se podría hacer lo mismo con un método de instancia. Pero resulta importante indicar de alguna manera estas diferencias.

---

## Herencia

La **herencia**