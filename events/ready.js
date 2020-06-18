const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        
    "Neon Bot | Yetkili Komutları Bakımdan!.",
    "Neon Bot | 2020 V3.5 İle Yayında!.",
    "Neon Offcial Tarafından Yapılmıştır!.",
    "https://neon-official.glitch.me",
    "Neon Bot | 7/24 Aktiflik Sorunu Yaşıyorum. Bu Sorun Benim Oluşturuldum Siteden Kaynaklı Olduğu İçin 7/24 Aktif Ola Bilmem İçin Sitenin Sorunun Giderilmesi Gerek!."
];
  
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "PLAYING" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`Neon Bot | ${client.guilds.size} Sunucu'ya + ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıya Hizmet Veriyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
