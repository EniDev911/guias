---
layout: default
title: Tabs en Jekyll
categories: ['plugin']
---

## INSTALACIÓN

Añadir la siguiente línea en el `Gemfile`:

{% include code-header.html file='Gemfile' %}
```ruby
group :jekyll_plugins do
  gem "jekyll-tabs"
end
```

Ahora instalamos la gema, ejecutando:

{% include code-header.html %}
```bash
bundle install
```

Luego agregamos la gema a la lista de complementos en el archivo `_config.yml`:

{% include code-header.html file='_config.yml' %}
```yml
plugins:
  - jekyll-tabs
```

Copiamos el contenido de [este archivo](https://raw.githubusercontent.com/Ovski4/jekyll-tabs/master/docs/tabs.js){: target='_blank'} en `assets/js/tabs.js` y luego incluimos el script en nuestro layout `_layouts/default.html`:

{% include code-header.html file='layouts/default.html' %}
```html
<!DOCTYPE html>
<html lang="en-us">
    <head>
        ...
    </head>
    <body>
      {% raw %}{{ content }}{% endraw %}
      <script src="/assets/js/jekyll-tabs.js"></script>
    </body>
</html>
```

Podemos sentirnos libres de modificar los estilos, pero podemos comenzar con [este archivo](https://raw.githubusercontent.com/Ovski4/jekyll-tabs/master/docs/tabs.css){: target='_blank' } para comenzar.

Pegamos el contenido en `assets/css/custom_tabs.css` y lo incluimos en el layouts:

{% include code-header.html file='layouts/default.html' %}
```html
<!DOCTYPE html>
<html lang="en-us">
    <head>
        ...
        <link rel="stylesheet" href="/assets/css/custom_tabs.css">
    </head>
    <body>
        ...
    </body>
</html>
```

Estamos listo para usar, podemos añadir el siguiente fragmento para probar:

{% include code-header.html %}
````markdown
### First tabs

{% raw %}{% tabs log %}

{% tab log php %}
```php
var_dump('hello');
```
{% endtab %}

{% tab log js %}
```javascript
console.log('hello');
```
{% endtab %}

{% tab log ruby %}
```javascript
pputs 'hello'
```
{% endtab %}

{% endtabs %}

### Second tabs

{% tabs data-struct %}

{% tab data-struct yaml %}
```yaml
hello:
  - 'whatsup'
  - 'hi'
```
{% endtab %}

{% tab data-struct json %}
```json
{
    "hello": ["whatsup", "hi"]
}
```
{% endtab %}

{% endtabs %}{% endraw %}
````

---

## RESULTADO

### Ejemplo 1 jekill-tabs

{% tabs log %}

{% tab log php %}
```php
var_dump('hello');
```
{% endtab %}

{% tab log js %}
```javascript
console.log('hello');
```
{% endtab %}

{% tab log ruby %}
```javascript
pputs 'hello'
```
{% endtab %}

{% endtabs %}

### Ejemplo 2 jekill-tabs

{% tabs data-struct %}

{% tab data-struct yaml %}
```yaml
hello:
  - 'whatsup'
  - 'hi'
```
{% endtab %}

{% tab data-struct json %}
```json
{
    "hello": ["whatsup", "hi"]
}
```
{% endtab %}

{% endtabs %}