---
layout: default
title: "Relaciones entre tablas en Sqlite"
---

**SQLite** tiene buen soporte para las relaciones entre las tablas, es decir, soporta claves foráneas especificando relaciones entre una tabla y otra.


## Usar claves foráneas

Para hacer cumplir una relación entre las filas debemos utilizar **restricciones de claves foráneas**.

Para agregar la restricción de clave foránea a la tabla **products**, cambiamos la definición de la siguiente manera:

{: .clipboard }
```sql
CREATE TABLE products (
	product_id INTEGER PRIMARY KEY,
	product_name TEXT NOT NULL,
	category_id INTEGER NOT NULL,
	FOREIGN KEY (category_id)
		REFERENCES categories(category_id)
);
```


<pre class="mermaid" style="display: flex; justify-content: center; background: transparent !important; color: #fff; border: none; box-shadow: none;">
---
title: TABLA DE CLIENTES
---
erDiagram
    CLIENTES {
        id INTEGER PK "Primary key"
        nombre VARCHAR(50) "NOT NULL"
        apellido VARCHAR(50) "NOT NULL"
        telefono VARCHAR(12) "NOT NULL"
        email VARCHAR(50) "NOT NULL"
        direccion VARCHAR(100) 
        ciudad VARCHAR(50) 
    }
</pre>

