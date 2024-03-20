---
layout: default
title: Personalizar el prompt del cliente mysql
categories: ["guía"]
image_path: '/assets/images/mysql/personalizar-prompt'
css:
  custom: |-
    strong {color: #dd6}
---

## ¿Qué es el prompt?

Visualmente es el conjunto de caracteres que se muestra en la línea de comandos para indicar que está a la espera de órdenes. En todos los intérpretes de comandos esto suele variar y a su vez suele configurar para dar información de interés.

El **prompt** del programa cliente **mysql** se suele personalizar para ofrecer cierta información a simple vista. Lo podemos personalizar mediante la variable de entorno **MYSQL_PS1** o con el comando **`prompt`** dentro de la sesión interactiva. 


Por ejemplo, mediante la variable **MYSQL_PS1** 

**Windows-CMD**:  

{% include code-header.html %}
```bat
set MYSQL_PS1=[(\u@\h)][(\d)]^> 
```

**Linux-bash**:

{% include code-header.html %}
```bash
MYSQL_PS1='[(\u@\h)][(\d)]>' 
```

indicamos al cliente de mysql que queremos que nos muestre el usuario con el que estamos conectado, el host al que se conecta y la base de datos. Algunas opciones de información son:

- **\\U** : nombre del usuario conectado y host (Ej: `root@localhost`)
- **\\u** : nombre del usuario conectado (Ej: `root`)
- **\\h** : nombre del host (Ej: localhost)
- **\\d** : nombre de la base de datos en uso (Ej: `test`)
- **\\D** : Fecha y hora actual (Ej: `Sun Jan 30 13:38:52 2022`)

Ejemplo en el símbolo de sistema de Windows:

{:align='center'}
![img set variables]({{ page.image_path | relative_url }}/01.png){:height='450'}

Como resultados obtendremos lo siguiente cuando nos conectemos:  

{:align='center'}
![img - mysql prompt]({{ page.image_path | relative_url }}/02.png){:height='450'}

>**Nota**: Al establecer el valor de la variable mediante el comando **`set`** solo estará disponible en esa sesión o instancia de la ventana de CMD.  

Si queremos establecer el valor a la variable de forma permanente en Windows lo hacemos por medio del comando **setx**:  

{% include code-header.html %}
```bat
setx MYSQL_PS1 "[(\u@\h)][(\d)]> "
```

---

## Personalizar dentro del cliente mysql

Una vez dentro de la sesión interactiva podemos cambiar el prompt usando el comando **prompt** o el método abreviado **\R**.  


{% include code-header.html %}
```mysql
prompt [✨\u |💾 \d]> 
```
{: .language-mysql }

{% include code-header.html %}
```mysql
prompt 📅 (\w-\o-\Y)> 
```
{: .language-mysql }

{% include code-header.html %}
```mysql
prompt (🐬 mysql \v)\n🔌->(\d)>
```
{: .language-mysql }

{% include code-header.html %}
```mysql
prompt [\'contador de consulta\'(\c)]> 
```
{: .language-mysql }

![img - set prompt]({{ page.image_path | relative_url }}/04.png)

> **OJO**: El que se muestre o no los símbolos de emoji, dependerá de la fuente usada para el terminal.

---

<a name="personalizar-desde-archivo"></a>
## Personalizar el prompt desde el archivo de configuración de MySQL/MariaDB

Editamos el archivo de opciones de MySQL/MariaDB

**En Linux** 

Modifique el path según su instalación:

{% include code-header.html %}
```bash
sudo nano /etc/mysql/my.cnf
```

**Windows**

Modifique el path según su instalación:

{% include code-header.html %}
```bat
notepad C:\MySQL_8\my.ini
```

Buscamos la sección mysql y añadimos lo siguiente:  

{% include code-header.html file='my.ini' %}
```ini
[mysql]
prompt=[✨\u |💾 \d]>\_
```

{:align='center'}
![img - set archivo de opciones]({{ page.image_path | relative_url }}/03.png){:height='350'}