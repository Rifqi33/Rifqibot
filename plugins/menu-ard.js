import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import {
	sticker
}
from '../lib/sticker.js'

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
• ${usedPrefix + command} asmaulhusna
• ${usedPrefix + command} badut
• ${usedPrefix + command} blowjob
• ${usedPrefix + command} bokep
• ${usedPrefix + command} chord
• ${usedPrefix + command} dailyprophet
• ${usedPrefix + command} darkjokes
• ${usedPrefix + command} gempa
• ${usedPrefix + command} halah
• ${usedPrefix + command} heleh
• ${usedPrefix + command} hentai
• ${usedPrefix + command} hilih
• ${usedPrefix + command} hitler
• ${usedPrefix + command} holoh
• ${usedPrefix + command} huluh
• ${usedPrefix + command} kuso
• ${usedPrefix + command} lirik
• ${usedPrefix + command} nekonime
• ${usedPrefix + command} news
• ${usedPrefix + command} newskompas
• ${usedPrefix + command} nulis
• ${usedPrefix + command} quotes
• ${usedPrefix + command} sertialien
• ${usedPrefix + command} sertiharryp
• ${usedPrefix + command} sertiml
• ${usedPrefix + command} spamcall
• ${usedPrefix + command} trapnime
• ${usedPrefix + command} tvanime
• ${usedPrefix + command} wanted
• ${usedPrefix + command} wantedwestern
• ${usedPrefix + command} wiki
• ${usedPrefix + command} yasin
`
		await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
	            
try {
	if(command) {
			switch(template) {
				case 'lirik':
					let ab = await fetch(`https://ardhixsquerpants.herokuapp.com/lirik?search=${one}`)
					let ac = await ab.json()
					m.reply(ac.results)
					break
				case 'chord':
					let abb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/chord?q=${one}`)
					let acc = await abb.json()
					m.reply(acc.result)
					break
				case 'blowjob':
				case 'hentai':
				case 'nekonime':
				case 'trapnime':
					let bb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/${args[0]}`)
					let bc = await bb.json()
					try {
						let bd = await sticker(null, bc.result, global.packname, global.author)
						if(bd) return conn.sendFile(m.chat, bd, 'sticker.webp', '', fakes, adReply, {
							asSticker: true
						})
						throw bd.toString()
					} catch {
						let cd = new Sticker(bc.result,
							{
								pack: packname,
								author: author,
								type: StickerTypes.FULL
							})
					let dd = await cd.toBuffer()
					conn.sendFile(m.chat, dd, 'sticker.webp', '', fakes, adReply, {
						asSticker: true
					})
			}
			break
			case 'gempa':
				let cb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/infogempa`)
				let cc = await cb.json()
				let ccc = `kedalaman: ${cc.kedalaman}
        koordinat: ${cc.koordinat}
        lokasi: ${cc.lokasi}
        magnitude: ${cc.magnitude}
        potensi: ${cc.potensi}
        waktu: ${cc.waktu}
        `
				conn.sendButtonImg(m.chat, cc.map, ccc, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'kuso':
				let db = await fetch(`https://ardhixsquerpants.herokuapp.com/api/kuso?q=${one}`)
				let dc = await db.json()
				let dcc = `info: ${dc.info}
        link_dl: ${dc.link_dl}
        sinopsis: ${dc.sinopsis}
        title: ${dc.title}
        `
				conn.sendButtonImg(m.chat, dc.thumb, dcc, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'badut':
			case 'dailyprophet':
			case 'hitler':
			case 'wantedwestern':
			case 'tvanime':
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
				let eb = `https://ardhixsquerpants.herokuapp.com/api/maker/${args[0]}?img=${d_}`
				let ee = `Nih ${args[0]} mu`
				conn.sendButtonImg(m.chat, eb, ee, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'wanted':
			let aa_ = m.quoted ? m.quoted : m
  let bb_ = (aa_.msg || aa_).mimetype || ''
  if (!bb_) throw 'No media found'
  let cc_ = await aa_.download()
  let ee_ = new Sticker(cc_, { pack: packname, author: author, type: StickerTypes.FULL })
  let dd_
  try {
  if (/webp/g.test(bb_)) dd_ = await webp2png(cc_)
        else if (/image/g.test(bb_)) dd_ = await uploadImage(cc_)
        else if (/video/g.test(bb_)) dd_ = await uploadFile(cc_)
        else if (/viewOnce/g.test(bb_)) dd_ = await uploadFile(cc_)
        if (typeof dd_ !== 'string') dd_ = await uploadImage(cc_)
        else if (/gif/g.test(bb_)) dd_ = ee_
        } catch (e) {
        throw eror
        }
				let fb = `https://ardhixsquerpants.herokuapp.com/api/maker/wanted?picurl=${dd_}`
				let fe = `Nih ${args[0]} mu`
				conn.sendButtonImg(m.chat, fb, fe, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'yasin':
				let aaa_ = m.quoted ? m.quoted : m
  let bbb_ = (aaa_.msg || aaa_).mimetype || ''
  if (!bbb_) throw 'No media found'
  let ccc_ = await aaa_.download()
  let eee_ = new Sticker(ccc_, { pack: packname, author: author, type: StickerTypes.FULL })
  let ddd_
  try {
  if (/webp/g.test(bbb_)) ddd_ = await webp2png(ccc_)
        else if (/image/g.test(bbb_)) ddd_ = await uploadImage(ccc_)
        else if (/video/g.test(bbb_)) ddd_ = await uploadFile(ccc_)
        else if (/viewOnce/g.test(bbb_)) ddd_ = await uploadFile(ccc_)
        if (typeof ddd_ !== 'string') ddd_ = await uploadImage(ccc_)
        else if (/gif/g.test(bbb_)) ddd_ = eee_
        } catch (e) {
        throw eror
        }
				let gb = `https://ardhixsquerpants.herokuapp.com/api/maker/yasin?nama=${one}&lahir=${two}&wafat=${three}&img=${ddd_}`
				let ge = `Nih ${args[0]} mu`
				conn.sendButtonImg(m.chat, gb, ge, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'news':
			case 'newskompas':
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
				let hb = `https://ardhixsquerpants.herokuapp.com/api/maker/${args[0]}?title=${one}&img=${d__}`
				let he = `Nih ${args[0]} mu`
				conn.sendButtonImg(m.chat, hb, he, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'sertialien':
			case 'sertiharryp':
			case 'sertiml':
				let ib = `https://ardhixsquerpants.herokuapp.com/api/maker/${args[0]}?text=${one}`
				let ie = `Nih ${args[0]} mu`
				conn.sendButtonImg(m.chat, ib, ie, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'nulis':
				let jb = `https://ardhixsquerpants.herokuapp.com/api/nulis?text=${one}`
				let je = `Nih ${args[0]} mu`
				conn.sendButtonImg(m.chat, jb, je, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
				break
			case 'asmaulhusna':
				let kb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/random/asmaulhusna`)
				let kc = await kb.json()
				m.reply(`${kc.arabic}
        ${kc.latin}
        ${kc.no}
        ${kc.translate_en}
        ${kc.translate_id}
        `)
				break
			case 'bokep':
				let lb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/random/bokepp`)
				let lc = await lb.json()
				let ld = `${lc.download}
        ${lc.durasi}
        ${lc.judul}
        ${lc.pw}
        ${lc.size}
        `
				conn.sendButtonImg(m.chat, lc.image, ld, 'Nih.jpg', 'Get', '.get ' + lc.download, fakes, adReply)
				break
			case 'darkjokes':
				let mb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/random/darkjokes`)
				let mc = await mb.json()
				let md = `Nihh ${name}`
				conn.sendButtonImg(m.chat, mc.result, md, 'Nih.jpg', 'Sticker', '.s', fakes, adReply)
				break
			case 'quotes':
				let nb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/randomquotes`)
				let nc = await nb.json()
				m.reply(nc.quotes + '\n' + nc.author)
				break
			case 'spamcall':
				let ob = await fetch(`https://ardhixsquerpants.herokuapp.com/api/spamcall?no=${one}`)
				let oc = await ob.json()
				m.reply(oc.logs)
				break
			case 'wiki':
				let pb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/wiki?q=${one}`)
				let pc = await pb.json()
				m.reply(pc.result)
				break
			case 'halah':
			case 'heleh':
			case 'hilih':
			case 'holoh':
			case 'huluh':
				let qb = await fetch(`https://ardhixsquerpants.herokuapp.com/api/vokal/${args[0]}?text=${one}`)
				let qc = await qb.json()
				m.reply(qc.result)
				break
		}
}
} catch (e) {
throw eror
}
}
handler.help = ['ard <command> <teks>']
handler.tags = ['tools']
handler.command = /^ard$/i
export default handler