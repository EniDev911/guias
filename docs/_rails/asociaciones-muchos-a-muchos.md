---
layout: default
title: "Asociaciones mucho a mucho"
---

Especificar una relación de muchos a muchos con otra clase significa asociar dos clases a través de una unión intermedia. A menos que la tabla de combinación se especifique explícitamente como una opción, se adivina utilizando el orden léxico de los nombres de clase. Entonces, una unión entre `developer` y `project` dará el nombre de la tabla de unión predeterminado de `developer_projects` porque la letra `'d'` precede a `'p'` alfabéticamente.  

La tabla de combinación no debe tener clave primaria o un modelo asociado. Lo debemos generar manualmente con una migración como la siguiente:  

{% include code-header.html %}
```ruby
class CreateDeveloperProjectsJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :developers, :projects
  end
end
```

También es buena idea agregar índices a cada una de esas columnas para acelerar el proceso de unión. Cuando usamos el generador para crear una nueva migración y nos cree la tabla intermedia, usamos la siguiente combinación:  

{% include code-header.html %}
```bash
rails g migration CreateJoinTableProjectsDevelopers project developer
```

Y nos generará el siguiente código en la migración:  

{% include code-header.html %}
```ruby
class CreateJoinTableProjectsDevelopers < ActiveRecord::Migration[7.0]
  def change
    create_join_table :projects, :developers do |t|
      # t.index [:project_id, :developer_id]
      # t.index [:developer_id, :project_id]
    end
  end
end
```

## Modelos relacionados con has_many y through

Con la asociación `has_many` la podemos configurar usando la opción `:through` en el modelo creando una combinación explícita para recuperar los datos. Esto funciona similar a la asociación `has_and_belongs_to_many`. La ventaja es que podemos agregar validaciones, devoluciones de llamadas (*callbacks*) y atributos adicionales en el modelo. Considerando el siguiente esquema:

{% include code-header.html %}
```ruby
class Author < ActiveRecord::Base
  has_many :authorships
  has_many :books, through: :authorships
end

class Authorship < ActiveRecord::Base
  belongs_to :author
  belongs_to :book
end

@author = Author.first
@author.authorships.collect { |a| a.book } # selecciona todos los libros a los que pertenece la autoría del autor
@author.books # selecciona todos los libros mediante el modelo de unión de autoría
```



