---
layout: default
title: Guía general resumida MySQL
---

[comment]: <> (Author: Marco Contreras Herrera)
[comment]: <> (Email: enidev911@gmail.com)


<a name="top"></a>

## DDL ( *Data Definition Language* )

### CREATE

- [Crear una base de datos](#crear-base-de-datos)
- [Crear una base de datos con if not exists](#crear-base-de-datos-con-if-not-exists)
- [Crear una base de datos con codificación de caracteres](#crear-base-de-datos-con-conjunto-caracteres)
- [Mostrar el listado de base de datos](#mostrar-las-bases-de-datos)
- [Seleccionar una base de datos](#seleccionar-base-de-datos)
- [Crear una tabla para la base de datos](#crear-tabla)
- [Ver columnas de una tabla y sus tipo de datos](#estructura-de-la-tabla)

### ALTER

- [Añadir columna a una tabla](#agregar-columnas)
- [Añadir restricciones a columnas](#agregar-restricciones)

## DML ( *Data Manipulation Language* )

### INSERT

- [Insertar nuevas filas en la tabla](#insertar-todos-los-campos)
- [Insertar desde un archivo TXT con LOAD DATA](#load-data)

### SELECT

- [Seleccionar todos los registros de una tabla](#seleccionar-todos-los-campos)
- [Seleccionar campos de una tabla](#seleccionar-todos-los-campos)
- [Seleccionar los campos distintos de una tabla](#select-distinct)
- [Seleccionar un subconjunto de los registros de una tabla con where](#select-where)
- [Seleccionar un rango de registros de una tabla usando between](#between)
- [Seleccionar los registros que cumplan con un patrón usando like](#like)


## Operadores

- [Operadores relacionales](#operadores-relacionales)

---

<a name="crear-base-de-datos"></a>
### Crear una base de datos

```sql
CREATE DATABASE <<nombre-base-de-datos>>;
```
> Con la sintaxis anterior no tendríamos ningún problema en crearla siempre y cuando no exista anteriormente. **Para evitar tener un error como *`Can't create database 'nombre-base-de-datos'; database exists`*  usamos la sentencia `IF NOT EXISTS`**. Los guiones no son permitidos para utilizarlos en nombres así que la nomenclatura anterior no sería correcta.

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="crear-base-de-datos-con-if-not-exists"></a> 
### Crear una base de datos con if not exists

```sql
CREATE DATABASE IF NOT EXISTS <<nombre-base-de-datos>>;
```

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="crear-base-de-datos-con-conjunto-caracteres"></a> 
### Crear una base de datos definiendo el conjunto de caracteres

Esta sería una manera más elegante de **crear una base de datos**. Aún asi podemos crearla definiendo la codificación con **`CHARACTER SET`** y **`COLLATE`** (colación):  

```sql
CREATE DATABASE IF NOT EXISTS <<nombre-base-de-datos>> 
CHARACTER SET utf8 COLLATE utf8_general_ci;
```

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="mostrar-las-bases-de-datos"></a> 
### Desplegar el listado de bases de datos.

```sql
show databases;
```

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="seleccionar-base-de-datos"></a> 
### Seleccionar una base de datos existente para manipular.

**Sintaxis**  

```txt
USE <<nombre-base-de-datos>>;
```

Creamos una base de datos `TIENDA` y la seleccionamos con `USE`:

```sql
CREATE DATABASE tienda;
USE tienda;
``` 

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="crear-tabla"></a> 
### Crear una tabla para una base de datos

**Sintaxis**  

```txt
USE <<nombre-base-de-datos>>;
CREATE TABLE <<nombre-de-tabla>> (
  <<nombre-campo>> TIPO restricciones
);
```

Usando la base de datos `TIENDA` creamos una tabla llamada `CLIENTES`: 

```sql
USE tienda;
CREATE TABLE clientes (
  cliente_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  apellido VARCHAR(30),
  edad TINYINT
);
```

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="estructura-de-la-tabla"></a>
### Ver columnas de una tabla y sus tipo de datos.

**Sintaxis**  

```txt
DESCRIBE <<nombre-tabla>>
```

Usando la base de datos `TIENDA` vamos a ver la estructura de la tabla `CLIENTES`:

```sql
DESCRIBE clientes;
```

La salida sería algo similar a lo siguiente:

```txt
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| cliente_id | int         | NO   | PRI | NULL    | auto_increment |
| nombre     | varchar(30) | YES  |     | NULL    |                |
| apellido   | varchar(30) | YES  |     | NULL    |                |
| edad       | tinyint     | YES  |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
```

>Debe estar seleccionada la base de datos previamente

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="agregar-columnas"></a> 
### Agregar columnas a una tabla

**Sintaxis**

```txt
ALTER TABLE <<nombre-tabla>> ADD <<nombre-columna>> DATATYPE;
```

**Ejemplo** 

Usando la base de datos `TIENDA` agregaremos una nueva columna a la tabla llamada `CLIENTES`: 

```sql
ALTER TABLE clientes ADD telefono VARCHAR(15);
DESCRIBE clientes;
```

Usamos `DESCRIBE` para ver el resultado de la tabla:

```txt
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| cliente_id | int         | NO   | PRI | NULL    | auto_increment |
| nombre     | varchar(30) | YES  |     | NULL    |                |
| apellido   | varchar(30) | YES  |     | NULL    |                |
| edad       | tinyint     | YES  |     | NULL    |                |
| telefono   | varchar(15) | YES  |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
```

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="agregar-restricciones"></a>
### Agregar restricciones con ALTER

**Ejemplo** 

Usando la base de datos `TIENDA` agregaremos nuevas restricciones en la tabla llamada `CLIENTES` especificamente en las columnas nombre y apellido para que sean requeridos y los clientes sean de edad igual o mayor a 18:

```sql
ALTER TABLE clientes MODIFY nombre VARCHAR(30) NOT NULL;
ALTER TABLE clientes MODIFY apellido VARCHAR(30) NOT NULL;
ALTER TABLE clientes ADD CONSTRAINT check_edad CHECK(edad >= 18);
DESCRIBE clientes;
```

Usamos `DESCRIBE` para ver el resultado de la tabla:

```txt
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| cliente_id | int         | NO   | PRI | NULL    | auto_increment |
| nombre     | varchar(30) | NO   |     | NULL    |                |
| apellido   | varchar(30) | NO   |     | NULL    |                |
| edad       | tinyint     | YES  |     | NULL    |                |
| telefono   | varchar(15) | YES  |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
```

Para eliminar el constraint sería con la siguiente instrucción:  

```sql
ALTER TABLE clientes DROP CONSTRAINT check_edad;
```


<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="insertar-todos-los-campos"></a>
### Insertar nuevas filas en la tabla

**Sintaxis**

```txt
INSERT INTO <<nombre-tabla>> (columna1, columna2, columna3, ...) 
VALUES (valor1, valor2, valor3, ...);
```

**Ejemplo**

Usando la base de datos `TIENDA` agregaremos nuevas filas en la tabla llamada `CLIENTES` especificamente en las columnas (nombre, apellido, edad, telefono), no es necesario especificar el **id**, porque es dinámico (*autoincrementable*):

```sql
INSERT INTO clientes (nombre, apellido, edad, telefono)
VALUES ('marco', 'contreras', 32, '+569-84687949');
```

Si queremos insertar varios registros en la misma sentencia, podemos hacerlo de la siguiente forma:  

```sql
INSERT INTO clientes (nombre, apellido, edad, telefono) VALUES
('fabian', 'riveros', 25, '+569-84687949'),
('mario', 'nilo', 23, '+569-86835115'),
('ignacio', 'aguilar', 19, '+569-34384217');
```

---

<a name="load-data"></a>

### Insertar desde una archivo txt

Creamos un archivo de texto con los valores separados por una tabulación:

```txt
marcelo    arellano    40    +569-54172718
pedro      peréz       32    +569-61913882
felipe     cortéz      35    +569-75213711
```

Luego con el comando `LOAD DATA` buscamos este archivo para volcar su contenido dentro de la tabla `CLIENTES`:  

```sql
LOAD DATA LOCAL INFILE '/path/clientes.txt' 
INTO TABLE clientes COLUMNS TERMINATED BY '\t';
```

<a name="seleccionar-todos-los-campos"></a> 
### Seleccionar todos los campos de una tabla

**Sintaxis**

```txt
SELECT * FROM <<nombre-tabla>>
```

Con el (**`*`**) indicamos que queremos **devolver todos los campos** de la tabla.   

Es equivalente a:

```txt
SELECT <nombre-campo>, <nombre-campo> FROM <nombre-tabla>
```

O equivalente en su notación completa: 

```txt
SELECT <nombre-tabla>.<nombre-campo>, <nombre-tabla>.<nombre-campo> 
FROM <nombre-tabla>
```

**Ejemplo**  

Usando la base de datos `TIENDA` agregaremos nuevas filas en la tabla llamada `CLIENTES` seleccionaremos todos los registros existentes:

```sql
SELECT * FROM clientes;
```

Este `SELECT` nos debería dar como resultado algo similar a lo siguiente:

```txt
+------------+---------+-----------+------+---------------+
| cliente_id | nombre  | apellido  | edad | telefono      |
+------------+---------+-----------+------+---------------+
|          1 | marco   | contreras |   32 | +569-84687949 |
|          2 | fabian  | riveros   |   25 | +569-84687949 |
|          3 | mario   | nilo      |   23 | +569-86835115 |
|          4 | ignacio | aguilar   |   19 | +569-34384217 |
+------------+---------+-----------+------+---------------+
```

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="select-fields"></a>
### Seleccionar campos de una tabla

```sql
SELECT codigo_postal as cp, ciudad FROM cliente
```

Esta consulta devolverá unicamente los campos cp (código postal) y ciudad de la tabla **cliente**

<p align="center">
	<img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/db/mysql/querys/ddl/select/select-fields.png">
</p>

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="select-distinct"></a>
### Seleccionar los campos distintos de una tabla

Al tener un subconjunto de los campos, éstos no tienen por qué incluir a la clave de la tabla, por lo que no tienen por qué se únicos. Así, si tenemos muchos registros referidos a distintos clientes y con la misma ciudad y códigos postales, nos encontraremos muchos registros repetidos.  

Para evitar esto podemos hacer uso de la clásula `DISTICT`:  

```sql
SELECT DISTINCT codigo_postal as cp, ciudad FROM cliente
```

<p align="center">
	<img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/db/mysql/querys/ddl/select/select_distinct.png" alt="pic">
</p>

Así se eliminan los registros repitidos, devolviendo únicamente una vez cada par **cp**, **ciudad**. Esta selección de un subconjunto de los datos de la tabla y excluyendo repetidos se denomina en álgebra relacional *proyección*.

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="select-where"></a> 
### Seleccionar un subconjunto de los registros de una tabla `WHERE`

```sql
SELECT nombre, codigo_postal as cp, ciudad FROM cliente;
```

<p align="center">
	<img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/db/mysql/querys/ddl/select/select_where.png" alt="pic"><br>
	Esta consulta devolvería únicamente el código postal y la ciudad perteneciente al cliente "marco".
</p>

  

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="operadores-relacionales"></a>
## Operadores relacionales

Los operadores relacionales se pueden usar en las consultas que utilizan la cláusula `WHERE`, devolviendo siempre un valor booleano (lógico):

|Operador|Nombre|Ejemplo|Significado|
|:------:|------|-------|-----------|
|**<**|Menor que|`a < b`|a es menor que b|
|**>**|Mayor que|`a > b`|a es mayor que b|
|**<>**|Distinto de|`a <> b`|a es distinto que b|
|**<=**|Menor ó igual que|`a <= b`|a es menor ó igual que b|
|**>=**|Mayor ó igual que|`a >= b`|a es mayor ó igual que b|
|**=**|Igual que|`a = b`|a es igual que b|



### Operadores de comparación adicionales

Adicionalmente, disponemos de operadores de comparación adicionales, también devolviendo valores booleanos (lógicos) **True** o **False** según si se cumplen o no las condiciones:  

<a name="between"></a>  
### Seleccionar un intervalo de registros de una tabla.

con `BETWEEN` podemos indicar dentro de la cláusula `WHERE` un intervalo de valores.  

```sql
SELECT nombre, edad FROM clientes WHERE edad BETWEEN 20 AND 30;
```

<p align="center">
	<img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/db/mysql/querys/ddl/select/select_between.png" alt="pic">
</p>

<a href="#top">![](https://img.shields.io/badge/Volver%20al%20listado-%E2%86%A9-orange?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a> 

---

<a name="like"></a> 
### Seleccionar los registros de una tabla que cumplan con un patrón.

con `LIKE` podemos indicar dentro de la cláusula `WHERE` un patrón para en la condición.  

`LIKE` nos permite incluir comodines como los siguientes:

|Comodín|Descripción|
|-------|-----------|
|**`%`**|Sustituto para cero o más caracteres|
|**`_`**|Sustituto para exactamente un carácter|
|**`[lista de caracteres]`**|Cualquier carácter de la lista|
|**`[^lista de caracteres]`**|Cualquier carácter que no esté en la lista|
|**`[!lista de caracteres]`**|Cualquier carácter que no esté en la lista|

<a name="ej:like"></a>Ejemplos de LIKE

Buscar a los clientes que contengan una 'm' en la longitud del texto del campo nombre.
```sql
SELECT * FROM clientes WHERE nombre LIKE '%m%';
```

Buscar a los clientes que cuyo nombre comience con 'M'.
```sql
SELECT * FROM clientes WHERE nombre LIKE 'M%';
```

Buscar a los clientes que cuyo nombre termine con 'a'.
```sql
SELECT * FROM clientes WHERE nombre LIKE '%a';
```

Buscar a los clientes cuyo nombre tenga como segundo carácter la 'a'.
```sql
SELECT * FROM clientes WHERE nombre LIKE '_a%';
```

Buscar a los clientes cuyo nombre tenga una longitud de 7 caracteres.
```sql
SELECT * FROM clientes WHERE nombre LIKE '_______';
```

## Operadores lógicos (AND, OR, NOT)

Los operadpres lógicos nos sirven para componer expresiones de filtrado a partir de las condiciones declaradas.  

|Operador|Significado|
|-------|-----------|
|**AND**|Y lógico|
|**OR**|O lógico|
|**NOT**|Negación lógica|

La precedencia y asociatividad es la habitual definida en la lógica. En cualquier caso, cuando incluya expresiones que empleen varios de estos operadores es recomendable usar paréntesis para evitar errores. Por ejemplo:  

```sql
SELECT * 
FROM clientes  
WHERE ciudad='alto hospicio' AND nombre='marco' OR ciudad='angol' AND NOT nombre='felipe';
```

Devuelve los clientes pertenecientes a la ciudad de alto hospicio y que tengan el nombre de marco o bien a los clientes que sean de angol y que no tengan el nombre de felipe.  

La misma consulta se puede expresar de forma más clara con paréntesis:  

```sql
SELECT * 
FROM clientes  
WHERE (ciudad='alto hospicio' AND nombre='marco') OR 
(ciudad='angol' AND (NOT nombre='felipe');
```

O bién si el NOT nos parece más evidente, podemos excluir el paréntesis interior, a nuestro gusto siempre conservando el significado que queríamos dar a la operación.  

## Ordenar registros : `(ORDER BY)`

### Ordenar según criterios

Podemos ordenar los registros devueltos por una consulta por el campo o campos que estimemos oportunos:  

```sql
SELECT * 
FROM clientes
ORDER BY nombre ASC
```

Esta consulta devolvería todas los clientes ordenados alfabéticamente por el nombre. Podemos indicar **ASC** (ascendente) o **DESC** (descendente), el comportamiento por defecto será el orden ascendente (ASC).  

## Consultas agrupadas : `GROUP BY`

Mostrar información a nivel de cada registro individual de la base de datos es algo que hacemos frecuentemente. Ahora bien, podemos querer obtener información, como es el caso de contar un número de líneas de pedido, sumar el precio de todas las líneas por cada pedido, etc. Para ello, debemos emplear funciones de agregado y en la mayoría de los casos agrupar por algún campo.  

Así, para ver el número total de registros podemos hacer:  

```sql
SELECT count(*)
FROM lineaPedidos
```

Si por el contrario deseamos obtener el total de líneas por pedido, debemos indicar que agrupe por idPedido, lo que contará todos los registros con el mismo idPedido y calculará su cuenta:  

```sql
SELECT idPedido, count(*)
FROM lineaPedidos
GROUP BY idPedido
```

¿Y si queremos hallar la media de los precios por cada pedido? En ese caso necesitamos de nuevo agrupar por pedido.  

```sql
SELECT idPedido, AVG(*)
FROM lineaPedidos
GROUP BY idPedido
```


Igualmente, podríamos aplicar un redondeo `ROUND` sobre la media, para dejarlo con 2 decimales, y aplicarle un alias `AS` para el nombre del dato de salida.  

```sql
SELECT idPedido, ROUND(AVG(precioLinea),2) AS media
FROM lineaPedidos
GROUP BY idPedido
```

O podríamos establecer una **condición sobre el dato agrupado** `HAVING`, de forma que solamente se muestren las medias menores que 10.


```sql
SELECT idPedido, ROUND(AVG(precioLinea),2) AS media
FROM lineaPedidos
GROUP BY idPedido
HAVING AVG(precioLinea) < 10
```