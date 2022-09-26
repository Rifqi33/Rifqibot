import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let imgr = flaaa.getRandom()

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0] || !one) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
${usedPrefix + command} 3d-gradient
${usedPrefix + command} 3dstone
${usedPrefix + command} 1917
${usedPrefix + command} aesthetic
${usedPrefix + command} ahegao
${usedPrefix + command} akira
${usedPrefix + command} akiyama
${usedPrefix + command} anaa
${usedPrefix + command} anime
${usedPrefix + command} anjing
${usedPrefix + command} art-papper
${usedPrefix + command} ass
${usedPrefix + command} astone
${usedPrefix + command} asuna
${usedPrefix + command} ayuzawa
${usedPrefix + command} bdsm
${usedPrefix + command} black-pink
${usedPrefix + command} blood
${usedPrefix + command} blowjob
${usedPrefix + command} boneka-chucky
${usedPrefix + command} boruto
${usedPrefix + command} bread
${usedPrefix + command} broken-glass
${usedPrefix + command} cecan
${usedPrefix + command} cecan2
${usedPrefix + command} chiho
${usedPrefix + command} chitoge
${usedPrefix + command} christmas
${usedPrefix + command} cogan
${usedPrefix + command} cogan2
${usedPrefix + command} cuckold
${usedPrefix + command} cum
${usedPrefix + command} cyberspace
${usedPrefix + command} deidara
${usedPrefix + command} deluxe-silver
${usedPrefix + command} doraemon
${usedPrefix + command} drop-water
${usedPrefix + command} eba
${usedPrefix + command} elaina
${usedPrefix + command} emilia
${usedPrefix + command} engraved
${usedPrefix + command} ero
${usedPrefix + command} erza
${usedPrefix + command} fabric
${usedPrefix + command} femdom
${usedPrefix + command} foot
${usedPrefix + command} gaming
${usedPrefix + command} gangbang
${usedPrefix + command} gifs
${usedPrefix + command} glasses
${usedPrefix + command} glossy
${usedPrefix + command} glue-text
${usedPrefix + command} grafity-text
${usedPrefix + command} gremory
${usedPrefix + command} hallowen
${usedPrefix + command} hallowen-text
${usedPrefix + command} harry-potter
${usedPrefix + command} hekel
${usedPrefix + command} hentai
${usedPrefix + command} hestia
${usedPrefix + command} hinata
${usedPrefix + command} holograpic
${usedPrefix + command} honey
${usedPrefix + command} horor-blood
${usedPrefix + command} ice
${usedPrefix + command} inori
${usedPrefix + command} islami
${usedPrefix + command} isuzu
${usedPrefix + command} itachi
${usedPrefix + command} itori
${usedPrefix + command} jahy
${usedPrefix + command} jeni
${usedPrefix + command} jiso
${usedPrefix + command} joker-logo
${usedPrefix + command} joox
${usedPrefix + command} justina
${usedPrefix + command} kaga
${usedPrefix + command} kagura
${usedPrefix + command} kaori
${usedPrefix + command} kartun
${usedPrefix + command} katakata
${usedPrefix + command} keneki
${usedPrefix + command} koi
${usedPrefix + command} kotori
${usedPrefix + command} kpop
${usedPrefix + command} kucing
${usedPrefix + command} kurumi
${usedPrefix + command} larva
${usedPrefix + command} loli
${usedPrefix + command} luxury
${usedPrefix + command} madara
${usedPrefix + command} magma
${usedPrefix + command} manga
${usedPrefix + command} masturbation
${usedPrefix + command} mediafire
${usedPrefix + command} megumin
${usedPrefix + command} mikasa
${usedPrefix + command} miku
${usedPrefix + command} minato
${usedPrefix + command} mobil
${usedPrefix + command} montor
${usedPrefix + command} mountain
${usedPrefix + command} multi-color
${usedPrefix + command} naruto
${usedPrefix + command} natural-leavest
${usedPrefix + command} neko
${usedPrefix + command} neko2
${usedPrefix + command} neon-devil
${usedPrefix + command} neon-light
${usedPrefix + command} nezuko
${usedPrefix + command} nsfwloli
${usedPrefix + command} onepiece
${usedPrefix + command} orgy
${usedPrefix + command} panties
${usedPrefix + command} pentol
${usedPrefix + command} pokemon
${usedPrefix + command} pornhub
${usedPrefix + command} ppcouple
${usedPrefix + command} programing
${usedPrefix + command} pubg
${usedPrefix + command} pussy
${usedPrefix + command} rize
${usedPrefix + command} rose
${usedPrefix + command} rusty
${usedPrefix + command} ryujin
${usedPrefix + command} sagiri
${usedPrefix + command} sakura
${usedPrefix + command} sasuke
${usedPrefix + command} satanic
${usedPrefix + command} shina
${usedPrefix + command} shinka
${usedPrefix + command} shinomiya
${usedPrefix + command} shizuka
${usedPrefix + command} shota
${usedPrefix + command} sky-text
${usedPrefix + command} stroberi
${usedPrefix + command} tatasurya
${usedPrefix + command} tejina
${usedPrefix + command} teknologi
${usedPrefix + command} tentacles
${usedPrefix + command} thighs
${usedPrefix + command} thunder2
${usedPrefix + command} toukachan
${usedPrefix + command} toxic-bokeh
${usedPrefix + command} trans
${usedPrefix + command} tsunade
${usedPrefix + command} waifu
${usedPrefix + command} waifu2
${usedPrefix + command} wallhp
${usedPrefix + command} water-color
${usedPrefix + command} wicker
${usedPrefix + command} writing
${usedPrefix + command} xnxx
${usedPrefix + command} xvideo
${usedPrefix + command} yotsuba
${usedPrefix + command} yuki
${usedPrefix + command} yumeko
${usedPrefix + command} yuri
${usedPrefix + command} zettai
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
            }
            
try {
if (command) {
switch (template) {

        
            case 'mediafire':
        let pn = await fetch(`https://revita.herokuapp.com/api/download/mediafire?url=${one}&apikey=ApiRevita`)
        let pnn = await pn.json()
        let pnnnn = `*Result:*\n${pnn.result[0].name}\n${pnn.result[0].mime}\n${pnn.result[0].size}`
        await conn.sendButton(m.chat, pnnnn, wm, null, [
                ['Get', `${usedPrefix}get ${pnn.result[0].link}`]
            ], fakes, adReply)
            break
            case 'pornhub':
        let sp = await fetch(`https://revita.herokuapp.com/api/downloader/pornhub?query=${one}&apikey=ApiRevita`)
        let spp = await sp.json()
        let str = spp.result.results.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep`]
            ], fakes, adReply)
            break
            case 'xnxx':
            case 'xvideo':
        let sp1 = await fetch(`https://revita.herokuapp.com/api/downloader/${args[0]}?query=${one}&apikey=ApiRevita`)
        let spp1 = await sp1.json()
        let str1 = spp1.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
info: ${v.info}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str1, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep`]
            ], fakes, adReply)
            break
            case 'joox':
        let go = await fetch(`https://revita.herokuapp.com/api/music/joox?query=${one}&apikey=ApiRevita`)
        let goo = await go.json()
        let gooo = `*Result:* ${goo.result.lagu}
        ${goo.result.album}
        ${goo.result.penyanyi}
        ${goo.result.publish}`
        await conn.sendButton(m.chat, gooo, wm, goo.result.img, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], fakes, adReply)
            break
            case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'gifs':
case 'glasses':
case 'hentai':
case 'jahy':
case 'manga':
case 'masturbation':
case 'neko2':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai':
        let hm = `https://revita.herokuapp.com/api/nsfw/${args[0]}?apikey=ApiRevita`
        let hmmm = `*Result:* ${args[0]}`
        await conn.sendButton(m.chat, hmmm, wm, hm, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            break
            case '3d-gradient':
case '3dstone':
case '1917':
case 'art-papper':
case 'astone':
case 'black-pink':
case 'blood':
case 'bread':
case 'broken-glass':
case 'christmas':
case 'deluxe-silver':
case 'drop-water':
case 'engraved':
case 'fabric':
case 'glossy':
case 'glue-text':
case 'grafity-text':
case 'hallowen-text':
case 'hallowen':
case 'harry-potter':
case 'holograpic':
case 'honey':
case 'horor-blood':
case 'ice':
case 'joker-logo':
case 'koi':
case 'larva':
case 'luxury':
case 'magma':
case 'multi-color':
case 'natural-leavest':
case 'neon-devil':
case 'neon-light':
case 'rusty':
case 'sky-text':
case 'stroberi':
case 'thunder2':
case 'toxic-bokeh':
case 'water-color':
case 'wicker':
case 'writing':
        let wk = await fetch(`https://revita.herokuapp.com/api/textpro/${args[0]}?text=${one}&apikey=ApiRevita`)
        let wkk = await wk.json()
        let wkkk = `*Result:* ${wkk.result}`
        await conn.sendButton(m.chat, wkkk, wm, wkk.result, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], fakes, adReply)
            break
            case 'aesthetic':
case 'akira':
case 'akiyama':
case 'ana':
case 'anime':
case 'anjing':
case 'asuna':
case 'ayuzawa':
case 'boneka-chucky':
case 'boruto':
case 'cecan2':
case 'cecan':
case 'chiho':
case 'chitoge':
case 'cogan2':
case 'cogan':
case 'cyberspace':
case 'deidara':
case 'doraemon':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gaming':
case 'gremory':
case 'hekel':
case 'hestia':
case 'hinata':
case 'inori':
case 'islami':
case 'isuzu':
case 'itachi':
case 'itori':
case 'jeni':
case 'jiso':
case 'justina':
case 'kaga':
case 'kagura':
case 'kaori':
case 'kartun':
case 'katakata':
case 'keneki':
case 'kotori':
case 'kpop':
case 'kucing':
case 'kurumi':
case 'loli':
case 'madara':
case 'megumin':
case 'mikasa':
case 'miku':
case 'minato':
case 'mobil':
case 'montor':
case 'mountain':
case 'naruto':
case 'nezuko':
case 'nsfwloli':
case 'onepiece':
case 'pentol':
case 'pokemon':
case 'ppcouple':
case 'programing':
case 'pubg':
case 'rize':
case 'rose':
case 'ryujin':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'satanic':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'shota':
case 'tatasurya':
case 'tejina':
case 'teknologi':
case 'toukachan':
case 'trans':
case 'tsunade':
case 'waifu2':
case 'waifu':
case 'wallhp':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'yuri':
        let rimg = `https://revita.herokuapp.com/api/wallpaper/${args[0]}?apikey=ApiRevita`
        let riimg = `*Result:* ${args[0]}`
        await conn.sendButton(m.chat, riimg, wm, rimg, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['rev <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^rev$/i
export default handler