---
layout: default
---

```bash
📂 app # 👈 Contiene los controllers, models, views, helpers, mailers y assets para la aplicación.
├── 📂 assets
│── 📂 config
│   │   └── manifest.js
│   ├── 📂 images
│   └── 📂 stylesheets
│       └── application.css
├── 📂 channels
│   └── 📂 application_cable
│       ├── channel.rb
│       └── connection.rb
├── 📂 controllers # 👈 dentro se definen los controladores para las rutas
├── 📂 helpers
├── 📂 javascript
│   ├── application.js
│   └── 📂 controllers
│       ├── application.js
│       ├── hello_controller.js
│       └── index.js
├── 📂 jobs
├── 📂 mailers
├── 📂 models # 👈 dentro se definen los modelos que interactuan con la base de datos
└── 📂 views # 👈 dentro se guardan las vistas que son devuelta a los controladores
    ├── 📂 layouts # 👈 dentro se guardan los layouts (plantillas) que ocupan las vistas
 ```