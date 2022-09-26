
import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

let handler = async (m, { conn, args, text, usedPrefix, command }) => {

let template = (args[0] || '').toLowerCase()
if (!args[0] || !one) {
let caption = `*Contoh Penggunaan*

${usedPrefix + command} attp teks

*List Command*
• ${usedPrefix + command} ahegao
• ${usedPrefix + command} aneh
• ${usedPrefix + command} anime
• ${usedPrefix + command} anony
• ${usedPrefix + command} ass
• ${usedPrefix + command} attp
• ${usedPrefix + command} bdsm
• ${usedPrefix + command} bijak
• ${usedPrefix + command} blowjob
• ${usedPrefix + command} bonk
• ${usedPrefix + command} bucin
• ${usedPrefix + command} bully
• ${usedPrefix + command} cecans
• ${usedPrefix + command} chobay
• ${usedPrefix + command} chord
• ${usedPrefix + command} corohelp
• ${usedPrefix + command} cry
• ${usedPrefix + command} cuaca
• ${usedPrefix + command} cuckold
• ${usedPrefix + command} cuddle
• ${usedPrefix + command} cum
• ${usedPrefix + command} cuttly
• ${usedPrefix + command} dance
• ${usedPrefix + command} dare
• ${usedPrefix + command} darkjokes
• ${usedPrefix + command} detik
• ${usedPrefix + command} ero
• ${usedPrefix + command} femdom
• ${usedPrefix + command} font
• ${usedPrefix + command} font2
• ${usedPrefix + command} foot
• ${usedPrefix + command} gambar
• ${usedPrefix + command} gangbang
• ${usedPrefix + command} githubstalk
• ${usedPrefix + command} glasses
• ${usedPrefix + command} harley
• ${usedPrefix + command} hentai
• ${usedPrefix + command} hentaigif
• ${usedPrefix + command} hijaber
• ${usedPrefix + command} hug
• ${usedPrefix + command} islami
• ${usedPrefix + command} jahy
• ${usedPrefix + command} joker
• ${usedPrefix + command} lick
• ${usedPrefix + command} masturbation
• ${usedPrefix + command} megumin
• ${usedPrefix + command} motivasi
• ${usedPrefix + command} neko
• ${usedPrefix + command} nekonime
• ${usedPrefix + command} nulis
• ${usedPrefix + command} nulis2
• ${usedPrefix + command} orgy
• ${usedPrefix + command} panties
• ${usedPrefix + command} pantun
• ${usedPrefix + command} pat
• ${usedPrefix + command} pussy
• ${usedPrefix + command} shinobu
• ${usedPrefix + command} slap
• ${usedPrefix + command} smile
• ${usedPrefix + command} smug
• ${usedPrefix + command} thighs
• ${usedPrefix + command} trut
• ${usedPrefix + command} ttp
• ${usedPrefix + command} waifu
• ${usedPrefix + command} yeet
• ${usedPrefix + command} yuri
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
            
try {
if (command) {
switch (template) {
            //Hadi
        case 'attp':
        case 'ttp':
        await conn.sendFile(m.chat, `https://hadi-api.herokuapp.com/api/canvas/${args[0]}?text=${one}`, 'sticker.webp', '', m)
            break
            
        case 'nulis':
        case 'nulis2':
    let ling = `https://hadi-api.herokuapp.com/api/canvas/${args[0]}?text=${one}`
    await conn.sendButton(m.chat, 'Nih', wm, ling, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'chord':
        let f = await fetch(`https://hadi-api.herokuapp.com/api/chord?q=${one}`)
        let x = await f.json()
        let captionab = `*Result:* ${x.result}`
        await conn.sendButton(m.chat, captionab, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'corohelp':
        let fA = await fetch(`https://hadi-api.herokuapp.com/api/corohelp?negara=${one}`)
        let oA = await fA.json()
        let xA = oA.result
        let captionA = `*terkonfirmasi:* ${xA.terkonfirmasi}
*meniggal:* ${xA.meniggal}
*sembuh:* ${xA.sembuh}
*update:* ${xA.update}
`
        await conn.sendButton(m.chat, captionA, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'cuaca':
        let fabt = await fetch(`https://hadi-api.herokuapp.com/api/cuaca?prov=${one}`)
        let oabt = await fabt.json()
        
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let xabt of oabt.result) {
        caption += `
${xabt.kota}
${xabt.malam}
`}
        await conn.reply(m.chat, caption, fakes, adReply)
            break
            
        case 'cuttly':
        let fabu = await fetch(`https://hadi-api.herokuapp.com/api/cuttly?url=${one}`)
        let xabu = await fabu.json()
        let captionabu = `*Result:* ${xabu.result}`
        await conn.sendButton(m.chat, captionabu, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'darkjokes':
        let fabl = await fetch(`https://hadi-api.herokuapp.com/api/darkjokes`)
        let xabl = await fabl.json()
        let captionabl = `*Result:* ${command}`
        await conn.sendButton(m.chat, captionabl, wm, xabl.result, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'detik':
        let fabk = await fetch(`https://hadi-api.herokuapp.com/api/detik`)
        let oabk = await fabk.json()
        let pabk = oabk.result
        let xabk = pabk.getRandom()
        let captionabk = `*Result:* ${xabk.title}
*Result:* ${xabk.link_url}
${xabk.Time}
`
        await conn.sendButton(m.chat, captionabk, wm, xabk.result.img_url, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'font':
        let fabb = await fetch(`https://hadi-api.herokuapp.com/api/font?teks=${one}`)
        let xabb = await fabb.json()
        let captionabb = `*Result:* ${xabb.result}`
        await conn.sendButton(m.chat, captionabb, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'font2':
        let fabc = await fetch(`https://hadi-api.herokuapp.com/api/font2?teks=${one}`)
        let xabc = await f.json()
        let captionabc = `*Result:* ${xabc.result}`
        await conn.sendButton(m.chat, captionabc, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'githubstalk':
        let fabg = await fetch(`https://hadi-api.herokuapp.com/api/githubstalk?username=${one}`)
        let oabg = await f.json()
        let xabg = oabg.result
        let captionabg = `*Bio:* ${xabg.bio}
*company:* ${xabg.company}
*email:* ${xabg.email}
*t-user:* ${xabg.twiter_username}
*p-repo:* ${xabg.public_repo}
*p-gists:* ${xabg.public_gists}
*follower:* ${xabg.follower}
*following:* ${xabg.following}
*location:* ${xabg.location}
`
        await conn.sendButton(m.chat, captionabg, wm, xabg.avatar, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
            //Sakura
            
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
        case 'glasses':
        case 'hentai':
        case 'hentaigif':
        case 'jahy':
        case 'masturbation':
        case 'neko':
        case 'orgy':
        case 'panties':
        case 'pussy':
        case 'thighs':
        case 'yuri':
                let peabz = await fetch(`https://mysakura.herokuapp.com/api/nsfw/${args[0]}?apikey=sakura404`)
        let xabz = await peabz.json()
        await conn.sendButton(m.chat, `${command}`, wm, xabz.result, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
            case 'hijaber':
        case 'harley':
        case 'cecans':
        case 'anony':
                let peabg = await fetch(`https://mysakura.herokuapp.com/api/wallpaper/${args[0]}?apikey=sakura404`)
        let xeabg = await peabg.json()
        await conn.sendButton(m.chat, `${command}`, wm, xeabg.result.url, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'waifu':
        case 'nekonime':
        case 'shinobu':
        case 'megumin':
        case 'chobay':
                let pesb = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xsb = await pesb.json()
        await conn.sendButton(m.chat, `${command}`, wm, xsb.result.url, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'bonk':
        case 'bully':
        case 'cry':
        case 'cuddle':
        case 'dance':
        case 'hug':
        case 'lick':
        case 'pat':
        case 'slap':
        case 'smile':
        case 'smug':
        case 'yeet':
                let peaa = await fetch(`https://mysakura.herokuapp.com/api/sfw/${args[0]}?apikey=sakura404`)
        let xaa = await peaa.json()
        await conn.sendButton(m.chat, `${command}`, wm, xaa.result.url, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
            break
            
        case 'bucin':
        let pebb = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xbb = await pebb.json()
        await conn.sendButton(m.chat, `*Bucin* ${xbb.result.result}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'pantun':
        let pecc = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xcc = await pecc.json()
        await conn.sendButton(m.chat, `*pantun* ${xcc.result.pantun}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'dare':
        let pedd = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xdd = await pedd.json()
        await conn.sendButton(m.chat, `*dare* ${xdd.result.dare}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'trut':
        let peee = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xee = await peee.json()
        await conn.sendButton(m.chat, `*trut* ${xee.result.trut}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'aneh':
        let peff = await fetch(`https://mysakura.herokuapp.com/api/truth/${args[0]}?apikey=sakura404`)
        let xff = await peff.json()
        await conn.sendButton(m.chat, `*truth* ${xff.result.truth}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'motivasi':
        let pegg = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xgg = await pegg.json()
        await conn.sendButton(m.chat, `*motivasi* ${xgg.result.motivasi}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'anime':
        let pehh = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xhh = await pehh.json()
        await conn.sendButton(m.chat, `*quote* ${xhh.quotes}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'islami':
        let peii = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xii = await peii.json()
        await conn.sendButton(m.chat, `*quote* ${xii.result}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
        case 'bijak':
        case 'joker':
        let pejj = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xjj = await pejj.json()
        await conn.sendButton(m.chat, `*quote* ${xjj.result.quotes}`, wm, null, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
            case 'gambar':
        let pekk = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xkk = await pekk.json()
        await conn.sendButton(m.chat, `*quote* ${args[0]}`, wm, xkk.result.url, [
                ['Next', `${usedPrefix}${command}`]
            ], fakes, adReply)
            break
            
          }
     }
     } catch (e) {
throw eror
}
}
handler.help = ['mysa <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^mysa$/i
export default handler