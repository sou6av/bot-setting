/* Codded by Raashii
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {
    Asena.addCommand({ pattern: 'etp ?(.*)', fromMe: true, desc: Lang.EMOJI_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_EMOJI, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/sticker/emojitopngapple?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&emoji=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Zara' })
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'etp ?(.*)', fromMe: false, desc: Lang.EMOJI_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_EMOJI, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/sticker/emojitopngapple?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&emoji=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Zara' })
    }));
}
