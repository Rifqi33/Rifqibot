import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fetch from 'node-fetch'

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
Hai, %name! %ucapan

*Tanggal:* %week, %date
*Waktu:* %time
*Bot Online:* %uptime
*Pengguna:* %totalreg Orang
*Lib:* Baileys-Md
*Language:* Javascript,Ts-Node
*Fitur:* %totalfeatures command

%readmore
*Support me:* _https://saweria.com/MaxxyBotz_
*Note:*
_Jika Respon Tidak Muncul Kemungkinan Terjadi Error_
`.trimStart(),
  header: `${cmenut} *%category* ${cmenuh}`,
  body: `┊${emot} %cmd %islimit %isPremium`,
  footer: `${cmenuf}`,
  after: `${cmenua}`,
}
let handler = async (m, { conn, command, groupMetadata, usedPrefix: _p, __dirname, args }) => {

     let res = JSON.parse(readFileSync('./json/emoji.json'))
     let em = res.emoji
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let ktnya = [`\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Mungkin menu ini bermanfaat?_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Terimakasih sudah menggunakan bot ini_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Semoga gak erorr_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Jika lama kemungkiman erorr atau delay_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Menampilkan menu_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Wait..._`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Dua tiga kucing berlari_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Bentar bang akan kutampilkan menunya_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Prosess..._`]
 let ktx = ktnya.getRandom()
     let tags
     let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'admin', 'advanced', 'anonymous', 'audio', 'Baileys', 'database', 'downloader', 'edukasi', 'fun', 'game', 'group', 'host', 'info', 'internet', 'jadian', 'jadibot', 'kerang', 'main', 'maker', 'nocategory', 'nsfw', 'nulis', 'owner', 'premium', 'primbon', 'quotes', 'quran', 'random', 'rpg', 'sticker', 'tools', 'vote', 'xp']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'rpg': 'RolePlay Games',
  'xp': 'Exp & Limit',
  'jadian': 'Jadian',
  'sticker': 'Sticker',
  'edukasi': 'Edukasi',
  'quran': 'Al Quran',
  'tools': 'Tools',
  'kerang': 'Kerang Ajaib',
  'primbon': 'Primbon',
  'fun': 'Fun',
  'game': 'Game',
  'quotes': 'Quotes',
  'audio': 'Audio',
  'maker': 'Maker',
  'downloader': 'Downloader',
  'internet': 'Internet',
  'random': 'Random',
  'nsfw': 'Nsfw',
  'nulis': 'MagerNulis & Logo',
  'anonymous': 'Anonymous Chat',
  'database': 'Database',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'advanced': 'Advanced',
  'info': 'Info',
  'owner': 'Owner',
  'jadibot': 'Jadi Bot',
  'host': 'Host',
  'Baileys': 'Baileys',
  'nocategory': 'No Category',
}
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'admin') tags = {
    'admin': 'Admin'
  }
  if (teks == 'advanced') tags = {
    'advanced': 'Advanced'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'Baileys') tags = {
    'Baileys': 'Baileys'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'host') tags = {
    'host': 'Host'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'main') tags = {
    'main': 'Main'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'primbon') tags = {
    'primbon': 'Primbon'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Quran'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'RolePlay Games'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Sticker'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'nocategory') tags = {
    'nocategory': 'No Category'
  }
                      
    try {
      const sections = [
   {
	title: htki + ' MAIN ' + htka,
	rows: [
	    {title: `⚡ SPEED BOT`, rowId: _p + "ping", description: "Menampilkan kecepatan respon BOT"},
	    {title: `💌 OWNER BOT`, rowId: _p + "owner", description: "Menampilkan List owner BOT"},
	    {title: `📔 SCRIPT BOT`, rowId: _p + "sc", description: `Source Code`},
	]
    },{
	title: htki + ' SUPPORT ' + htka,
	rows: [
	    {title: `🔖 SEWA`, rowId: _p + "sewa", description: "Menampilkan list harga sewa BOT"},
	    {title: `🌟 LIST PREMIUM`, rowId: _p + "premlist", description: "Menampilkan list harga premium"},
	    {title: `💹 DONASI`, rowId: _p + "donasi", description: 'Support BOT agar lebih fast respon'},
	]
	},{
	title: htki + ' MENU ' + htka,
	rows: [
	{title: `${em.getRandom()} ${dmenub} Menu All Menu ${emot}`, rowId: _p + "menulist all", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Absen ${emot}`, rowId: _p + "menulist absen", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Admin ${emot}`, rowId: _p + "menulist admin", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Advanced ${emot}`, rowId: _p + "menulist advanced", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Anonymous ${emot}`, rowId: _p + "menulist anonymous", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Audio ${emot}`, rowId: _p + "menulist audio", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Baileys ${emot}`, rowId: _p + "menulist Baileys", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Database ${emot}`, rowId: _p + "menulist database", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Downloader ${emot}`, rowId: _p + "menulist downloader", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Edukasi ${emot}`, rowId: _p + "menulist edukasi", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Fun ${emot}`, rowId: _p + "menulist fun", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Game ${emot}`, rowId: _p + "menulist game", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Group ${emot}`, rowId: _p + "menulist group", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Host ${emot}`, rowId: _p + "menulist host", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Info ${emot}`, rowId: _p + "menulist info", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Internet ${emot}`, rowId: _p + "menulist internet", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Jadian ${emot}`, rowId: _p + "menulist jadian", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Jadibot ${emot}`, rowId: _p + "menulist jadibot", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Kerang ${emot}`, rowId: _p + "menulist kerang", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Main ${emot}`, rowId: _p + "menulist main", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Maker ${emot}`, rowId: _p + "menulist maker", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Nocategory ${emot}`, rowId: _p + "menulist nocategory", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Nsfw ${emot}`, rowId: _p + "menulist nsfw", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Nulis ${emot}`, rowId: _p + "menulist nulis", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Owner ${emot}`, rowId: _p + "menulist owner", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Premium ${emot}`, rowId: _p + "menulist premium", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Primbon ${emot}`, rowId: _p + "menulist primbon", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Quotes ${emot}`, rowId: _p + "menulist quotes", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Quran ${emot}`, rowId: _p + "menulist quran", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Random ${emot}`, rowId: _p + "menulist random", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu RPG ${emot}`, rowId: _p + "menulist rpg", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Sticker ${emot}`, rowId: _p + "menulist sticker", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Tools ${emot}`, rowId: _p + "menulist tools", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu Vote ${emot}`, rowId: _p + "menulist vote", description: ktx},
	{title: `${em.getRandom()} ${dmenub} Menu XP ${emot}`, rowId: _p + "menulist xp", description: ktx}
	]
  }
]

let tek = `👋 Hai @${who.split("@")[0]} ${ucapan}

*${htjava} YOUR PROFILE ${htjava}*
*🏷️ Nama:* *${name}* ${registered ? '(' + name + ') ' : ''}
*💲 Money:* *RP* ${money}
*🏆 Level* ${level}
*🎋 Role:* ${role}
*📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik /inv untuk melihat Inventory RPG
`
const listMessage = {
  text: tek,
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  mentions: await conn.parseMention(tek),
  title: htki + ' *LIST MENU* ' + htka,
  buttonText: 'CLICK HERE ⎙',
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: fakes })
    }
    
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    
    let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, totalfeatures, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, ucapan,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pusat = ["ke1", "ke2", "ke3", "ke4", "ke5", "ke6", "ke7", "ke8"]
let pilih = pusat.getRandom()
if (pilih == "ke1") {
	await conn.send2ButtonDoc(m.chat, text.trim(), author, em.getRandom() + ' All Menu', _p + 'allmenu', em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke2") {
	await conn.send2ButtonLoc(m.chat, knimg, text.trim(), author, em.getRandom() + ' All Menu', _p + 'allmenu', em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke3") {
	await conn.send2ButtonImg(m.chat, knimg, text.trim(), author, em.getRandom() + ' All Menu', _p + 'allmenu', em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke4") {
	await conn.send2ButtonVid(m.chat, knimg, text.trim(), author, em.getRandom() + ' All Menu', _p + 'allmenu', em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke5") {
	await conn.sendTemplateButtonDoc(m.chat, knimg, text.trim(), author, em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke6") {
	await conn.sendTemplateButtonLoc(m.chat, knimg, text.trim(), author, em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke7") {
	await conn.send2TemplateButtonFakeImg(m.chat, knimg, text.trim(), author, em.getRandom() + ' All Menu', _p + 'allmenu', em.getRandom() + ' List Menu', _p + 'menulist', fakes, fakefb)
}
if (pilih == "ke8") {
	let btn = [{
		urlButton: {
			displayText: 'Chat Owner',
			url: 'https://wa.me/' + nomorown
		}
	}, {
		quickReplyButton: {
			displayText: em.getRandom() + ' All Menu',
			id: _p + 'allmenu'
		}
	}, {
		quickReplyButton: {
			displayText: em.getRandom() + ' List Menu',
			id: _p + 'menulist'
		}
	}]
	await conn.sendButtonGif(m.chat, text.trim(), wm, {
		url: global.giflogo
	}, btn, knimg)
}
        
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

handler.command = /^(menulist)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }