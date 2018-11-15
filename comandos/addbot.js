const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  const id = args[0]
  if (!id) return message.reply('use assim: `!addbot <id do bot> <prefix>`!')
  if (isNaN(id) === true) return message.reply(`o ID é composto apenas por números, '\`${id}\`' não é um ID valido! :frowning:`)
  const prefix = args[1]
  if (!prefix) return message.reply('use assim: `!addbot <id do bot> <prefix>`!')

  const addbot = new Discord.RichEmbed()
    .setColor('#0092ca')
    .setTitle(`🤖 NOVO BOT:`)

    .setDescription(`${message.author} fez a aplicação para adicionar o seu bot!
        
        **ID**: \`${id}\`
        **Prefix**: \`${prefix}\`
        **Invite (gerado automaticamente)**: https://discordapp.com/api/oauth2/authorize?client_id=${id}&permissions=0&scope=bot`)
    .setTimestamp()

  message.guild.channels.get('512766692942938123').send(addbot)
  message.channel.send(`:white_check_mark: **|** ${message.author} seu bot está na lista de espera!`)
}
