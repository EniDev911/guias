---
layout: default
title: SweetAlert2 - Ventanas emergentes
categories: ["LIB"]
libs:
  - name: sweetalert2
    cdn: //cdn.jsdelivr.net/npm/sweetalert2@11
---

## Añadir la CDN

{% include code-header.html %}
```html
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

## Crear una alerta simple

Mostra una alerta simple, podríamos hacer un simple 'hola mundo':

{% include code-header.html %}
```js
Swal.fire("Esta es una alerta"); 
```

<button class="btn" onclick="{Swal.fire('Esta es una alerta');}">VER ALERTA</button>

> **Nota**: la tipografía del texto es tomada de nuestra web, es decir, la librería no incluye ninguna tipografía.
{: .prompt-info }

## Evento de alerta cerrada o aceptada

Si queremos saber cuándo se cierra una alerta (es decir, que se presiona el botón OK o se cierra) espera a que se resuelva la promesa que devuelve el método `.fire()`:

{% include code-header.html %}
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

{% include code-header.html %}
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


{% include code-header.html %}
```js
Swal.fire({
    title: "Alerta con imagen",
    text: "Robot aleatorio desde robohash.org",
    imageUrl: "//robohash.org/2"
})
```

<button class="btn" onclick="{Swal.fire({title: 'Alerta con imagen', text: 'Robot aleatorio desde robohash.org', imageUrl:'//robohash.org/2'});}">VER ALERTA</button>

---

## Establecer ancho de ventana

{% include code-header.html %}
```js
Swal.fire({
    title: 'Título',
    text: 'descripción',
    width: '50%',
});
```

<button class="btn" onclick="{Swal.fire({
    title: 'Título',
    text: 'descripción',
    width: '50%',
});}">VER ALERTA</button>


## Usar background

{% include code-header.html %}
```js
Swal.fire({
    title: 'Estás seguro?',
    text: 'Si confirma, se eliminará el registro',
    icon: 'warning',
    confirmButtonText: "Confirmar",
    showCloseButton: true,
    background: "#000"
});
```

<button class="btn" onclick="{Swal.fire({
    title: 'Estás seguro?',
    text: 'Si confirma, se eliminará el registro',
    icon: 'warning',
    confirmButtonText: 'Confirmar',
    showCloseButton: true,
    background: '#000'
});}">VER ALERTA</button>


---

## Usando input tipo select

{% include code-header.html %}
```js
Swal.fire({
    title: 'Bienvenido',
    text: 'Selecciona tu País',
    confirmButtonText: "Seleccionar",
    padding: "1rem",
    backdrop: true,

    input: 'select',
    inputPlaceholder: 'País',
    inputValue: '',
    inputOptions:{
        mexico: 'México',
        chile: 'Chile',
        brazil: 'Brazil',
    }
}).then(res => {
	console.log(res);
	Swal.fire({
		title: `Seleccionaste ${res.value}`
	});
```

Otro enfoque sería usando `async - await`:

{% include code-header.html %}
```js
async function obtenerPais(){
    const {value: pais} = await Swal.fire({
            title: 'Bienvenido',
            text: 'Selecciona tu País',
            confirmButtonText: "Seleccionar",
            padding: "1rem",
            backdrop: true,

            input: 'select',
            inputPlaceholder: 'País',
            inputValue: '',
            inputOptions:{
                mexico: 'México',
                chile: 'Chile',
                brazil: 'Brazil',
                }
            });

        if (pais){
            Swal.fire({
                title: `Seleccionaste ${pais}`
            })
        }
    }
``` 

<button class="btn" onclick="{Swal.fire({
    title: 'Bienvenido',
    text: 'Selecciona tu País',
    confirmButtonText: 'Seleccionar',
    padding: '1rem',
    backdrop: true,
    input: 'select',
    inputPlaceholder: 'País',
    inputValue: '',
    inputOptions:{
        mexico: 'México',
        chile: 'Chile',
        brazil: 'Brazil',
    }
}).then(res => {
	console.log(res);
	Swal.fire({
		title: `Seleccionaste ${res.value}`
	})
});}">VER ALERTA</button>