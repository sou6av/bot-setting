const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/386.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `𝐑𝐀𝐆𝐀𝐍𝐎𝐑𝐊

 Creator -  *Sourav_mp4* 

*GitHub link(setup)*:  *www.github.com/souravkl11/Raganork* 

*Audio commands*: _https://github.com/souravkl11/Raganork/tree/master/uploads_   

*Sticker commands*: _https://github.com/souravkl11/Raganork/tree/master/sticker_

*Contact owner*: _https://wa.me/919645628728?text=I%20liked%20your%20bot.%20Use%20this%20number%20for%20chatting%3A%20https%3A%2F%2Fwa.me%2F19792896548%3Ftext%3DI%2520need%2520more%2520details%2520about%2520*Raganork*%2520bot_

*Instagram*: _https://www.instagram.com/sourav_mp4/_

*(This bot is forked from Pikachu.All codes and plugins and files have respected owners. This is only a modified version of Pikachu)*

💥ӄɨʟʟǟɖɨֆʍ ռɛʋɛʀ ɛռɖֆ💥
`}) 

}));
