---
layout: default
title: "Guía básica con ejemplos"
author: "Marco Contreras"
css:
  custom: |-
    strong {color: #dd3}
---


## CREAR UNA BASE DE DATOS

**SINTAXIS**:

```text
CREATE DATABASE <<nombre-base-de-datos>>;
```

**EJEMPLO**:

Crea una base de datos con el nombre `'my_db'`:

{: .clipboard }
```sql
CREATE DATABASE my_db;
```
Crea una base de datos con la cláusula `IF NOT EXISTS`:

{: .clipboard }
```sql
CREATE DATABASE IF NOT EXISTS my_db;
```

Crear una base de datos definiendo el conjunto de caracteres:

{: .clipboard }
```sql
CREATE DATABASE IF NOT EXISTS my_db
CHARACTER SET utf8
COLLATE utf8_general_ci;
```


---

## CREAR TABLAS

**SINTAXIS**:

```text
CREATE TABLE <<nombre-tabla>>
(
	<<nombre-campo>> TIPO restriccion
);
```

**EJEMPLO**

{: .clipboard }
```sql
CREATE TABLE t1 (
	c1 INT PRIMARY KEY, 
	c2 VARCHAR(40) NOT NULL
);
```
---

## SELECT

**EJEMPLOS**

Seleccionar todos los campos de una tabla:

{: .clipboard }
```sql
SELECT * FROM t1;
```

Seleccionar usando un [`alias`](https://dev.mysql.com/doc/refman/8.0/en/select.html#:~:text=The%20alias%20is%20used%20as%20the%20expression%27s%20column%20name%20and%20can%20be%20used%20in%20GROUP%20BY%2C%20ORDER%20BY%2C%20or%20HAVING%20clauses.%20For%20example%3A){:target='_blank' class='link'}:

<div style="position: relative;" class="clipboard">
{% highlight sql %}
SELECT 1+1 AS suma;
{% endhighlight %}
<enidev-button 
    data-btn="compiler" 
    data-lang="mysql" 
    data-ext="sql"
    data-content="{{ SELECT 1+1 AS suma; }}"></enidev-button>
</div>

Seleccionar los campos que sean distintos:

{: .clipboard}
```sql
SELECT DISTINCT codigo_postal, ciudad FROM ciudades;
```

---

## Obetener información sobre base de datos y tablas


Para saber qué base de datos está seleccionada:

<div style="position: relative;" class="clipboard">
{% highlight sql %}
SELECT DATABASE();
{% endhighlight %}
<enidev-button 
    data-btn="compiler" 
    data-lang="mysql" 
    data-ext="sql"
    data-content="{{ SELECT DATABASE(); }}"></enidev-button>
</div>

> **NOTA**: Si aún no ha seleccionado ninguna base de datos, el resultado es `NULL`.

Conocer la estructura de una tabla:

{: .clipboard }
```sql
DESCRIBE t1;
```

---

## BETWEEN

**EJEMPLOS**

Seleccionar a los registos que cumplan en con la condición:

{: .clipboard }
```sql
SELECT nombre, edad FROM clientes
WHERE edad BETWEEN 20 AND 30;
```