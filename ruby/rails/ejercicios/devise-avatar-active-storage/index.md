---
layout: default
title: "Devise adjuntar avatar a los usuarios con Active Storage"
---

1) Primero que todo una vez se crea el proyecto, lo siguiente es agregar Devise en el Gemfile, podemos hacerlo en un solo paso con el siguiente comando:


```bash
bundle add devise
```

2) Instalar el generador de Devise:

```bash
rails g devise:install
```

3) Ejecutamos la migración:

```bash
rails db:migrate
```

4) Ejecutamos el comando para añadir las migraciones de Active Storage:

```bash
rails active_storage:install
```

5) Creamos un controlador para mostrar la página de inicio *home*:

```
rails g controller pages home
```

6) Definimos la ruta raiz para que apunte a nuestro controlador creado anteriormente:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  root "pages#home"
end
```

7) Modificar la vista creada con el siguiente código:

```erb
<!-- app/views/pages/home.html.erb -->
<h1>Home</h1>
<% if current_user %>
  <p><%= link_to "Cerrar sesión", destroy_user_session_path %></p>
<% else %>
  <p><%= link_to "Crear una cuenta", new_user_registration_path %></p>
  <p><%= link_to "Iniciar sesión", new_user_session_path %></p>
<% end %>
```

8) Una vez comprobado el funcionamiento, pasemos a realizar unas modificaciones en el modelo de **User**, vamos a decir que el usuario tiene un avatar adjunto:

```ruby
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one_attached :avatar
end
```

9) Ahora vamos al controlador de la aplicación, para configurar los parámetros permitidos:

```ruby
class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters,
    if: :devise_controller?

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:avatar])
      devise_parameter_sanitizer.permit(:account_update, keys: [:avatar])
    end
end
```

10) Listo en este punto podemos trabajar en la vista para añadir el nuevo input para cargar una imagen para el avatar del usuario, primero generamos las vistas de devise con `rails g devise:views`, y modificamos las siguientes vistas de **edit** y **new**:

**app/views/devise/registration/edit.html.erb**


```erb
<h2>Edit <%= resource_name.to_s.humanize %></h2>

<%= form_for(resource, as: resource_name, url: registration_path(resource_name), html: { method: :put }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>

  <div class="field">
    <%= image_tag(resource.avatar_thumbnail) if resource.avatar.attached? %> 
  </div>

  <div class="field">
    <%= f.file_field :avatar %>
  </div>

  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>

  <% if devise_mapping.confirmable? && resource.pending_reconfirmation? %>
    <div>Currently waiting confirmation for: <%= resource.unconfirmed_email %></div>
  <% end %>

  <div class="field">
    <%= f.label :password %> <i>(leave blank if you don't want to change it)</i><br />
    <%= f.password_field :password, autocomplete: "new-password" %>
    <% if @minimum_password_length %>
      <br />
      <em><%= @minimum_password_length %> characters minimum</em>
    <% end %>
  </div>

  <div class="field">
    <%= f.label :password_confirmation %><br />
    <%= f.password_field :password_confirmation, autocomplete: "new-password" %>
  </div>

  <div class="field">
    <%= f.label :current_password %> <i>(we need your current password to confirm your changes)</i><br />
    <%= f.password_field :current_password, autocomplete: "current-password" %>
  </div>

  <div class="actions">
    <%= f.submit "Update" %>
  </div>
<% end %>

<h3>Cancel my account</h3>

<div>Unhappy? <%= button_to "Cancel my account", registration_path(resource_name), data: { confirm: "Are you sure?", turbo_confirm: "Are you sure?" }, method: :delete %></div>

<%= link_to "Back", :back %>
```

Ahora en el modelo creamos el siguiente método:


```ruby
# app/models/user.rb
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :avatar

  def avatar_thumbnail
    avatar.variant(resize: '150x150!').processed
  end
end
```

> "150x150!" se usa el símbolo de exclamación para decir que no importa su relación de aspecto.

11) Para que el paso anterior funcione, debemos decomentar la gema "image_processing":

```ruby
# Gemfile
gem "image_processing", "~> 1.2"
```

Y no nos olvidemos de actualizar la instalación con `bundle install`

12) Paso necesario, dependiendo del sistema operativo se realiza la instalación de RMagick

**Windows**

```
gem install rmagick --platform=ruby -- --with-opt-lib="C:/Tools/ImageMagick-6.9.12-Q16-HDRI/lib" --with-opt-include="C:/Tools/ImageMagick-6.9.12-Q16-HDRI/include"
```