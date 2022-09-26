let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} gravity helo
  *List Efek:*
burnpaper
butterfly
coffecup
coffee
doubleheart
flaming
grass
gravity
lovemessage
lovetext
naruto
oceansea
quotewood
rainbow
romantic
shadow
smoke`)
  
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
        let images = `https://api-xcoders.xyz/api/photooxy/${thm}?text=${text1}&apikey=${global.xckey}`
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }

handler.command = /^(oxy|photooxy)$/i

export default handler