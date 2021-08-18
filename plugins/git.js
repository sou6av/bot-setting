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

*Contact owner*: *Through instagram 😉*

*Instagram*: _https://www.instagram.com/sourav_mp4/_

*(This bot is forked from Pikachu.All codes and plugins and files have respected owners. This is only a modified version of Pikachu)*

Special Thanks: *Saidali*

💥ӄɨʟʟǟɖɨֆʍ ռɛʋɛʀ ɛռɖֆ💥
`}) 

}));
