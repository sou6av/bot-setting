/*coded exclusively by Sourav
 Please give credit to code owner
*/

const Asena = require('../events');
const { MessageType } = require("@adiwajshing/baileys");

Asena.addCommand(
  { pattern: "forward ?(.*)", fromMe: true, desc: "Forward replied msg." },
  async (message, match) => {
    if (match == "") return await message.sendMessage("*Give me a match*");
    if (!message.reply_message)
      return await message.sendMessage("*Reply to a message!*");
    const { jid, buffer, type, options } = await forward(match, message);
    return await message.client.sendMessage(jid, buffer, type, options);
  }
);
