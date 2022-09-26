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
• ${usedPrefix + command} ad
• ${usedPrefix + command} ahegao
• ${usedPrefix + command} berry
• ${usedPrefix + command} color
• ${usedPrefix + command} katajago
• ${usedPrefix + command} pinterest
• ${usedPrefix + command} wallcode
• ${usedPrefix + command} ass
• ${usedPrefix + command} bdsm
• ${usedPrefix + command} biden
• ${usedPrefix + command} blowjob
• ${usedPrefix + command} blue
• ${usedPrefix + command} blur
• ${usedPrefix + command} boruto
• ${usedPrefix + command} circuit
• ${usedPrefix + command} copper
• ${usedPrefix + command} cracked
• ${usedPrefix + command} cuckold
• ${usedPrefix + command} cum
• ${usedPrefix + command} ero
• ${usedPrefix + command} facts
• ${usedPrefix + command} femdom
• ${usedPrefix + command} foot
• ${usedPrefix + command} gangbang
• ${usedPrefix + command} glasses
• ${usedPrefix + command} gon
• ${usedPrefix + command} greyscale
• ${usedPrefix + command} gun
• ${usedPrefix + command} halloween
• ${usedPrefix + command} hentai
• ${usedPrefix + command} horror
• ${usedPrefix + command} impressive
• ${usedPrefix + command} invert
• ${usedPrefix + command} jahy
• ${usedPrefix + command} juice
• ${usedPrefix + command} kakashi
• ${usedPrefix + command} killua
• ${usedPrefix + command} luffy
• ${usedPrefix + command} magma
• ${usedPrefix + command} masturbation
• ${usedPrefix + command} metal
• ${usedPrefix + command} metallic
• ${usedPrefix + command} minato
• ${usedPrefix + command} mitsuki
• ${usedPrefix + command} nami
• ${usedPrefix + command} naruto
• ${usedPrefix + command} natsu
• ${usedPrefix + command} nezuko
• ${usedPrefix + command} notif
• ${usedPrefix + command} nsfwNeko
• ${usedPrefix + command} oogway
• ${usedPrefix + command} orgy
• ${usedPrefix + command} orochimaru
• ${usedPrefix + command} panties
• ${usedPrefix + command} peridot
• ${usedPrefix + command} pikachu
• ${usedPrefix + command} purple
• ${usedPrefix + command} pussy
• ${usedPrefix + command} rainbow
• ${usedPrefix + command} realistic
• ${usedPrefix + command} rimuru
• ${usedPrefix + command} sadcat
• ${usedPrefix + command} sagiri
• ${usedPrefix + command} saitama
• ${usedPrefix + command} sakura
• ${usedPrefix + command} sanji
• ${usedPrefix + command} sarada
• ${usedPrefix + command} sasuke
• ${usedPrefix + command} scfi
• ${usedPrefix + command} senku
• ${usedPrefix + command} sketch
• ${usedPrefix + command} tanjirou
• ${usedPrefix + command} thighs
• ${usedPrefix + command} thunder
• ${usedPrefix + command} toxic
• ${usedPrefix + command} transformer
• ${usedPrefix + command} tsunade
• ${usedPrefix + command} uncover
• ${usedPrefix + command} ussop
• ${usedPrefix + command} wallhacker
• ${usedPrefix + command} wallml
• ${usedPrefix + command} wallneon
• ${usedPrefix + command} wallpubg
• ${usedPrefix + command} wallrandom
• ${usedPrefix + command} yuri
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
            }
            
try {
if (command) {
switch (template) {
        
            case 'boruto':
case 'copper':
case 'gon':
case 'kakashi':
case 'killua':
case 'luffy':
case 'minato':
case 'mitsuki':
case 'nami':
case 'naruto':
case 'natsu':
case 'nezuko':
case 'orochimaru':
case 'rimuru':
case 'sagiri':
case 'saitama':
case 'sakura':
case 'sanji':
case 'sarada':
case 'sasuke':
case 'senku':
case 'tanjirou':
case 'tsunade':
case 'ussop':
        let ab = await fetch(`https://myselfff.herokuapp.com/docs/anime/${args[0]}`)
        let ac = await ab.json()
        let ad = ac.result.list
            conn.sendButtonImg(m.chat, ad, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'color':
case 'facts':
case 'biden':
case 'notif':
case 'oogway':
case 'pikachu':
case 'sadcat':
         if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let bb = `https://myselfff.herokuapp.com/docs/canvas/${args[0]}?text=${one}`
            conn.sendButtonImg(m.chat, bb, wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'pinterest':
        let cb = await fetch(`https://myselfff.herokuapp.com/docs/downloader/pinterest?query=${one}`)
        let cc = await cb.json()
        let cd = cc.result.list
            conn.sendButtonImg(m.chat, cd, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'nsfwNeko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
        let db = await fetch(`https://myselfff.herokuapp.com/docs/nsfw/${args[0]}`)
        let dc = await db.json()
        let dd = dc.result
            conn.sendButtonImg(m.chat, dd, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'katajago':
        let eb = await fetch(`https://myselfff.herokuapp.com/docs/random/katajago?query=${one}`)
        let ec = await eb.json()
        let ed = ec.result
            conn.sendButtonImg(m.chat, logo, ed.list, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'berry':
case 'blue':
case 'circuit':
case 'cracked':
case 'halloween':
case 'horror':
case 'impressive':
case 'juice':
case 'magma':
case 'metal':
case 'metallic':
case 'peridot':
case 'purple':
case 'rainbow':
case 'realistic':
case 'scfi':
case 'sketch':
case 'thunder':
case 'toxic':
case 'transformer':
        let fb = await fetch(`https://myselfff.herokuapp.com/docs/textpro/${args[0]}?text=${one}`)
        let fc = await fb.json()
        let fd = fc.result
            conn.sendButtonImg(m.chat, fd, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'wallcode':
case 'wallhacker':
case 'wallml':
case 'wallneon':
case 'wallpubg':
case 'wallrandom':
        let gb = await fetch(`https://myselfff.herokuapp.com/docs/wallpaper/${args[0]}`)
        let gc = await gb.json()
        let gd = gc.list.gambar
            conn.sendButtonImg(m.chat, gd, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'ad':
case 'blur':
case 'greyscale':
case 'gun':
case 'invert':
case 'uncover':
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
        let wnt = `https://myselfff.herokuapp.com/docs/canvas/${args[0]}?url=${d_}`
        conn.sendButtonImg(m.chat, wnt, author, 'Nih.jpg', 'VIDEO', '.get ' + Gd.video, fakes, adReply)
            break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['myse <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^myse$/i
export default handler

