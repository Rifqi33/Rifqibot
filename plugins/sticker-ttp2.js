import Canvas from 'canvas'
import { sticker } from '../lib/sticker.js'
import uploadImage from '../lib/uploadImage.js'
import fs from 'fs'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let teks = m.quoted ? m.quoted.text : text
var files = fs.readdirSync('./src/font/')
let chosenFile = files[Math.floor(Math.random() * files.length)]

	Canvas.registerFont('./src/font/' + chosenFile, { family: chosenFile.toString() })
	let length = teks.length
		
	var font = 90
	if (length>12){ font = 68}
	if (length>15){ font = 58}
	if (length>18){ font = 55}
	if (length>19){ font = 50}
	if (length>22){ font = 48}
	if (length>24){ font = 38}
	if (length>27){ font = 35}
	if (length>30){ font = 30}
	if (length>35){ font = 26}
	if (length>39){ font = 25}
	if (length>40){ font = 20}
	if (length>49){ font = 10}

	var ttp = {}
	ttp.create = Canvas.createCanvas(576, 576)
	ttp.context = ttp.create.getContext('2d')
	ttp.context.font =`${font}px ${chosenFile}`
	ttp.context.strokeStyle = 'black'
	ttp.context.lineWidth = 3
	ttp.context.textAlign = 'center'
	ttp.context.strokeText(teks, 290,300)
	ttp.context.fillStyle = 'white'
	ttp.context.fillText(teks, 290,300)
	let img = ttp.create.toBuffer()
	let gds = await uploadImage(img)
    let stiker = await sticker(false, gds, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, adReply)
    }
handler.command = /^(woah)$/i

export default handler