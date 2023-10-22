---
layout: default
title: 'Método collection_check_boxes'
---

Devuelve un tag <span class="tag">input type=&quot;checkbox&quot;</span> para una colección de valores de una respectiva instancia. Se seleccionará el valor del objeto devuelto al llamar al método de instancia. Si el método del objeto llamado devuelve `nil`, no se realiza ninguna selección.  

Los parámetros `:value_method` y `:text_method` son métodos que se llamarán por cada miembro de la colección. Los valores devueltos se utilizan como el atributo `value` y contenido de cada etiqueta de la casilla de verificación, respectivamente.

Ejemplo de estructura de objeto para usar con este método:  


{: .clipboard }
{% highlight ruby %}
class Post < ActiveRecord::Base
  has_and_belongs_to_many :authors
end
class Author < ActiveRecord::Base
  has_and_belongs_to_many :posts
  def name_with_initial
    "#{first_name.first}. #{last_name}"
  end
end
{% endhighlight %}

Ejemplo de uso (seleccionando el Autor para una instancia de Post, @post)

```erb
collection_check_boxes(:post, :author_ids, Author.all, :id, :name_with_initial)
```

También es posible personalizar la forma en que se mostrarán los elementos dando un bloque al método:  

```ruby
collection_check_boxes(:post, :author_ids, Author.all, :id, :name_with_initial) do |b|
  b.label { b.check_box }
end
```