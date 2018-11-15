const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Status !
    gameloop.run(client);
})

client.on('message', message => {
  if (message.author.bot) return
  if (!message.content.startsWith(config.prefix)) return
  let command = message.content.split(' ')[0]
  command = command.slice(config.prefix.length)
  let args = message.content.split(' ').slice(1)
  try {
    let commandFile = require(`./comandos/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    console.error(err)
  }

  client.on('ready', () => {
    console.log(`Bot iniciado com sucesso!`)
  })
})

client.on('guildMemberAdd', member => {
  const entrou = new Discord.RichEmbed()
    .setTitle(`Bem-vindo(a)`)
    .setDescription(`**__${member.user.username}__** entrou no servidor.`)
    .setThumbnail(member.user.avatarURL)
    .setColor('#faaf05')
    .setTimestamp()

  if (member.user.bot === true) {
    member.addRole('512763476171685919')
  } else {
    member.guild.channels.get('512760711907246090').send(entrou)
  }
})

client.on('guildMemberRemove', member => {
  const saiu = new Discord.RichEmbed()
    .setTitle(`Tchau`)
    .setDescription(`**__${member.user.username}__** saiu do servidor.`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()

  member.guild.channels.get('512760711907246090').send(saiu)
})

client.login(process.env.TOKEN))
