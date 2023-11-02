---
layout: default
title: "Módulo - sqlite3"
css:
  custom: |
    strong { color: #DA3;  }
    strong { color:  #d94; }
    thead { background: #000; border: 1px solid #AAA }
    tbody { border: 1px solid #AAA }
    tr td:first-child { width: 1%; white-space: nowrap;}
    tbody tr:hover { background: #111; }
    h3 { color: #dd5; }
---


## Python DB-API 2.0 resumido

Python DB-API es un conjuto de estándares recomendados por un grupo de interés especial para la estandarización de módulos de base de datos. Los módulos de Python proporcionan funcionalidad de interfaz de base de datos, todos los productos de base de datos deben cumplir con este estándar. Los estándares DB-API se modificaron aún más a DB-API 2.0 mediante otra propuesta de mejora Python [PEP-249](https://www.python.org/dev/peps/pep-0249){:target='_blank' class='link'}

Según los estándares prescritos, el primer paso del proceso es obtener la conexión con el objeto que representa la base de datos. Para establecer una conexión con una base de datos SQLite, es necesario importar el módulo sqlite3 y ejecutar la función `connect()`.  

La función **`connect()`** devuelve un objeto de conexión que hace referencia a la base de datos existente o una nueva base de datos si no existe.  

Los siguientes métodos se definen en la clase de conexión.


| Método | Descripción |
| ------ | ----------- |
|**cursor()**| Devuelve un objeto cursor que usa esta conexión.|
|**commit()**| Compromete explícitamente cualquier transacción pendiente a la base de datos.|
|**rollback()**| Este método opcional hace que una transacción se retrotraiga al punto de partida. Puede que no se implemente en todas partes.|
|**close()**| Cierra la conexión a la base de datos de forma permanente. Los intentos de usar la conexión después de llamar a este método generarán un error DB-API.|

Un cursor es un objeto de Python que le permite trabajar con la base de datos. Actúa como un identificador para una consulta SQL determinada; permite la recuperación de una o más filas del resultado. Por lo tanto, se obtiene un objeto de cursor de la conexión para ejecutar consultas SQL utilizando la siguiente declaración:  

{: .clipboard .compiler.python }
```py
import sqlite3

db_connection = sqlite3.connect(':memory:')
cur = db_connection.cursor()
print(cur)
```

Los siguientes métodos del objeto cursor son útiles.

| Método | Descripción |
| ------ | ----------- |
|**execute()**| Ejecuta la consulta SQL en un parámetro de cadena.|
|**executemany()**| Ejecuta la consulta SQL usando un conjunto de parámetros en la lista de tuplas.|
|**fetchone()**| Obtiene la siguiente fila del conjunto de resultados de la consulta.|
|**fetchall()**| Obtiene todas las filas restante del conjunto de resultados de la consulta.|
|**close()**| Cierra el objeto cursor.|

Los métodos `commit()` y `rollback()` de la clase de conexión garantizan el control de transacciones. El método `execute()` del cursor recibe una cadena que contiene la consulta SQL. Una cadena que tiene una consulta SQL incorrecta genera una excepción, que debe manejarse correctamente. Es por eso que el método **`execute()`** se coloca dentro del bloque **`try`** y el efecto de la consulta SQL se guarda persistentemente usando el método **`commit()`**. Sin embargo, si la consulta SQL falla, el bloque **`except`** procesa la excepción resultante y la transacción pendiente se deshace mediante el método **`rollback()`**. El uso típico del método **`execute()`** es el siguiente:


{: .clipboard }
```py
try:
	cur = db.cursor()
	cur.execute("Query")
	db.commit()
	print("success message")
except:
	print("error")
	db.rollback()
db.close()
```

## Crear una nueva tabla

Una cadena que encierra la consulta **`CREATE TABLE`** se pasa como parámetros al método **`execute()`** del objeto cursor. El siguiente código crea las tabla **students** en la base de datos **university.db**

{% capture create_table_student %}
{% highlight python %}
{{ site.data.examples.python.tutorial.modulo_sqlite3.create_table_student }} 
{% endhighlight %}
{% endcapture %}

{% include tabs.html
	id='create_table_student'
	tab_1='demo.py'
	bloque_1=create_table_student
%}

Esto se puede verificar usando el comando **.tables** en sqlite shell. 

```
sqlite3 univerty.db
===================
Sqlite>.tables
```

---


## Insertar un registro

Una vez más, el método `.execute()` del objeto cursor debe llamarse con un argumento de cadena que represente la sintaxis de la consulta **`INSERT`** se define de la siguiente forma: 

{: .clipboard }
```py
qry = '''INSERT INTO students (name, age, note) 
		 VALUES ('mark', 31, 6.5);'''
```

Tenemos que usarlo como parámetro del método **execute()**. Para obtener en cuenta las posibles excepciones, la declaración **execute()** se coloca en el bloque **try** como se explicó anteriormente.  

Puede verificar el resultado utilizando la consulta **SELECT** en el shell Sqlite.


```
sqlite3 univerty.db
===================
Sqlite>.SELECT * FROM students;
===============================
1 | Mark | 31 | 6.5,0 
```  

## Usar parámetros en una consulta

A menudo, los valores de las variables de Python deben usarse en operaciones SQL. Una forma es usar la función **`format()`** de las cadenas de Python para poner los datos de Python en una cadena. Sin embargo, esto puede provocar una brecha de seguridad para ataques de inyección SQL a un programa. En su lugar utilice la sustitución de parámetros como se recomienda en DB-API de Python. El carácter "?" se utiliza como marcador de posición en la cadena de consulta y se proporciona los valores en forma de tupla en el método **execute()**. El siguiente ejemplo inserta un registro utilizando el método de sustitución de parámetros:  

```py
import sqlite3 
db = sqlite3.connect('univerty.db')
qry = """INSERT INTO students (name, age, note) VALUES (?, ?, ?);"""
try:
	cur = db.cursor()
	cur.execute(qry, ('Jhon', 24, 5.5))
	db.commit()
	print("Inserted successfully..")
except:
	print("Error in operation")
	db.rollback()
db.close()
```

El método **`executemany()`** se utiliza para agregar varios registros a la vez. Los datos que se agregarán deben incluirse en una lista de tuplas, y cada tupla debe contener un registro. El objeto de lista (que contiene tuplas) es el parámetro del método **`executemany()`**, junto con la cadena de consulta.  


```py
import sqlite3

db=sqlite3.connect('university.db')
qry="INSERT INTO students (name, age, note) VALUES (?,?,?);"
students = [('angel', 19, 7.0), ('deepak', 25, 4.6)]

try:
	cur=db.cursor()
	cur.executemany(qry, students)
	db.commit()
	print("rows inserted successfully..")
except:
	print("error in operation")
	db.rollback()
db.close()
```

### <a name="#1">Recuperar registros</a>


Cuando la cadena de consulta contiene una consulta **`SELECT`**, el método **`execute()`** forma un objeto de conjunto de resultados que contiene los registros devueltos. Python DB-API define los métodos para recuperar los registros:  

- **`fetchone()`**: recupera el siguiente registro disponible del conjunto de resultados. Es una tupla que consta de valores de cada columna del registro obtenido.
- **`fetchall()`**: recupera todos los registros restantes en forma de lista de tuplas. Cada tupla corresponde a un registro y contiene valores de cada columna de la tabla.

Cuando use el método **`fetchone()`**, use un bucle para iterar a través del conjunto de resultados, como se muestra a continuación:  

```py
import sqlite3
db = sqlite3.conect('university.db')
qry = 'SELECT * FROM students;'

cur = db.cursor()
cur.execute(qry)
while True:
	record = cur.fetchone()
	if record == None:
		break
	print(record)
db.close()
```


### <a name="#1">Actualizar registros</a>


La cadena de consulta en el método **`execute()`** de contener una sintaxis de una consulta para actualizar. Por ejemplo el valor de `age` a 26 para el estudiante con nombre **mark** definiría una cadena de la siguiente manera:  

```py
qry = "UPDATE students SET age = 26 WHERE name = 'mark';"
``` 

También puede utilizar la técnica de sustitución para pasar el parámetro a la consulta **`UPDATE`**.


```py
import sqlite3
db = sqlite3.connect('university.db')
qry = 'UPDATE FROM students SET age=? WHERE name=?;'
try:
	cur = db.cursor()
	cur.execute(qry, (26, 'mark'))
	print('row updated successfully...')
except:
	print('error in operation')
	db.rollback()
db.close()
```

### <a name="#1">Eliminar registros</a>

La cadena de consulta debe contener la sintaxis de consultas **`DELETE`**. Por ejemplo, el siguiente código se utiliza para eliminar a **mark** de la tabla de de `students`.


```py
qry = "DELETE FROM students WHERE name = 'mark'"
```

Usando la sustitución para pasar el parámetro:

```py
import sqlite3
db = sqlite3.connect('university.db')
qry = "DELETE FROM students WHERE name = ?;"

try:
	cur=db.cursor()
	cur.execute(qry, ('mark',))
	db.commit()
	print("Row deleted successfully...")
except:
	print("error in operation")
	db.rollback()
db.close()
```

SQLite en general, es una base de datos server-less que se puede utilizar en casi todos los lenguajes de programación, incluido Python. Server-less significa que no hay necesidad de instalar un sevidor separado para trabajar con SQLite para que pueda conectarse directamente con la base de datos.

SQLite es una base de datos liviana que proporciona un sistema de administración para bases de datos relacionales y sin mucha configuración. 


### <a name="#1">Crear una conexión</a>

Para utilizar SQLite3 en Python, primero deberás importar el módulo *sqlite3* y
luego crear un objeto de conexión para conectarnos a la base de datos. Este nos permitirá ejecutar las sentencias SQL.  

Un objeto de conexión se crea utilizando el método *connect():*  

```python
import sqlite3

con = sqlite3.connect('mydatabase.db')
```

Se creará un nuevo archivo llamado 'mydatabase.db' donde se almacenará nuestra base de datos.

### <a name="#1">Crear un cursor</a>

Para ejecutar una sentencia sql de SQLite en Python, se necesita de un objeto cursor. Puedes crearlo utilizando el método cursor().

El cursor es un método del objeto de conexión.Para ejecutar sentencias de SQLite3, primero se establece una conexión y luego se crea un objeto cursor utilizando el objeto de conexión de la siguiente manera:

```python
con = sqlite3.connect('mydatabase.db')
cur = con.cursor()
```
Ahora que tenemos el objeto cursor almacenado en la variable cur podemos llamar al método *execute()* para ejecutar cualquier consulta sql.



### <a name="#2">Crear una base de datos en memoria</a>

Cuando creas una conexión con SQLite, un archivo de base de datos se crea automáticamente si no existe ya. Este archivo de base de datos se crea en el disco, ademas, también podemos crear una base de datos que se carge en la RAM usando el siguiente argumento en el método *connect()*  

```python
con = sqlite.connect(':memory:')
```
Con el método de conexión. Esta base de datos se llama base de datos en memoria.

Considera el código a continuación en el que creamos una base de datos con los bloques **try**, **except** y **finally** para manejar cualquier excepción:  

```python
import sqlite3
from sqlite3 import Error

def sql_connection():
    try:
        con = sqlite3.connect(':memory:')
        print("Conexión establecida: Base de datos creada en memoria")

    except Error:
        print(Error)

    finally:
        con.close()

sql_connection()
```  

Primero, se importa el módulo *sqlite3*, luego se define una función *sql_connection.* Dentro de la función, tenemos un bloque *try* donde la función *connect()* está devolviendo un objeto de conexión después de establecer la conexión.  

Luego tenemos un bloque *except*, que en caso de excepciones, imprime el mensaje de error. Si no hay errores, se establecerá la conexión y se mostrará un mensaje de la siguiente manera.  


### <a name="#2">Crear una tabla</a>

Para crear una tabla en SQLite3, es similar a cualquier sentencia sql me refiero a la instrucción **CREATE TABLE** toda la sentencia debe ir dentro del método *execute()*.

Considera los siguientes 3 pasos: 
	
1. Se crea un objeto de conexión.
2. El objeto cursor se crea utilizando el objeto de conexión.
3. Usando el objeto cursor, se llama al método *execute()* para ejecutar la consulta.

Vamos a crear una tabla de ejemplo que se llamará **Empleados** y tendrá los siguientes atributos:  

- id
- nombre
- salario
- departamento
- cargo

EL código para ello es el siguiente:  

```python
import sqlite3
from sqlite3 import Error

def sql_connection():
    try:
        con = sqlite3.connect('mydatabase.db')
        return con

    except Error as e:
    	print('Error: ', e)

def run_query(sql, params=None):
	con = sql_connection()
	cur = con.cursor()
	try:
		cur.execute(query, params)
		con.commit()
	except Error as e:
		print('Error: ', e)

sql = '''CREATE TABLE empleados(
				id INTEGER AUTOINCREMENT,
				nombre TEXT,
				salario REAL,
				departamemto TEXT,
				cargo TEXT)'''
run_query(sql)
```


### <a name="objConnection">Objetos de conexión</a>

Clase : sqlite3.Connection

Una conexión a base de datos SQLite tiene los siguientes atributos y métodos.  


- **insolation_level**  
Obtener o configurar el actual nivel de insolación. **`None`** para modo *autocommit* o puede ser `<<DEFERRED>>` `<<IMMEDIATE>>` o `<<EXCLUSIVE>>`. Ver la sección [Controlando Transacciones](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3-controlling-transactions)


- **in_transaction**  
**`True`** si una transacción está activa (existen cambios *uncommited*), **`False`** en sentido contrario. Atributo de solo lectura. 

- **cursor(factory=Cursor)**  
El método cursor acepta un único parámetro opcional *factory*. Si es agregado, éste debe ser invocable que retorna una instancia de [Cursor](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Cursor) o sus subclases.

- **commit()**  
Este método asigna la transacción actual. Si no se llama este método, cualquier cosa hecha desde la última llamada de **`commit()`** no es visible para otras conexiones de bases de datos. Si se pregunta el porqué no se ven los datos que escribiste, por favor verifica que no olvidaste llamar este método.

- **rollback()**  
Este método retrocede cualquier cambio en la base de datos desde la llamada del último **`commit()`**.



### <a name="#7">Objetos Cursor</a>

class sqlite3.**Cursor**


- **execute(sql[, parameters])**  
Ejecuta una sentencia SQL. Los valores pueden vincularse a la sentencia utilizando [placeholder](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3-placeholders).

- **executemany(sql, sql_of_parameters)**  
Ejecuta un comando SQL parametrizado contra todas las secuencias o asignaciones de parámetros que se encuentran en la secuencia **`seq_of_parameters`**. El módulo sqlite3 también permite usar un [iterator](https://docs.python.org/es/3.10/glossary.html#term-iterator) que produce parámetros en lugar de una secuencia.  

```python
import sqlite3 


class IterChars:
	def __init__(self):
		self.count = ord('a')

	def __iter__(self):
		return self

	def __next__(self):
		if self.count > ord('z'):
			raise StopIteration
		self.count += 1
		return (chr(self.count - 1), )

con = sqlite3.connect(":memory:")
cur = con.cursor()
cur.execute("create table characters(c)")

theIter = IterChars()
cur.executemany("insert into characters(c) values (?)", theIter)

cur.execute("select c from characters")
print(cur.fetchall())

con.close()

```

Aquí un ejemplo usando un [generador](https://docs.python.org/3/glossary.html#term-generator)

```python
import sqlite3 
import string 


def char_generator():
	for c in string.ascii_lowercase:
		yield (c, )

cnx = sqlite3.connect(":memory:")
cur = cnx.cursor()
cur.execute("CREATE TABLE characters(c)")

cur.executemany("INSERT INTO characters (c) VALUES (?)", char_generator())
cur.execute("SELECT c FROM characters")
print(cur.fetchall())

cnx.close()

```

- **executescript(sql_script)**  
Este es un método de conveniencia no estándar para ejecutar varias sentencias SQL a la vez. Primero emite una declaración **`COMMIT`**, luego ejecuta el script SQL que obtiene como parámetro. Este método ignora **`isolation_level`**, cualquier control de transacción debe agregarse a la sentencia SQL dentro del parámetro `sql_script`.  
`sql_script` puede usar una instancia de **str**.

Ejemplo:  

```python
import sqlite3

cnx = sqlite3.connect(":memory:")
cur = cnx.cursor()
cur.executescript("""
	CREATE TABLE person(
		firstname,
		lastname,
		age
	);

	CREATE TABLE book(
		title,
		author,
		published
	);

	INSERT INTO book(title, author, pusblished)
	VALUES(
		'Dirk Gently''s Holistic Detective Agency',
		'Douglas Adams',
		1987
	);
	""")
cnx.close()
```

- **fetchone()**  
Obtiene la siguiente fila de un conjunto de resultado, retorna una única secuencia, o `None` cuando no hay más datos disponibles.  

- **fetchmany(size=cursor.arraysize)**  
Obtiene el siguiente conjunto de filas del resultado de una consulta, retornando una lista. Una lista vacía es retornada es retornada cuando no hay más filas disponibles.  
El número de filas a obtener por llamado es especificado por el parámetro `size`. Si no es suministrado, el `arraysize` del `cursor` determina el número de filas a obtener. El método debería intentar obtener tantas filas como las indicadas por el parámetro `size`. Si esto no es posible debido a que el número especificado de filas no está disponible, entonces menos filas deberán ser retornadas.  

>Nótese que hay consideraciones de desempeño involucradas con el parámetro `size`. Para un optimo desempeño, es usualmente mejor usar el atributo `arraysize`. Si el parámetro `size` es usado, entonces es mejor retener el mismo valor de una siguiente llamada a `fetchmany()`.



- **close()**  
Cierra el cursor ahora (en lugar que cuando **`__del__`** es llamado)  
El cursor no será usable de este punto en adelante; una excepción de tipo `ProgrammingError` será lanzada si se intenta cualquier operación con el cursor.  


- **connection**  
Este atributo de solo lectura provee la [Connection](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Connection) de la base de datos SQLite usada por el objeto [Cursor](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Cursor). Un objeto creado por la llamada a `con.cursor()` tendrá un atributo `connection` que se refiere a `con`:  

```python
import sqlite3

con = sqlite3.connect(":memory:")
cur = con.cursor()
print(cur.connection == con)
# True
```

### <a name="#7">Objetos Fila</a>

Clase sqlite3.**Row**  
Una instancia de **Row** sirve como una alternativa a [row_factory](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Connection.row_factory) para objetos [connection](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Connection). Esto trata de imitar una tupla en su mayoría de características.  


Soporta acceso mapeado por nombre de columna e índice, iteración, representación, pruebas de igualdad y [len](https://docs.python.org/es/3.10/library/functions.html#len).

Si dos objetos [Row](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Row) tienen exactamente las mismas columnas y sus miembros son iguales, entonces se comparan a igual.  


- **keys**  
Este método retorna una lista con los combres de columnas. Inmediatamente después de una consulta, es el primer miembro de cada tupla [Cursor.description](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Cursor.description).  

Vamos a asumir que se inicializa una tabla como en el ejemplo dado:  

```python
cnx = sqlite3.connect(":memory:")
cur = cnx.cursor()
cur.execute('''
		CREATE TABLE stock
		(date TEXT, trans TEXT, symbol TEXT,
		qty REAL, price REAL)
		''')
cur.execute("""
		INSERT INTO stock
		VALUES ('2020-01-05', 'BUY', 'RHAT', 100, 35.14)
		""")
cnx.commit()
cur.close()
```

Ahora conectamos con [Row](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Row)  

```python
cnx.row_factory = sqlite3.Row
cur = cnx.cursor()
cur.execute("SELECT * FROM stocks")
r = cur.fetchone()
print(type(r))
# <class 'sqlite3.Row'>
t = tuple(r)
print(t)
# ('2020-01-05', 'BUY', 'RHAT', 100, 26.14)
print(len(t))
# 5
print(r[2])
# 'RHAT'
columns = t.keys()
print(columns)
# ['date', 'trans', 'symbol', 'qty', 'price']
print(columns['qty'])
# 100.0
```


### <a name="#7">Excepciones SQLite3</a>

Las excepciones son errores en tiempo de ejecución. En **Python**, todas las excepciones son instancias de la clase derivada BaseException.

En SQLite3, tenemos las siguientes excepciones principales de Python: 


- *exception* sqlite3.**Warning**  
Una subclase de [Exception](https://docs.python.org/es/3.10/library/exceptions.html#Exception)

- *exception* sqlite3.**Error**  
La clase base de otras excepciones en este módulo. Es una subclase de [Exception](https://docs.python.org/es/3.10/library/exceptions.html#Exception).  

- *exception* sqlite3.**DatabaseError**  
Excepción lanzada para errores que están relacionados con la base de datos.  

- *exception* sqlite3.**IntegrityError**  
Excepción lanzada cuando la integridad de la base de datos es afectada, por ejemplo la comprobación de una llave foránea falla. Es una subclase de [DatabaseError](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.DatabaseError).  

- *exception* sqlite3.**ProgrammingError**  
La excepción ProgrammingError se produce cuando hay errores de sintaxis o no se encuentra la tabla o se llama a la función con un número incorrecto de parámetros. Es una subclase de [DatabaseError](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.DatabaseError). 

- *exception* sqlite3.**OperationalError**  

Excepción lanzada por errores relacionados por la operación de la base de datos y no necesariamente bajo el control del programador, por ejemplo ocurre una desconexión inusual, el nombre de la fuente de datos no es encontradom una transacción no pudo ser procesada, etc. Esta es una subclase de [DatabaseError](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.DatabaseError).  



### <a name="SqlitePythonTypes">SQLite y tipos de Python</a>

SQLite soporrta de forma nativa los siguientes tipos: **`NULL`**, **`INTEGER`**, **`REAL`**, **`TEXT`**, **`BLOB`**.  

Los siguientes tipos de Python se pueden enviar a SQLite sin problemas alguno.  


|Tipos de Python|Tipo de SQLite|
|---------------|---------------|
|**`None`**|**`NULL`**|
|**`int`**|**`INTEGER`**|
|**`float`**|**`REAL`**|
|**`str`**|**`TEXT`**|
|**`bytes`**|**`BLOB`**|


De esta forma es como los tipos de SQLite son convertidos a tipos de Python por defecto:  

|Tipo de SQLite|Tipos de Python|
|---------------|---------------|
|**`NULL`**|**`None`**|
|**`INTEGER`**|**`int`**|
|**`REAL`**|**`float`**|
|**`TEXT`**|depende de [text_factory](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Connection.text_factory), por defecto es [str](https://docs.python.org/es/3.10/library/stdtypes.html#str)|
|**`BLOB`**|**`bytes`**|


El sistema de tipos del módulo sqlite3 es extensible en dos formas: se puede almacenar tipos de Python adicionales en una base de datos SQLite vía adaptación de objetos, y se puede permitir que el módulo sqlite3 convierta tipos SQLite a diferentes tipos de Python vía convertidores.

### <a name="UsingEfficient">Usando sqlite3 eficientemente</a>

- **Usando métodos atajo**  
Usando los métodos no estándar **`execute()`**, **`executemany()`** y **`executescript()`** del objeto [Connection](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Connection), el código puede ser escrito más consistentemente porque no se tienen que crear explícitamente los (a menudos superfluos) objetos [Cursor](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Cursor). En cambio, los objetos de [Cursor](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Cursor) son creados implícitamente y estos métodos atajo retornan los objetos cursor. De esta forma, se puede ejecutar una sentencia **`SELECT`** e iterar directamente sobre él, solamente usando una única llamada al objeto [Connection](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Connection).  


```python
import sqlite3

langs = [
	("C++", 1985),
	("Objetive-C", 1984),
	]

cnx = sqlite3.connect(":memory:")

# Create the table
cnx.execute("CREATE TABLE lang (name, first_appeared)")

# Fill the table
cnx.executemany("INSERT INTO lang (name, first_appeared) VALUES (?, ?)", langs)

# Print the table contents
for row in cnx.execute("SELECT name, first_appeared FROM lang"):
	print(row)

print("I just deleted", cnx.execute("delete from lang").rowcount, "rows")
# close is not a shortcut method and it's not called automatically,
# so the connection object should be closed manually
cnx.close()
```

- **Accediendo a las columnas  por el nombre en lugar del índice**  
Una característica útil del módulo sqlite3 en la clase incluida en [sqlite.Row](https://docs.python.org/es/3.10/library/sqlite3.html#sqlite3.Row) diseñada para ser usada como una fábrica de filas.  

Filas envueltas con esta clase pueden ser accedidas tanto por índice (al igual que las tuplas) asi como por nombre insensible a mayúsculas o minúsculas: 

```python
import sqlite3

con = sqlite3.connect(":memory:")
con.row_factory = sqlite3.Row 

cur = con.cursor()
cur.execute("SELECT 'Jhon' as name, 42 as age")

for row in cur:
	assert row[0] == row["name"]
	assert row["name"] == row["nAme"]
	assert row[1] == row["age"]
	assert row[1] == row["AgE"]
con.close()
```

- **Usando la conexión como un administrador de contexto**  
Los objetos de conexión pueden ser usados como administradores de contexto que automáticamente realizan transacciones **`commit`** o **`rollback`**. En el evento de una excepción, la transacción es retrocedida; de otra forma, la transacción es confirmada.  



```python
import sqlite3

cnx = sqlite3.connect(":memory:")
cnx.execute("CREATE TABLE lang (id INTEGER PRIMARY KEY, name VARCHAR UNIQUE)")

# En caso de exito cnx.commit() se llama automáticamente después
with cnx:
	cnx.execute("INSERT INTO lang(name() VALUES(?)", ("Python",))

# cnx.rollback() se llama después de que el bloque with termine con una excepción. 
# La excepción debe capturarse
try:
	with cnx:
		cnx.execute("INSERT INTO lang(name) VALUES(?)", ("Python",))
except sqlite3.IntegrityError:
	print("No puede agregar el mismo valor 2 veces")
# El objeto de conexión utilizado como administrador de contexto
# solo confirma o revierte transacciones, por lo que el objeto de conexión
# debe cerrarse manualmente.
```



