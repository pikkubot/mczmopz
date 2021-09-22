const Asena = require('../Utilis/events')

const { ePhotoDownload, getBuffer } = require('../Utilis/download')

const { MessageType } = require('@adiwajshing/baileys')

Asena.addCommand({ pattern: 'bgmi ?(.*)', fromMe: true, desc: "Pubg text effect", dontAddCommandList: true }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text\nExample .pubg Joker;ser")
        const [text1, text2] = match.split(';')
        if (!text1 || !text2) return await message.sendMessage("Give me text\nExample .pubg paathu;mol")
        const effect_url = "https://en.ephoto360.com/black-white-pubg-logo-for-esports-gaming-610.html"
        const {status, url} = await ePhotoDownload(effect_url, match, "b1bb4e0c-6f59-4d5f-b3ba-42800ace56db")
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
