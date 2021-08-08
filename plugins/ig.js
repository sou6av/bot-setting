/* Coded by Raashii
I am not responsible for this api 
*/


const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');
const Config = require('../config');
const need = "Command Kazhinn link yazhuth muthe\n🗡🗡"


if (Config.WORKTYPE == 'private') {
  Asena.addCommand({ pattern: 'zig ?(.*)', fromMe: true, desc: '', dontAddCommandList: true }, (async (message, match) => {
    
    if (match[1] === '') return await message.sendMessage(need);
    
    const url = `https://api.lolhuman.xyz/api/instagram2?apikey=qamdi5652&url=${encodeURIComponent(match[1])}`;
    try {
      const response = await got(url);

      const json = JSON.parse(response.body);

      if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'LINK_FOR_DOWNLOAD  :' + json.media, MessageType.text);
    } catch {
      return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
    }
  }));
}

else if (Config.WORKTYPE == 'public') {


  Asena.addCommand({ pattern: 'zig ?(.*)', fromMe: false, desc: '', dontAddCommandList: true }, (async (message, match) => {
    
    if (match[1] === '') return await message.sendMessage(need);
    
    const url = `https://api.lolhuman.xyz/api/instagram2?apikey=qamdi5652&url=${encodeURIComponent(match[1])}`;
    try {
      const response = await got(url);

      const json = JSON.parse(response.body);

      if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'click_link-click_three_dote-click_download  :' + json.media, MessageType.text);
    } catch {
      return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
    }
  }));
}
