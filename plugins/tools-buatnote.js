let handler = async(m, { conn, command, usedPrefix, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
  let fail = 'Format salah, example:\n' + usedPrefix + command + ' ' + name + '|1. Masak\n2. Makan'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('Judul tidak tersedia!\n\nAlasan: Sudah digunakan')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/7989b4e60a9dedfcdbbec.jpg', `Catatan berhasil dibuat!\nUntuk melihat catatan. Ketik: ${usedPrefix}lihatcatatan`, wm, 'Liat Catatan', '.lihatcatatan', m)
}

handler.help = ['buatcatatan']
handler.tags = ['tools']
handler.command = /^(bu(kacatatan|at(note|ctt))|add(catatan|(note|ctt)))$/i

export default handler