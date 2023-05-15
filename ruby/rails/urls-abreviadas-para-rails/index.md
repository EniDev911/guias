---
layout: default
title: URLs cortas para cada ruta
---

## Puesta en marcha

Para una nueva aplicación **Rails API**, lo haremos con el siguiente comando:  

```bash
rails new bird-api --api --minimal
```

Esto creará una nueva aplicación en la cual vamos a trabajar.

Luego, seguiremos avanzando y vamos a crear nuestra migración y modelo mediante el uso del **generador de Rails**:  

```bash
rails g model Birds name species
```

Este modelo preparará nuestra primera migración de una tabla de aves dos columnas, en este caso especies y nombre de formato cadena.

Entonces ya podemos ejecutar la migración con el comando:

```bash
rails db:migrate
```