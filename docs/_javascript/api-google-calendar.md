---
layout: default
title: Usando fetch con api google calendar
---

La **API de Google Calendar** es una API RESTful a la que se puede acceder mediante llamadas HTTP explícitas o mediante bibliotecas cliente de Google. La API expone la mayoría de las funciones disponibles en la interfaz web de Google Calendar.


Este artículo es una guía paso a paso sobre como crear un sitio web sencillo utilizando sólo **HTML** y **JS** donde el usuario puede recuperar los eventos de su calendario y crear nuevos eventos.

## Crear un proyecto de Google

Para leer eventos de sus calendarios públicos de Google, necesitamos crear una clave API de Google para lo cual primero debemos tener una cuenta de Google.

Después de eso vamos a [Crear proyecto](https://console.cloud.google.com/projectcreate){:target='blank' class='link'} y llenar la información solicitada:

{:align='center'}
![img - nuevo proyecto](assets/crear-proyecto-en-google.png)

Luego de eso vamos [habilitar la API](https://console.cloud.google.com/marketplace/product/google/calendar-json.googleapis.com){:target='blank' class='link'} de Google calendar. Asegúrese de que el proyecto creado recientemente esté seleccionado:

{:align='center'}
![img - habilitar la api](assets/habilitar-api-google-calendar.png)

Luego navegamos a la pestaña de credenciales y hacemos clic en **CREAR CREDENCIALES** y seleccionamos la clave API en el menú desplegable de lo cual una vez seleccionada la opción se generará una nueva clave API.

Se le preguntará acerca de la información de su aplicación. Proporcione el nombre para la aplicación y el correo electrónico de soporte apropiado y damos clic en guardar y continuar. Actualiza la página y ahora haz clic en **PUBLICAR APLICACIÓN**:

{:align='center'}
![img - habilitar la api](assets/publicar-aplicacion.png)

---

## Integración del sitio web con la API de Google Calendar

Ahora tenemos la clave API y el ID del cliente, por lo que estamos listo para ir a la codificación.

### Buscar eventos

Dentro de la carpeta para el proyecto, vamos a crear un archivo **index.html** y otro archivo **index.js**.

Agregamos lo siguiente en **index.html**:

{: .clipboard }
```html
<!DOCTYPE html>
<html>
<head>
	<title>Google Calendar API Quickstart</title>
	<meta charset="utf-8" />
</head>
<body>
	<p>Google Calendar API Quickstart</p>

	<!--Add buttons to initiate auth sequence and sign out-->
	<button id="authorize_button" onclick="handleAuthClick()">Authorize</button>
	<button id="signout_button" onclick="handleSignoutClick()">Sign Out</button>

	<pre id="content" style="white-space: pre-wrap;"></pre>
	<script src="./index.js" type="text/javascript"></script>
	<script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script>
	<script async defer src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script>
</body>
</html>
```

Agregue el siguiente código en el archivo **index.js**. Remplace `<YOUR_CLIENT_ID>` con el id de cliente y `<YOUR-API-KEY>` con la clave API que podemos buscar en las [credenciales API de Google Calendar](https://console.cloud.google.com/apis/credentials){:target='blank' class='link'}.

Después de hacer clic en el botón **Autorizar**, aparecerá una ventana emergente. Se le pedirá que autorice su cuenta de Google. Después de haber autorizado su cuenta, aparecerán todos los eventos del calendario de ese evento. (Puede programar algunos eventos con anticipación para realizar pruebas).

Hasta ahora hemos obtenido con éxito los eventos del calendario. Ahora necesitamos crear events desde nuestro sitio web.

## Crear eventos

Primero crearemos un formulario en **index.html**:

```html
<form id="event_form">
<fieldset>
  <input type="text" name="title" id="title" placeholder="Add Title" class="input-title" />
  <br />
  <textarea type="text" name="desc" id="desc" placeholder="Add Descreption" class="input-title"></textarea>
  <br />
  <label>Date</label>
  <input type="date" name="date" id="date" />
  <div>
    <label>Start Time</label>
    <input type="time" name="st" id="st" />
    <label>End Time</label>
    <input type="time" name="et" id="et" />
  </div>
  <button type="button" onclick="addEvent()">Schedule</button>
</fieldset>
</form>
```

Agregamos la función `addEvent` en **index.js**. También asegúrese de que su alcance sea `https://www.googleapis.com/auth/calendar`.

{: .clipboard }
```js
const addEvent = () => {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const date = document.getElementById("date").value;
  const start = document.getElementById("st").value;
  const end = document.getElementById("et").value;

  const startTime = new Date(date + "," + start).toISOString();
  const endTime = new Date(date + "," + end).toISOString();

  var event = {
    summary: title,
    location: "Google Meet",
    description: desc,
    start: {
      dateTime: startTime,
      timeZone: "America/Los_Angeles"
    },
    end: {
      dateTime: endTime,
      timeZone: "America/Los_Angeles"
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [
      { email: "abc@google.com" },
      { email: "xyz@google.com" }
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 }
      ]
    }
  };

  console.log(event)
  var request = gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: event
  });

  request.execute(function(event) {
    console.log(event.htmlLink);
  });
};
```


