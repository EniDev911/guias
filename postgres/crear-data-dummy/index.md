---
layout: default
title: "Crear data dummy"
---

[![badge](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](../)


<a name="crear-tabla"></a>
## Crear una tabla

Para este ejemplo, definiremos una tabla de empleados con las siguientes columnas:  

```sql
CREATE TABLE public.empleados (
  id int NOT NULL,
  nombre varchar(120) NOT NULL,
  salario int NOT NULL,
  CONSTRAINT emp_pk PRIMARY KEY(id)
);
```

<a name="generar-datos-ficticios"></a>
## Generar datos ficticios

La siguiente sentencia SQL genera 1000 de registros de empleados:  

```sql
WITH lista_salarios AS (
  SELECT '{1000, 2000, 5000}'::INT[] salario
)
INSERT INTO public.empleados (id, nombre, salario)
SELECT n, 'Empleado ' || n as name, salario[1 + mod(n, array_length(salario, 1))]
FROM lista_salarios, generate_series(1, 1000) as n;
```


### Explicación

Esta instrucción de `WITH` es para crear una tabla temporal y solo funciona para la siguiente instrucción luego se elimina.

La función `generate_series()` nos permite generar datos masivos, o más bien engordar una tabla ya que es el contexto el cuál lo estamos utilizando.

Su sintaxis es bastante sencilla:  

```psql
SELECT generate_series(comienzo, final, salto);
```

Luego con la función **`MOD`** estamos consiguiendo un número entero (el resto de la división), resultado de dividir el primer argumento (*dividendo*) entre el segundo (*divisor*). Y asi podemos recorrer la lista de salario que creamos con **`WITH`**.