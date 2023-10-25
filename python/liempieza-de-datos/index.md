---
layout: default
title: Liempieza de datos con pandas
css:
  custom: |
    table { 
        display: block;
    	max-width: 100%;
    	overflow:auto;
    	height: 300px;
    	white-space: no-wrap;
    }
    th { background: #121212; }
    ::-webkit-scrollbar {
      height: 10px;              /* height of horizontal scrollbar ← You're missing this */
      width: 10px;               /* width of vertical scrollbar */
      border: 1px solid #d5d5d5;
      border-radius: 10px;
      
    }
    ::-webkit-scrollbar-thumb{
        background: #fca;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent ; 
    }

---

## Fuente de datos

Te dejo un ejemplo de los datos que componen el set de datos, el archivo completo se puede ver en el siguiente link al [`archivo`](https://raw.githubusercontent.com/EniDev911/assets/main/csv/csv_Banco.csv){:target='_blank' class='link'}

<table>
  {% for row in site.data.csv.banco %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>


## Detección de datos nulos


`Isnull` nos permite detectar datos nulos, simplificando este proceso independientemente de la dimensión de nuestra base de datos:

{: .clipboard }
```py
#agregamos la función isnull. 
datos.isnull()
#Si lo prefieres puedes usar:
datos.notnull()
```

## Liempieza de datos

Ahora que sabemos localizar los datos nulos. Veamos como trabajar con ellos. A partir de este punto estaremos modificando datos.

`dropna()` elimina las filas que contienen datos nulos, por tanto es muy útil para eliminar filas con varios datos nulos a la vez, ya que dichas filas no aportarían información significativa más que para unas cuantas variables.

{: .clipboard }
```py
datos.dropna()
```

## Remplazar NAN con media o promedio en Dataframe usando fillna()


En el análisis de datos, a veces debemos completar los valores faltantes utilizando la media de la columna o la media de la fila para realizar el análisis. Python proporciona métodos integrados para rectificar el problema de los valores perdidos o valores `NaN` y limpiar el conjunto de datos. Estas funciones son:

- `Dataframe.fillna()`: se usa para remplazar el `NaN` en el marco de datos.
- `mean()`: 