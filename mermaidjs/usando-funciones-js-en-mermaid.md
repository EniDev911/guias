---
layout: default
title: Usando funciones JS en Mermaid
mermaid: true
libs:
  - name: 'sweetalert2'
    cdn: //cdn.jsdelivr.net/npm/sweetalert2@11
---

## Interacción

Es posible **vincular un evento de clic a un nodo**, el clic genera una devolución de llamada de JavaScript o un enlace que se abrirá en una nueva pestaña del navegador.

## Habilitar eventos

Para usar los eventos y etiquetas en los nodos, debemos modificar la configuración específicamente lo relacionado al **nivel de seguridad**. Esto se debe a que desde la versión **8.2** se introdujo como una mejora de seguridad que viene habilitada por defecto:

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
<script>
  function callback(nodo) {
    alert(`Un callback invocado por el nodo ${nodo}`);
  };
</script>




