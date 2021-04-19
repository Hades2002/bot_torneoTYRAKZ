const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on("ready", () => {
   console.log("Estoy listo!");
   client.user.setPresence({
    status: "online",
    game: {
        name: "Do not know how to register? -register",
        type: "PLAYING"
    }
});
});
client.on("message", async(message) =>{

    if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

//HELP
  if (command === "help" || command === "h"){
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "??COMANDOS SDRAC",
      description: "Un bot unico centrado en la creacion de **canales temporales** para torneos competitivos.",
      fields: [{
          name: "__??Prefijo__",
          value: "`-`"
        },
        {
          name: "__??Torneo__",
          value: "`-torneo` Crear canales temporales para torneos"
        },
        {
          name: "__??ping__",
          value: "`-ping` Ver la latencia de los servidores Discord API."
        },
      ],
      timestamp: new Date(),
      footer: {
        //icon_url: client.user.avatarURL,
        text: "© hades"
      }
    }
  });
    }
//PING
if(command === 'ping' || command === 'latencia' ){
  let ping = Math.floor(message.client.ping);

  message.channel.send(":ping_pong: Pong!")
  .then(m => {
       const embed = new Discord.RichEmbed()
       .setDescription(`:incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)
       .setColor(0x00AE86)
       .setImage("https://i.imgur.com/Ve6aeiJ.gif");
                  
       m.edit(embed);
  })
};
if (command === "torneo"){
  message.channel.send("**ESP :**??Se le **enviara** un mensaje automatico __con los pasos correspondientes para la registracion.__??\n**ENG :**??An automatic **message will** be sent to you by private??");
  message.author.send("**ESP :**??**¿Cómo me registro?**\n"+
"\n"+
"Vaya al canal correspondiente y use el comando ```-registrarse```Mas su apodo de PUBG y de sus amigos separados por una espacio **(por ejemplo, PUBGplayer1 / PUBGplayer2)**"+
"\n"+
"Tenga en cuenta que **su amigo debe estar en este servidor de Discord** antes de registrarse para el torneo, __de lo contrario no se podra proporcionarle los permisos.__\n"+
"\n"+
"El registro debe ser similar a este ejemplo: -registrar [**PUBGplayer1/PUBGplayer2**] [@**Usuario del discord (De su duo.)** # 0001]\n"+
"\n"+
                     "__**Nota :**__ Cuando se registra __ignorar los corchetes (del ej. dado) y respetar los espacios correspondientes__."+
                     "\nLos __nombres de equipo o nicks__ **no pueden tener espacios** entre si, es decir por ej"+
                     "\n"+
                     "PUBGplayer1 / PUBGplayer2,~~Asi no.~~"+
                     "\n"+
                     "PUBGplayer1/PUBGplayer2, **Asi si**."+
                     "\n"+
                     "**IMPORTANTE :** Puede ser que a la hora de crearse los canales, el bot tenga fallas y no le de los permisos correspondientes, avisar algun adimin para que le de los permisos manualmenmte."+
                     "\n"+
                     
"\n**ENG :**??**How do I register?**\n"+
"\n"+
"Go to the corresponding channel and use the command ```-register```More your PUBG nickname and your friends separated by a space **(for example, PUBGplayer1 / PUBGplayer2)**"+
"\n"+
"**Please be aware** that your friend **must** be in this **Discord server before** you register for the tournament otherwise I **won't** be able to provide him with permits.\n"+
"\n"+
"The record should be similar to this example: -register [** PUBGplayer1/PUBGplayer2 **] [@**Discord user (From your duo.)** # 0001]\n"+
"\n"+
                     "__**Note:**__ When registering __ignore the brackets (from the given example) and respect the corresponding spaces__."+
                     "\nThe __name of team or nicks__ ** can not have spaces ** among themselves, that is to say for example"+
                     "\n"+
                     "PUBGplayer1 / PUBGplayer2,~~So no.~~"+
                     "\n"+
                     "PUBGplayer1/PUBGplayer2,** So yes **."+
                     "\n"+
                     "**IMPORTANT:** It may be that at the time of creating the channels, the bot has failures and does not give the corresponding permissions, warn any adimin to give you the permissions manually."+
                     "\n"
                     )
}

//TORNEO
if (command === "registrar" || command === "register") {
  var server = message.guild;
  let usuarios = message.guild.roles.find(c => c.name === "@everyone");
  
  
  let equipo = args[0];
  if (!equipo)
    return message.channel.send(
      `${message.member} You must type the name of your team.?`
    );
  
  
  let miembro = message.mentions.members.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention a member.?"
                         
                         ).catch(console.error);
 
  
  let canal = message.guild.channels.find(
    c => c.name.toLowerCase() === equipo.toLowerCase()
  );
 
  if (canal) {
    message.channel.send(
      "?Channel **exists**,__re-enter the command and choose another name for your team__?");
  } else {
    message.channel.send("The channel __does not exist__, **will be created in a few seconds...**??");
    
    let role = await server.createRole({
      name: equipo,
      color: "#0bffd2"
    });
    let channel = await server.createChannel(`${contador} - ${equipo}`, "voice");
    channel.setParent("569197079969267712");
    //channel.setUserLimit(2);
    channel.overwritePermissions(usuarios, {
      SEND_MESSAGES: false,
      READ_MESSAGES: false
    });
    channel.overwritePermissions(role, {
      SEND_MESSAGES: true,
      READ_MESSAGES: true
    });
    miembro.addRole(role);
    message.member.addRole(role);
    message.channel.send(`Done, you __add the role__ **@${role.name}** to ${miembro.user.username} and the voice channel ** was created correctly ** ??\n`);
  }
}
});
client.login(process.env.TOKEN);