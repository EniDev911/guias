---
layout: default
title: Las variables reservadas en Bash
css:
  custom: |-
    table { box-shadow: 2px 4px 12px #00000040 }
    thead { backgroud: #000 }
    th { background: #000 }
    th, td { width: fit-content; border: 1px solid #fff }    
    tr { border: 2px solid #ccc }
    tbody tr:hover { background: #AAAAAA50 }
---

## VARIABLES DE ENTORNOS

Algunas variables de entorno que se pueden encontrar disponible:

|Nombre|Ejemplo|Descripción|
|:-----|:------|:----------|
|`HOME`|`/home`|Directorio raíz del usuario|
|`PS1`|`$`|Prompt del shell|
|`TERM`|`xterm`|Tipo de terminal que el usuario utiliza|


Para mostrar las diferentes variables de entornos definidas, podemos ejecutar el comando `env`:

```bash
$ env
USERDOMAIN=home1
USERDOMAIN_ROAMINGPROFILE=home1
USERNAME=home
USERPROFILE=C:\Users\home
PWD=/home/mobaxterm/Desktop
SHELL=/bin/bash
PS1=`r0=$?;if [ -z "$NP" ]; then [ $r0 = 0 ] && s0="%F{green}%{\e(0%}d" || s0="%F{red}%{\e(0e%}";builtin echo -e "\n%{\e[1;30m\e(0%}${(l:$[COLUMNS-4]::q:):-}%{\e(B%} $s0%{\e(B\e[0m%}";fi`
%B%F{y}[%D %*]%f%b%F{def}  %F{m}%~%F{def}
%F{c}[%n.%m]%F{def} ➤
EDITOR=/bin/vim
SSH_AUTH_SOCK=/tmp/ssh-Lrq7OvjMDwzY/agent.1420
SSH_AGENT_PID=1421
```

---

## VARIABLES ESPECIALES

Algunas de las variables especiales disponible en bash son:

|Variable|Descripción|
|:-------|:----------|
|`$0`|Asigna la **variable** al nombre del script que se ejecuta|
|`$1`, `$2`, `$3`, ...|Asigna la **variable** a los parámetros de posición pasado al script que se ejecuta|
|`$_`|Asigna la **variable** al último argumento pasado al último comando ejecutado|
|`$-`|Asigna la **variable** a la lista de opciones del shell|
|`$!`|Asigna la **variable** al PID del último comando ejecutado en segundo plano|