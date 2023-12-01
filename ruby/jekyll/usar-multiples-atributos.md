---
layout: default
title: "Usar múltiples atributos en Markdown Jekyll"
---

Tengamos en cuanta que Jekyll usa por defecto **kramdown** (una biblioteca de Ruby) que añade varias características al **Markdown** estándar.

Una de esas características es añadir cualquier atributo a elementos en línea o en bloque. Veamos algunos casos de uso:

{: .clipboard }
```md
Esto es de un color *verde*{: style="color: green"}

{:align='center'}
![img - robot](//robohash.org/1)
```

Como resultado nos dará el texto enfatizado de color verde y la imagen quedará alineada al centro, ya que le añade un elemento contenedor <span class="tag">div</span> y le aplica el atributo `align='center'`:


<iframe srcdoc="<body style='background: #fff'><p>Esto es de un color <em style='color: green'>verde</em></p><div align='center'><img src='//robohash.org/1'></div></body>" width="100%" height='370px'></iframe>


