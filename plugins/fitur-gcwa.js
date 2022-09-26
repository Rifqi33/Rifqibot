import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
 
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    let f = await fetch(`https://api-xcoders.xyz/api/search/groupwa?query=${text}&apikey=${global.xckey}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
*Nama* : ${v.nama}
*Link :* ${v.link}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)
            
}
handler.help = ['gcwa'].map(v => v + ' <apa>')
handler.command = ['gcwa']
handler.tags = ['random']
export default handler