import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` 📚 *Wa'alaikumsalam*`
await conn.send2ButtonDoc(m.chat, `${htki} ᴜ s ᴇ ʀ s ${htka}`, info, 'ℹ️ Sapa', '.tts id Waalaikumsalam', 'ℹ️ Menu', '.menu', fakes, adReply)
await conn.sendMessage(m.chat, {
          react: {
            text: '🙏',
            key: m.key,
          }})
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler