const Telegraf = require('telegraf')
let token = '2033209385:AAGRdz6AGIjavhxYJXVMZAKM7peMnTvq2cU'
const bot = new Telegraf(token)

//method for invoking start command

bot.command('start', (ctx) => {
  console.log(ctx.from)
  bot.telegram.sendMessage(
    ctx.chat.id,
    'hello there! Welcome to my new telegram bot.',
    {}
  )
})

//method that displays the inline keyboard buttons

bot.command('animals', (ctx) => {
  console.log(ctx.from)
  let animalMessage = `great, here are pictures of animals you would love`
  ctx.deleteMessage()
  bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'dog',
            callback_data: 'dog'
          },
          {
            text: 'cat',
            callback_data: 'cat'
          }
        ]
      ]
    }
  })
})

//method that returns image of a dog

bot.action('dog', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: '../files/dog.jfif'
  })
})

//method that returns image of a cat

bot.action('cat', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: '../files/cat.jpeg'
  })
})

bot.launch()
