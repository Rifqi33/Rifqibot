
export async function before(m, { isAdmin, isBotAdmin }) {
let user = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    let caption = `👋 Auto Banned ${name} @${m.sender.split("@")[0]}, Thanks!`.trim()
    
   if (m.sender.startsWith('212' || '212')) {
   	user.banned = true
   	this.sendButton(m.chat, caption, author, null, [['Ok', 'Huuu']], m, { mentions: this.parseMention(caption) })
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	user.banned = true
   	this.sendButton(m.chat, caption, author, null, [['Ok', 'Huuu']], m, { mentions: this.parseMention(caption) })
   } 
   
   if (m.sender.startsWith('92' || '92')) {
   	user.banned = true
   	this.sendButton(m.chat, caption, author, null, [['Ok', 'Huuu']], m, { mentions: this.parseMention(caption) })
   } 
   
   if (m.sender.startsWith('90' || '90')) {
   	user.banned = true
   	this.sendButton(m.chat, caption, author, null, [['Ok', 'Huuu']], m, { mentions: this.parseMention(caption) })
   } 
  }
