import fetch from 'node-fetch'
import axios from 'axios'
import hx from 'hxz-api'
import { twitter } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!isUrl(args[0])) throw 'Masukkan Link'
try {
    let listSections = []
	listSections.push(['No. ' + ++index, [
          ['Metode A', usedPrefix + command + ' ' + args[0] + ' a', '\n⌚ *By:* ' + author],
          ['Metode B', usedPrefix + command + ' ' + args[0] + ' b', '\n⌚ *By:* ' + author],
          ['Metode C', usedPrefix + command + ' ' + args[0] + ' c', '\n⌚ *By:* ' + author],
          ['Metode D', usedPrefix + command + ' ' + args[0] + ' d', '\n⌚ *By:* ' + author]
                  ]])
        if (args[0]) return conn.sendList(m.chat, htki + ' 📺 Twitter Search 🔎 ' + htka, `⚡ Silakan pilih Twitter Search di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Twitter Search Disini ☂️`, listSections, m)

if (args[1] == 'a') {
	let res = await twitterDl(args[0])
	for (let x = 0; x < res.media.length; x++) {
		let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
  conn.sendButtonVid(m.chat, res.media[x].url, caption, author, 'To mp3', '.tomp3', fakes, adReply)
	}
	}
	if (args[1] == 'b') {
let res = await axios('https://violetics.pw/api/downloader/twitter?apikey=beta&url=' + args[0])
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 Quality: ' + v.name,
		description: '\n⌚ Host: ' + json.result.hosting + '\n⏲️ Title: ' + json.result.meta.title + '\n📎 URL: ' + v.url + '\n📌 Source: ' + json.result.meta.source,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
	
	if (args[1] == 'c') {
	/* Twit */
await hx.fbdown(`${args[0]}`)
            .then(G => {
            let ten = `${G.HD}`
            conn.sendButtonVid(m.chat, ten, `*desc* : ${G.desc}
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3', fakes, adReply)
            })
            }
	if (args[1] == 'd') {
	let p = await twitter(args[0])
	throw p
	}
	} catch (e) {
    throw eror
    }
}
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^twit(t(er(dl)?)?)?$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}

async function twitterDl(url) {
	let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
	if (!id) throw 'Invalid URL'
	let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
	if (res.status !== 200) throw res.statusText
	let json = await res.json()
	if (json.media) {
		let media = []
		for (let i of json.media) {
			if (/video|animated_gif/.test(i.type)) {
				let vids = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
				let vid = vids.variants.pop()
				media.push({
					url: vid.url,
					type: i.type
				})
			} else {
				media.push({
					url: i.url,
					type: i.type
				})
			}
		}
		return {
			caption: json.text,
			media 
		}
	} else throw 'No media found'
}
