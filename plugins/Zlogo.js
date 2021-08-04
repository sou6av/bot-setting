/* # Exclusively from raashii
dont copy without permission 
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum yazhuth muthe\n🗡🗡"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'zlogo1 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=1`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

  }));

Asena.addCommand({ pattern: 'zlogo2 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=2`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

  }));

Asena.addCommand({ pattern: 'zlogo3 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=3`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo4 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=4`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo5 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=5`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo6 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=6`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo7 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=7`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo8 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=8`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo9 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=9`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo10 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=10`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'zlogo1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=1`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

  }));

Asena.addCommand({ pattern: 'zlogo2 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=2`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo3 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=3`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo4 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=4`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo5 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=5`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo6 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=6`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo7 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=7`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo8 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=8`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo9 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=9`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

Asena.addCommand({ pattern: 'zlogo10 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&text=${encodeURIComponent(match[1])}&type=10`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Zara😌*' })

}));

}