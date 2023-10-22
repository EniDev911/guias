---
layout: default
title: "Convenciones"
---

De forma predeterminada, Active Record utiliza algunas convenciones de nomenclatura para averiguar cómo se debe crear la asignación entre modelos y tablas de base de datos. **Rails pluralizará** los nombres de las clases para encontrar la tabla de la base de datos respectiva. 

Entonces para una clase `Book`, se asignará a una tabla con el nombre de `books`. Cuando se usan nombres de clases compuestos por dos o más palabras, el nombres de clases, el nombre de la clase del modelo sebe seguir las convenciones de Ruby, usando la forma `CamelCase`, mientras que el nombre de la tabla debe usar la forma `snake_case`. Ejemplos:  

|Modelo - Clase|Tabla - Esquema|
|:-------------|:--------------|
|`Article`|`articles`|
|`LineItem`|`line_items`|
|`Person`|`people`|


## Convenciones de esquema

Active record usa convenciones de nomenclatura para las columnas en las tablas de la base de datos, según el propósito de estas columnas:

- **Claves foráneas**: estos campos tienen que nombrarse siguiendo el patrón `singularized_table_name_id` (Por ejemplo `book_id`, `article_id`)
- **Claves primarias**: de forma predeterminada, Active Record utilizará un campo de tipo entero con el nombre de `id` (`bigint` para PostgreSQL y MyQL, `integer` para SQLite)


Tambien hay algunos nombres de campos opcionales que agregarán características adicionales a las instancias de Active Record:

- **create_at**: establece automáticamente la fecha y hora cuando se crea el registro por primera vez.
- **update_at**: establece automáticamente la fecha y hora actual cada vez que se crea o actualiza el registro.

---

## Crear modelo con Active Record

Para comenzar a crear modelos de Active Record, debemos crear una clase que hereda de la clase `ApplicationRecord`:  

```ruby
class Product < ApplicationRecord
end
```

Este clase creará un modelo `Product`, asignado a una tabla `products`. Al hacer esto también tendremos la capacidad de mapear las columnas de cada fila en esa tabla con los atributos de la instancia del modelo. Imaginemos que la tabla antes mencionada `products` se creó utilizando la siguiente instrucción SQL:  

```sql
-- POSTGRESQL
CREATE TABLE products (
  id SERIAL,
  name VARCHAR(255),
  PRIMARY KEY(id)
);
```

El esquema anterior declara una tabla con dos columnas: `id` y `name`. Cada fila de esta tabla representa un determinado producto con estos dos parámetro. Por lo tanto, podríamos escribir una representación en una instancia como lo siguiente:  

```ruby
p = Product.new
p.name = "Some product"
puts p.name # "Some product"
```

## Usar convenciones diferentes de nomenclatura

¿Qué sucede si necesitamos seguir una convención de nomenclatura diferente o usar la aplicación de Rails con una base de datos heredada?

`ApplicationRecord` hereda de `ActiveRecord::Base` que define una serie de métodos útiles. Por ejemplo tenemos el método `ActiveRecord::Base.table_name=` para especificar el nombre de la tabla que queremos usar:  


```ruby
class Product < ApplicationRecord
  self.table_name = "my_products"
end
```

Si lo hace, tendrá que definir manualmente el nombre de la clase que aloja las **fixtures** (`my_products.yml`) usando el método `set_fixture_class` en la definición de los test:  

```ruby
class ProductTest < ActiveSupport::TestCase
  set_fixture_class my_products: Product
  fixtures :my_products
  # ...
end
```

También es posible anular la columna que debe usarse como clave principal de la tabla usando el método `ActiveRecord::Base.primary_key=`:   

```ruby
class Product < ApplicationRecord
  self.primary_key = "product_id"
end
```
