import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'kataquotes') {
let pe = await fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
let xc = await pe.json()
  await conn.sendButton(m.chat, `*Quote:*
${xc.en}

*Author:*
${xc.author}`, wm, null, [
                ['Next', `${usedPrefix + command}`],
                ['Translate', `${usedPrefix}tr id ${xc.en}`]
            ], m)
            }
            
}
handler.command = handler.help = ['kataquotes']
handler.tags = ['fun']

export default handler