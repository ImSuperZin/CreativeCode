const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if (message.channel.id !== '461944635808284683') return message.reply(`você não pode executar comandos aqui, vá em <#461944635808284683>`).then(msg => msg.delete(5000))

  let member = message.mentions.members.first()

  if (member) {
    const avatar = new Discord.RichEmbed()

      .setTitle('🖼 Avatar de ' + `${member.user.username}`)
      .setDescription(`Clique [aqui](${member.user.avatarURL}) para fazer o download da imagem.`)
      .setImage(member.user.avatarURL)
      .setThumbnail('#4a4a4a')
      .setFooter('SpongeBOT ')

    message.channel.send(avatar)
  } else {
    const avatar = new Discord.RichEmbed()
      .setTitle('🖼 Avatar de ' + `${message.author.username}`)
      .setDescription(`Clique [aqui](${message.author.avatarURL}) para fazer o downlaod do seu avatar.`)
      .setThumbnail(message.author.avatarURL)
      .setColor('#4a4a4a')
      .setFooter('SpongeBOT')

    message.channel.send(avatar)
  }
}
