const moment = require('moment-timezone');
const menu = (prefix) => {
	let p = 0
	return ` *Made by Madhav MN*
	
*Owner* : @${configs.ownerList[0].split('@')[0]}
*Prefix* : Multi
*Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
*Rest API's* : https://zeks.xyz

*TEXTMAKER*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_

`
}

module.exports = {
	menu,
	ingfo,
	mess
}