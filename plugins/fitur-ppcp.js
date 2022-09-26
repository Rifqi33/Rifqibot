import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

if (command == 'ppcp2') {
        let res = await fetch(`https://api-xcoders.xyz/api/random/ppcouple?apikey=${global.xckey}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'Cewe', wm, json.result.ppcwe, [['🔄 Next 🔄', `/${command}`]], fakes, adReply)
conn.sendButton(m.chat, 'Cowo', wm, json.result.ppcwo, [['🔄 Next 🔄', `/${command}`]], fakes, adReply)
}

if (command == 'ppcp') {
let res = await fetch(`https://yuzzu-api.herokuapp.com/api/couple`)
let json = await res.json()
let jh = json.result
let x = jh.getRandom()
conn.sendButton(m.chat, 'Cewe', wm, x.female, [['🔄 Next 🔄', `/${command}`]], fakes, adReply)
conn.sendButton(m.chat, 'Cowo', wm, x.male, [['🔄 Next 🔄', `/${command}`]], fakes, adReply)
}

}

handler.tags = ['fun']
handler.command = ['ppcp', 'ppcp2']

export default handler