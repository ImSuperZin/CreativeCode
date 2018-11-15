module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`desculpe, apenas administradores podem usar esse comando.`)
  const msg = args.join(' ')

  if (!args) return message.reply('use assim: `!say <msg>`')
  message.delete().catch()
  return message.channel.send(msg)
}
