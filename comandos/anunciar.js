var Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(message.author.toString() + 'desculpe, apenas administradores podem usar esse comando')
  let canal = message.member.guild.channels.get('481260969293643777')

  const announceembed = new Discord.RichEmbed()
    .setAuthor('LabError', client.user.avatarURL)
    .setColor('00FFFF')
    .addField('' + args.join(' '))
    .addField('Por:', `${message.author}`)
    .setFooter('CreativeBOT © 2018')
    .setTimestamp()
  message.delete()
  canal.send(announceembed)
}
