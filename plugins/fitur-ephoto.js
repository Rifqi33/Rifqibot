let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} cake teks
  *List Efek:*
american
anonymous
aov
arrow2
arrow
blackpink
cake
caper
cloth
cloud
coverpubg
crank
dragonfire
eraser
foggy
glasses
graffiti
greenbrush
hallowen
horror
incandescent
leafgraphy
letters
metals
ml
neonblue
neonbp
nightstars
pig
pubgavatar
puppy
sunlight
television
tiger
typography2
typography
warface
water`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
  let images = `https://api-xcoders.xyz/api/ephoto/${thm}?text=${text1}&apikey=${global.xckey}`
  let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
        }

handler.command = /^(epho|ephoto)$/i

export default handler