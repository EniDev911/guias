---
layout: default
title: Exportar e Importar bases de datos con mysqldump
categories: ["guía"]
image_path: '/assets/images/mysql/mysqldump'
---

## Objetivo y Descripción

Si bien los clientes de base de datos ( Navycat, MySQLWorkbrench, etc… ) son excelentes herramientas que facilitan la gestión de bases de datos, no siempre tendremos la opción de utilizarlos, por lo que es necesario saber hacer la mayoría de tareas más comunes desde la línea de comandos. Es por eso que en esta guía vamos a ver el **proceso para exportar e importar una base de datos MySQL desde linea de comandos.** Vamos a conocer algunas utilidades incluidas junto al servidor de **MySQL**.


## Requerimientos

- [MySQL](http://www.mysql.com/) - Tener instalado o en su lugar (*XAMP, MAMP, LAMP, etc*)
    * [**mysqldump**](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html): es una pequeña pero muy potente utilidad que acompaña al servidor MySQL.  
    Su principal uso es para realizar copias de seguridad de las bases de datos administradas.


## Uso básico

Tres formas básicas de invocar a **mysqldump** son posibles:

### 1) Respalda una sola base de datos

Indicando su nombre, y opcionalmente una o más tablas de la misma base de datos. Si no se indican tablas, se respaldan todas.

```text
mysqldump [opciones] nombre_bd [nombre_tabla nombre_tabla2 ...] > respaldo.sql
```

**Demostración**  

![gif]({{ page.image_path | relative_url }}/mysqldump-bkp-1.gif)

---

### 2) Respaldar una o más base de datos completa

Respaldar bases de datos de forma completa, quiere decir, que no se pueden indicar tablas individuales de esta manera.

```text
mysqldump [opciones] --databases nombre_bd1 nombrebd2 > respaldo.sql
```

---

### 3) Respaldar todas las bases de datos del servidor

Respalda de forma completa todas las bases de datos del servidor MySQL de forma completa, no se pueden indicar tablas individuales de esta manera.

```text
mysqldump [opciones] --all-databases > respaldo.sql
```

**Demostración**  

![gif]({{ page.image_path | relative_url }}/respaldo_general.gif)

---

## Opciones más comunes

**mysqldump** es una herramienta con decenas de opciones, para verlas todas podemos utilizar el siguiente comando:  

{% include code-header.html %}
```bash
mysqldump --help
```

Lo anterior muestra las posibles opciones específicas de la versión de MySQL que podemos ver en resumen a continuación: 


```bash
        
Las siguientes opciones se pueden dar como primer argumento:
  --print-defaults # Imprime la lista de argumentos del programa y sale.
  --no-defaults # No lee las opciones de ningún archivo de opciones.
  --defaults-file=(path/file) # Solo lea las opciones predeterminadas del archivo dado
  --defaults-extra-file=(path/file) # Lee este archivo después de leer los 
        
Opciones comunes:
  -A, --all-databases # Respaldar todas las bases de datos.
  --add-drop-database # Añade DROP DATABASE antes de crear las base de datos.
  --add-drop-table # Añade DROP TABLE antes de crear las tablas.
  --add-drop-trigger # Añade DROP TRIGGER antes de crear las triggers.
  --add-locks # Agregue bloqueos sobre las declaraciones INSERT.
              #(Predeterminado, usa --skip-add-locks para deshabilitar).
  -d, --no-data # No inclutye la información de los registros

Opciones de conexión:
  -h, --host=nombre # nombre del host
  -P, --port=port # puerto del servidor (por omisión: «3306»)
  -u, --user=nombre # nombre de usuario 
  -p, --password[=nombre] # Contraseña para usar al conectarse al servidor.
                          # Por omisión se pide desde el tty.
```

---

## Exportar


En una nueva Terminal y nuestro servidor corriendo hacemos lo siguiente.

Accedemos a nuestra terminal y ejecutamos el siguiente comando:

```bash
mysqldump -h ip_servidor -u usuario_bd -p base_de_datos > archivo.sql
```

**Donde:**

- **-h ip_servidor** : es el servidor de acceso (generalmente localhost), o la dirección IP del servidor.
- **-u usuario_bd** : es el usuario de la base de datos (puede ser root u otro usuario con privilegios de administrador).
- **-p**: es para que nos pregunte el password.
- **base_de_datos** : es el nombre de la base de datos a exportar.
- **archivo.sql** : es el fichero resultante de la exportación, (**>**) es para volcar el contenido al archivo con la extensión sql
  

Una vez que la ejecución del comando termine, se creará el archivo **archivo.sql** con los querys que crean las tablas e información que pudiera contener nuestra base de datos. 

**Ejemplo:**

![export]({{ page.image_path | relative_url }}/01_mysqldump_export.png)

Generando un archivo similar a este según sus bases de datos que quieran exportar: 

```sql
-- MySQL dump 10.13  Distrib 5.7.24, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: enidevtest
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tareas`
--

DROP TABLE IF EXISTS `tareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tareas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-13 19:54:42
```

Adicional a esto, podemos ejecutar el mismo comando con las siguientes variaciones.

Esta variación exporta solo la estructura de la base de datos, sin la información que pudiera contener nuestra base:

```bash
mysqldump -h ip_servidor -u usuario_bd -p --no-data=TRUE base_de_datos > archivo.sql
```

Esta variación exporta solo la información de nuestra base de datos, excluyendo la estructura de la misma:

```bash
mysqldump -h ip_servidor -u usuario_bd -p --no-create-info=TRUE base_de_datos > archivo.sql
```

---

## Importar

Para importar una base de datos desde un archivo **`.sql`** tenemos dos caminos.

El más sencillo consiste en ejecutar el siguiente comando en la terminal (asegurándonos que la base de datos exista).

```text
mysql -u usuario_mysql -p base_de_datos < archivo.sql
```
Ejemplo: 

Suponiendo que tengamos el siguiente script llamado **base_datos.sql** y previamente tengamos creada una base de datos llamada **importdb**

{% include code-header.html file='base_datos.sql' %}
```sql
CREATE TABLE IF NOT EXISTS contactos (
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre varchar(50),
    apellido varchar(50),
    PRIMARY KEY (id)
);
```

**CMD:**

![pic]({{ page.image_path | relative_url }}/02_mysql_import.png)

Obtendriamos lo siguiente al revisar:

![pic]({{ page.image_path | relative_url }}/03_mysql_showimport.png)

O bien podemos seguir estos pasos:

1. Nos conectamos a la base de datos a donde vamos a importar.

```bash
mysql -h ip_servidor -u usuario -p
```

{: start="2" }
2. Una vez dentro de la consola MySQL, si la base de datos no existe, la creamos con:

```sql
CREATE DATABASE base_datos;
```

{: start="3" }
3. En cualquier caso indicamos la base de datos a usar:

{% include code-header.html %}
```sql
USE base_datos;
```

{: start="4" }
4. Y ahora, el proceso de importación, que sería tan sencillo como ejecutar:

{% include code-header.html %}
```sql
source /home/usuario/archivo.sql
```

**Resultado**  

<p align = 'center'>
  <img src = '{{ page.image_path | relative_url }}/04_mysql_showimport.png' width = "900" height="550"/>
</p>

<p align = 'center'>
  <img src = '{{ page.image_path | relative_url }}/05_mysql_showimport.png' width="900" height= "550"/>
</p>
