import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) throw `Contoh:\n${usedPrefix + command} 1\n\nMaka hasilnya adalah surah Al-Fatihah ayat beserta audionya, dan ayatnya 1 aja`
    let f = await fetch(`https://api.alquran.cloud/v1/surah/${text}/ar.alafasy`)
        let xx = await f.json()
        let str = xx.data.ayahs.map((v, index) => {
        return `${1 + index}. *${v.text}*
*audio:* ${v.audio}
*number:* ${v.number}
*numberInSurah:* ${v.numberInSurah}
*juz:* ${v.juz}
*manzil:* ${v.manzil}
*page:* ${v.page}
*ruku:* ${v.ruku}
*hizbQuarter:* ${v.hizbQuarter}
`.trim()
    }).join('\n\n')
    
    conn.reply(m.chat, str, m, { contextInfo: {
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
handler.help = ['alquran'].map(v => v + ' <no surah>')
handler.tags = ['quran']
handler.command = /^(al)?quran$/i

export default handler
