import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
    let vn = await fetch(`https://api.waifu.im/endpoints/`)
let x = await vn.json()
let ky = x.versatile
let kys = x.nsfw
					let arr = []
					Object.keys(ky, kys).map((v, index) => {
						arr.push(['Result: ' + ++index, [
							['Versatile: ' + ky[v], usedPrefix + command + ' waifuimget ' + 'https://api.waifu.im/random/?selected_tags=' + ky[v], '\n⌚ *Request:* ' + name],
							['NSFW: ' + kys[v], usedPrefix + command + ' waifuimget ' + 'https://api.waifu.im/random/?selected_tags=' + kys[v], '\n⌚ *Request:* ' + name]
						]])
					})
					if (!args[0]) return conn.sendList(m.chat, htki + ' 📺 Search 🔎 ' + htka, `⚡Hai ${name} Silakan pilih Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Search Disini ☂️`, arr, m)
					
					if (args[0] == 'waifuimget') {
					if (args[1].endsWith('undefined')) throw 'Gabisa ygy'
					let vn = await fetch(args[1])
					let x = await vn.json()
					let v = x.images[0]
					let cap = `*signature:* ${v.signature}
*extension:* ${v.extension}
*image_id:* ${v.image_id}
*favourites:* ${v.favourites}
*dominant_color:* ${v.dominant_color}
*source:* ${v.source}
*uploaded_at:* ${v.uploaded_at}
*is_nsfw:* ${v.is_nsfw}
*width:* ${v.width}
*height:* ${v.height}
*url:* ${v.url}
*preview_url:* ${v.preview_url}
*tags:* ${JSON.stringify(v.tags)}`
					conn.sendButtonImg(m.chat, v.url, cap, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					}
}

handler.help = ['waifuim']
handler.tags = ['internet']

handler.command = /^waifui[mn]$/i

export default handler
