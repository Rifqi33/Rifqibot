import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command }) => {
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let res = await fetch(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=${global.lolkey}&text=${text}`)
let xc = await res.json()
let x = xc.result
  await conn.sendButton(m.chat, `*Dari:* ${x.from}
*Ke:* ${x.to}

EN:
${x.original}

ID:
${x.translated}

_pronunciation_ : ${x.pronunciation} `, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
            

}
handler.help = ['translate2'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(t(erjemahkan|ransl(ate|et))2|t(erjemah|r)2|apanih2)$/i

export default handler
