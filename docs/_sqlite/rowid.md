---
layout: default
title: RowID - Sqlite3
categories: ["guía"]
---


Cada vez que se crea una tabla en SQLite de forma predeterminada se crea un campo o columna especial, generalmente llamada **rowid** y es autoincremental.

Por ejemplo, si creamos una nueva tabla para almacenar links:

{% include code-header.html %}
```sql
CREATE TABLE links (
	name TEXT,
	url TEXT
);
```

Y agregamos algunos registros para ver el resultado:

{% include code-header.html %}
```sql
INSERT INTO links VALUES ('google', 'https//google.com');
INSERT INTO links VALUES ('github', 'https//github.com');
```

Como resultado, SQLite crea un **ID** de fila que comienza en 1 y aumenta en uno con cada fila agregada. Para mostrar el campo debemos incluirlo en la consulta de forma implícita:

{% include code-header.html %}
```sql
SELECT rowid, * FROM links;
```

Como podemos observar, se encuentras las respectivas filas identificadas por su **rowid**, sin embargo hay situaciones que para optimizar los espacios de almacenamientos y las velocidades en las ejecuciones de las consultas podemos crear tablas sin el campo **rowid**.

---

## OPTIMIZAR CREANDO TABLA SIN ROWID

Para forzar a SQLite que no cree el campo **rowid** añadimos al final de la instrucción la cláusula `WITHOUT ROWID` como se muestra a continuación:

{% include code-header.html %}
```sql
CREATE TABLE links (
	name text primary key,
	url text
) WITHOUT ROWID;
```
> **NOTA**: Cuando se crea una tabla con la cláusula `WITHOUT ROWID` se debe obligatoriamente definirse una `PRIMARY KEY` sino se produce un error en la creación de la tabla.

## ¿Cuándo usar la optimización de quitar rowid?

La optimización `WITHOUT ROWID` es útil para las tablas que:

- **Tengan CLAVES PRIMARIAS que no sea un entero o de varias columnas**
- **No almacene cadenas grandes ni BLOB**
