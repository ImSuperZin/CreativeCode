const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(`você não tem permissão! <:blobthumbsup:486354131565412352>`).then(msg => msg.delete(5000))
  message.delete()
  const mutarcanalmsg = new Discord.RichEmbed()
    .setTitle('Gerenciamento do chat.')
    .setDescription(`Deseja mutar este canal? reaja ao emoji :mute:\nDeseja desmutar este canal? reaja ao emoji :loud_sound:\nEstá com duvidas reaja ao emoji :question:`)
    .setColor('#4a2aed')
    .setFooter(`Sponge - Ira mutar o canal: ${message.channel.name}`)
  let mensg = args.join(' ')
  if (!mensg) {
    message.channel.send(mutarcanalmsg).then(msg => {
      msg.react('🔇').then(r => {
        msg.react('🔊')
        msg.delete(78000)

        const podemutar = (reaction, user) => reaction.emoji.name === '🔇' && user.id === message.author.id
        const podedesmutar = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id

        const podemutarL = msg.createReactionCollector(podemutar, { time: 60000 })
        const podedesmutarL = msg.createReactionCollector(podedesmutar, { time: 60000 })

        podemutarL.on('collect', r => {
          msg.delete()
          let role = message.guild.roles.find('name', '@everyone')
          message.channel.overwritePermissions(role, { SEND_MESSAGES: false })
          message.channel.send(`Este canal foi mutado por: __${message.author}__`)
        })
        podedesmutarL.on('collect', r => {
          msg.delete()
          let role = message.guild.roles.find('name', '@everyone')
          message.channel.overwritePermissions(role, { SEND_MESSAGES: true })
          message.channel.send(`Este canal foi desmutado por: __${message.author}__`)
        })
      })
    })
  }
  if (mensg) {
    if (args[0] === 'OFF' || args[0] === 'off') {
      let role = message.guild.roles.find('name', '@everyone')
      message.channel.overwritePermissions(role, { SEND_MESSAGES: false })
      message.channel.send(`Este canal foi mutado por: __${message.author}__`)
    } else if (args[0] === 'ON' || args[0] === 'on') {
      let role = message.guild.roles.find('name', '@everyone')
      message.channel.overwritePermissions(role, { SEND_MESSAGES: true })
      message.channel.send(`Este canal foi desmutado por: __${message.author}__`)
    } else {
      message.reply('por favor use assim: `!chat off` ou `!chat on`!').then(msg => msg.delete(8000))
    }
  }
}
