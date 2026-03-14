const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: "endless1.aternos.me",
  port: 24408,
  username: "AFK_Bot",
  version: false
})

bot.on('spawn', () => {
  console.log("Bot joined the server")

  // Auto Jump
  setInterval(() => {
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

  }, 5000)

})

bot.on('end', () => {
  console.log("Bot disconnected, reconnecting...")
  setTimeout(createBot, 5000)
})

bot.on('error', (err) => {
  console.log("Error:", err)
})

}

createBot()
