/* # Exclusively from MsJessica
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum yazhuth muthe\n🗡🗡"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'zsilk ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP + '\n\n----------ᴢᴀʀᴀʙᴏᴛ-----------' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'zsilk ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP + '\n\n----------ᴢᴀʀᴀʙᴏᴛ-----------' })

  }));

}
