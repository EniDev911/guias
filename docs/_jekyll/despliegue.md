---
layout: default
title: 'Despliegue'
---

Es una buena practica tener un `Gemfile` para nuestro sitio. Esto garantiza que la versión de jekyll y otras gemas se mantenga constante en diferentes entornos.

Crea un `Gemfile` en la raíz. El archivo debe llamarse `Gemfile` y no debe tener ninguna extensión. Para evitar problemas podemos crear este archivo con Bundler y luego agregar la gema jekyll:


{% include code-header.html %}
```bash
bundle init
bundle add jekyll
```

El un archivo nos quedaría de la siguiente manera:

{% include code-header.html file='Gemfile' %}
```ruby
# frozen_string_literal: true
source "https://rubygems.org"

gem "jekyll
```

Bundler instala las gemas y crea un `Gemfile.lock` que bloquea las versiones actuales de gemas para una futura instalación con `bundle install`. Si alguna vez deseamos actualizar sus versiones de gemas, podemos ejecutar `bundle update`.

Al usar un `Gemfile`, ejecutará comando como `jekyll serve` con el prefijo `bundle exec`. Asi quedaría el comando completo:

```bash
bundle exec jekyll serve
```

Esto restringe el entorno Ruby para usar solo gemas establecidas en el `Gemfile`.