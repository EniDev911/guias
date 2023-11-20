---
title: Badges
layout: default
img: https://mach-911.github.io/guias/assets/png/banner.png
libs:
  - name: 'Font Awesome'
    cdn: https://kit.fontawesome.com/6b8f0c7049.js
---



<a name="top"></a>

### Tabla de contenido

- [Uso](#uso)
- [Tips](#tips)
- [Badges](#badges)


# Lista de badges

- [Inteligencia Artificial y Bots](#ai_bots)
- [Bases de datos](#databases)
- [Navegadores](#browsers)
- [Control de versiones](#control-version)
- [Frameworks, Platformas y  Librerías](#frameworks-platforms-libraries)
- [IDEs/Editors](#ide-editor)
- [Lenguajes](#languages)
- [Sistemas operativos](#operating-system)
- [Social](#social)
- [Otros](#others)



### Uso
Para usar un badge:

**Via Github**

1. Presionar la combinación <kbd>Ctrl</kbd> + <kbd>f</kbd> del teclado, para abrir la caja de búsqueda en una ventana modal.
1. Escribir el nombre del badge que necesitas.
1. Copiamos el elemento apropiado `![Name](link)` y pegamos en nuestro archivo de Markdown (**Ej: readme.md**) 
1. Para usarlo en un documento **HTML** copiamos el fragmento del link y pegamos dentro de una etiqueta **img** dentro del atributo **src** (**Ej:** `<img src="link"/>`) 

# Tips

👇 Como usar diferentes estilos de badge


<table style="text-align: center;">
	<caption><strong>Shields.io</strong> ofrece 5 estilos:</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>S/N</th>
			<th>Tipos</th>
			<th>Estilos</th>
		</tr>
	</thead>
	<tbody>
		<!-- Plastic -->	
		<tr>
			<td>1</td>
			<td>Plastic</td>
			<td>
				<img src="https://shields.io/badge/style-plastic-03650f?logo=appveyor&style=plastic" height="25">
			</td>
		</tr>
		<!-- Flat Square -->
		<tr>
			<td>2</td>
			<td>Flat Square</td>
			<td>
				<img src="https://shields.io/badge/style-flat--square-03650f?logo=appveyor&style=flat-square" height="25">
			</td>
		</tr>
		<!-- Flat -->
		<tr>
			<td>3</td>
			<td>Flat</td>
			<td>
				<img src="https://shields.io/badge/style-flat-03650f?logo=appveyor&style=flat" height="25">
			</td>
		</tr>
		<!-- Social -->
		<tr>
			<td>4</td>
			<td>Social</td>
			<td>
				<img src="https://shields.io/badge/style-social-03650f?logo=appveyor&style=social" height="25">
			</td>
		</tr>
		<!-- For the badge -->
		<tr>
			<td>5</td>
			<td>For-the-badge</td>
			<td>
				<img src="https://shields.io/badge/style-for--the--badge-03650f?logo=appveyor&style=for-the-badge" height="25">
			</td>
		</tr>
	</tbody>
</table>

> **Nota**: `for-the-badge` es el estilo que es usado por cosa de apariencia. Otros estilos están disponible en [**shields.io**](https://shields.io/#styles){:target='_blank' class='link'}


💡 Para usar un estilo diferente: Remplaza <code>for-the-badge</code> en el link.

**Ejemplo**

```text
🧷  plastic
https://shields.io/badge/style-plastic-green?logo=appveyor&style=plastic
	
🧷  Flat
https://shields.io/badge/style-flat-green?logo=appveyor&style=flat
```

---

<a name="ai_bots"></a>
<h3><i class="fa-solid fa-robot"></i> Inteligencia Artificial y Bots</h3>

<table style="text-align: center;">
	<caption><strong>Badges</strong></caption>
	<colgroup>
		<col span="1">
		<col span="2">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
{% for badge in site.data.markdown.badges.ai_bots %}
		<tr>
			<td align="center">{{ badge.name }}</td>
			<td>
			<img src="{{ badge.image }}" height="25">
			</td>
			<td align="left">
				<code>
				![{{ badge.name }}]({{ badge.image }})
				</code>
			</td>
		</tr>	
{% endfor %}
	</tbody>
</table>


[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="browsers"></a> Navegadores

<table style="text-align: center;">
	<caption><strong>Badges</strong></caption>
	<colgroup>
		<col span="1">
		<col span="2">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
{% for badge in site.data.markdown.badges.browsers %}
		<tr>
			<td align="center">{{ badge.name }}</td>
			<td>
			<img src="{{ badge.image }}" height="25">
			</td>
			<td align="left">
				<code>
				![{{ badge.name }}]({{ badge.image }})
				</code>
			</td>
		</tr>	
{% endfor %}
	</tbody>
</table>


[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="databases"></a> 💾 Bases de datos

<table style="text-align: center;">
	<caption><strong>Badges</strong> 💾</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Amazon DynamoDB  -->	
		<tr>
			<td align="center">Amazon DynamoDB</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Cassandra -->
		<tr>
			<td align="center">Cassandra</td>
			<td align="center">
				<img src="https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white)    
				</code>
			</td>
		</tr>
		<!-- Cockroach Labs -->
		<tr>
			<td align="center">Cockroach Labs</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![CockroachLabs](https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Couchbase -->
		<tr>
			<td align="center">Couchbase</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Couchbase-EA2328?style=for-the-badge&logo=couchbase&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Couchbase](https://img.shields.io/badge/Couchbase-EA2328?style=for-the-badge&logo=couchbase&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Firebase -->
		<tr>
			<td align="center">Firebase</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- InfluxDB -->
		<tr>
			<td align="center">InfluxDB</td>
			<td align="center">
				<img src="https://img.shields.io/badge/InfluxDB-22ADF6?style=for-the-badge&logo=InfluxDB&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![InfluxDB](https://img.shields.io/badge/InfluxDB-22ADF6?style=for-the-badge&logo=InfluxDB&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- MariaDB -->
		<tr>
			<td align="center">MariaDB</td>
			<td align="center">
				<img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Microsoft SQL Server -->
		<tr>
			<td align="center">Microsoft SQL Server</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- MongoDB -->
		<tr>
			<td align="center">MongoDB</td>
			<td align="center">
				<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- MySQL -->
		<tr>
			<td align="center">MySQL</td>
			<td align="center">
				<img src="https://img.shields.io/badge/mysql-%23000.svg?style=for-the-badge&logo=mysql&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![MySQL](https://img.shields.io/badge/mysql-%23000.svg?style=for-the-badge&logo=mysql&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Neo4J -->
		<tr>
			<td align="center">Neo4J</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Neo4J](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Postgres -->
		<tr>
			<td align="center">Postgres</td>
			<td align="center">
				<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Redis -->
		<tr>
			<td align="center">Redis</td>
			<td align="center">
				<img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- SQLite -->
		<tr>
			<td align="center">SQLite</td>
			<td align="center">
				<img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="social"></a> 💬 Social

<table style="text-align: center;">
	<caption><strong>Badges</strong> 💬</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Discord  -->	
		<tr>
			<td align="center">Discord</td>
			<td align="center">
				<img src="https://img.shields.io/badge/discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![Discord](https://img.shields.io/badge/discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Facebook -->
		<tr>
			<td align="center">Facebook</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)    
				</code>
			</td>
		</tr>
		<!-- Gmail -->
		<tr>
			<td align="center">Gmail</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Google Meet -->
		<tr>
			<td align="center">Google Meet</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Google%20Meet-00897B?style=for-the-badge&logo=google-meet&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Google Meet](https://img.shields.io/badge/Google%20Meet-00897B?style=for-the-badge&logo=google-meet&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Instagram -->
		<tr>
			<td align="center">Instagram</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Instagram-2 -->
		<tr>
			<td align="center">Instagram</td>
			<td align="center">
				<img src="https://badges.aleen42.com/src/instagram.svg" height="25">
			</td>
			<td align="left">
				<code>![Instagram](https://badges.aleen42.com/src/instagram.svg)
				</code>
			</td>
		</tr>
		<!-- LinkedIn -->
		<tr>
			<td align="center">LinkedIn</td>
			<td align="center">
				<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Messenger -->
		<tr>
			<td align="center">Messenger</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Messenger](https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Skype -->
		<tr>
			<td align="center">Skype</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Skype-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Skype](https://img.shields.io/badge/Skype-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Slack -->
		<tr>
			<td align="center">Slack</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Telegram -->
		<tr>
			<td align="center">Telegram</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- TikTok -->
		<tr>
			<td align="center">TikTok</td>
			<td align="center">
				<img src="https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Twitch -->
		<tr>
			<td align="center">Twitch</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Twitch-%239146FF.svg?style=for-the-badge&logo=Twitch&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?style=for-the-badge&logo=Twitch&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Twitter -->
		<tr>
			<td align="center">Twitter</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- WhatsApp -->
		<tr>
			<td align="center">WhatsApp</td>
			<td align="center">
				<img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- YouTube -->
		<tr>
			<td align="center">YouTube</td>
			<td align="center">
				<img src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Zoom -->
		<tr>
			<td align="center">Zoom</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="control-version"></a> 🕓 Control de versiones

<table style="text-align: center;">
	<caption><strong>Badges</strong>&nbsp;&nbsp;<img src="https://img.shields.io/badge/--F05032?logo=git&logoColor=ffffff" alt="git logo" height="20"></caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Bitbucket  -->	
		<tr>
			<td align="center">Bitbucket</td>
			<td align="center">
				<img src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![Bitbucket](https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Git -->
		<tr>
			<td align="center">Git</td>
			<td align="center">
				<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Gitea -->
		<tr>
			<td align="center">Gitea</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Gitea-34495E?style=for-the-badge&logo=gitea&logoColor=5D9425" height="25">
			</td>
			<td align="left">
				<code>
					![Gitea](https://img.shields.io/badge/Gitea-34495E?style=for-the-badge&logo=gitea&logoColor=5D9425)
				</code>
			</td>
		</tr>
		<!-- Gitee -->
		<tr>
			<td align="center">Gitee</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Gitee-C71D23?style=for-the-badge&logo=gitee&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=for-the-badge&logo=gitee&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- GitHub -->
		<tr>
			<td align="center">GitHub</td>
			<td align="center">
				<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- GitLab -->
		<tr>
			<td align="center">GitLab</td>
			<td align="center">
				<img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Gitpod -->
		<tr>
			<td align="center">Gitpod</td>
			<td align="center">
				<img src="https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Gitpod](https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="ide-editor"></a>💻 IDEs/Editores

<table style="text-align: center;">
	<caption><strong>Badges</strong> 💻</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Android Studio  -->	
		<tr>
			<td align="center">Android Studio</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Atom -->
		<tr>
			<td align="center">Atom</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- CLion -->
		<tr>
			<td align="center">CLion</td>
			<td align="center">
				<img src="https://img.shields.io/badge/CLion-black?style=for-the-badge&logo=clion&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![CLion](https://img.shields.io/badge/CLion-black?style=for-the-badge&logo=clion&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- CodePen -->
		<tr>
			<td align="center">CodePen</td>
			<td align="center">
				<img src="https://img.shields.io/badge/CodePen-white?style=for-the-badge&logo=codepen&logoColor=black" height="25">
			</td>
			<td align="left">
				<code>
					![CodePen](https://img.shields.io/badge/CodePen-white?style=for-the-badge&logo=codepen&logoColor=black)
				</code>
			</td>
		</tr>
		<!-- CodePen-2 -->
		<tr>
			<td align="center">CodePen</td>
			<td align="center">
				<img src="https://badges.aleen42.com/src/codepen.svg" height="25">
			</td>
			<td align="left">
				<code>
					![CodePen](https://badges.aleen42.com/src/codepen.svg)
				</code>
			</td>
		</tr>
		<!-- CodeSandbox -->
		<tr>
			<td align="center">CodeSandbox</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Codesandbox-040404?style=for-the-badge&logo=codesandbox&logoColor=DBDBDB" height="25">
			</td>
			<td align="left">
				<code>
					![CodeSandbox](https://img.shields.io/badge/Codesandbox-040404?style=for-the-badge&logo=codesandbox&logoColor=DBDBDB)
				</code>
			</td>
		</tr>
		<!-- Eclipse -->
		<tr>
			<td align="center">Eclipse</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Eclipse-2C2255.svg?style=for-the-badge&logo=Eclipse&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Eclipse](https://img.shields.io/badge/Eclipse-2C2255.svg?style=for-the-badge&logo=Eclipse&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Emacs -->
		<tr>
			<td align="center">Emacs</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Emacs-%237F5AB6.svg?&style=for-the-badge&logo=gnu-emacs&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Emacs](https://img.shields.io/badge/Emacs-%237F5AB6.svg?&style=for-the-badge&logo=gnu-emacs&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Sublime Text -->
		<tr>
			<td align="center">Sublime Text</td>
			<td align="center">
				<img src="https://img.shields.io/badge/sublime_text-%23575757.svg?style=for-the-badge&logo=sublime-text&logoColor=important" height="25">
			</td>
			<td align="left">
				<code>
					![Sublime Text](https://img.shields.io/badge/sublime_text-%23575757.svg?style=for-the-badge&logo=sublime-text&logoColor=important)
				</code>
			</td>
		</tr>
		<!-- Sublime Text-2 -->
		<tr>
			<td align="center">Sublime Text</td>
			<td align="center">
				<img src="https://badges.aleen42.com/src/sublime_text.svg" height="25">
			</td>
			<td align="left">
				<code>
					![Sublime Text](https://badges.aleen42.com/src/sublime_text.svg)
				</code>
			</td>
		</tr>
		<!-- Vim -->
		<tr>
			<td align="center">Vim</td>
			<td align="center">
				<img src="https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Vim](https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Visual Studio Code -->
		<tr>
			<td align="center">Visual Studio Code</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Visual Studio -->
		<tr>
			<td align="center">Visual Studio</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Xcode -->
		<tr>
			<td align="center">Xcode</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Xcode](https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="languages"></a><img src="https://img.shields.io/badge/--%23323330?logo=javascript&logoColor=%23F7DF1E" alt="git logo"> Lenguajes

<table style="text-align: center;">
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Apache Groovy  -->	
		<tr>
			<td align="center">Apache Groovy</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![Apache Groovy](https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- C -->
		<tr>
			<td align="center">C</td>
			<td align="center">
				<img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- C# -->
		<tr>
			<td align="center">C#</td>
			<td align="center">
				<img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- C++ -->
		<tr>
			<td align="center">C++</td>
			<td align="center">
				<img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Crystal -->
		<tr>
			<td align="center">Crystal</td>
			<td align="center">
				<img src="https://img.shields.io/badge/crystal-%23000000.svg?style=for-the-badge&logo=crystal&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Crystal](https://img.shields.io/badge/crystal-%23000000.svg?style=for-the-badge&logo=crystal&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- CSS3 -->
		<tr>
			<td align="center">CSS3</td>
			<td align="center">
				<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Clojure -->
		<tr>
			<td align="center">Clojure</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure" height="25">
			</td>
			<td align="left">
				<code>
					![Clojure](https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure)
				</code>
			</td>
		</tr>
		<!-- Dart -->
		<tr>
			<td align="center">Dart</td>
			<td align="center">
				<img src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Elixir -->
		<tr>
			<td align="center">Elixir</td>
			<td align="center">
				<img src="https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Elixir](https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Elm -->
		<tr>
			<td align="center">Elm</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Elm](https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Erlang -->
		<tr>
			<td align="center">Erlang</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533" height="25">
			</td>
			<td align="left">
				<code>
					![Erlang](https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533)
				</code>
			</td>
		</tr>
		<!-- Fortran -->
		<tr>
			<td align="center">Fortran</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Fortran](https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Go/Golang -->
		<tr>
			<td align="center">Go/Golang</td>
			<td align="center">
				<img src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- GraphQL -->
		<tr>
			<td align="center">GraphQL</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Haskell -->
		<tr>
			<td align="center">Haskell</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Haskell](https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- HTML5 -->
		<tr>
			<td align="center">HTML5</td>
			<td align="center">
				<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Java -->
		<tr>
			<td align="center">Java</td>
			<td align="center">
				<img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- JavaScript -->
		<tr>
			<td align="center">JavaScript</td>
			<td align="center">
				<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" height="25">
			</td>
			<td align="left">
				<code>
					![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
				</code>
			</td>
		</tr>
		<!-- Julia -->
		<tr>
			<td align="center">Julia</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Julia](https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Kotlin -->
		<tr>
			<td align="center">Kotlin</td>
			<td align="center">
				<img src="https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Kotlin](https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- LaTeX -->
		<tr>
			<td align="center">LaTeX</td>
			<td align="center">
				<img src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Lua -->
		<tr>
			<td align="center">Lua</td>
			<td align="center">
				<img src="https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Markdown -->
		<tr>
			<td align="center">Markdown</td>
			<td align="center">
				<img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- PHP -->
		<tr>
			<td align="center">PHP</td>
			<td align="center">
				<img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Python -->
		<tr>
			<td align="center">Python</td>
			<td align="center">
				<img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" height="25">
			</td>
			<td align="left">
				<code>
					![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
				</code>
			</td>
		</tr>
		<!-- Python-2 -->
		<tr>
			<td align="center">Python</td>
			<td align="center">
				<img src="https://badges.aleen42.com/src/python.svg" height="25">
			</td>
			<td align="left">
				<code>
					![Python](https://badges.aleen42.com/src/python.svg)
				</code>
			</td>
		</tr>		
		<!-- R -->
		<tr>
			<td align="center">R</td>
			<td align="center">
				<img src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Ruby -->
		<tr>
			<td align="center">Ruby</td>
			<td align="center">
				<img src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Rust -->
		<tr>
			<td align="center">Rust</td>
			<td align="center">
				<img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Scala -->
		<tr>
			<td align="center">Scala</td>
			<td align="center">
				<img src="https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Scala](https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Shell Script -->
		<tr>
			<td align="center">Shell Script</td>
			<td align="center">
				<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Solidity -->
		<tr>
			<td align="center">Solidity</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Swift -->
		<tr>
			<td align="center">Swift</td>
			<td align="center">
				<img src="https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- TypeScript -->
		<tr>
			<td align="center">TypeScript</td>
			<td align="center">
				<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="frameworks-platforms-libraries"></a> 📚 Frameworks, Platforomas y Librerias

<table style="text-align: center;">
	<caption><strong>Badges</strong> 📚</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- .NET  -->	
		<tr>
			<td align="center">.NET</td>
			<td align="center">
				<img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- AdonisJS -->
		<tr>
			<td align="center">AdonisJS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![AdonisJS](https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Anaconda -->
		<tr>
			<td align="center">Anaconda</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Angular -->
		<tr>
			<td align="center">Angular</td>
			<td align="center">
				<img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
				</code>
			</td>
		</tr>
			<!-- Babel -->
		<tr>
			<td align="center">Babel</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" height="25">
			</td>
			<td align="left">
				<code>
					![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
				</code>
			</td>
		</tr>
		<!-- Blazor -->
		<tr>
			<td align="center">Blazor</td>
			<td align="center">
				<img src="https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Blazor](https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Bootstrap -->
		<tr>
			<td align="center">Bootstrap</td>
			<td align="center">
				<img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Code Igniter -->
		<tr>
			<td align="center">Code Igniter</td>
			<td align="center">
				<img src="https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Code-Igniter](https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Deno JS -->
		<tr>
			<td align="center">Deno JS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Django -->
		<tr>
			<td align="center">Django</td>
			<td align="center">
				<img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Docker -->
		<tr>
			<td align="center">Docker</td>
			<td align="center">
				<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Express.js -->
		<tr>
			<td align="center">Express.js</td>
			<td align="center">
				<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" height="25">
			</td>
			<td align="left">
				<code>
					![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
				</code>
			</td>
		</tr>
		<!-- Flask -->
		<tr>
			<td align="center">Flask</td>
			<td align="center">
				<img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Flutter -->
		<tr>
			<td align="center">Flutter</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- jQuery -->
		<tr>
			<td align="center">jQuery</td>
			<td align="center">
				<img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- JWT - JsonWebToken -->
		<tr>
			<td align="center">JWT</td>
			<td align="center">
				<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" height="25">
			</td>
			<td align="left">
				<code>
					![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
				</code>
			</td>
		</tr>		
		<!-- Less -->
		<tr>
			<td align="center">Less</td>
			<td align="center">
				<img src="https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Netlify -->
		<tr>
			<td align="center">Netlify</td>
			<td align="center">
				<img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" height="25">
			</td>
			<td align="left">
				<code>![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)</code>
			</td>
		</tr>
		<!-- NPM -->
		<tr>
			<td align="center">NPM</td>
			<td align="center">
				<img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Node.js -->
		<tr>
			<td align="center">Node.js</td>
			<td align="center">
				<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- React -->
		<tr>
			<td align="center">React</td>
			<td align="center">
				<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="25">
			</td>
			<td align="left">
				<code>
					![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
				</code>
			</td>
		</tr>
		<!-- Spring -->
		<tr>
			<td align="center">Spring</td>
			<td align="center">
				<img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Thymeleaf -->
		<tr>
			<td align="center">Thymeleaf</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Thymeleaf](https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Vite.js -->
		<tr>
			<td align="center">Vite.js</td>
			<td align="center">
				<img src="https://badges.aleen42.com/src/vitejs.svg" height="25">
			</td>
			<td align="left">
				<code>
					![Vue.js](https://badges.aleen42.com/src/vitejs.svg)
				</code>
			</td>
		</tr>
		<!-- Vue.js -->
		<tr>
			<td align="center">Vue.js</td>
			<td align="center">
				<img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" height="25">
			</td>
			<td align="left">
				<code>
					![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
				</code>
			</td>
		</tr>
		<!-- Webpack -->
		<tr>
			<td align="center">Webpack</td>
			<td align="center">
				<img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" height="25">
			</td>
			<td align="left">
				<code>
					![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
				</code>
			</td>
		</tr>
		<!-- Yarn -->
		<tr>
			<td align="center">Yarn</td>
			<td align="center">
				<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="servers"><a> 🗄️ Servers

<table style="text-align: center;">
	<caption><strong>Badges</strong> 🗄️</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Apache  -->	
		<tr>
			<td align="center">Apache</td>
			<td align="center">
				<img src="https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Apache Airflow -->
		<tr>
			<td align="center">Apache Airflow</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Apache Airflow](https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Apache Ant -->
		<tr>
			<td align="center">Apache Ant</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Apache%20Ant-A81C7D?style=for-the-badge&logo=Apache%20Ant&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Apache Ant](https://img.shields.io/badge/Apache%20Ant-A81C7D?style=for-the-badge&logo=Apache%20Ant&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Apache Flink -->
		<tr>
			<td align="center">Apache Flink</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Apache%20Flink-E6526F?style=for-the-badge&logo=Apache%20Flink&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Apache Flink](https://img.shields.io/badge/Apache%20Flink-E6526F?style=for-the-badge&logo=Apache%20Flink&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Apache Maven -->
		<tr>
			<td align="center">Apache Maven</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Apache Tomcat -->
		<tr>
			<td align="center">Apache Tomcat</td>
			<td align="center">
				<img src="https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black" height="25">
			</td>
			<td align="left">
				<code>
					![Apache Tomcat](https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black)
				</code>
			</td>
		</tr>
		<!-- Gunicorn -->
		<tr>
			<td align="center">Gunicorn</td>
			<td align="center">
				<img src="https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Gunicorn](https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="operating-system">🎛️ Sistema Operativos

<table style="text-align: center;">
	<caption><strong>Badges</strong> 🎛️</caption>
	<colgroup>
		<col span="1">
		<col span="1">
		<col span="1">
	</colgroup>
	<thead>
		<tr>
			<th>NOMBRE</th>
			<th>BADGE</th>
			<th>MARKDOWN</th>
		</tr>
	</thead>
	<tbody>
		<!-- Alpine Linux  -->	
		<tr>
			<td align="center">Alpine Linux</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					 ![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Android -->
		<tr>
			<td align="center">Android</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Arch -->
		<tr>
			<td align="center">Arch</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge" height="25">
			</td>
			<td align="left">
				<code>
					![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge)
				</code>
			</td>
		</tr>
		<!-- Cent OS -->
		<tr>
			<td align="center">Cent OS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/cent%20os-002260?style=for-the-badge&logo=centos&logoColor=F0F0F0" height="25">
			</td>
			<td align="left">
				<code>
					![Cent OS](https://img.shields.io/badge/cent%20os-002260?style=for-the-badge&logo=centos&logoColor=F0F0F0)
				</code>
			</td>
		</tr>
		<!-- Chrome OS -->
		<tr>
			<td align="center">Chrome OS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/chrome%20os-3d89fc?style=for-the-badge&logo=google%20chrome&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Chrome OS](https://img.shields.io/badge/chrome%20os-3d89fc?style=for-the-badge&logo=google%20chrome&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Debian -->
		<tr>
			<td align="center">Debian</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Deepin -->
		<tr>
			<td align="center">Deepin</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Deepin-007CFF?style=for-the-badge&logo=deepin&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Deepin](https://img.shields.io/badge/Deepin-007CFF?style=for-the-badge&logo=deepin&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Elementary OS -->
		<tr>
			<td align="center">Elementary OS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-elementary%20OS-black?style=for-the-badge&logo=elementary&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Elementary OS](https://img.shields.io/badge/-elementary%20OS-black?style=for-the-badge&logo=elementary&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Fedora -->
		<tr>
			<td align="center">Fedora</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Fedora](https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- FreeBSD -->
		<tr>
			<td align="center">FreeBSD</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-FreeBSD-%23870000?style=for-the-badge&logo=freebsd&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![FreeBSD](https://img.shields.io/badge/-FreeBSD-%23870000?style=for-the-badge&logo=freebsd&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- IOS -->
		<tr>
			<td align="center">IOS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![IOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Kali -->
		<tr>
			<td align="center">Kali</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Kali](https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Kubuntu -->
		<tr>
			<td align="center">Kubuntu</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-KUbuntu-%230079C1?style=for-the-badge&logo=kubuntu&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Kubuntu](https://img.shields.io/badge/-KUbuntu-%230079C1?style=for-the-badge&logo=kubuntu&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Linux -->
		<tr>
			<td align="center">Linux</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" height="25">
			</td>
			<td align="left">
				<code>
					![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
				</code>
			</td>
		</tr>
		<!-- Linux Mint -->
		<tr>
			<td align="center">Linux Mint</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Linux Mint](https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Lubuntu -->
		<tr>
			<td align="center">Lubuntu</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-Lubuntu-%230065C2?style=for-the-badge&logo=lubuntu&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Linux Mint](https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Lineageos -->
		<tr>
			<td align="center">Lineageos</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-Lubuntu-%230065C2?style=for-the-badge&logo=lubuntu&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Linux Mint](https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Manjaro -->
		<tr>
			<td align="center">Manjaro</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Manjaro-35BF5C?style=for-the-badge&logo=Manjaro&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Manjaro](https://img.shields.io/badge/Manjaro-35BF5C?style=for-the-badge&logo=Manjaro&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- MX Linux -->
		<tr>
			<td align="center">MX Linux</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-MX%20Linux-%23000000?style=for-the-badge&logo=MXlinux&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![MX Linux](https://img.shields.io/badge/-MX%20Linux-%23000000?style=for-the-badge&logo=MXlinux&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Mac Os -->
		<tr>
			<td align="center">Mac Os</td>
			<td align="center">
				<img src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0" height="25">
			</td>
			<td align="left">
				<code>
					![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)
				</code>
			</td>
		</tr>
		<!-- Openwrt -->
		<tr>
			<td align="center">Openwrt</td>
			<td align="center">
				<img src="https://img.shields.io/badge/OpenWrt-00B5E2?style=for-the-badge&logo=OpenWrt&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Openwrt](https://img.shields.io/badge/OpenWrt-00B5E2?style=for-the-badge&logo=OpenWrt&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- OpenBSD -->
		<tr>
			<td align="center">OpenBSD</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-OpenBSD-%23FCC771?style=for-the-badge&logo=openbsd&logoColor=black" height="25">
			</td>
			<td align="left">
				<code>
					![OpenBSD](https://img.shields.io/badge/-OpenBSD-%23FCC771?style=for-the-badge&logo=openbsd&logoColor=black)
				</code>
			</td>
		</tr>
		<!-- openSUSE -->
		<tr>
			<td align="center">openSUSE</td>
			<td align="center">
				<img src="https://img.shields.io/badge/openSUSE-%2364B345?style=for-the-badge&logo=openSUSE&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![openSUSE](https://img.shields.io/badge/openSUSE-%2364B345?style=for-the-badge&logo=openSUSE&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Pop! OS -->
		<tr>
			<td align="center">Pop! OS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Pop!_OS-48B9C7?style=for-the-badge&logo=Pop!_OS&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Pop! OS](https://img.shields.io/badge/Pop!_OS-48B9C7?style=for-the-badge&logo=Pop!_OS&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Red Hat -->
		<tr>
			<td align="center">Red Hat</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Red%20Hat-EE0000?style=for-the-badge&logo=redhat&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>
					![Red Hat](https://img.shields.io/badge/Red%20Hat-EE0000?style=for-the-badge&logo=redhat&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Rocky Linux -->
		<tr>
			<td align="center">Rocky Linux</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-Rocky%20Linux-%2310B981?style=for-the-badge&logo=rockylinux&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Rocky Linux](https://img.shields.io/badge/-Rocky%20Linux-%2310B981?style=for-the-badge&logo=rockylinux&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Suse -->
		<tr>
			<td align="center">Suse</td>
			<td align="center">
				<img src="https://img.shields.io/badge/SUSE-0C322C?style=for-the-badge&logo=SUSE&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Suse](https://img.shields.io/badge/SUSE-0C322C?style=for-the-badge&logo=SUSE&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Slackware -->
		<tr>
			<td align="center">Slackware</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-Slackware-%231357BD?style=for-the-badge&logo=slackware&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Slackware](https://img.shields.io/badge/-Slackware-%231357BD?style=for-the-badge&logo=slackware&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Tails -->
		<tr>
			<td align="center">Tails</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Ubuntu -->
		<tr>
			<td align="center">Ubuntu</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Unraid -->
		<tr>
			<td align="center">Unraid</td>
			<td align="center">
				<img src="https://img.shields.io/badge/unraid-%23F15A2C.svg?style=for-the-badge&logo=unraid&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Unraid](https://img.shields.io/badge/unraid-%23F15A2C.svg?style=for-the-badge&logo=unraid&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Wear OS -->
		<tr>
			<td align="center">Wear OS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/unraid-%23F15A2C.svg?style=for-the-badge&logo=unraid&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Wear OS](https://img.shields.io/badge/-Wear%20OS-4285F4?style=for-the-badge&logo=wear-os&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Windows -->
		<tr>
			<td align="center">Windows</td>
			<td align="center">
				<img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
				</code>
			</td>
		</tr>
		<!-- Zorin OS -->
		<tr>
			<td align="center">Zorin OS</td>
			<td align="center">
				<img src="https://img.shields.io/badge/-Zorin%20OS-%2310AAEB?style=for-the-badge&logo=zorin&logoColor=white" height="25">
			</td>
			<td align="left">
				<code>![Zorin OS](https://img.shields.io/badge/-Zorin%20OS-%2310AAEB?style=for-the-badge&logo=zorin&logoColor=white)
				</code>
			</td>
		</tr>
	</tbody>
</table>


[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

---

### <a name="others"></a> Otros


<a href="https://github.com/enidev911?tab=followers" target="_blank">
<img src="https://img.shields.io/github/followers/enidev911.svg?style=social&label=Follow&maxAge=2592000" height="30"></a>


`[![GitHub followers](https://img.shields.io/github/followers/enidev911.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/enidev911?tab=followers)`

---

<a href="https://GitHub.com/enidev911/EniDev911.github.io/network/" target="_blank">
<img src="https://img.shields.io/github/forks/enidev911/EniDev911.github.io.svg?style=social&label=Fork&maxAge=2592000" height="30"></a>

`[![GitHub forks](https://img.shields.io/github/forks/enidev911/EniDev911.github.io.svg.js.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/enidev911/StrapDown.js/network/)`

---

**GitHub Profile**  

<a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank">
<img src="https://github-profile-trophy.vercel.app/?username=enidev911&margin-w=10&row=1&theme=dracula"></a>

`[![Ryo-ma's github trophy](https://github-profile-trophy.vercel.app/?username=enidev911&margin-w=10&row=1&theme=dracula)](https://github.com/ryo-ma/github-profile-trophy)`

---

<a href="https://www.apiseven.com/en/contributor-graph?chart=contributorOverTime&repo=enidev911/badges" target="_blank">
<img src="https://contributor-graph-api.apiseven.com/contributors-svg?chart=contributorOverTime&repo=enidev911/badges"></a>

`[![Contributors over time](https://contributor-graph-api.apiseven.com/contributors-svg?chart=contributorOverTime&repo=enidev911/badges)](https://www.apiseven.com/en/contributor-graph?chart=contributorOverTime&repo=enidev911/badges)`

---

<a href="https://open.vscode.dev/enidev911/enidev911.github.io" target="_blank">
<img src="https://img.shields.io/badge/-Abrir%20en%20VsCode.dev-%23007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff" height="30"></a>

`[![Open in Visual Studio Code](https://img.shields.io/badge/-Abrir%20en%20VsCode.dev-%23007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff)](https://open.vscode.dev/enidev911/enidev911.github.io)`

---

<a href="https://discord.gg/Q2Jn3hQMgF" target="_blank">
<img src="https://badgen.net/discord/members/Q2Jn3hQMgF?icon=discord&style=for-the-badge" height="30"></a>

`[![G33 Discord members](https://badgen.net/discord/members/Q2Jn3hQMgF?icon=discord&style=for-the-badge)](https://discord.gg/Q2Jn3hQMgF)`

---

<a href="https://discord.gg/Q2Jn3hQMgF" target="_blank">
<img src="https://badgen.net/discord/online-members/Q2Jn3hQMgF?icon=discord&style=for-the-badge" height="30"></a>

`[![G33 Discord online members](https://badgen.net/discord/online-members/Q2Jn3hQMgF?icon=discord&style=for-the-badge)](https://discord.gg/Q2Jn3hQMgF)`

---

[![](https://img.shields.io/badge/volver%20a%20listado-%E2%86%A9-yellow?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)](#top)

