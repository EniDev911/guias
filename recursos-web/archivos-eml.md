---
layout: default
title: "Archivos eml"
---

Un archivo **EML** en resumen es un correo electrónico que almacena las cabeceras HTML originales. La estructura del archivo **EML** es estándar y está compuesta de dos partes, el encabezado y el cuerpo.


Un archivo **EML** consta de información de encabezados y, opcionalmente, del cuerpo del mensaje. Cada línea de encabezado **EML** tiene dos partes separadas por dos puntos `:`. El primero se llama nombre del encabezado y el que sigue a los dos puntos es el cuerpo del encabezado. Por ejemplo, tales encabezados incluyen:

- Dirección de correo electrónico del remitente
- Dirección de correo electrónico del destinatario
- Asunto del correo electrónico
- Sello de fecha y hora del mensaje

### Ejemplo de encabezado

```plaintext
To: User <user@domain.demo>
Subject: Subject
X-Unsent: 1
Content-Type: text/html
```

> **Nota**: Para asegurar se de que Outlook trate el mensaje EML como un mensaje no enviado, se establece el encabezado MIME `X-Unsent: 1`.

