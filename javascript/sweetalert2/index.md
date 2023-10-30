---
layout: default
title: SweetAlert2 - Ventanas emergentes
libs:
  - name: sweetalert2
    cdn: //cdn.jsdelivr.net/npm/sweetalert2@11
---

## Crear una alerta simple

Mostra una alerta simple, podríamos hacer un simple 'hola mundo':

{: .clipboard }
```js
Swal.fire("Esta es una alerta"); 
```

<button class="btn" onclick="{Swal.fire('Esta es una alerta');}">VER ALERTA</button>

> **Nota**: la tipografía del texto es tomada de nuestra web, es decir, la librería no incluye ninguna tipografía.


## Evento de alerta cerrada o aceptada

Si queremos saber cuándo se cierra una alerta (es decir, que se presiona el botón OK o se cierra) espera a que se resuelva la promesa que devuelve el método `.fire()`:

{: .clipboard }
```js
Swal.fire("Esta es una alerta")
    .then(() => {
        // aquí la alerta se ha cerrado
        alert("Alerta cerrada");
    });
```

<button class="btn" onclick="{Swal.fire('Esta es una alerta').then(() => { alert('Alerta cerrada') });}">VER ALERTA</button>

## Cambiar texto del botón aceptar

Si no queremos que aparezca el texto **OK** en el botón, podemos invocar al método `Swal.fire` pero con un objeto de propiedades. Solo debemos especificar las propiedades `title` y `confirmButtonText`:

{: .clipboard }
```js
Swal.fire({
    title: "Mensaje enviado",
    text: "El mensaje fue enviado exitosamente",
    confirmButtonText: "Aceptar"
})
```

<button class="btn" onclick="{Swal.fire({title: 'Mensaje enviado', text: 'El mensaje fue enviado exitosamente', confirmButtonText:'Aceptar'});}">VER ALERTA</button>

## Crear una alerta con una imagen

Para añadir una imagen debemos establecer la url del recurso en la propiedad `imageUrl` dentro del objeto al invocar el método `.fire()`:


{: .clipboard }
```js
Swal.fire({
    title: "Alerta con imagen",
    text: "Robot aleatorio desde robohash.org",
    imageUrl: "//robohash.org/2"
})
```

<button class="btn" onclick="{Swal.fire({title: 'Alerta con imagen', text: 'Robot aleatorio desde robohash.org', imageUrl:'//robohash.org/2'});}">VER ALERTA</button>