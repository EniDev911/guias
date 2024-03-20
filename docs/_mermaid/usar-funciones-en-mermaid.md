---
layout: default
title: Usando funciones JS en Mermaid
mermaid: true
support: true
libs:
  - name: 'sweetalert2'
    cdn: //cdn.jsdelivr.net/npm/sweetalert2@11
  - name: 'fontawesome'
    cdn: //kit.fontawesome.com/6b8f0c7049.js
css:
  custom: |
    strong { color: #fd8 }
---

## Interacción

Es posible **vincular un evento de clic a un nodo**, el clic genera una devolución de llamada de JavaScript o un enlace que se abrirá en una nueva pestaña del navegador.

Para el caso de las llamada a funciones de JavaScript, es necesario habilitar ese comportamiento en la configuración, pero para los enlaces simplemente podríamos hacer algo como lo siguiente:

{: .clipboard }
```html
<div class="mermaid">
flowchart LR
    A[fa:fa-google]-->B[fa:fa-github]
    click A "https://www.google.com" "Ir a google"
    click B "https://www.github.com" "Abrir github en una nueva pestaña" _blank
</div>
```

<fieldset>
	<legend align='center' style="font-size: 28px; padding: 0 15px">Resultado</legend>
<div class="mermaid" align="center">
%%{
  init: {
    'themeVariables': {
      'fontSize': '32px'
    }
  }
}%%
flowchart LR
    A[fa:fa-google]-->B[fa:fa-github]
    click A "https://www.google.com" "Ir a google"
    click B "https://www.github.com" "Abrir github en una nueva pestaña" _blank
</div>
</fieldset>

## Habilitar eventos

Para usar los eventos como lo mencione anteriormente, debemos modificar la configuración específicamente lo relacionado al **nivel de seguridad**. Esto se debe a que desde la versión **8.2** de mermaid se introdujo una nueva opción como una mejora de seguridad que viene habilitada por defecto:

{: .clipboard }
```html
<script 
	type="text/javascript" 
	src="cdn.jsdelivr.net/npm/mermaid@10.2.2/dist/mermaid.min.js"></script>
<script>
$(document).ready(function() {
	mermaid.initialize({
		securityLevel: 'loose',
		theme: 'dark'
	});
});
</script>
```

> Esta funcionalidad está deshabilitada cuando se usa `securityLevel='strict'` opción que viene de forma predeterminada.

---

## Caso de uso

Una vez hecho lo anterior, podemos definir una función que muestre información sobre el nodo cuando hagamos clic:

{: .clipboard }
```html
<div class="mermaid">
flowchart LR
    A-->B
    B-->C
    click A callback "Tooltip for a callback"
    click B call callback() "Tooltip for a callback"
    click C call callback() "Tooltip for a callback"
</div>
<script>
  function callback(nodo) {
    alert(`Un callback invocado por el nodo ${nodo}`);
  };
</script>
```

<fieldset>
	<legend align='center' style="font-size: 28px; padding: 0 15px">Resultado</legend>
	<div class="mermaid" align='center'>
	%%{
	  init: {
	    'themeVariables': {
	      'fontSize': '32px'
	    }
	  }
	}%%
	flowchart LR
	    A-->B
	    B-->C
	    click A callback "Tooltip para cuando pase por encima del nodo A"
	    click B call callback() "Tooltip para cuando pase por encima del nodo B"
	    click C call callback()
	</div>
</fieldset>

<script>
  function callback(nodo) {
    alert(`Un callback invocado por el nodo ${nodo}`);
  };
</script>

---

## Ampliando el uso con otras liberías

Podemos mejorar el ejemplo anterior, añadiendo una librería como [SweerAler2](https://sweetalert2.github.io/){:target='blank' class='link'} para que las ventanas emergentes se vean mejor:

{: .clipboard }
```html
<div class="mermaid">
flowchart LR
    A-->B
    B-->C
    click A callback "Tooltip for a callback"
    click B call callback() "Tooltip for a callback"
    click C call callback() "Tooltip for a callback"
</div>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
  function callback(nodo) {
    Swal.fire(`Un callback invocado por el nodo ${nodo}`);
  };
</script>
```


<fieldset>
	<legend align='center' style="font-size: 28px; padding: 0 15px">Resultado</legend>
	<div class="mermaid" align='center'>
	%%{
	  init: {
	    'themeVariables': {
	      'fontSize': '32px'
	    }
	  }
	}%%
	flowchart LR
	    A-->B
	    B-->C
	    click A callbackSw "Tooltip para cuando pase por encima del nodo A"
	    click B call callbackSw() "Tooltip para cuando pase por encima del nodo B"
	    click C call callbackSw()
	</div>
</fieldset>

<script>
  function callbackSw(nodo) {
    Swal.fire(`Un callback invocado por el nodo ${nodo}`);
  };
</script>
