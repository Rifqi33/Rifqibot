import fetch from 'node-fetch'
import axios from 'axios'
import { pinterest } from '@bochilteam/scraper'
import { readFileSync } from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    let type = (args[0] || '').toLowerCase()
    let urut = text.split`|`
    let one = urut[1]
    let caption = `*Hasil pencarian* ${one}`
    if (!text) throw 'Masukkan Teks\nApa yang kamu cari?'
  
const sections = [
    {
	title: htjava + ' List Pinterest Search ' + htjava,
	rows: [
{title: em.getRandom() + " Pinterest 1", rowId: usedPrefix + command + ' pinterest1 |' + text},
{title: em.getRandom() + " Pinterest 2", rowId: usedPrefix + command + ' pinterest2 |' + text},
{title: em.getRandom() + " Pinterest 3", rowId: usedPrefix + command + ' pinterest3 |' + text},
{title: em.getRandom() + " Pinterest 4", rowId: usedPrefix + command + ' pinterest4 |' + text},
{title: em.getRandom() + " Pinterest 5", rowId: usedPrefix + command + ' pinterest5 |' + text},
{title: em.getRandom() + " Pinterest 6", rowId: usedPrefix + command + ' pinterest6 |' + text},
{title: em.getRandom() + " Pinterest 7", rowId: usedPrefix + command + ' pinterest7 |' + text},
{title: em.getRandom() + " Pinterest 8", rowId: usedPrefix + command + ' pinterest8 |' + text},
{title: em.getRandom() + " Pinterest 9", rowId: usedPrefix + command + ' pinterest9 |' + text},
{title: em.getRandom() + " Pinterest 10", rowId: usedPrefix + command + ' pinterest10 |' + text}
	]
    }
]

const listMessage = {
  text: '👋 Hai, ' + name + ' ' + ucapan + '\n⚡ Silakan pilih pencarian di bawah...',
  footer: global.wm,
  title: `${htki} ${command} ${htka}`,
  buttonText: `☂️ Klik Disini ☂️`,
  sections
}


try {
               if (/pinterest|pin/i.test(command)) {
          switch (type) {
case 'pinterest':
let js0 = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=${global.lolkey}&query=${one}`)
let jp0 = await js0.json()
let x0 = jp0.result
await conn.sendButton(m.chat, caption, wm, x0, [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest1':
let js1 = `https://leyscoders-api.herokuapp.com/api/pinsearch?q=${one}&apikey=MIMINGANZ`
await conn.sendButton(m.chat, caption, wm, js1, [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break
    
case 'pinterest2':
let js2 = await fetch(`https://kannxapi.herokuapp.com/api/pinterest?query=${one}`)
let jp2 = await js2.json()
let x2 = jp2.result
await conn.sendButton(m.chat, caption, wm, x2.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest3':
let js3 = await fetch(`https://rest-beni.herokuapp.com/api/pinterest?query=${one}`)
let jp3 = await js3.json()
let x3 = jp3.result
await conn.sendButton(m.chat, caption, wm, x3.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest4':
let js4 = await fetch(`https://erdwpe-api.herokuapp.com/search/pinterest?query=${one}`)
let jp4 = await js4.json()
let x4 = jp4.result
await conn.sendButton(m.chat, caption, wm, x4.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest5':
let js5 = await fetch(`https://melcanz.com/pinterestSearch?q=${one}&apikey=manHkmst`)
let jp5 = await js5.json()
let x5 = jp5.data
await conn.sendButton(m.chat, caption, wm, x5.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest6':
let js6 = await pinterest(text)
  await conn.sendButton(m.chat, caption.trim(), wm, j6.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
break

case 'pinterest7':
let js7 = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=${one}`)
let jp7 = await js7.json()
let x7 = jp7.result
await conn.sendButton(m.chat, caption, wm, x7.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest8':
let js8 = await fetch(`https://tyz-api.herokuapp.com/search/pinterest?query=${one}`)
let jp8 = await js8.json()
let x8 = jp8.result
await conn.sendButton(m.chat, caption, wm, x8.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest9':
let js9 = await fetch(`https://api.vhtear.com/pinterest?query=${one}&apikey=nekobotofficial`)
let jp9 = await js9.json()
let x9 = jp9.result
await conn.sendButton(m.chat, caption, wm, x9.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
break

case 'pinterest10':
let js10 = await fetch(`https://violetics.pw/api/downloader/pinterest2?apikey=beta&url=${one}`)
let jp10 = js10.data
let x10 = jp10.result
await conn.sendButton(m.chat, caption, wm, x10, [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
break


                       default:
                        return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
                }
        }
    } catch (e) {
        conn.reply(m.chat, 'Error', m)
        console.log(e)
    }
}
handler.help = ['pinterest <query>']
handler.command = /^pin(terest)$/i
handler.tags = ['random']

export default handler
