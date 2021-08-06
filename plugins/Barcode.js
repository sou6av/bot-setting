
/* # Exclusively from Raashii
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "commandnu shesham yanthenkilum yazhuthadey\n🗡🗡"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'barcode ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/barcode?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'barcode ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/barcode?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara*' })

    }));
    
}