const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Anjali😎═════╗*\n           \n*⚜═aishu═⚜*\n\n*owner AmeerSuhail - http://Wa.me/+916235989299*\n* *\n🔰instagram:-https://www.instagram.com/ig.genx_linda?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: AishuTenkasi*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═aishu Owner Aishwaryastenkasi═💥*\n\n*💘https://github.com/ameer-kallumthodi/pikachu*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════Anjali🙋🏻‍♀️═════╗*\n           \n*⚜═Aishu═⚜*\n\n*owner Aishwaryastenkasi- http://Wa.me/+916235989299*\n* *\n🔰instagram:-https://www.instagram.com/ig.genx_linda?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: AishuTenkasi*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Anjalj Owner Aishwaryastenkasi═💥*\n\n*💘https://github.com/aishwaryastenkasi/aishu*\n*     *\n💓Meenakshi═Owner VISHNU═*\n\n*⚜https://github.com/vishnu-kayamkulam/Meenakshi*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
