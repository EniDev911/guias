---
layout: default
title: "Crear botón compartir"
---


```js
const shareBtn = document.getElementById('btn-share');

shareBtn.addEventListener('click', (event) => {

	if ("share" in navigator) {
		navigator
			.share({
				// título para la ventana compartir
				title: "Comparte este recurso en tus plataformas",
				// Si queremos compartir el recurso actual
				url: window.location.href
			})
			.then(() => {
				console.log("Recurso compartido")
			})
			.catch(console.error)
	} else {
		alert("Lo sentimos, este navegador no tiene soporte para recursos compartidos")
	}
})
```

Para compartir un documento:

{: .clipboard }
```js
shareButton.onclick = async () => {
  const response = await fetch("https://example.com/files/hello.pdf");
  const buffer = await response.arrayBuffer();

  const pdf = new File([buffer], "hello.pdf", { type: "application/pdf" });
  const files = [pdf];

  // Share PDF file if supported.
  if (navigator.canShare({ files })) await navigator.share({ files });
};
```