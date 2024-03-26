---
layout: default
title: Lectura y escritura de datos
contenido: [crear, leer, actualizar, eliminar]
---

## Contenido

<ul>
{% for item in page.contenido %}
	<li><a href='#{{ item }}'>{{ item }}</a></li>
{% endfor %}
</ul>

**CRUD** es un acrónimo de los cuatro verbos que usamos para operar con datos:  
(`C`: *create*, `R`: *read*, `U`: *update*, `D`: *delete*).

**ActiveRecord** crea automáticamente métodos para permitir que una aplicación lea y manipule datos almacenados en las tablas.

## Crear

Los objetos de **ActiveRecord** se pueden crear a partir de un hash, un bloque o se pueden configurar manualmente sus atributos después de la creación. Tenemos el método `new` que devolverá un nuevo objeto para manipular y también existe el método `create` que devuelve el objeto y además lo guardará como un nuevo registro en la base de datos.

Por ejemplo, dado un modelo para usuarios `User` con los atributos `name` y `occupation`, la llamada al método `create` y guardará el nuevo registro en la base de datos:

```ruby
user = User.create(name: "David", occupation: "programmer")
```

Usando al método `new`, se puede crear una instancia de un objeto (*sin guardarlo*):

```ruby
user = User.new
user.name = "David"
user.occupation = "programmer"
```

Para guardar esta instancia como un nuevo registro en la base de datos, debemos llamar al método `user.save`.

Finalmente, si se proporciona un bloque, tanto para el método `create` y `new` entregarán el nuevo objeto a ese bloque para su inicialización:

```ruby
user = User.new do |u|
  u.name = "David"
  u.occupation = "programmer"
end
```

## Leer

**Active Record** proporciona una robusta API para acceder a los datos dentro de una base de datos. A continuación se muestran algunos ejemplos de diferentes métodos de acceso a datos proporcionados por **Active Record**.

Retornar la colección de todos los usuarios:  

```ruby
users = User.all
```

Retorna el primer registro de la colección de usuarios:

```ruby
user = User.first
```

Retorna el primer registro que coincida con el argumento:

```ruby
david = User.find_by(name: "David")
```

Retornar a todos los usuarios que cumpla con todos los argumentos y ordenarlo en base a un criterio de forma descendente:

```ruby
users = User.where(name: "David", occupation: "programmer").order(create_at: :desc)
```

## Actualizar

Una vez se ha recuperado un objeto de **Active Record**, se pueden modificar sus atributos y se puede guardar en la base de datos con los valores actualizado:

```ruby
user = User.find_by(name: "David")
user.name = "Dave"
user.save
```

Una forma abreviada de esto es usar nombres de atributos de mapeo como un `hash` al valor deseado, dentro del método `update`:

```ruby
user = User.find_by(name: "David")
user.update(name: "Dave")
```

>Esto es más útil cuando se actualizan varios atributos a la vez.

Si, por el contrario, desea actualizar varios registros de forma masiva, puede usar el método `update_all`:

```ruby
User.update_all "max_login_attempts = 3, must_change_password = 'true'"
```

Lo anterior es equivalente a escribir lo siguiente:

```ruby
User.update(:all, max_login_attempts: 3, must_change_password: true)
```

## Eliminar

Asimismo, una vez recuperamos un objeto **Active Record** puede eliminarlo, usando el método `destroy` elimina el registro de la base de datos:


```ruby
user = User.find_by(name: 'David')
user.destroy
```

Si desea eliminar registros de forma masiva o varios, puede usar el método `destroy_all` o `destroy_by`:

```ruby
User.destroy_by(name: "David")
User.destroy_all
```