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

**EJEMPLO**

Seleccionar todos los campos de una tabla:

{: .clipboard }
```sql
SELECT * FROM t1;
```


<!-- <div style="position: relative;">
{% highlight sql %}
CREATE TABLE t1 (c1 INT PRIMARY KEY);
{% endhighlight %}
<enidev-button 
    data-btn="compiler" 
    data-lang="mysql" 
    data-ext="sql"
    data-content="{{ CREATE TABLE t1 (c1 INT PRIMARY KEY); }}"></enidev-button>
</div> -->