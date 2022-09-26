import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://www.youtube.com","https://www.instagram.com","https://www.facebook.com"]
     let cap = `*${htki} Information ${htka}*

*🏷️ Nama:* ${name}
*💲 Money:* *RP* ${money}
*🏆 Level* ${level}
*🎋 Role:* ${role}
*🧬 XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik *${usedPrefix}inv* untuk melihat Inventory RPG
${cmenua}`

let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`
    let pusat = ["ke1", "ke2", "ke3", "ke4", "ke5", "ke6", "ke7", "ke8", "ke9"]
let pilih = pusat.getRandom()
if (pilih == "ke1") {
	await conn.send2ButtonDoc(m.chat, cap, weem, em.getRandom() + ' All Menu', usedPrefix + 'allmenu', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke2") {
	await conn.send2ButtonLoc(m.chat, knimg, cap, weem, em.getRandom() + ' All Menu', usedPrefix + 'allmenu', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke3") {
	await conn.send2ButtonImg(m.chat, knimg, cap, weem, em.getRandom() + ' All Menu', usedPrefix + 'allmenu', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke4") {
	await conn.send2ButtonVid(m.chat, knimg, cap, weem, em.getRandom() + ' All Menu', usedPrefix + 'allmenu', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke5") {
	await conn.sendTemplateButtonDoc(m.chat, knimg, cap, weem, em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke6") {
	await conn.sendTemplateButtonLoc(m.chat, knimg, cap, weem, em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke7") {
	await conn.send2TemplateButtonFakeImg(m.chat, knimg, cap, weem, em.getRandom() + ' All Menu', usedPrefix + 'allmenu', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke8") {
	let btn = [{
		urlButton: {
			displayText: 'Chat Owner',
			url: 'https://wa.me/' + nomorown
		}
	}, {
		quickReplyButton: {
			displayText: em.getRandom() + ' All Menu',
			id: usedPrefix + 'allmenu'
		}
	}, {
		quickReplyButton: {
			displayText: em.getRandom() + ' List Menu',
			id: usedPrefix + 'menulist'
		}
	}]
	await conn.sendButtonGif(m.chat, cap, wm, {
		url: global.giflogo
	}, btn, knimg)
}
if (pilih == "ke9") {
	await conn.sendButton(m.chat, cap, weem, Buffer.alloc(0), [[em.getRandom() + ' All Menu', usedPrefix + 'allmenu'], [em.getRandom() + ' List Menu', usedPrefix + 'menulist']], m, { mimetype: mim_.getRandom(), fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, jpegThumbnail: await( await fetch(thumbnailUrl.getRandom())).buffer(), contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: lin_.getRandom(),
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: knimg,
    sourceUrl: sgc
     }}
  })
}
        
}

handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }