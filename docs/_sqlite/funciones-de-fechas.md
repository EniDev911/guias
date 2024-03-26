---
layout: default
title: Sqlite3 Fechas
---

## Almacenamiento de fechas

Podemos definir un tipo de dato `text` y respetar el formato [ISO 8601](https://www.w3.org/TR/NOTE-datetime){:target='blank'}, que es un estándar que establece el siguiente formato para almacenar fecha y hora:

```
YYY-MM-DD HH:MM:SS
```

Debemos respetar el orden:

- `YYYY` = 4 dígitos para el año
- `MM` = 2 dígitos para el mes (01 = enero, etc.)
- `DD` = 2 dígitos para el día del mes (01 a 31)
- `  ` = Un espacio para separar la fecha de la hora
- `hh` = 2 dígitos para la hora (00 a 23)
- `mm` = 2 dígitos para los minutos (00 a 59)
- `ss` = 2 dígitos para los segundos (00 a 59)

### Primer ejemplo

Creamos la tabla con la siguiente estructura:

{% include code-header.html %}
```sql
CREATE TABLE empleados (
	nombre text,
	fechaingreso text
);
```

Para guardar datos de fecha podemos usar la función `date()`:

{% include code-header.html %}
```sql
INSERT INTO empleados ('Marco', date())
```

---

## Fecha y hora actuales

Es bastante fácil obtener la fecha y hora actuales con SQLite. Para ello podemos utilizar las funciones integradas `DATE('now')` y `TIME('now')`.

En los siguientes ejemplos se puede ver su funcionamiento:

{% include code-header.html %}
```sql
SELECT DATE('now'); -- Retorna fecha actual formato 'YYYY-MM-DD'
SELECT TIME('now'); -- Retorna fecha actual formato 'hh:mm:ss'
SELECT DATETIME('now'); -- Retorna fecha actual formato 'YYYY-MM-DD hh:mm:ss'
```

---

## Partes de fechas

Veamos en detalle la función incorporada `strftime` con la ayuda de la cual podemos extraer una parte específica de alguna fecha.

Esta función toma una cadena de formato como primer argumento y un valor de fecha u hora como segundo argumento. Podemos utilizar especificadores de formato para extraer diferentes partes de una fecha u hora.

A continuación se muestra una lista con especificadores y datos extraídos:

- `'%Y'`: extrae el año de una fecha
- `'%m'`: extrae el mes de una fecha
- `'%d'`: extrae el día de una fecha
- `'%H'`: extrae la hora de una fecha
- `'%M'`: extrae el minuto de una fecha
- `'%S'`: extrae el segundo de una fecha

En los siguientes ejemplos se puede ver su funcionamiento:

{% include code-header.html %}
```sql
SELECT strftime('%Y', '2023-03-05'); -- Retorna el año en formato 'YYYY'

SELECT strftime('%m', '2023-03-05'); -- Retorna el mes en formato 'MM'

SELECT strftime('%d', '2023-03-05'); -- Retorna el día en formato 'DD'

SELECT strftime('%H', '2023-03-05 12:00:00'); -- Retorna la hora en formato 'hh'

SELECT strftime('%M', '2023-03-05 12:30:00'); -- Retorna el minuto en formato 'mm'

SELECT strftime('%S', '2023-03-05 12:30:30'); -- Retorna el segundo en formato 'ss'
```

---

## Sumar y restar fechas

Para sumar o restar un número específico de días o unidades de tiempo de un valor de fecha u hora, puede utilizar las funciones integradas `date()`, `time()`, `datetime()`.

Esta función toma un valor de fecha u hora como primer argumento y una cadena modificadora como segundo argumento.

La cadena modificadora es una combinación de un número y un especificador de unidad. Por ejemplo, la cadena modificadora '1 día' se escribiría de la siguiente manera `'+1 day'` y agrega un día a un valor de fecha y la cadena modificadora `+2 hours` agrega dos horas a un valor de hora.

{% include code-header.html %}
```sql
SELECT date('2023-03-01', '+1 day'); -- agrega un día

SELECT datetime('2023-03-05 10:00:00', '+2 hours'); -- Agrega dos horas

SELECT datetime('2023-03-05 10:00:00', '-30 minutes'); -- Resta 30 minutos
```