
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
return conn.sendButton(m.chat, htki + ' ' + author + ' ' + htka, `${htjava}\n${dmenub} ${conn.user.name} Source Code:\n${dmenub} ${sgh}\n${dmenuf}`, logo, [['Owner', '/owner'], ['Donasi', '/donasi']], fakes, adReply)
}
handler.command = /^sc(ript(bot)?|bot)?$/i
export default handler
