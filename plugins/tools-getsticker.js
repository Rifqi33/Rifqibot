import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, { conn, args, text }) => {
if (args[1] == 'wsf') {
				const stek = new Sticker(encodeURI(args[0]), { pack: packname, author: author, type: StickerTypes.FULL })
				const buffer = await stek.toBuffer()
				conn.sendFile(m.chat, buffer, 'sticker.webp', '', fakes, adReply, { asSticker: true })
			}
			if (args[1] == 'lib') {
				let stiker = await sticker(null, encodeURI(args[0]), global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', fakes, adReply, { asSticker: true })
  throw stiker.toString()
			}
}
handler.command = /^fetchsticker$/i
handler.limit = true

export default handler