---
layout: default
title: "Poblando una base de datos con seeds"
---


En el archivo `db/seed.rb` podemos escribir cualquier código Ruby válido, así que podemos hacer cosas más complejas como generar información aleatoria como lo siguiente:

```ruby
100.times do |i|
  Book.create(
    title: "Book #{i}", 
    author: "Author #{i}",
    description: "Description #{i}",
    image_url: "http://lorempixel.com/320/460/",
    publication_date: "01-01-2000", price: 1)
end
```


