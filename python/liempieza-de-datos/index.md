---
layout: default
title: Liempieza de datos con pandas
css:
  custom: |
    strong {
      color: #ff8;
    }
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
- `mean()`: se usa para obtener la media.
- `median()`: se usa para obtener la mediana.
- `var()`: se usa para obtener la varianza.

Basado en la fuente de datos del [`archivo`](https://raw.githubusercontent.com/EniDev911/assets/main/csv/csv_Banco.csv){:target='_blank' class='link'}. Lo primero que debemos es cargarlo en un [`DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html){:target='_blank' class='link'} para ello iniciamos sesión en nuestra cuenta de Google y vamos [`https://colab.research.google.com`](https://colab.research.google.com){:target='_blank' class='link'} luego abrimos un **nuevo Notebook** y en un nuevo bloque ejecutamos lo siguiente:


{: .clipboard }
```py
import pandas as pd

df = pd.read_csv('https://raw.githubusercontent.com/EniDev911/assets/main/csv/csv_Banco.csv')
```

## Medidas de tendencias Disperción


- **Rango**: es la diferencia entre el máximo y el mínimo.
- **Varianza**: representa la variabilidad de una serie de datos respecto a la media.
- **Desviación estandar**: indica que tan dispersos estan los datos respecto a la media.

### Rango

Obtener el rando de nuestra columna Edad del conjunto de datos sería de la siguiente manera:


{: .clipboard .compiler.python }
```py
# Importar
import pandas as pd
# Data 
data = [["Felipe",24,"Masculino",4.5],["Andrea",21,"Femenino",7.0],
["Tomás",22,"Masculino",6.1],["Roberto",20,"Masculino",5.5]]
# Cargar DataFrame
df = pd.DataFrame(data, columns= ["Nombre","Edad","Género","Calificación"])
# Calcular el rango
rango = df['Edad'].max() - df['Edad'].min()
# Mostrar
print(rango) # 4
```

### Desviación Estándar

Obtener la desviación estándar del conjunto de datos:

{: .clipboard }
```py
df.std()
```

### Varianza

Obtener la varianza de la edad del conjunto de datos:


{: .clipboard }
```py
df['Edad'].var()
```

## Relación entre variables


### Histograma

Obtener una visión general de la distribución existente de la variable edad:

{: .clipboard }
```py
df['Edad'].plot.hist(bins=20)
```

### Histograma entre dos variables

La distribución existente entre edad y sexo:

{: .clipboard }

```py
import seaborn as sns

sns.displot(df, x = 'Edad', hue = 'Sexo')
```

## Correlación entre variables

### Gráfica de Matriz de correlación de Pearson


{: .clipboard }
```py
import matplotlib.pyplot as plt

plt.matshow(df.corr())
```

### Gráfica de Matriz de correlación de Spearman