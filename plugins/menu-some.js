import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let imgr = flaaa.getRandom()

let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: sgh
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: nomorown
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'To Sticker',
                                    id: '.s'
                                }
                            }]
                            
let urut = text.split`|`
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
• ${usedPrefix + command} animal
• ${usedPrefix + command} animu
• ${usedPrefix + command} binary
• ${usedPrefix + command} token
• ${usedPrefix + command} base64
• ${usedPrefix + command} facts
• ${usedPrefix + command} img
• ${usedPrefix + command} joke
• ${usedPrefix + command} lyrics
• ${usedPrefix + command} mc
• ${usedPrefix + command} meme
• ${usedPrefix + command} pokedex
• ${usedPrefix + command} canvas
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
            }
            
try {
if (command) {
switch (template) {
case 'animal':
        let cb = await fetch(`https://some-random-api.ml/animal/${one}`)
        let cc = await cb.json()
        return conn.sendButtonImg(m.chat, cc.image, cc.fact, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
case 'animu':
            let db = await fetch(`https://some-random-api.ml/animu/${one}`)
        let dc = await db.json()
        return conn.sendButtonGif(m.chat, 'Nihh', wm, { url: dc.link }, btn, knimg)
            break
            case 'binary':
        let eb = await fetch(`https://some-random-api.ml/binary?text=${one}`)
        let ec = await eb.json()
        return m.reply(ec.binary)
            break
            case 'token':
        let fb = await fetch(`https://some-random-api.ml/token`)
        let fc = await fb.json()
        return m.reply(fc.token)
            break
            case 'base64':
        let gb = await fetch(`https://some-random-api.ml/base64?encode=${one}`)
        let gc = await gb.json()
        return m.reply(gc.base64)
            break
            
            case 'facts':
        let hb = await fetch(`https://some-random-api.ml/facts/${one}`)
        let hc = await hb.json()
        return m.reply(hc.fact)
            break
            
            case 'img':
        let ib = await fetch(`https://some-random-api.ml/img/${one}`)
        let ic = await ib.json()
        return conn.sendButtonImg(m.chat, ic.link, wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'joke':
        let jb = await fetch(`https://some-random-api.ml/joke`)
        let jc = await jb.json()
        return m.reply(jc.joke)
            break
            
            case 'lyrics':
        let kb = await fetch(`https://some-random-api.ml/lyrics?title=${one}`)
        let kc = await kb.json()
        let kd = `${kc.title}
        ${kc.author}
        ${kc.lyrics}
        `
            return conn.sendButtonImg(m.chat, kc.thumbnail.genius, kd, kc.link.genius, 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'mc':
        let lb = await fetch(`https://some-random-api.ml/mc?username=${one}`)
        let lc = await lb.json()
        return m.reply(lc.uuid)
            break
            
            case 'meme':
        let mb = await fetch(`https://some-random-api.ml/meme`)
        let mc = await mb.json()
            return conn.sendButtonImg(m.chat, mc.image, mc.caption, mc.id + '|' + mc.category, 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'pokedex':
            let nb = await fetch(`https://some-random-api.ml/pokedex?pokemon=${one}`)
        let nc = await nb.json()
        let nd = `${nc.name}
        ${nc.id}
        ${Array.from(nc.type)}
        ${Array.from(nc.species)}
        ${Array.from(nc.abilities)}
        ${nc.height}
        ${nc.weight}
        ${nc.base_experience}
        ${Array.from(nc.gender)}
        ${Array.from(nc.egg_groups)}
        ${nc.stats.hp}
        ${nc.stats.attack}
        ${nc.stats.defense}
        ${nc.stats.sp_atk}
        ${nc.stats.sp_def}
        ${nc.stats.speed}
        ${nc.stats.total}
        ${nc.family.evolutionStage}
        ${Array.from(nc.familyevolutionLine)}
        ${nc.sprites.normal}
        ${nc.generation}
        `
        return conn.sendButtonGif(m.chat, nd, nc.description, { url: nc.sprites.animated }, btn, knimg)
            break
            
            case 'canvas':
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
        let wnt = `https://some-random-api.ml/canvas/${one}?avatar=${d_}`
        return conn.sendButtonImg(m.chat, wnt, wm, 'Nih.jpg', 'Sticker', '.s', fakes, adReply)
            break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['some <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^some$/i
export default handler

