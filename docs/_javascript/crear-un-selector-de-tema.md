---
layout: default
title: "Crear selector de tema"
categories: ["tutorial"]
---


Esto de claro y oscuro **depende mucho de los gustos**.


Este selector lo vamos implementar con muy pocas líneas de javascript, y además podemos guardar la preferencia del usuario en la memoria del navegador para que recuerde la decisión del usuario entre cambios de páginas.

## Crear el botón

Aquí vamos a usar un pequeño truco que suelo usar que es meter los **SVG** de los iconos dentro del **CSS**, así no hay que meter los dos en el **HTML**, ocultando uno de ellos.

> Recuerda meter los iconos como SVG para que se vean lo mejor posible ocupando poco espacio, intentemos evitar los **.png** y los **.jpg**.
{: .prompt-info }

En el html comenzaremos con lo más simple:

{% include code-header.html %}
```html
<button
  class="dark-toggler"
  aria-label="Toggle color mode"
  title="Toggle color mode"
  data-theme-toggle
>
  <div class="toggler-icon"></div>
</button>
```

Ojo al detalle de poner la etiqueta `button`{: .tag } y no como `div`{: .tag }, recuerda que poner los elemetos interactuables en los botones para mejorar la accesibilidad. Dentro he metido un `div`{: .tag } vacío para meter el icono vía **CSS**.

Vamos con el **CSS**, muy sencillo también:

{% include code-header.html %}
```css
.dark-toggler {
	background: unset;
	border: none;
	cursor: pointer;
}
.dark-toggler:hover .toggler-icon {
	background-color: var(--color-primary);
}
.toggler-icon {
	width: 18px;
	height: 18px;
	background-color: var(--color-text);
	transition: background-color 0.2s ease-in-out;
	-webkit-mask-size: 18px;
	-webkit-mask-position: 50% 50%;
	-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' %3E%3Cpath fill-rule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clip-rule='evenodd' /%3E%3C/svg%3E");
}
html[data-theme="dark"] .toggler-icon {
	-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' %3E%3Cpath d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' /%3E%3C/svg%3E");
}
```

De forma global tengo un **CSS** que meto en todas las páginas de la web. Dentro, aparte de estilos globales, tengo la declaración de las variables CSS, es decir:

{% include code-header.html %}
```css
:root {
	--color-background: #fffcf0;
	--color-background-shade: #fbf3d9;
	--color-text: #22211d;
	--color-text-shade: #575650;
	--color-primary: #147d82;
}
```

En realidad tengo muchas más, pero he puesto solo las variables de los colores, que son las que nos interesan para este artículo y demostración.

Debajo tengo las variables para cuando el tema es oscuro, simplemente sobreescribimos su valor, y automáticamente se cambiarán en toda la web, en este caso cuando la etiqueta `html`{: .tag } tenga el atributo `data-theme` con el valor **dark**. Este atributo es el que cambiaremos mediante javascript al pulsar el botón:

{% include code-header.html %}
```css
html[data-theme="dark"] {
	--color-background: #100f0f;
	--color-background-shade: #202424;
	--color-text: #d2dee1;
	--color-text-shade: #989f9f;
	--color-primary: #62aba4;
}
```

Luego tenemos que usar estas variables para el color, tanto del background como del texto, de forma global:

{% include code-header.html %}
```css
html {
	--color-background: var(--color-background);
	--color: var(--color-text);
}
```

## Creando la interactividad con Javascript