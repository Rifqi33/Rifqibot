import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?

*PAYMENT ↓*
_*Pulsa/pulse(Telkomsel):*_ ${pulsa}

_*Dana/ovo:*_ ${dana}
_*Paypal:*_ ${paypal}
_*Saweria:*_ ${saweria}
_*Trakteer:*_ ${trakteer}
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
await conn.send2ButtonDoc(m.chat, str, author, '🔖 Matikan Fitur', '.off detect', 'ℹ️ Menu', '.menu', fakes, adReply)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
