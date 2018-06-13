const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client();


client.on("ready", () => {
  console.log('[>] Connexion avec succès.');
  console.log(`[i] BOT: ${client.user.tag}`);
  console.log(`[i] ID: ${client.user.id}`);
  console.log(`[i] Serveur(s): ${client.guilds.size}`);
  client.user.setActivity("Le serveur @Madd", {type: "WATCHING"});
});

client.on('disconnect', () =>{
    console.log(`${client.user.tag} s'est deconnecté. Date: ` + moment().format('YYYY-MM-DD'));
  });
  
client.on('reconnecting', () => {
    console.log(`${client.user.tag} s'est reconnecté. Date: ` + moment().format('YYYY-MM-DD'));
  });

client.on("guildMemberAdd", (member) => {
    
    let salon_sondages = member.guild.channels.find('name', 'bienvenue');

    if(!salon_sondages) return;

    let bienvenue = (`Bienvenue ${member.user} sur **@Madd** 🖐️ ! N'oublie pas de regarder <#456423824842424322>`);
    salon_sondages.send(bienvenue);

    console.log(`@${member.user.username} avec pour ID ${member.user.id} s'est inscritt sur le serveur. Date: ` + moment().format('YYYY-MM-DD'));

});

client.on("guildMemberRemove", (member) => {
    
    let salon_sondages = member.guild.channels.find('name', 'bienvenue');

    if(!salon_sondages) return;

    let bienvenue = (`${member.user} a quitté **@Madd** ! Il va nous manquer 🤧`);
    salon_sondages.send(bienvenue);

    console.log(`@${member.user.username} avec pour ID ${member.user.id} a quitté le serveur. Date: ` + moment().format('YYYY-MM-DD'));
});

client.login(process.env.TOKEN);
