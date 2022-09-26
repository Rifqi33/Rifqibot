import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import xa from 'xfarr-api'
import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

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
• ${usedPrefix + command} anime
• ${usedPrefix + command} attp
• ${usedPrefix + command} bingimage
• ${usedPrefix + command} bingsearch
• ${usedPrefix + command} character
• ${usedPrefix + command} chord
• ${usedPrefix + command} cocofun
• ${usedPrefix + command} debase64
• ${usedPrefix + command} debinary
• ${usedPrefix + command} deobfuscatorjs
• ${usedPrefix + command} drakor
• ${usedPrefix + command} ebase64
• ${usedPrefix + command} ebinary
• ${usedPrefix + command} facebook
• ${usedPrefix + command} film
• ${usedPrefix + command} imdb
• ${usedPrefix + command} imgur
• ${usedPrefix + command} inews
• ${usedPrefix + command} instagram
• ${usedPrefix + command} jadwalbola
• ${usedPrefix + command} jadwalsholat
• ${usedPrefix + command} jadwaltv
• ${usedPrefix + command} kiryu
• ${usedPrefix + command} kompasnews
• ${usedPrefix + command} like
• ${usedPrefix + command} linesticker
• ${usedPrefix + command} listsurah
• ${usedPrefix + command} manga
• ${usedPrefix + command} mangatoons
• ${usedPrefix + command} noveltoons
• ${usedPrefix + command} obfuscatorjs
• ${usedPrefix + command} otakudesu
• ${usedPrefix + command} otakudesuinfo
• ${usedPrefix + command} otakudesuongoing
• ${usedPrefix + command} pinterest
• ${usedPrefix + command} pinterestdl
• ${usedPrefix + command} soundcloud
• ${usedPrefix + command} stickersearch
• ${usedPrefix + command} surah
• ${usedPrefix + command} tafsirsurah
• ${usedPrefix + command} telesticker
• ${usedPrefix + command} tiktok
• ${usedPrefix + command} tiktoktrend
• ${usedPrefix + command} ttp
• ${usedPrefix + command} twitter
• ${usedPrefix + command} twittertrend
• ${usedPrefix + command} wattpad
• ${usedPrefix + command} wattpaduser
• ${usedPrefix + command} webtoons
• ${usedPrefix + command} whatanime
• ${usedPrefix + command} whatimage
• ${usedPrefix + command} whatmusic
• ${usedPrefix + command} youtube
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
            }
            
try {
if (command) {
switch (template) {

case 'anime':
let aa = await xa.anime.anime(one)
        let _aa = aa
        let aa_ = Object.values(_aa).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nLink: ' + v.link + '\nThumbnail: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let aan_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, aan_, aa_, m)
            break
            case 'character':
        let bb = await xa.anime.character(one)
        let _bb = bb
        let bb_ = Object.values(_bb).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nCharacter: ' + v.character + '\nAuthor: ' + v.author + '\nLink: ' + v.link + '\nThumbnail: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let bbn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, bbn_, bb_, m)
            break
            case 'kiryu':
        let cc = await xa.anime.kiryu(one)
        let _cc = cc
        let cc_ = Object.values(_cc).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nmanga_status: ' + v.manga_status + '\nlast_chapter: ' + v.last_chapter + '\nranting: ' + v.ranting + '\nThumbnail: ' + v.thumbnail + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let ccn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, ccn_, cc_, m)
            break
            case 'manga':
        let dd = await xa.anime.manga(one)
        let _dd = dd
        let dd_ = Object.values(_dd).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nLink: ' + v.link + '\nThumbnail: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let ddn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, ddn_, dd_, m)
            break
            case 'otakudesu':
        let ee = await xa.anime.otakudesu(one)
        let _ee = ee
        let ee_ = Object.values(_ee).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nLink: ' + v.link + '\nThumbnail: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let een_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, een_, ee_, m)
            break
            case 'otakudesuinfo':
        let ff = await xa.anime.otakudesuinfo(one)
        let _ff = ff
        let fff = `*anime_status:* ${_ff.anime_status}
*download_lengkap:* ${_ff.download_lengkap}
*durasi:* ${_ff.durasi}
*genre:* ${_ff.genre}
*japanese:* ${_ff.japanese}
*judul:* ${_ff.judul}
*produser:* ${_ff.produser}
*rating:* ${_ff.rating}
*rilis:* ${_ff.rilis}
*sinopsis:* ${_ff.sinopsis}
*studio:* ${_ff.studio}
*thumbnail:* ${_ff.thumbnail}
*tipe:* ${_ff.tipe}
*total_episode:* ${_ff.total_episode}`
        conn.sendButton(m.chat, fff, author, await(await fetch(_ff.thumbnail)).buffer(), [[' Menu', '/menu']], m, adReply)
            break
            case 'otakudesuongoing':
        let gg = await xa.anime.otakudesuongoing()
        let _gg = gg
        let gg_ = Object.values(_gg).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `*judul:* ${v.judul}
*episode:* ${v.episode}
*tanggal:* ${v.tanggal}
*hari:* ${v.hari}
*thumbnail:* ${v.thumbnail}
*link:* ${v.link}`,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let ggn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, ggn_, gg_, m)
            break
            case 'cocofun':
        let hh = await xa.downloader.cocofun(one)
        let _hh = hh
        let hhh = `*caption:* ${_hh.caption}
*play:* ${_hh.play}
*like:* ${_hh.like}
*share:* ${_hh.share}
*duration:* ${_hh.duration}
*thumbnail:* ${_hh.thumbnail}
*watermark:* ${_hh.watermark}
*no_watermark:* ${_hh.no_watermark}`
            conn.sendButton(m.chat, hhh, author, await(await fetch(_hh.thumbnail)).buffer(), [['NoWm', '/get ' + _hh.no_watermark], ['Wm', '/get ' + _hh.watermark]], m, adReply)
            break
            case 'facebook':
        let ii = await xa.downloader.facebook(one)
        let _ii = ii
        let iii = `*title:* ${_ii.title}
*sd:* ${_ii.sd}
*hd:* ${_ii.hd}`
conn.sendButton(m.chat, iii, author, logo, [['SD', '/get ' + _ii.sd], ['HD', '/get ' + _ii.hd]], m, adReply)
            break
            case 'imdb':
        let jj = await xa.downloader.imdb(one)
        let _jj = jj
            let jjj = `${_jj.res}`
conn.sendButton(m.chat, jjj, author, logo, [['Get', '/get ' + _jj]], m, adReply)
            break
            case 'imgur':
        let kk = await xa.downloader.imgur(one)
        let _kk = kk
            let kkk = `*vid:* ${_kk.video_link}
*img:* ${_kk.image_link}`
conn.sendButton(m.chat, kkk, author, logo, [['Vid', '/get ' + _kk.video_link], ['Img', '/get ' + _kk.image_link]], m, adReply)
            break
            case 'instagram':
        let ll = await xa.downloader.instagram(one)
        let _ll = ll
        let lll = `*title:* ${_ll.title}
*thumbnail:* ${_ll.thumbnail}
*duration:* ${_ll.duration}
*media:* ${_ll.media}`
            conn.sendButton(m.chat, lll, author, await(await fetch(_ll.thumbnail)).buffer(), [['Vid', '/get ' + _ll.media]], m, adReply)
            break
            case 'like':
        let mm = await xa.downloader.like(one)
        let _mm = mm
            let mmm = `*title:* ${_mm.title}
*thumbnail:* ${_mm.thumbnail}
*watermark:* ${_mm.watermark}
*no_watermark:* ${_mm.no_watermark}`
            conn.sendButton(m.chat, mmm, author, await(await fetch(_mm.thumbnail)).buffer(), [['NoWm', '/get ' + _mm.no_watermark], ['Wm', '/get ' + _mm.watermark]], m, adReply)
            break
            case 'linesticker':
        let nn = await xa.downloader.linesticker(one)
        let _nn = nn.result.sticker
        let _nnx = nn.result.sticker_animasi
        let U = []
        Object.keys(_nn, _nnx).map((v, index) => {
	U.push([index + ' ' + nn.result.title, [
          ['IMAGE', '/fetchsticker ' + _nn[v] + ' lib', 'By: ' + author],
          ['ANIMATE', '/fetchsticker ' + _nnx[v] + ' lib', 'By: ' + author]
        ]])
	})
	return conn.sendList(m.chat, 'Select Your Sticker', '!No Spam', author, 'Here', U, m)
            break
            case 'pinterestdl':
        let oo = await xa.downloader.pinterestdl(one)
        let _oo = oo
        let oo_ = Object.values(_oo).map((v, index) => ({
		title: index + 'quality ' + v.quality,
		description: '\nformat: ' + v.format,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let oon_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, oon_, oo_, m)
            break
            case 'soundcloud':
        let pP = await xa.downloader.soundcloud(one)
        let _pP = pP
            let ppP = `*title:* ${_pP.title}
*duration:* ${_pP.duration}
*quality:* ${_pP.quality}
*thumbnail:* ${_pP.thumbnail}
*download:* ${_pP.download}`
            conn.sendButton(m.chat, ppP, author, await(await fetch(_pP.thumbnail)).buffer(), [['Get', '/get ' + _pP.download]], m, adReply)
            break
            case 'telesticker':
        let qq = await xa.downloader.telesticker(one)
        let _qq = qq
            let qq_ = Object.values(_qq).map((v, index) => ({
		title: `📌 Tele Sticker: ${1 + index}`,
		description: '\nBy: ' + author,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let qqn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, qqn_, qq_, m)
            break
            case 'tiktok':
        let rr = await xa.downloader.tiktok(one)
        let _rr = rr
            let rrr = `*title:* ${_rr.title}
*thumbnail:* ${_rr.thumbnail}
*duration:* ${_rr.duration}
*media:* ${_rr.media}`
            conn.sendButton(m.chat, rrr, author, await(await fetch(_rr.thumbnail)).buffer(), [['Vid', '/get ' + _rr.media]], m, adReply)
            break
            case 'twitter':
        let ss = await xa.downloader.twitter(one)
        let _ss = ss
        const sections = [
   {
	title: `${_ss.nickname}`,
	rows: [
	{title: `quality_270`, rowId: `${usedPrefix}get ${_ss.quality_270}`},
	{title: `quality_360`, rowId: `${usedPrefix}get ${_ss.quality_360}`},
	{title: `quality_720`, rowId: `${usedPrefix}get ${_ss.quality_720}`},
	{title: `mp3`, rowId: `${usedPrefix}get ${_ss.mp3}`}
	]
    },
]

const ssx = {
  text: ' ',
  footer: botdate,
  title: `*${htki} RESULT ${htka}*\n${_ss.nickname}\n${_ss.caption}\n${_ss.thumbnail}`,
  buttonText: "Click Here!",
  sections
}

conn.sendMessage(m.chat, ssx, { quoted: fakes })
            break
            case 'youtube':
        let tt = await xa.downloader.youtube(one)
        let _tt = tt
            let ttt = `*title:* ${_tt.title}
*username:* ${_tt.username}
*id:* ${_tt.id}
*ftype:* ${_tt.ftype}
*fquality:* ${_tt.fquality}
*size:* ${_tt.size}
*thumbnail:* ${_tt.thumbnail}
*download_url:* ${_tt.download_url}
`
            conn.sendButton(m.chat, ttt, author, await(await fetch(_tt.thumbnail)).buffer(), [['Vid', '/get ' + _tt.download_url]], m, adReply)
            break
            case 'inews':
        let uu = await xa.information.inews()
        let _uu = uu
        let uu_ = Object.values(_uu).map((v, index) => ({
		title: index + ' ' + v.info_berita,
		description: `${v.uberita}
${v.upload_time}
${v.link}
${v.thumbnail}
${v.info_berita}`,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let uun_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, uun_, uu_, m)
            break
            case 'jadwalbola':
        let vv = await xa.information.jadwalbola()
        let _vv = vv
        let vv_ = Object.values(_vv).map((v, index) => ({
		title: index + ' ' + v.jadwal,
		description: `${v.tanggal}
${v.url}
${v.thumb}`,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let vvn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, vvn_, vv_, m)
            break
            case 'jadwalsholat':
        let ww = await xa.information.jadwalsholat(one)
        let _ww = ww
        let ww_ = Object.values(_ww).map((v, index) => ({
		title: index + ' ' + v.tanggal,
		description: `${v.tanggal}
${v.imsyak}
${v.subuh}
${v.dzuhur}
${v.ashar}
${v.maghrib}
${v.isya}`,
		rowId: 'Huuu'
	}))
	let wwn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, wwn_, ww_, m)
            break
            
            case 'jadwaltv':
        let xx = await xa.information.jadwaltv()
        let _xx = xx
            let xx_ = Object.values(_xx).map((v, index) => ({
		title: index + ' ' + v.acara,
		description: `${v.acara}
${v.channel}
${v.jam}
${v.source}`,
		rowId: usedPrefix + 'ss ' + v.source
	}))
	let xxn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, xxn_, xx_, m)
            break
            case 'kompasnews':
        let yy = await xa.information.kompasnews()
        let _yy = yy
            let yy_ = Object.values(_yy).map((v, index) => ({
		title: index + ' ' + v.berita,
		description: `${v.berita}
${v.upload_time}
${v.type_berita}
${v.link}
${v.thumbnail}
${v.info_berita}`,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let yyn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, yyn_, yy_, m)
            break
            case 'tiktoktrend':
        let zz = await xa.information.tiktoktrend()
        let _zz = zz
            let zz_ = Object.values(_zz).map((v, index) => ({
		title: index + ' ' + v.username,
		description: `${v.username}
${v.upload_time}
${v.caption}
${v.views}
${v.like}
${v.comment}
${v.share}
${v.video}`,
		rowId: usedPrefix + 'ss ' + v.video
	}))
	let zzn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, zzn_, zz_, m)
            break
            case 'twittertrend':
        let AA = await xa.information.twittertrend(one)
        let _AA = AA
            let AA_ = Object.values(_AA).map((v, index) => ({
		title: index + ' ' + v.tweet,
		description: `${v.rank}
${v.hastag}
${v.tweet}
${v.link}`,
		rowId: usedPrefix + 'get ' + v.link
	}))
	let AAn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, AAn_, AA_, m)
            break
            case 'wattpaduser':
        let BB = await xa.information.wattpaduser(one)
        let _BB = BB
            let BBB = `${_BB.username}
${_BB.works}
${_BB.reading_list}
${_BB.followers}
${_BB.joined}
${_BB.pp_picture}
${_BB.about}`
conn.sendButton(m.chat, BBB, author, logo, [['PP', '/get ' + _BB.pp_picture]], m, adReply)
            break
            case 'listsurah':
        let CC = await xa.islami.listsurah()
        let _CC = CC
        m.reply(_CC.listsurah)
            break
            case 'surah':
        let DD = await xa.islami.surah(one)
        let _DD = DD
            let DD_ = Object.values(_DD).map((v, index) => ({
		title: index + ' ' + v.arab,
		description: `${v.arab}
${v.latin}
${v.translate}`,
		rowId: usedPrefix + 'tts id ' + v.latin
	}))
	let DDn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, DDn_, DD_, m)
            break
            case 'tafsirsurah':
        let EE = await xa.islami.tafsirsurah(one)
        let _EE = EE
            let EE_ = Object.values(_EE).map((v, index) => ({
		title: index + ' ' + v.surah,
		description: `${v.surah}
${v.tafsir}
${v.type}
${v.source}`,
		rowId: usedPrefix + 'ss ' + v.source
	}))
	let EEn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, EEn_, EE_, m)
            break
            case 'attp':
        let FF = await xa.maker.attp(one)
        let _FF = FF
            let FFi = `*title:* ${one}`
conn.sendButton(m.chat, FFi, author, _FF.result.result.resp, [['Sticker', '/s'], ['Back', '/menu']], m, adReply)
            break
            case 'ttp':
        let GG = await xa.maker.ttp(one)
        let _GG = GG
            let GGi = `*title:* ${one}`
conn.sendButton(m.chat, GGi, author, _GG.result.result.resp, [['Sticker', '/s'], ['Back', '/menu']], m, adReply)
            break
            case 'bingimage':
        let HH = await xa.search.bingimage(one)
        let _HH = HH
            let HHi = `*title:* ${_HH.result.resp}`
conn.sendButton(m.chat, HHi, author, _HH.result, [['Sticker', '/s'], ['Back', '/menu']], m, adReply)
            break
            case 'bingsearch':
        let II = await xa.search.bingsearch(one)
        let _II = II
            let IIi = `*title:* ${_II.result.resp}`
conn.sendButton(m.chat, IIi, author, _II.result, [['Sticker', '/s'], ['Back', '/menu']], m, adReply)
            break
            case 'chord':
        let JJ = await xa.search.chord(one)
        let _JJ = JJ
        m.reply(_JJ.title + '\n' + _JJ.artist + '\n' + _JJ.chord)
            break
            case 'drakor':
        let KK = await xa.search.drakor(one)
        let _KK = KK
            let KK_ = Object.values(_KK).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `${v.judul}
${v.years}
${v.genre}
${v.thumbnail}
${v.url}`,
		rowId: usedPrefix + 'get ' + v.thumbnail
	}))
	let KKn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, KKn_, KK_, m)
            break
            case 'film':
        let LL = await xa.search.film(one)
        let _LL = LL
            let LL_ = Object.values(_LL).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `judul: ${v.judul}
quality: ${v.quality}
type: ${v.type}
upload: ${v.upload}
link: ${v.link}
thumb: ${v.thumb}`,
		rowId: usedPrefix + 'get ' + v.thumb
	}))
	let LLn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, LLn_, LL_, m)
            break
            case 'mangatoons':
        let MM = await xa.search.mangatoons(one)
        let _MM = MM
            let MM_ = Object.values(_MM).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `judul: ${v.judul}
genre: ${v.genre}
link: ${v.link}
thumbnail: ${v.thumbnail}`,
		rowId: usedPrefix + 'get ' + v.thumbnail
	}))
	let MMn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, MMn_, MM_, m)
            break
            case 'noveltoons':
        let NN = await xa.search.noveltoons(one)
        let _NN = NN
            let NN_ = Object.values(_NN).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `judul: ${v.judul}
genre: ${v.genre}
like: ${v.like}
url: ${v.url}
thumbnail: ${v.thumbnail}`,
		rowId: usedPrefix + 'get ' + v.thumbnail
	}))
	let NNn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, NNn_, NN_, m)
            break
            case 'pinterest':
        let OO = await xa.search.pinterest(one)
        let _OO = OO
            let OOi = `*title:* ${one}`
conn.sendButton(m.chat, OOi, author, _OO.url, [['Sticker', '/s'], ['Back', '/menu']], m, adReply)
            break
            case 'stickersearch':
        let PP = await xa.search.stickersearch(one)
        let _PP = PP
            let PP_ = Object.values(_PP).map((v, index) => ({
		title: index + ' ' + _PP.title,
		description: v.sticker_url,
		rowId: usedPrefix + 'get ' + v.sticker_url
	}))
	let PPn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return coPP.sendListM(m.chat, PPn_, PP_, m)
            break
            case 'wattpad':
        let QQ = await xa.search.wattpad(one)
        let _QQ = QQ
            let QQ_ = Object.values(_QQ).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `${v.judul}
${v.dibaca}
${v.divote}
${v.bab}
${v.waktu}
${v.url}
${v.thumb}
${v.description}
`,
		rowId: usedPrefix + 'get ' + v.thumb
	}))
	let QQn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, QQn_, QQ_, m)
            break
            case 'webtoons':
        let RR = await xa.search.webtoons(one)
        let _RR = RR
            let RR_ = Object.values(_RR).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: `${v.judul}
${v.like}
${v.creator}
${v.genre}
${v.thumbnail}
${v.url}
`,
		rowId: usedPrefix + 'get ' + v.thumbnail
	}))
	let RRn_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, RRn_, RR_, m)
            break
            case 'whatanime':
            let a__a = m.quoted ? m.quoted : m
  let b__a = (a__a.msg || a__a).mimetype || ''
  if (!b__a) throw 'No media found'
  let c__a = await a__a.download()
  let e__a = new Sticker(c__a, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__a
  try {
  if (/webp/g.test(b__a)) d__a = await webp2png(c__a)
        else if (/image/g.test(b__a)) d__a = await uploadImage(c__a)
        else if (/video/g.test(b__a)) d__a = await uploadFile(c__a)
        else if (/viewOnce/g.test(b__a)) d__a = await uploadFile(c__a)
        if (typeof d__a !== 'string') d__a = await uploadImage(c__a)
        else if (/gif/g.test(b__a)) d__a = e__a
        } catch (e) {
        throw eror
        }
        let SS = await xa.search.whatanime(d__a)
        let _SS = SS
        conn.sendButtonImg(m.chat, _SS.data, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            case 'whatimage':
            let a__b = m.quoted ? m.quoted : m
  let b__b = (a__b.msg || a__b).mimetype || ''
  if (!b__b) throw 'No media found'
  let c__b = await a__b.download()
  let e__b = new Sticker(c__b, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__b
  try {
  if (/webp/g.test(b__b)) d__b = await webp2png(c__b)
        else if (/image/g.test(b__b)) d__b = await uploadImage(c__b)
        else if (/video/g.test(b__b)) d__b = await uploadFile(c__b)
        else if (/viewOnce/g.test(b__b)) d__b = await uploadFile(c__b)
        if (typeof d__b !== 'string') d__b = await uploadImage(c__b)
        else if (/gif/g.test(b__b)) d__b = e__b
        } catch (e) {
        throw eror
        }
        let TT = await xa.search.whatimage(d__b)
        let _TT = TT
            conn.sendButtonImg(m.chat, _TT.data, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            case 'whatmusic':
            let wmus = await q.download()
        let UU = await xa.search.whatmusic(wmus)
        let _UU = UU
            conn.sendButtonImg(m.chat, _UU.metadata, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            case 'debase64':
        let VV = await xa.tools.debase64(one)
        let _VV = VV
        m.reply(_VV.result)
            break
            case 'debinary':
        let WW = await xa.tools.debinary(one)
        let _WW = WW
            m.reply(_WW.result)
            break
            case 'deobfuscatorjs':
        let XX = await xa.tools.deobfuscatorjs(one)
        let _XX = XX
            m.reply(_XX.result)
            break
            case 'ebase64':
        let YY = await xa.tools.ebase64(one)
        let _YY = YY
            m.reply(_YY.result)
            break
            case 'ebinary':
        let ZZ = await xa.tools.ebinary(one)
        let _ZZ = ZZ
            m.reply(_ZZ.result)
            break
            case 'obfuscatorjs':
        let aA = await xa.tools.obfuscatorjs(one)
        let _aA = aA
            m.reply(_aA.result)
            break
}
}
} catch (e) {
throw eror
}
}
handler.help = ['xfar <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^xfar$/i
export default handler

