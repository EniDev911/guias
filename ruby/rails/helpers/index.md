---
layout: default
title: "Helpers"
---

## Helpers

- [link_to](#link-to)


<a name="link-to"></a>
### LINK TO

Crea una etiqueta de enlace para el nombre dado, usando una **URL** creada por el conjunto de opciones (*options*).

**Sintaxis**:  

```
link_to(nombre, opciones = {}, html_opciones = nil)
link_to(opciones = {}, html_opciones = nil) do
    # nombre
end
```

**Opciones**:  

- **:confirm** => 'Pregunta?', esto agregará un aviso de confirmación de Javascript mostrando la pregunta especificada. 

**Ejemplo** : 

```erb
<%= link_to "Improve Your Ruby Skills", "/ruby-book" %>
```

