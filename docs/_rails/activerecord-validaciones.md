---
layout: default
title: ActiveRecord - Validaciones
---

**Active Record** nos permite validar el estado de un modelo antes de que se escriba en la base de datos. Hay varios métodos que se pueden usar para verificar el valor de un atributo no esté vacío, sea único y que no se encuentre ya en la base de datos o que siga un formato específico entre otras cosas.


La validación es un tema importante a tener en cuenta a la hora de persistir los datos en una base de datos, por lo que los métodos `save` y `update` lo tienen en cuenta cuando se ejecutan, retornando `false` cuando falla la validación y no realiza ninguna operación en la base de datos. También podemos usar su contrapartida con el operador bang (es decir, `save!` y `update!`), que son más estrictos porque generan la excepción `ActiveRecord::RecordInvalid` si falla la validación. Un ejemplo rápido de ello sería el siguiente:

```ruby
class User < ApplicationRecord
  validates :name, presence: true
end
```

```ruby
user = User.new
user.save # false
user.save! # ActiveRecord::RecordInvalid: Validation failed: Name can't be blank
```


## ¿Cuándo sucede la validación?

Existen dos tipos de objetos de **Active Record**: los que corresponden a una fila dentro de su base de datos y los que no. Cuando se crea un objeto nuevo, por ejemplo, utilizando el método `new`, ese objeto aún no pertenece a la base de datos. Una vez que se llama al método `save`, ese objeto, se guardará en la tabla de base de datos adecuada. **Active Record** utiliza el método de instancia `new_record?` para determinar si un objeto ya está en la base de datos o no. Ejemplo:

```ruby
p = Person.new(name: "John Doe")
p.new_record? # true
p.save # true
p.new_record? # false
```

## Length

Este helper valida la longitud de los valores de los atributos. Proporciona una variedad de opciones, por lo que puuede especificar restricciones de longitud de diferentes maneras:


```ruby
class Person < ApplicationRecord
  validates :name, length: { minimum: 2, message: "(minimo 2 caracteres)" }
  validates :bio, length: { maximum: 500 }
  validates :password, length: { in: 6..20 }
  validates :registration_number, length: { is: 6 }
end
```

