import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} gw|ayang`

let f = await fetch(`https://bx-hunter.herokuapp.com/api/RandomCerpen?apikey=W46QBtQGOhiqfiClaxHqyAaIR&text=${text}`)
let x = await f.json()
let caption = `
*judul:* ${x.result.judul}
*kategori:* ${x.result.kategori}
*cerita:* ${x.result.cerita}
`
await conn.sendHydrated(m.chat, caption, wm, logo, null, null, null, null, [
      ['Menu', usedPrefix + 'menu']
    ], m)

}
handler.help = ['randomcerpen']
handler.tags = ['kerang', 'fun']
handler.command = /^randomcerpen/i

handler.limit = true

export default handler
