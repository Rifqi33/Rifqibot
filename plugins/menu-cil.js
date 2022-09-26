import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import {
	sticker
} from '../lib/sticker.js'

import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, {
	conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command
}) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(who)
	let pp = await conn.profilePictureUrl(who, 'image')
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let urut = text.split `|`
	let one = urut[1]
	let two = urut[2]
	let three = urut[3]
	let template = (args[0] || '').toLowerCase()
	if (!args[0] || !one) {
		let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• ${usedPrefix + command} artimimpi
• ${usedPrefix + command} artinama
• ${usedPrefix + command} attp
• ${usedPrefix + command} balikangka
• ${usedPrefix + command} balikhuruf
• ${usedPrefix + command} beautiful
• ${usedPrefix + command} besarkecil
• ${usedPrefix + command} bilangangka
• ${usedPrefix + command} bitrate
• ${usedPrefix + command} blur
• ${usedPrefix + command} bucin
• ${usedPrefix + command} carbon
• ${usedPrefix + command} cerpen
• ${usedPrefix + command} cersex
• ${usedPrefix + command} chord
• ${usedPrefix + command} citacita
• ${usedPrefix + command} counter
• ${usedPrefix + command} delete
• ${usedPrefix + command} fakta
• ${usedPrefix + command} fancytext
• ${usedPrefix + command} gay
• ${usedPrefix + command} gerakinvideo
• ${usedPrefix + command} greyscale
• ${usedPrefix + command} grupwa
• ${usedPrefix + command} ssticker
• ${usedPrefix + command} gsmarena
• ${usedPrefix + command} hadits
• ${usedPrefix + command} halah
• ${usedPrefix + command} heleh
• ${usedPrefix + command} hilih
• ${usedPrefix + command} holoh
• ${usedPrefix + command} html
• ${usedPrefix + command} huluh
• ${usedPrefix + command} imagecircle
• ${usedPrefix + command} imageflip
• ${usedPrefix + command} imageflip2
• ${usedPrefix + command} imageflip3
• ${usedPrefix + command} imagekoran
• ${usedPrefix + command} imagepencil
• ${usedPrefix + command} imagesketch
• ${usedPrefix + command} invert
• ${usedPrefix + command} jail
• ${usedPrefix + command} jumlahangka
• ${usedPrefix + command} jumlahhuruf
• ${usedPrefix + command} kanye
• ${usedPrefix + command} kapital
• ${usedPrefix + command} mediafire
• ${usedPrefix + command} meme
• ${usedPrefix + command} pastebin
• ${usedPrefix + command} pastegg
• ${usedPrefix + command} pet
• ${usedPrefix + command} pixelate
• ${usedPrefix + command} qmuslim
• ${usedPrefix + command} quote
• ${usedPrefix + command} removebg
• ${usedPrefix + command} rip
• ${usedPrefix + command} rwallpaper
• ${usedPrefix + command} sepia
• ${usedPrefix + command} shit
• ${usedPrefix + command} shortlink
• ${usedPrefix + command} texttopng
• ${usedPrefix + command} texttopng2
• ${usedPrefix + command} texttopng3
• ${usedPrefix + command} texttopng4
• ${usedPrefix + command} tiny
• ${usedPrefix + command} trash
• ${usedPrefix + command} triggered
• ${usedPrefix + command} triggeredjson
• ${usedPrefix + command} triggeredwebp
• ${usedPrefix + command} ttpcolor
• ${usedPrefix + command} waifu
• ${usedPrefix + command} wallpaper
• ${usedPrefix + command} wanted
• ${usedPrefix + command} webpflip
• ${usedPrefix + command} webpflip2
• ${usedPrefix + command} webpflip3
`
		await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
	
try {
	if(command) {
			switch(template) {
				case 'artimimpi':
				case 'artinama':
					let ab = await fetch(`https://cililitan.herokuapp.com/api/${args[0]}?mimpi=${one}`)
					let ac = await ab.json()
					m.reply(ac.result)
					break
				case 'bucin':
					let azb = await fetch(`https://cililitan.herokuapp.com/api/bucin`)
					let azc = await azb.json()
					m.reply(azc.result)
					break
				case 'fancytext':
				case 'halah':
				case 'hilih':
				case 'huluh':
				case 'heleh':
				case 'holoh':
					let awb = await fetch(`https://cililitan.herokuapp.com/api/fancytext?teks=${one}`)
					let awc = await awb.json()
					m.reply(awc.result)
					break
				case 'counter':
					let avb = await fetch(`https://cililitan.herokuapp.com/api/hitungmundur?tanggal=${one}&bulan=${two}&tahun=${three}`)
					let avc = await avb.json()
					m.reply(avc.result)
					break
				case 'html':
					let aub = await fetch(`https://cililitan.herokuapp.com/api/htmlscrapper?url=${one}`)
					let auc = await aub.json()
					m.reply(auc.result)
					break
				case 'balikangka':
					let abb = await fetch(`https://cililitan.herokuapp.com/api/balikangka?angka=${one}`)
					let acc = await abb.json()
					m.reply(acc.result)
					break
				case 'balikhuruf':
				case 'bilangangka':
				case 'jumlahhuruf':
				case 'jumlahangka':
					let axb = await fetch(`https://cililitan.herokuapp.com/api/${args[0]}?huruf=${one}`)
					let axc = await axb.json()
					m.reply(axc.result)
					break
				case 'besarkecil':
				case 'kapital':
					let ayb = await fetch(`https://cililitan.herokuapp.com/api/${args[0]}?teks=${one}`)
					let ayc = await ayb.json()
					m.reply(ayc.result)
					break
				case 'attp':
				case 'texttopng2':
				case 'texttopng3':
				case 'texttopng4':
				case 'texttopng':
					let ttx = 'https://cililitan.herokuapp.com/api/' + args[0] + '?teks=' + one
					try {
						let ttb = await sticker(null, ttx, global.packname, global.author)
						if(ttb) return conn.sendFile(m.chat, ttb, 'sticker.webp', '', fakes, adReply, {
							asSticker: true
						})
						throw ttb.toString()
					} catch {
						let ttc = new Sticker(ttx, {
							pack: packname,
							author: author,
							type: StickerTypes.FULL
						})
						let ttd = await ttc.toBuffer()
						conn.sendFile(m.chat, ttd, 'sticker.webp', '', fakes, adReply, {
							asSticker: true
						})
					}
					break
				case 'beautiful':
				case 'blur':
				case 'delete':
				case 'gay':
				case 'gerakinvideo':
				case 'greyscale':
				case 'imagecircle':
				case 'imageflip2':
				case 'imageflip3':
				case 'imageflip':
				case 'imagekoran':
				case 'imagepencil':
				case 'imagesketch':
				case 'invert':
				case 'jail':
				case 'pet':
				case 'pixelate':
				case 'removebg':
				case 'rip':
				case 'sepia':
				case 'shit':
				case 'trash':
				case 'triggered':
				case 'triggeredjson':
				case 'triggeredwebp':
				case 'wanted':
				case 'webpflip2':
				case 'webpflip3':
				case 'webpflip':
				let a__ = m.quoted ? m.quoted : m
  let b__ = (a__.msg || a__).mimetype || ''
  if (!b__) throw 'No media found'
  let c__ = await a__.download()
  let e__ = new Sticker(c__, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__
  try {
  if (/webp/g.test(b__)) d__ = await webp2png(c__)
        else if (/image/g.test(b__)) d__ = await uploadImage(c__)
        else if (/video/g.test(b__)) d__ = await uploadFile(c__)
        else if (/viewOnce/g.test(b__)) d__ = await uploadFile(c__)
        if (typeof d__ !== 'string') d__ = await uploadImage(c__)
        else if (/gif/g.test(b__)) d__ = e__
        } catch (e) {
        throw eror
        }
					let cb = `https://cililitan.herokuapp.com/api/${args[0]}?url=${d__}`
					let ce = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, cb, ce, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'bitrate':
				let a_ = m.quoted ? m.quoted : m
  let b_ = (a_.msg || a_).mimetype || ''
  if (!b_) throw 'No media found'
  let c_ = await a_.download()
  let e_ = new Sticker(c_, { pack: packname, author: author, type: StickerTypes.FULL })
  let d_
  try {
  if (/webp/g.test(b_)) d_ = await webp2png(c_)
        else if (/image/g.test(b_)) d_ = await uploadImage(c_)
        else if (/video/g.test(b_)) d_ = await uploadFile(c_)
        else if (/viewOnce/g.test(b_)) d_ = await uploadFile(c_)
        if (typeof d_ !== 'string') d_ = await uploadImage(c_)
        else if (/gif/g.test(b_)) d_ = e_
        } catch (e) {
        throw eror
        }
					let db = `https://cililitan.herokuapp.com/api/bitrate?url=${_wnbm}&bitrate=${d_}`
					let de = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, db, de, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'carbon':
					let eb = `https://cililitan.herokuapp.com/api/carbon?teks=${one}`
					let ee = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, eb, ee, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'cerpen':
					let fb = await fetch(`https://cililitan.herokuapp.com/api/cerpen`)
					let fc = await fb.json()
					let fd = fc.result
					m.reply(`${fd.judul}
${fd.author}
${fd.Kategori}
${fd.cerita}`)
					break
				case 'cersex':
				case 'fakta':
					let gb = await fetch(`https://cililitan.herokuapp.com/api/${args[0]}`)
					let gc = await gb.json()
					let gd = gc.result
					let ge = `Nih ${args[0]} mu
				${gd.judul}
${gd.image}
${gd.cerita}
				`
					conn.sendButtonImg(m.chat, gd.image, ge, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'chord':
					let hb = await fetch(`https://cililitan.herokuapp.com/api/chordlagu?lagu=${one}`)
					let hc = await hb.json()
					let hd = hc.result
					m.reply(hd.result)
					break
				case 'citacita':
					await conn.sendFile(m.chat, 'https://cililitan.herokuapp.com/api/citacita', '', '', fakes, null, {
						fileLength: fsizedoc,
						seconds: fsizedoc,
						contextInfo: {
							externalAdReply: {
								body: author,
								containsAutoReply: true,
								mediaType: 2,
								mediaUrl: syt,
								showAdAttribution: true,
								sourceUrl: syt,
								thumbnailUrl: pp,
								renderLargerThumbnail: true,
								title: 'Nihh Kak, ' + name,
							}
						}
					})
					break
				case 'gsmarena':
					let ib = await fetch(`https://cililitan.herokuapp.com/api/gsmarena?query=${one}`)
					let ic = await ib.json()
					let nahini = ic.result
					let lesgom = []
					Object.values(nahini).map((v, index) => {
						lesgom.push(['Result: ' + index, [
							[v.judul, usedPrefix + 'ss ' + v.link, '\n⌚ *thumb:* ' + v.thumb + '\n📎 *link:* ' + v.link]
						]])
					})
					return conn.sendList(m.chat, htki + ' 📺 Search 🔎 ' + htka, `⚡ Silakan pilih Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Search Disini ☂️`, lesgom, m)
					break
				case 'grupwa':
					let ixb = await fetch(`https://cililitan.herokuapp.com/api/searchgrupwa?nama=${one}`)
					let ixc = await ixb.json()
					let xxnxx = ixc.result
					let lesgox = []
					Object.values(xxnxx).map((v, index) => {
						lesgox.push(['Result: ' + index, [
							[v.subject, usedPrefix + 'inspect ' + v.link, '\n⌚ *subject:* ' + v.subject + '\n📎 *link:* ' + v.link]
						]])
					})
					return conn.sendList(m.chat, htki + ' 📺 Search 🔎 ' + htka, `⚡ Silakan pilih Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Search Disini ☂️`, lesgox, m)
					break
				case 'ssticker':
					let izb = await fetch(`https://cililitan.herokuapp.com/api/searchsticker?query=${one}`)
					let izc = await izb.json()
					let zxnxx = izc.result.sticker
					let lesgoz = []
					Object.keys(zxnxx).map((v, index) => {
						lesgoz.push(['Stiker ' + index, [
							['Stiker ' + zxnxx[v], usedPrefix + 'fetchsticker ' + zxnxx[v] + ' lib']
						]])
					})
					return conn.sendList(m.chat, htki + ' 📺 Search 🔎 ' + htka, `⚡ Silakan pilih Search di tombol di bawah...`, author, `☂️ Search Disini ☂️`, lesgoz, m)
					break
				case 'hadits':
					let jb = await fetch(`https://cililitan.herokuapp.com/api/hadits?kitab=${one}&nomor=${two}`)
					let jc = await jb.json()
					let jd = jc.result.data
					m.reply(`${jd.id}
${jd.name}
${jd.available}
${jd.contents.number}
${jd.contents.arab}
${jd.contents.id}`)
					break
				case 'mediafire':
					let kb = await fetch(`https://cililitan.herokuapp.com/api/mediafire?url=${one}`)
					let kc = await kb.json()
					let kd = kc.result
					m.reply(`${kd.name}
${kd.type}
${kd.size}
${kd.url}`)
					break
				case 'pastebin':
					let lb = await fetch(`https://cililitan.herokuapp.com/api/pastebin?teks=${one}`)
					let lc = await lb.json()
					m.reply(lc.result)
					break
				case 'pastegg':
					let mb = await fetch(`https://cililitan.herokuapp.com/api/pastegg?teks=${one}&nama=${one}`)
					let mc = await mb.json()
					m.reply(`${mc.result.nama}
${mc.result.desc}
${mc.result.teks}
${mc.result.url}`)
					break
				case 'kanye':
					let nb = await fetch(`https://cililitan.herokuapp.com/api/quotes/kanye`)
					let nc = await nb.json()
					m.reply(`${nc.result.text_en}
${nc.result.text_id}
${nc.result.author}`)
					break
				case 'quote':
					let ob = await fetch(`https://cililitan.herokuapp.com/api/randomquote`)
					let oc = await ob.json()
					m.reply(`
${oc.result.quotes}
${oc.result.author}`)
					break
				case 'qmuslim':
					let pb = await fetch(`https://cililitan.herokuapp.com/api/randomquote/muslim`)
					let pc = await pb.json()
					m.reply(`${pc.result.text_en}
${pc.result.text_id}
${pc.result.author}`)
					break
				case 'rwallpaper':
					let qb = await fetch(`https://cililitan.herokuapp.com/api/randomwallpaper`)
					let qc = await qb.json()
					let qe = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, qc.result, qe, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'wallpaper':
					let rb = await fetch(`https://cililitan.herokuapp.com/api/random/wallpaper`)
					let rc = await rb.json()
					let re = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, rc.result.url, re, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'meme':
					let sb = `https://cililitan.herokuapp.com/api/random/meme`
					let se = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, sb, se, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'tiny':
					let tb = await fetch(`https://cililitan.herokuapp.com/api/short/tiny?url=${one}`)
					let tc = await tb.json()
					m.reply(tc.result.link)
					break
				case 'shortlink':
					let ub = await fetch(`https://cililitan.herokuapp.com/api/shortlink?url=${one}`)
					let uc = await ub.json()
					m.reply(uc.result)
					break
				case 'ttpcolor':
					let vb = `https://cililitan.herokuapp.com/api/ttpcolor?teks=${one}&color=${two}`
					let ve = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, vb, ve, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
				case 'waifu':
					let wb = `https://cililitan.herokuapp.com/api/waifu`
					let we = `Nih ${args[0]} mu`
					conn.sendButtonImg(m.chat, wb, we, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
					break
			}
	}
	} catch (e) {
throw eror
}
}
handler.help = ['cil <command> <teks>']
handler.tags = ['tools']
handler.command = /^cil$/i
export default handler