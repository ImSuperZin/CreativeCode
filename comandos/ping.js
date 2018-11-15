module.exports.run = async (client, message, args) => {
  const m = await message.channel.send(`:ping_pong: Pong!`)
  if (args[0] === 'api') {
    message.channel.send(`:satellite: **|** ${message.author}, latência da API: ${Math.round(client.ping)}ms.`).then(message => message.delete(5000))
  }
  message.channel.send(`:satellite: **|** ${message.author}, latência de: ${m.createdTimestamp - message.createdTimestamp}ms.`).then(message => message.delete(5000))
}
