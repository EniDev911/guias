---
layout: default
title: Agregando reacciones
---


Para agregar un sistema para que los usuarios puedan reaccionar, como muchas páginas de redes sociales que cuentan con reacciones a sus publicaciones, debemos identificar las relaciones para hacernos una idea simple de este caso, veamos el siguiente diagrama:

<pre class="mermaid" style="display: flex; justify-content: center;">
---
title: Ejemplo de diagrama
---
erDiagram
    USUARIO ||--o{ REACCION : tiene
    PUBLICACION ||--o{ REACCION : tiene
</pre>


Podemos usar el generador de rails para crear el modelo `Reaction` el cual tendra como atributos ambas claves foránea para la publicación y el usuario y además una atributo `kind` para establecer el tipo de reacción:

```bash
rails g model Reaction user:references publication:references kind
```

## Estableciendo las relaciones

Para poder entender como resolver las relaciones muchos a muchos en el caso anterior, debemos primero resolver la de 1 a muchos, comenzando desde los usuarios tendríamos que usar primero `has_many :reactions` y segundo resolver el proposito de esta representación de tabla intermedia usando `has_many :publications, through: :reactions`:

```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
	devise :database_authenticatable, :registerable,
	:recoverable, :rememberable, :validatable

	has_many :reactions
	has_many :publications, through: :reactions
end
```



## Limitar las reacciones

Vamos agregar validaciones para el atributo `kind` en el modelo `Reaction`:

```ruby
class Reaction < ApplicationRecord
  belongs_to :publication
  belongs_to :user

  validates :kind, acceptance: {
  	accept: %w[like dislike],
  	message: "(valores posibles: (like, dislike)"
  }

  def self.kinds
  	["Me gusta", "No me gusta"]
  end
end
```

Lo anterior es para validar que el tipo de reacción sólo puede ser 'Me gusta' o 'No me gusta'


## Agregar un controlador en las reacciones 

Usando nuevamente el generador de rails, podemos crear un controlador sin acciones de momento:

```bash
rails g controller reactions
```
