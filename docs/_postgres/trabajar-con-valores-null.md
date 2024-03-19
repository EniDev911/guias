---
layout: default
title: "Manejando valores NULL"
---


## ¿Que es COALESCE en PostgreSQL?

`COALESCE` es una función en PostgreSQL que acepta multiples argumentos y devuelve el primer valor que no sea `NULL`. Devuelve `NULL` sólo si todos los elementos en la lista de argumentos son `NULL`. La función es particularmente útil cuando se desea remplazar datos faltantes con alternativas significativas o necesita realizar operaciones condicionales basadas en la presencia de valores `NULL`. 

## Cómo utilizar COALESCE en PostgreSQL

La función como sabemos acepta una lista de argumentos separados por coma, con al menos un elementos. PostgreSQL los evaluará en orden, de izquierda a derecha, hasta que encuentre un valor `NULL`. 

Al igual que cualquier otra función de PostgreSQL, puede usarla en cualquier cláusula de la consulta, incluido `SELECT`, `WHERE`, `JOIN`, `ORDER BY`, `GROUP BY` y `HAVING`.

**Ejemplo:**

{% include code-header.html %}
```sql
SELECT COALESCE(age, 'N/A') AS age
FROM users;
```

Cuando un registro tiene un valor `NULL` en la columna `age`, la función `COALESCE` reemplazará con la cadena `N/A` en el conjunto de resultados.

## Pros y contras de COALESCE

Es momento de profundizar en los beneficios y desventajas de utilizar la función `COALESCE` de PostgreSQL.

### Ventajas

**Simplifica la lógica de consulta**
: proporciona una manera concisa y efectiva de manejar valores `NULL`. Esto reduce la necesidad de una lógica condicional compleja y hace que su código SQL sea más corto y más fácil de mantener.


**Facilita el manejo de valores NULL**
: gracias a esta función, puedes manejar valores `NULL` directamente en la base de datos. Generalmente, esto es más rápido y menos engorroso que hacerlo a nivel de aplicación. Además, diferentes interfaces pueden abordar los datos faltantes de diferentes maneras, lo que genera inconsistencias.


**Flexibles con los tipos de datos**
: admite varios tipos de datos, incluidas cadenas y números. Cuando es necesario, realiza automáticamente conversiones de tipos implícitas. En el caso de tipos de datos no admitidos, la consulta fallará con un mensaje similar al siguiente `'ERROR: COALESCE types and cannot be matched'`.

### Contras

**Limitado al primer valor no NULL**
: este comportamiento es adecuado para escenarios en los que solo es necesario reemplazar un único valor `NULL`. Si tiene que realizar operaciones o sustituciones en múltiples valores `NULL` en una sola consulta, necesitará consultas más complejas.

**Impacto potencial en la legibilidad de la consulta**
: a medida que aumenta el número de argumentos o cuando se combina con otra lógica condicional, la consulta de vuelve más larga, lo que hace más difícil de leer.

**Sin control sobre el orden de evaluación**
: su orden de evaluación de argumentos fijos representa una limitación en escenarios específicos donde se requiere una lógica diferente. En tales casos, enfoques alternativos como las declaraciones `CASE` pueden ofrecer más flexibilidad y control.

---

## PostgreSQL COALESCE: Casos de uso

Exploremos algunos escenarios del mundo real donde la función se puede aplicar de manera efectiva.

### Manejo de valores faltantes

Supongamos que tenemos una tabla **clientes** y algunos usuarios no proporcionaron sus nombres completos por razones de privacidad. Podemos usar la función `COALESCE` para remplazar aquellos valores `NULL` por cadenas predeterminadas, lo que garantiza que la consulta produzca valores coherentes.

{% include code-header.html %}
```sql
-- 1 Creamos la tabla clientes con sus atributos
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL,
  fullname VARCHAR(50)
);

-- Insertamos registros. \N Representa un valor null
COPY clients (fullname) FROM stdin;
Marco Contreras
\N
\N
Axel Valdebenito
\N
Juan Pablo Medina
Manuel Navarro
Fernando Medalla
Miguel Correa
Daniel Campillay
\N
Camilo Santander
\.
-- 3. Selccionar campos condicionadamente usando COALESCE
SELECT id, COALESCE(fullname, 'Usuario Anónimo') as clients 
FROM clients;
```

De esta forma en la interfaz, podemos mostrar estos campos de información de marcador de posición en lugar de los datos faltantes para mejorar la experiencia del usuario.

## Realizar operaciones matemáticas con valores NULL

Considere un escenario en el que tiene una tabla de **productos** que almacena el precio y el porcentaje de descuento. Sin embargo, es posible que algunos productos no tengan un descuento especificado. En ese caso, el descuento en la columna de esos registros es `NULL`.

Supongamos que desea calcular el precio final después de aplicar el descuento. Esta consulta en primera instancia se puede terminar escribiendo:

{% include code-header.html %}
```sql
-- 1 Creamos la tabla clientes con sus atributos
CREATE TABLE IF NOT EXISTS products (
  id SERIAL,
  name VARCHAR(50),
  price INT4,
  discount DECIMAL
);
-- 2 Truncamos la tabla para evitar duplicados por cada ejecución del script
TRUNCATE TABLE products RESTART IDENTITY;
-- 3 Formateamos la salida para mostrar los valores null
\pset null '<null>'
-- 4 Insertamos registros en la tabla productos
COPY products (name, price, discount) FROM stdin WITH DELIMITER AS ',' NULL AS '';
Super8,1200,
Super9,1400,0.2
Super10,1400,0.2
\.
SELECT
    id,
    name,
    discount,
    price,
    ROUND(price * (1 - discount)) AS final_price
FROM products;
```

Como podemos ver, esta consulta produce resultados incorrectos. `final_price` nunca debería ser `NULL` por cada descuento que es `NULL`. Esto ocurre porque al multiplicar un `NULL` por un número produce `NULL` en PostgreSQL.

Es por ello que podemos evitarlo fácilmente y lograr el objetivo deseado utilizando `COALESCE` de la siguiente manera:

{% include code-header.html %}
```sql
-- 1 Creamos la tabla clientes con sus atributos
CREATE TABLE IF NOT EXISTS products (
  id SERIAL,
  name VARCHAR(50),
  price INT4,
  discount DECIMAL
);
-- 2 Truncamos la tabla para evitar duplicados por cada ejecución del script
TRUNCATE TABLE products RESTART IDENTITY;
-- 3 Formateamos la salida para mostrar los valores null
\pset null '<null>'
-- 4 Insertamos registros en la tabla productos
COPY products (name, price, discount) FROM stdin WITH DELIMITER AS ',' NULL AS '';
Super8,1200,
Super9,1400,0.2
Super10,1400,0.2
\.
SELECT
    id,
    name,
    discount,
    price,
    ROUND(price * (1 - COALESCE(discount, 0))) AS final_price
FROM products;
```
