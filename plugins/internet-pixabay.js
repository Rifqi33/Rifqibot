import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
if (command == 'piximg') {
let res = await fetch('https://pixabay.com/api/?key=30089426-4575ed7bbbc8bfffe9a0b8eb4&q=' + encodeURIComponent(text))
let sul = await res.json()
	let listSections = []
	Object.values(sul.hits).map((v, index) => {
		let des = `\n\n
*webformatHeight:* ${v.webformatHeight}
*imageWidth:* ${v.imageWidth}
*previewHeight:* ${v.previewHeight}
*webformatURL:* ${v.webformatURL}
*userImageURL:* ${v.userImageURL}
*previewURL:* ${v.previewURL}
*comments:* ${v.comments}
*type:* ${v.type}
*imageHeight:* ${v.imageHeight}
*tags:* ${v.tags}
*previewWidth:* ${v.previewWidth}
*downloads:* ${v.downloads}
*collections:* ${v.collections}
*user_id:* ${v.user_id}
*largeImageURL:* ${v.largeImageURL}
*pageURL:* ${v.pageURL}
*id:* ${v.id}
*imageSize:* ${v.imageSize}
*webformatWidth:* ${v.webformatWidth}
*user:* ${v.user}
*views:* ${v.views}
*likes:* ${v.likes}
`
	listSections.push([++index + ' ' + cmenub + ' By: ' + v.user, [
          ['Lihat', usedPrefix + 'get ' + v.largeImageURL, des]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Pixabay Search 🔎 ' + htka, `⚡ Total ${sul.total_count} Code, Silakan pilih Pixabay Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Pixabay Search Disini ☂️`, listSections, m)
	}
	if (command == 'pixvid') {
	let res = await fetch('https://pixabay.com/api/videos/?key=30089426-4575ed7bbbc8bfffe9a0b8eb4&q=' + text)
let sul = await res.json()
	let listSections = []
	Object.values(sul.hits).map((v, index) => {
		let des = `\n\n
*userImageURL:* ${v.userImageURL}
*comments:* ${v.comments}
*videos:* ${v.videos}

*videos.small.size:* ${v.videos.small.size}
*videos.small.width:* ${v.videos.small.width}
*videos.small.url:* ${v.videos.small.url}
*videos.small.height:* ${v.videos.small.height}

*videos.large.size:* ${v.videos.large.size}
*videos.large.width:* ${v.videos.large.width}
*videos.large.url:* ${v.videos.large.url}
*videos.large.height:* ${v.videos.large.height}

*videos.tiny.size:* ${v.videos.tiny.size}
*videos.tiny.width:* ${v.videos.tiny.width}
*videos.tiny.url:* ${v.videos.tiny.url}
*videos.tiny.height:* ${v.videos.tiny.height}

*videos.medium.size:* ${v.videos.medium.size}
*videos.medium.width:* ${v.videos.medium.width}
*videos.medium.url:* ${v.videos.medium.url}
*videos.medium.height:* ${v.videos.medium.height}
*picture_id:* ${v.picture_id}
*type:* ${v.type}
*tags:* ${v.tags}
*duration:* ${v.duration}
*downloads:* ${v.downloads}
*user_id:* ${v.user_id}
*pageURL:* ${v.pageURL}
*id:* ${v.id}
*user:* ${v.user}
*views:* ${v.views}
*likes:* ${v.likes}
`
	listSections.push([++index + ' ' + cmenub + ' By: ' + v.user, [
          ['Lihat', usedPrefix + 'get ' + v.videos.large.url, des]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Pixabay Search 🔎 ' + htka, `⚡ Total ${sul.total_count} Code, Silakan pilih Pixabay Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Pixabay Search Disini ☂️`, listSections, m)
	}
    }
handler.help = ['pixabay']
handler.tags = ['internet']
handler.command = /^(piximg|pixvid)$/i

export default handler
