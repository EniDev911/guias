---
layout: default
title: "Tipos de Datos en PostgreSQL"
css:
  custom: >-
    strong { color:  #da3; !important }
---

PostgreSQL binda diferentes tipos de datos que permiten almacenar la informacion necesaria de una aplicación. A diferencia de [**`MySQL`**](https://www.mysql.com/){:target="_blank" class="link"}, PostgreSQL cuenta con más tipos de datos, se podría decir que es una base de datos más avanzada, esto puede significar que puede tomar un poco más de tiempo aprender PostgreSQL.


## Tipo fechas

PostgreSQL admite un conjunto de tipos de fecha y hora de SQL. Las fechas se cuentan de acuerdo con el calendario gregoriano, incluso años anteriores a la introducción a ese calendario.


## Tipos enum

Los tipos enumerados **(enum)** son tipos de datos que comprenden un conjunto estático y ordenado de valores. Son equivalentes a los tipos **enum** admitidos en varios lenguajes de programación. Un ejemplo de un tipo de enumeración podría ser los días de la semana o un conjunto de valores de estado para un dato.


Los tipos de enumeración se crean utilizando el comando `CREATE TYPE`, por ejemplo:


{: .clipboard }
{% highlight sql %}
CREATE TYPE mood AS ENUM('bueno', 'regular', 'malo');
{% endhighlight %}

Una vez creado, el tipo de enumeración se puede usar en definiciones de tablas y funciones como cualquier otro tipo:

{: .clipboard }
{% highlight sql%}
CREATE TYPE estado AS ENUM('bueno', 'regular', 'malo');
CREATE TABLE item (
    nombre VARCHAR(50),
    item_estado ESTADO
);
{% endhighlight %}