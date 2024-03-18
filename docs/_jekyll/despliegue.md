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

---

## CON GH-ACTIONS

Al principio, debes agregar un archivo de flujo de trabajo (*workflows*) de github un ejemplo sería en `.github/workflows/build-jekyll.yml` en la rama master de tu repositorio como se muestra a continuación:


{% include code-header.html file='.github/workflows/build-jekyll.yml' %}
```yml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: # Establece la rama que tengas por defecto para gh-pages
      - gh-pages 

  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@8575951200e472d5f2d95c625da0c7bec8217c42 # v1.161.0
        with:
          ruby-version: '3.1' # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically
          cache-version: 0 # Increment this number if you need to re-download cached gems
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        # Outputs to the './_site' directory by default
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        # Automatically uploads an artifact from the './_site' directory by default
        uses: actions/upload-pages-artifact@v3

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```