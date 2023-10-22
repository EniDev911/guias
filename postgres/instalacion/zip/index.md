---
layout: default
title: "INSTALACIÓN ZIP - USANDO LÍNEA DE COMANDOS"
css:
  custom: >-
    strong { color:  #d44; !important }
---


<a name="descargar-zip"></a>
## Descargar binarios

Lo podemos descargar desde la siguiente web &#x25b6; [aquí](https://www.enterprisedb.com/download-postgresql-binaries).  
Selecciona alguna versión de acuerdo a la arquitectura y plataforma de tu computadora.


![img - descargar zip](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/download.png)


---

<a name="extraer-archivos"></a> 
## Extraer contenido

Extraemos los archivos en la siguiente ubicación &#x1f4c2; **C:\pgsql_14** (puedes elegir otro destino para descargar los archivos).

![img - extraer zip](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/extract_zip_01.png)

Otra forma es usar la herramienta **tar.exe** que se agrego a Windows 10 (1903) desde la compilación 17063 o posterior.  

{: .clipboard }
{% highlight shell %}
tar -xvf archivo-zip-postgresql.zip -C C:\
{% endhighlight %}

![img - extraer con tar](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/tar-xvf.png)

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="crear-carpeta-data"></a> 
## Crear carpeta data

Debemos crear una carpeta donde se almacenarán las configuraciones de nuestro servidor. También se guardarán los datos, usuarios, bases de datos, etc. En mi caso la voy a crear en el mismo nivel en la siguiente ubicación &#x1f4c2; **C:\pgsql_data**

![img - crear carpeta data](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/crear-carpeta-data.png)

> Tradicionalmente, los archivos de configuración y de datos usados por un clúster de base de datos se almacenan juntos dentro del directorio de datos del clúster (podemos utilizar el nombre de la variable de entorno  **PGDATA** para definir la ubicación del directorio de datos). La ubicación común en servidores en Linux es **/var/lib/pgsql/data**, los archivos de configuración `postgresql.conf`, `pg_hba.conf`, y `pg_ident.conf` del clúster se almacenan tradicionalmente en **PGDATA**, aunque es posible colocarlos en otro lugar.

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="configuracion-inicial"></a>
## Configuración inicial

Para iniciar una nueva configuración en un cluster de PostgreSQL y crear el **rol de superusuario**, **contraseña**, **encriptación**, y la **codificación** para las base de datos, haremos uso de la herramienta **initdb**.  

Nos cambiamos al directorio de instalación y entramos a la carpeta **bin**:  


{: .clipboard }
{% highlight txt %}
cd C:\pgsql_14\bin
{% endhighlight %}

Y ejecutamos el siguiente comando:

{: .clipboard }
{% highlight txt %}
initdb.exe -D C:\pgsql_data -U postgres -W -E UTF8 -A scram-sha-256
{% endhighlight %}

### Opciones:

- **\-D**: especifique el directorio de almacenamiento del clúster de bases de datos **(C:\pgsql_data)**.
- **\-U postgres**: crea al superusuario como **postgres**.
- **\-W**: Nos solicitará la contraseña para el superusuario.
- **\-E UTF8**: crea la base de datos con codificación UTF-8.
- **\-A scram-sha-256**: habilita la autenticación de contraseña.  

![img - initdb](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/init_db.png)

> Para ver más opciones del comando `initdb` en este <a href="https://www.postgresql.org/docs/current/app-initdb.html" target="_blank">artículo de la documentación</a>

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="run-stop-server"></a>
## Iniciar y detener el servidor de PostgreSQL

Para ver el estado del servidor y ver si se encuentra en ejecución o no:

{: .clipboard }
{% highlight txt %}
pg_ctl.exe -D C:\pgsql_data -l logfile status
{% endhighlight %}

Otra opción es usar la herramienta `pg_isready.exe`: 

{: .clipboard }
{% highlight txt %}
pg_isready.exe
{% endhighlight %}

Para iniciar el servidor:

{: .clipboard }
{% highlight txt %}
pg_ctl.exe -D C:\pgsql_data -l C:\pgsql_data\ start
{% endhighlight %}

Para detener el servidor:

{: .clipboard }
{% highlight txt %}
pg_ctl.exe -D C:\pgsql_data stop
{% endhighlight %}

Para reiniciar el servidor:

{: .clipboard }
{% highlight txt %}
pg_ctl.exe -D C:\pgsql_data restart
{% endhighlight %}

>Nota: cualquier acción con el servidor **es obligatorio indicar el directorio de datos**, al menos que se defina una variable de entorno **PGDATA** con el valor de la ubicación del cluster de datos.

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="set-as-service"></a>
## Registrar como servicio en windows

Para ejecutar este comando debe abrir un CMD como **administrador**: 

{: .clipboard }
{% highlight txt %}
pg_ctl.exe register -D C:\pgsql_data -N "postgres14"
{% endhighlight %}

![img - registrar como servicio](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/register_as_service_01.png)

Para iniciar el servicio en un CMD como **administrador**:

{: .clipboard }
{% highlight shell %}
sc start "postgres14"
{% endhighlight %}

![img - iniciar el servicio](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/start_service.png)

Para eliminar el servicio primero debemos detener el servicio **abrimos una sesión CMD como administrador** y ejecutamos el comando: 


{: .clipboard }
{% highlight shell %}
sc stop postgres147
{% endhighlight %}


Ahora ya podemos eliminar el servicio con el siguiente comando: 


{: .clipboard }
{% highlight shell %}
sc delete postgres14
# o también
pg_ctl.exe unregister -N postgre14
{% endhighlight %}

![img - eliminar el servicio](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/delete_service.png)


[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="set-as-service"></a>
## Registrar como servicio en windows

Para ejecutar este comando debe abrir un CMD como **administrador**: 

{: .clipboard }
{% highlight txt %}
pg_ctl.exe register -D C:\pgsql_data -N "postgres14"
{% endhighlight %}

![img - registrar como servicio](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/register_as_service_01.png)

Para iniciar el servicio en un CMD como **administrador**:

{: .clipboard }
{% highlight shell %}
sc start "postgres14"
{% endhighlight %}

![img - iniciar el servicio](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/start_service.png)


Para eliminar el servicio primero debemos detener el servicio **abrimos una sesión CMD como administrador** y ejecutamos el comando: 

{: .clipboard }
{% highlight shell %}
sc stop postgres14
{% endhighlight %}

Ahora ya podemos eliminar el servicio con el siguiente comando: 

```cmd
sc delete postgres14
# o también
pg_ctl.exe unregister -N postgre14
```

![img - eliminar el servicio](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/delete_service.png)


[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="set-as-environ-var"></a>
## Agregar al Path

Para ejecutar después el programa cliente psql desde cualquier ubicación, agregamos esa ubicación a la variable de entorno **PATH**.

![img - editar variable path](https://raw.githubusercontent.com/EniDev911/assets/main/png/postgre/zip-install/path_set.png)

También puede a través de un CMD normal (para que sea disponible para nivel de usuario) o como administrador (para que sea disponible a nivel de sistema): 

```cmd
setx PATH "%path%;"C:\pgsql_14\bin\
```

    
[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="connect"></a>
### Conectarse al servidor


### Iniciar sesión en el servidor PostgreSQL

Usando el cliente **psql.exe** para conectarnos a nuestro servidor. Lo siguiente es llamar al programa e iniciar sesión indicando el usuario y luego nos pedirá el password.  
```cmd
psql -U postgres
```

Cuando se le solicite la contraseña, ingrese la contraseña que configuró durante la instalación. El prompt nos indica que estamos conetado con éxito y listo para realizar sentencias SQL.  


[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

<a name="operaciones-psql"></a>
### Operaciones básicas en psql


- Para listar los usuarios, use el comando **`\du`**
- Para enumerar todas las bases de datos, use el comando **`\list`** o **`\l`**. 
- Para salir solo escribimos **`exit`** o **`\q`**.
- Para cambiar a una nueva base de datos, use el comando **`\connect <database>`** o **`\c <database name>`**. 
- Para mostrar tablas de una base de datos, use el comando **`\dt`** o **`\dt+`**.
- Para realizar una copia de seguridad o un volcado de la base de datos, use el comando:  
    **`pg_dump.exe -U postgres -d <database name> -f <path>\backup.sql`**
- Para importar un archivo `.pgsql` o `.sql` existente al servidor de la base de datos, use el siguiente comando.  
**`psql.exe -h <hostname> -U postgres < <path>\backup.sql`**

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)
