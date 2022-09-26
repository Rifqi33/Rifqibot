import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'

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
let caption = `
*Contoh Penggunaan Multi*
${usedPrefix + command} img |wibu

*List:*

• img
> akira
> ass
> asuna
> blowjob
> cum
> foot
> hentai
> hinata
> husbu
> loli
> meme
> islamic

• vid
> asupan
> jjanime
> jjfreefire
> jjml
> jjpubg
> ptl
> hentai
> hinata
> husbu
> loli

• txt
> asmaulhusna
> bijak
> fakta
> motivasi
> quotes

• tpro
> blood
> cloud
> demon
> devil
> firework
> galaxy
> glitch
> glitter
> glow
> graffiti
> greenneon
> lava
> magma
> neon
> newyear2022
> skeleton
> thunder2
> thunder
> toxic
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
            
try {
if (command) {
switch (template) {
        
            case 'img':
        let ix = await fetch(`https://api-kaysa.herokuapp.com/api/${one}?apikey=ltQh6BQN`)
        let ixn = await ix.json()
        let ixnnn = `*Result:*\n${ixn.image}`
        await conn.sendButtonImg(m.chat, ixn.image, ixnnn, author, 'Video', '.kay img |meme', fakes, adReply)
        if (one == 'meme') {
        let gnn = `*Result:*\n${ixn.video}`
        await conn.sendButtonImg(m.chat, ixn.video, gnn, author, 'To Sticker', '.s', fakes, adReply)
        }
            break
            case 'vid':
        let vx = await fetch(`https://api-kaysa.herokuapp.com/api/${one}?apikey=ltQh6BQN`)
        let vxn = await vx.json()
        let vxnnn = `*Result:*\n${vxn.video}`
        await conn.sendButtonImg(m.chat, vxn.video, vxnnn, author, 'To Sticker', '.s', fakes, adReply)
            break
            case 'txt':
        let tx = await fetch(`https://api-kaysa.herokuapp.com/api/${one}?apikey=ltQh6BQN`)
        let txn = await tx.json()
        let txnn = `*Result:*\n${txn.result}`
        await m.reply(txnn)
        if (one == 'asmaulhusna') {
        let ttx = `*Result:*\n${txn.number}\n${txn.latin}\n${txn.arab}\n${txn.translate_id}\n${txn.translate_en}\n`
        await conn.sendButtonImg(m.chat, logo, ttx, author, 'M E N U', '.menu', fakes, adReply)
        }
        if (one == 'quotes') {
        let tpx = `*Result:*\n${txn.quotes}\n${txn.author}\n`
        await conn.sendButtonImg(m.chat, logo, tpx, author, 'M E N U', '.menu', fakes, adReply)
        }
            break
            case 'tpro':
        let vpx = `https://api-kaysa.herokuapp.com/api/textpro/${one}?text=${two}&apikey=ltQh6BQN`
        let vpnn = `*Result:*\n`
        await conn.sendButtonImg(m.chat, vpx, vpnn, author, 'To Sticker', '.s', fakes, adReply)
            break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['kay <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^kay$/i
export default handler