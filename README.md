# **BOT tournamentTYRAKZ**

El objetivo del BOT fue crear un sistema de registración avanzado ambientado para torneos competitivos, donde sus equipos puedan tener canales de voz personalizados y exclusivos para ellos.

La función de este producto es reducir el tiempo de registración ya que el sistema actual manual demora mucho, en cambio con el bot (el sistema que crea el proyecto) permite que se demore menos registrando a los equipos.

# **Comandos**
``` 
> /help     | Mostrara toda la informacion del bot.
> /torneo   | Mostrara toda la informacion del torneo actual.
> /register | Comando para registrar su equipo.
```

<br>

# Demostracion del comando /register
``` 
/register [Nombre de tu equipo] @[Mencionar a tu amigo de discord]
``` 
A continuacion se muestra como es el uso del comando **/register**, como se ve, si el usuario no ingresa el nombre de su equipo y/o del integrante, se mostraran las siguentes restricciones, en caso que esten, el comando se ejectura satisfactoriamente, creando el rol y el canal exclusvio para su equipo.

https://user-images.githubusercontent.com/32782329/136644129-759dc21b-0626-4d07-9710-80c87de0dd39.mp4

<br>

# Manaulmente vs BOT
**Manualmente** demora más de 25 segundos con la intervencion de un administrador del grupo para poder crear los roles, canales necesarios, siempre cuando este disponible.
**Utilizando el bot** sin la intervencion de un administrador y con el BOT los permisos correspondientes, el capitan del equipo demoraria 6 segundos en registrar a su equipo.
<br>

https://user-images.githubusercontent.com/32782329/136644179-efb19fa7-c896-4a7c-ad60-40af0482508b.mp4

# Paso por paso lo que realiza el BOT

COMANDO : %tz [Nombre del equipo] [@Integrante]

<br>
Si no ingresas el nombre del equipo a registrar

![nombredelequipo](https://user-images.githubusercontent.com/32782329/136644201-7994a33d-9f8b-45e9-9c4b-0780bb760460.png)

<br>
Si no ingresas el integrante a tu equipo

![integrante](https://user-images.githubusercontent.com/32782329/136644204-6e1e9440-9c65-438d-a227-531ef2b2c968.png)

<br>
Si el comando es ingresado correctamente...
![tzcomando](https://user-images.githubusercontent.com/32782329/136644220-6cfeeed1-9574-4fa2-828a-74fb8ad81b34.png)


<br>
Se crea el canal y el rol con el nombre del equipo

![canalcreado](https://user-images.githubusercontent.com/32782329/136644221-e881ae47-67f6-47eb-bab9-af85a64068ff.png)

<br>
Se edita el canal y solamente los del equipo pueden ingresar.
![permisoscanal](https://user-images.githubusercontent.com/32782329/136644607-9b50637a-4052-4457-8f18-f68086dba276.png)

<br>
El usuario que ingreso el comando se le asigna el rol creado

![darelrol1](https://user-images.githubusercontent.com/32782329/136644245-fa8e935c-6322-43aa-b6be-f744ba9dc624.png)

<br>
Y al usuario etiquetado se le asigna el rol creado

![darelrol2](https://user-images.githubusercontent.com/32782329/136644246-db7af190-60f4-45e2-b4c5-fadb35abd2a3.png)












