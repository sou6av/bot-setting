/* TeenuhX 
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll = "*Need some Word*"
const Ln = "*▷ZARA കുഞ്ഞിന് നിങ്ങൾ തീരുന്ന ടെക്സ്റ്റ്‌ ഇമേജ് ആക്കാൻ കഴിയും അതിന്റെ ലിസ്റ്റ് ◁* "
const code = "*╔═════◉Zara bot (by Raashii & Priyan)◉═════╗*\n           Zara😍\n*❖═List═❖*\n\n*💠.book     ❴your text❵*\n*💠.coding   ❴your text❵*\n*💠.aveng          ❴your text❵*\n*💠.gp            ❴your text❵*\n*💠.neon         ❴your text❵*\n*💠.threed         ❴your text❵*\n*💠.rbreakwall             ❴your text❵*\n*💠.rcandy          ❴your text❵*\n*💠.rdropwater       ❴your text❵*\n*💠.rgalaxy          ❴your text❵*\n*💠.rglow          ❴your text❵*\n*💠.rluxury          ❴your text❵*\n*💠.rff          ❴your text❵*\n*💠.rgb          ❴your text❵*\n*g💠.lpubg          ❴your text❵*\n*💠.rharry          ❴your text❵*\n*💠.rbp          ❴your text❵*\n*💠.ranony          ❴your text❵*\n*💠.liya          ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷ *zara kuttiye kond ithokke pattu*"

if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'tppack', fromMe: false, desc: Ln, }, (async (message, match) => {

    await message.client.sendMessage(

      message.jid, code, MessageType.text);

  }));