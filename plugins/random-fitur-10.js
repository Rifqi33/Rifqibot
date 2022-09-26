import fetch from 'node-fetch'
import fs from 'fs'
import nhentai from 'nhentai-node-api'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

// Fake 🤥
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hoppai.getRandom())
let name = await conn.getName(who)
let imgr = flaaa.getRandom()

if (command == 'cqr') {
if (!text) throw `Contoh:\n${usedPrefix + command} Teks`
let res = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], fakes, adReply)
}

if (command == 'catboys') {
if (args[0] == 'img') {
let f = await fetch(`https://api.catboys.com/img`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == '8ball') {
let f = await fetch(`https://api.catboys.com/8ball`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'dice') {
let f = await fetch(`https://api.catboys.com/dice`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'catboy') {
let f = await fetch(`https://api.catboys.com/catboy`)
let x = await f.json()
await conn.sendButton(m.chat, `*Pencet untuk mendengar hasil:*`, wm, null, [
                ['Awkawk', `${usedPrefix}tts ${x.response}`]
            ], fakes, adReply)
}
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
${usedPrefix + command} img
${usedPrefix + command} 8ball
${usedPrefix + command} catboy
`, wm, null, [
                ['IMG', `${usedPrefix + command} img`],
                ['8BALL', `${usedPrefix + command} 8ball`]
            ], fakes, adReply)
}

if (command == 'animals') {
let f = await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Name:* ${x.name}
*Latin:* ${x.latin_name}
*Type:* ${x.animal_type}
*Active Time:* ${x.active_time}
*Length Min.:* ${x.length_min}
*Length Max.:* ${x.length_max}
*Weight Min.:* ${x.weight_min}
*Weight Max.:* ${x.weight_max}
*Lifespan:* ${x.lifespan}
*Habitat:* ${x.habitat}
*Diet:* ${x.diet}
*Geo:* ${x.geo_range}
*ID:* ${x.id}
`, wm, x.image_link, [
                ['Get Picture', `${usedPrefix}get ${x.image_link}`]
            ], fakes, adReply)
}

if (command == 'nekos') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka

*List:*
• kitsune
• neko
• waifu
• baka
• bite
• blush
• bored
• cry
• cuddle
• dance
• facepalm
• feed
• handhold
• happy
• highfive
• hug
• kick,kiss
• laugh
• pat
• poke
• pout
• punch
• shoot
• shrug
• slap
• sleep
• smile
• smug
• stare
• think
• thumbsup
• tickle
• wave
• wink
`

let f = await fetch(`https://nekos.best/api/v2/${args[0]}`)
let x = await f.json()
if (args[0] == 'neko') {
await conn.sendFile(m.chat, x.results[0].url, 'image.png', wm, m)
}
if (args[0] == 'waifu') {
await conn.sendFile(m.chat, x.results[0].url, 'image.png', wm, m)
}
if (args[0] == 'kitsune') {
await conn.sendFile(m.chat, x.results[0].url, 'image.png', wm, m)
}
await conn.sendFile(m.chat, x.results[0].url, 'out.gif', m, false, { mimetype: 'image/gif', thumbnail: Buffer.alloc(0) })
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${args[0]}`, wm, null, [
                ['Next Picture', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
}

if (command == 'avatar') {
if (!text) throw `Contoh:\n${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
    let nm = ["🪄 avatars", "🗿 head", "🦧 body", "🥷 skins", "🐦 capes"]
    let av = ["https://crafatar.com/avatars/", "https://crafatar.com/renders/head/", "https://crafatar.com/renders/body/", "https://crafatar.com/skins/", "https://crafatar.com/capes/"]
    
	let row = Object.keys(av, nm).map((v, index) => ({
		title: nm[v],
		description: 'By: ' + wm,
		rowId: usedPrefix + 'get ' + av[v] + args[0]
	}))
	let button = {
		buttonText: `☂️ Avatar Disini ☂️`,
		description: `⚡ Silakan pilih Avatar di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'lmsea') {
if (!text) throw `Contoh:\n${usedPrefix + command} megumin`
let res = await fetch(`https://imsea.herokuapp.com/api/1?q=${text}`)
let json = await res.json()
let ran = json.results
  let row = Object.keys(ran, json).map((v, index) => ({
		title: index + ' Result: ' + json.image_name,
		description: '\n💭 *Nickname* ' + json.image_name + '\n🔗 *Link* ' + ran[v],
		rowId: usedPrefix + 'get ' + ran[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'iqrax') {
		if (!text) throw `*Example:* ${usedPrefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		/*
		if (!text) return m.reply(oh)
		let yy = `https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`
		await conn.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		*/
 let buttonMessage = {
'document': {'url': `https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`},
'mimetype': "application/pdf",
'fileName': `Result IQRA ${text}`,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': "http://facebook.com",
'mediaType': 2,
'previewType': 'pdf',
'title': `👋 Hai ${name}`,
'body': `${wm}`,
'thumbnail': await( await fetch(pp)).buffer(),
'sourceUrl': gcwangsaf}},
'caption': `NIH KAK IQRA ${text}`,
'footer': wm,
'buttons': [
{'buttonId': '.menu','buttonText': {'displayText': `Menu`},'type': 1}
],
'headerType': 6}
    await conn.sendMessage(m.chat, buttonMessage, {quoted: fakes})
		}
		
if (command == 'hadistx') {
		if (!args[0]) return m.reply(`*Example:*
${usedPrefix + command} bukhari 1
${usedPrefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return m.reply(`Which Hadith??\n\n*Example:*\n${usedPrefix + command} muslim 1`)
		try {
		let ft = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let res = await ft.json()
		let { number, arab, id } = res.find(v => v.number == args[1])
		let caption = `No. ${number}

${arab}

${id}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)

		} catch (e) {
		m.reply(`Hadith Not Found !`)
		}
		}
		
if (command == 'alquranx') {
		if (!args[0]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let fet = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let res = await fet.json()
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		await conn.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : fakes })
		}
		
if (command == 'tafsirsurahx') {
		if (!args[0]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let fetc = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let res = await fetc.json()
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		
if (command == 'karakter') {
  if (!text) throw `Masukkan query!`
  let res = await fetch(`https://api.jikan.moe/v3/search/character?q=${text}`)
  let json = await res.json()
  let kar = json.results
  let row = Object.values(kar).map((v, index) => ({
		title: ++index + dmenub + ' ' + v.name,
		description: '\n*ID* ' + v.mal_id + '\n💭 *Nickname* ' + v.alternative_names + '\n🔗 *Link* ' + v.url + '\n👤 *Character Type* ' + Object.values(v.manga).map(v => v.type) + '\n👤 *name* ' + Object.values(v.manga).map(v => v.name) + '\n👤 *mal_id* ' + Object.values(v.manga).map(v => v.mal_id) + '\n👤 *url* ' + Object.values(v.manga).map(v => v.url) + '\n*Image* ' + v.image_url,
		rowId: usedPrefix + 'get ' + v.image_url
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'nhentais') {
  if (!text) throw `Masukkan query!`
  
  let res = await nhentai.search(text, 'popular-week', 1)
  let row = Object.values(res).map((v, index) => ({
		title: '💬 ' + v.title,
		description: '\n💭 *id* ' + v.id + '\n💭 *language* ' + v.language + '\n💭 *thumbnail* ' + v.thumbnail,
		rowId: usedPrefix + 'get ' + v.thumbnail
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	
}

}
handler.command = handler.help = ['nhentais', 'cqr', 'catboys', 'animals', 'nekos', 'avatar', 'lmsea', 'iqrax', 'juzammax', 'hadistx', 'alquranx', 'tafsirsurahx', 'karakter']
handler.tags = ['random']

export default handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
