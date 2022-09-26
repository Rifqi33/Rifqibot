import xfar from 'xfarr-api'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, text, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'filmanime') {
    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)
	 let res = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=${global.lolkey}&query=${text}`)
	 let jsons = await res.json()
	 let x = jsons.result
let hasil = `*${htki} ANIME-SEARCH ${htka}*\n
*title:* ${x.title}
*link:* ${x.link}
*thumbnail:* ${x.thumbnail}
*genre:* ${x.genre}
*views:* ${x.views}
*duration:* ${x.duration}
*tahun:* ${x.tahun}
*rating:* ${x.rating}
*desc:* ${x.desc}
*actors:* ${Array.from(x.actors)}
*location:* ${x.location}
*date_release:* ${x.date_release}
*language:* ${x.language}
*link_dl:* ${x.link_dl}`
    await conn.sendButton(m.chat, hasil, wm, await(await fetch(x.thumbnail)).buffer(), [[' Menu', '/menu']], m, fakefb)
    }
if (command == 'film') {
    if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`
let i = await xfar.search.film(args[0])
let txt = `*${htki} FILM-SEARCH ${htka}*\n\n*📫 Judul :* ${i[0].judul}\n*🎞️  Tipe  :* ${i[0].type}\n*📟 Kualitas :* ${i[0].quality}\n*📮Upload :* ${i[0].upload}\n*🔗 Url :* ${await shortUrl(i[0].link)}\n-----------------------------------------------\n`

await conn.sendButton(m.chat, txt, wm, await(await fetch(i[0].thumb)).buffer(), [[' Menu', '/menu']], m, fakefb)
  }

}
handler.help = ['filmanime', 'film'].map(v => v + '<film>')
handler.tags = ['internet', 'anime']
handler.command = /^film(anime)?$/i

export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}