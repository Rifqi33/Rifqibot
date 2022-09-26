import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
        let name = await conn.getName(who)
        let url = await fetch('https://masgi.herokuapp.com/api/cerpen')
        let cerpen = await url.json()
        let hasil = `${htki} Cerpen *${text}* ${htka}

${cerpen.data}

*${htjava} By:* ${author}
`.trim()
return conn.sendButton(m.chat, hasil, wm, logo, [['➡️Next Cerpen➡️', `${usedPrefix}${command} ${text}`]], m, fakefb)
}
handler.help = ['cerpen'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(cerpen|cerita)$/i

export default handler