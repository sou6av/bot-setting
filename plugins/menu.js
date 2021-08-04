const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `🩸Hᴇʟʟᴏ👋, ɪ ᴀᴍ ᴍᴀɴᴜ sᴇʀ's ʙᴏᴛ

*🌀Bᴏᴛ ɴᴀᴍᴇ : ʙʟᴀᴄᴋᴢᴜᴇ🍭*

*🌀Bᴏᴛ ᴏᴡɴᴇʀ : wa.me/+919947400040*

*🌀Bᴏᴛ ᴘʀᴇғɪx : ".!#"*
  

       🔮 *𝐌𝐄𝐃𝐈𝐀 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* 🔮
    
     
🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
🎴𝙐𝙨𝙚➜ Dᴏᴡɴʟᴏᴀᴅs sᴏɴɢ ғᴏʀ ʏᴏᴜ.
🍭ᴇɢ:- ' .sᴏɴɢ ʙᴀʙʏ ʟᴏᴠᴇ '

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
🎴𝙐𝙨𝙚➜ Dᴏᴡɴʟᴏᴀᴅs ᴠɪᴅᴇᴏ ғʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
🎴𝙐𝙨𝙚➜   Dᴏᴡɴʟᴏᴀᴅs ᴄᴏɴᴛᴇɴᴛ ғʀᴏᴍ ᴛʜᴇ ɪɴsᴛᴀɢʀᴀᴍ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
🎴𝙐𝙨𝙚➜   Gives you YT links.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
🎴𝙐𝙨𝙚➜   Gᴇᴛ ɪɴғᴏ ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴛᴠ sᴇʀɪᴇs ᴀɴᴅ sʜᴏᴡs.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴠɪᴅᴇᴏ ɪɴᴛᴏ ɢɪғ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴠɪᴅᴇᴏ ɪɴᴛᴏ ᴀᴜᴅɪᴏ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ᴠᴏɪᴄᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
🎴𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴛʜᴇ ɪᴍᴀɢᴇ ғʀᴏᴍ ɢᴏᴏɢʟᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
🎴𝙐𝙨𝙚➜ Tʀᴀɴsʟᴀᴛᴇ ᴛʜᴇ ᴛᴇxᴛ ʏᴏᴜ ᴛᴀɢ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
🎴𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴛʜᴇ ᴡɪᴋɪᴘᴇᴅɪᴀ ʀᴇsᴜʟᴛ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
🎴𝙐𝙨𝙚➜ Fɪɴᴅs ᴛʜᴇ ʟʏʀɪᴄs ᴏғ ᴛʜᴇ sᴏɴɢ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
🎴𝙐𝙨𝙚➜ Sᴇɴᴅs ᴛʜᴇ ᴄᴏᴠɪᴅ sᴛᴀᴛs ᴏғ ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
🎴𝙐𝙨𝙚➜ Tᴇʟʟs ʏᴏᴜ ᴀʙᴏᴜᴛ ᴡᴇᴀᴛʜᴇғ ɪɴ ᴛʜᴀᴛ ᴘʟᴀᴄᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
🎴𝙐𝙨𝙚➜ Rᴇᴍᴏᴠᴇs ᴛʜᴇ ʙᴀᴄᴋɢʀᴏᴜɴᴅ ᴏғ ᴛʜᴇ ɪᴍᴀɢᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
🎴𝙐𝙨𝙚➜ Fɪɴᴅ ᴛʜᴇ ᴛᴇxᴛ ʀᴇᴛᴜʀɴ ᴏɴ ᴛʜᴇ ɪᴍᴀɢᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
🎴𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ʏᴏᴜ ʀᴀɴᴅᴏᴍ ᴡᴀʟʟᴘᴀᴘᴇʀ.

        🔮 *𝐅𝐔𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* 🔮

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
🎴𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴀ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇ.
 
🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
🎴𝙐𝙨𝙚➜ Cᴀᴛɪᴏɴs ᴛʜᴇ ɪᴍᴀɢᴇ ɪɴᴛᴏ ᴀ ᴍᴇᴍᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
🎴𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴀ ʀᴀɴᴅᴏᴍ ǫᴏᴜᴛᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
🎴𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴛʜᴇ sᴄʀᴇᴇɴsʜᴏᴛ ᴏғ ᴛʜᴇ ᴡᴇʙsɪᴛᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ᴄʜᴀɴɢᴇsᴀʏ ᴍᴇᴍᴇ ɪᴍᴀɢᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ɪɴᴛᴏ ᴛʀᴜᴍᴘ's ᴛᴡᴇᴇᴛ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
🎴𝙐𝙨𝙚➜ Gɪᴠᴇs ʏᴏᴜ ᴀ ᴄᴏᴍᴘʟɪᴍᴇɴᴛ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
🎴𝙐𝙨𝙚➜   Sʜᴏʀᴛᴇɴ ʏᴏᴜʀ ʟɪɴᴋ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
🎴𝙐𝙨𝙚➜   Dɪᴄᴛɪᴏɴᴀʀʏ [-dict en;anime]

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
🎴𝙐𝙨𝙚➜   Tᴇʟʟs ʏᴏᴜ ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʜᴏʀᴏsᴄᴏᴘᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
🎴𝙐𝙨𝙚➜   Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ǫʀ ᴄᴏᴅᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
🎴𝙐𝙨𝙚➜  Gɪᴠᴇs ʏᴏᴜ ɪɴғᴏ ᴀʙᴏᴜᴛ ᴍᴏᴠɪᴇ.
🍭movie master

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
🎴𝙐𝙨𝙚➜  Gɪᴠᴇs ʏᴏᴜ ɪɴғᴏ ᴀʙᴏᴜᴛ ᴀɴɪᴍᴇ.
🍭ᴇɢ:-'.ᴀɴɪᴍᴇ ᴘɪᴋᴀᴄʜᴜ'

        🔮 *𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* 🔮

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
🎴𝙐𝙨𝙚➜ Converts img/gif into a sticker.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs sᴛɪᴄᴋᴇʀ ɪɴᴛᴏ ɪᴍᴀɢᴇ.

🧧𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
🎴𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ɢʟᴏᴡɪɴɢ sᴛɪᴄᴋᴇʀ.
🍭ᴇɢ:- '.ᴀᴛᴛᴘ ᴘɪᴋᴀᴄʜᴜ'

--------------🎴𝐁𝐋𝐀𝐂𝐙𝐔𝐄🎴------------------
             sᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋs ᴛᴏ:-
    
➜Aᴍᴇᴇʀ sᴜʜᴀɪʟ :-https://github.com/ameer-kallumthodi

➜Fᴀʀʜᴀɴᴅǫᴢ : -https://github.com/farhan-dqz

`}) 

}));
