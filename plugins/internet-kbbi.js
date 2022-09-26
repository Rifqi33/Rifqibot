import { kbbi } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    try {
    const res = await kbbi(text)
    let caption = `
${res.map(v => `
*📌${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

Note:
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda
`.trim()
await conn.sendButton(m.chat, caption, wm, Buffer.alloc(0), [
                ['Next', `${usedPrefix + command}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
} catch {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Aku`
let f = await fetch(`https://yuzzu-api.herokuapp.com/api/kbbi?kata=${text}`)
let x = await f.json()
let caption = `Lema: ${x.result.lema}
Arti: ${Array.from(x.result.arti)}`
await conn.sendButton(m.chat, caption, wm, Buffer.alloc(0), [
                ['Next', `${usedPrefix + command}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler