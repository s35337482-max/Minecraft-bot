const mineflayer = require('mineflayer')

function createBot(){

const bot = mineflayer.createBot({
  host: 'endless1.aternos.me',
  port: 24408,
  username: 'JumpBot'
})

bot.on('spawn', () => {
  console.log("Bot joined server")

  // auto jump every 3 seconds
  setInterval(() => {
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

  }, 3000)

})

bot.on('end', () => {
  console.log("Reconnecting...")
  setTimeout(createBot, 5000)
})

bot.on('error', console.log)

}

createBot()
