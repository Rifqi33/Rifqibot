let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

let urls = [
'https://raku-web.herokuapp.com/api/maker/attp?apikey=RakuKeyTod&text=' + teks,
'https://raku-web.herokuapp.com/api/maker/ttp?apikey=RakuKeyTod&text=' + teks,
'https://api.xteam.xyz/attp?file=&text=' + teks,
'https://api.xteam.xyz/ttp?file=&text=' + teks,
'https://anabotofc.herokuapp.com/api/maker/attp?apikey=AnaBot&text=' + teks,
'https://anabotofc.herokuapp.com/api/maker/ttp?apikey=AnaBot&text=' + teks
]
            let lisn = [
            "Raku Attp",
            "Raku Ttp",
            "Xteam Attp",
            "Xteam Ttp",
            "Anabot Attp",
            "Anabot Ttp"
            ]
           
	let listSections = []
	Object.keys(urls, lisn).map((v, index) => {
	listSections.push(['Result: ' + ++index, [
          [htjava + ' ' + lisn[v] + ' Sticker', usedPrefix + 'get ' + urls[v], 'By ' + author]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Sticker Search 🔎 ' + htka, `⚡ Silakan pilih Sticker Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Sticker Search Disini ☂️`, listSections, m)

}

handler.command = /^a?ttp$/i
handler.tags = ['sticker']
export default handler