---
layout: default
title: "Usar la api de google calendar"
---

## Habilitar la API

Antes de usar cualquier APIs de Google, se debe activar en un [proyecto de Google Cloud](https://cloud.google.com/resource-manager/docs/creating-managing-projects?hl=es-419){:target='_blank' class='link'}. Podemos activar una o más APIs en un solo proyecto de Google Cloud. Lo primero es ir a la consola de Google Cloud y habilitar la API de Calendario:

<button class="btn" onclick="{window.open('https://console.cloud.google.com/flows/enableapi?apiid=calendar-json.googleapis.com&hl=es-419', '')}">Habilitar API</button>

## Configurar la pantalla de consentimiento OAuth

Si usas un proyecto de Google Cloud, necesitamos configurar la pantalla de consentimiento de OAuth y debemos agregarnos como usuario de prueba

<button class="btn" onclick="{window.open('https://console.cloud.google.com/apis/credentials/consent?hl=es-419', '')}">Ir a la pantalla de consentimiento de OAuth</button>

Luego debemos seleccionar el tipo de usuario para la app. Si usamos la cuenta normal de Gmail (no de una organización), en ese caso seleccionamos **Externo** como tipo de usuario y luego click sobre el botón **Crear**.

En la siguiente ventana, debemos completar el formulario de registro de la app y, clic en **Guardar y continuar**. 