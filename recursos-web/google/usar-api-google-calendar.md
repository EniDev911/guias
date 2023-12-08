---
layout: default
title: "Usar la api de google calendar"
css:
  custom: |
    strong { color: #bc2 }
---

## Habilitar la API

Antes de usar cualquier APIs de Google, se debe activar en un [proyecto de Google Cloud](https://cloud.google.com/resource-manager/docs/creating-managing-projects?hl=es-419){:target='_blank' class='link'}. Podemos activar una o más APIs en un solo proyecto de Google Cloud. Lo primero es ir a la consola de Google Cloud y habilitar la API de Calendario:

<button class="btn" onclick="{window.open('https://console.cloud.google.com/flows/enableapi?apiid=calendar-json.googleapis.com&hl=es-419', '')}">Habilitar API</button>

## Configurar la pantalla de consentimiento OAuth

Si usas un proyecto de Google Cloud, necesitamos configurar la pantalla de consentimiento de OAuth y debemos agregarnos como usuario de prueba

<button class="btn" onclick="{window.open('https://console.cloud.google.com/apis/credentials/consent?hl=es-419', '')}">Ir a la pantalla de consentimiento de OAuth</button>

Luego debemos seleccionar el tipo de usuario para la app. Si usamos la cuenta normal de Gmail (no de una organización), en ese caso seleccionamos **Externo** como tipo de usuario y luego click sobre el botón **Crear**.

En la siguiente ventana, debemos completar el formulario de registro de la app y, clic en **Guardar y continuar**.

> Mientras el estado de publicación sea **Prueba**, solo los usuarios de prueba podrán acceder a la app.

## Autorizar credenciales para una aplicación web

Para autenticarte como usuario final y acceder a los datos del usuario en la app, debes crear por lo menos un ID de cliente de OAuth 2.0. Un ID de cliente se usa con el fin de identificar una sola app para los servidores de OAuth de Google. Desde la consola de Google Cloud, vamos a menú **APIS y servicios > credenciales**.

<button class="btn" onclick="{window.open('https://console.cloud.google.com/apis/credentials?hl=es-419', '')}">Ir a credenciales</button>

Damos clic en **Crear credenciales** > **ID de cliente de OAuth**:

{:align='center'}
![img - crear credenciales](assets/crear-credenciales.png)


Damos clic en **Tipo de aplicación** > **Aplicación web**. Escribe un nombre para la credencial, este nombre solo se muestra en la consola de Google Cloud.

En el apartado de **Origenes autorizados de Javascript** se agregan las URI autorizadas relacionadas con tu app.

Damos clic en **Crear**. Aparecerá la pantalla de creación del cliente de OAuth, en la que se mostrará el nuevo **ID de cliente** y el secreto del cliente.

> Los secretos del cliente no se usan en aplicaciones web

{:align='center'}
![img - crear credenciales](assets/credenciales-creada.png){:width="500"}

## Crear una clave de API

Vamos de nuevo a la consola de Google Cloud, y buscamos en el menú **APIs y servicios** > **Credenciales**.

<button class="btn" onclick="{window.open('https://console.cloud.google.com/apis/credentials?hl=es-419', '')}">Ir a credenciales</button>

Solo dando un clic se nos mostrará la nueva clave de API.


## Primera demostración

Para probar nuestras credenciales, buscamos una carpeta de trabajo y creamos un archivo **index.html**.

En el archivo, agremos el siguiente código:


