const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/Ephoto360.com_1610cc03537e15_6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creator Sourav_kl11*
*owner number wa.me/919645628728*
*bot setting video : DM me*
*githublink       https://github.com/souravkl11/Raganork/*
*audio commads    https://github.com/souravkl11/Raganork/tree/master/uploads*
*sticker commads  https://github.com/souravkl11/Raganork/tree/master/uploads*
`}) 

}));
