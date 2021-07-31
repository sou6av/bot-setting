/* Codded by @phaticusthiccy
dont copy past without permission

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'lfootball', fromMe: true, desc: Lang.FB}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://i.ibb.co/0tRLzbg/20210713-150206.jpg";
        r_text[1] = "https://i.ibb.co/CMQFb5x/20210713-150017.jpg";
        r_text[2] = "https://i.ibb.co/k19WpZ1/20210713-145939.jpg";
        r_text[3] = "https://i.ibb.co/h7m2tsz/20210713-145824.jpg";
              var i = Math.floor(4*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'live link - https://bit.ly/Botuyire (created by zara'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'lfootball', fromMe: false, desc: Lang.FB}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://i.ibb.co/0tRLzbg/20210713-150206.jpg";
        r_text[1] = "https://i.ibb.co/CMQFb5x/20210713-150017.jpg";
        r_text[2] = "https://i.ibb.co/k19WpZ1/20210713-145939.jpg";
        r_text[3] = "https://i.ibb.co/h7m2tsz/20210713-145824.jpg";
              var i = Math.floor(4*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'https://bit.ly/Botuyire'})

    }));
    Asena.addCommand({pattern: 'football', fromMe: true, desc: Lang.FB, dontAddCommandList: true}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://i.ibb.co/0tRLzbg/20210713-150206.jpg";
        r_text[1] = "https://i.ibb.co/CMQFb5x/20210713-150017.jpg";
        r_text[2] = "https://i.ibb.co/k19WpZ1/20210713-145939.jpg";
        r_text[3] = "https://i.ibb.co/h7m2tsz/20210713-145824.jpg";
              var i = Math.floor(4*Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'https://bit.ly/Botuyire'})

    }));
}
