import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Naruto`
  
  if (command == 'brailletotext') {
let res = await axios('https://violetics.pw/api/converter/braille-to-text?apikey=beta&braille=' + text)
let json = res.data
let dapet = json.result
	m.reply(dapet)
}


if (command == 'texttobraille') {
let res = await axios('https://violetics.pw/api/converter/text-to-braille?apikey=beta&text=' + text)
let json = res.data
let dapet = json.result
	m.reply(dapet)
}

if (command == 'tocartoon') {
let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
let res = 'https://violetics.pw/api/converter/photo-to-cartoon?apikey=beta&img=' + link
let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${link}`
  await conn.sendButton(m.chat, caption, wm, res, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { quoted: fakes })
}

if (command == 'befonts') {
let res = await axios('https://violetics.pw/api/fonts/befonts?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nDate: ' + v.font_date + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'dafont') {
let res = await axios('https://violetics.pw/api/fonts/dafont?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image + '\nDownload: ' + v.total_downloader + '\nLink Dl.: ' + v.font_linkdl,
		rowId: usedPrefix + 'get ' + v.font_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'dfonts') {
let res = await axios('https://violetics.pw/api/fonts/dfonts?apikey=beta&font=' + text)
let json = res.data
	let row = Object.values(json).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nDate: ' + v.font_date + '\nLink: ' + v.font_url,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'ffonts') {
let res = await axios('https://violetics.pw/api/fonts/ffonts?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nDate: ' + v.font_date + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontfabric') {
let res = await axios('https://violetics.pw/api/fonts/fontfabric?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nTotal: ' + v.font_styleTotal + '\nLink: ' + v.font_url + '\nCSS: ' + v.font_stylesheet + '\nFamilies: ' + Array.from(v.font_families),
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fonts') {
let res = await axios('https://violetics.pw/api/fonts/fonts?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'get ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontspace') {
let res = await axios('https://violetics.pw/api/fonts/fontspace?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image + '\nDownload: ' + v.total_downloader + '\nLink Dl.: ' + v.font_linkdl,
		rowId: usedPrefix + 'get ' + v.font_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontsquirrel') {
let res = await axios('https://violetics.pw/api/fonts/fontsquirrel?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image + '\nStyle: ' + v.font_totalStyle,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontzone') {
let res = await axios('https://violetics.pw/api/fonts/fontzone?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'urbanfonts') {
let res = await axios('https://violetics.pw/api/fonts/urbanfonts?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'wfonts') {
let res = await axios('https://violetics.pw/api/fonts/wfonts?apikey=beta&font=' + text)
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nCategory: ' + v.font_category + '\nLink: ' + v.font_url + '\nLink Dl: ' + v.font_linkdl + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'get ' + v.font_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['brailletotext', 'tocartoon', 'texttobraille', 'befonts', 'dafont', 'dfonts', 'ffonts', 'fontfabric', 'fonts', 'fontspace', 'fontsquirrel', 'fontzone', 'urbanfonts', 'wfonts'].map(v => v + ' <app>')
handler.command = ['brailletotext', 'tocartoon', 'texttobraille', 'befonts', 'dafont', 'dfonts', 'ffonts', 'fontfabric', 'fonts', 'fontspace', 'fontsquirrel', 'fontzone', 'urbanfonts', 'wfonts']
handler.tags = ['edukasi']

export default handler