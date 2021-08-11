const botconfig = require("./botconfig.json")
const colors = require("./color.json")
const prefix = botconfig.prefix
const discord = require("discord.js")
const bot = new discord.Client
const fs = require('fs');


bot.on ('ready', () => {
    console.log(`${bot.user.tag} is now online `)
    bot.user.setActivity(botconfig.status, {
        type: "WATCHING"
    
        })
    })
bot.on(`message`, message => {
let messagearry = message.content.split(" ")
let cmd = messagearry[0]
let status = messagearry[1]
if(cmd == `${prefix}set-status`){
    if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply("shoma perm kafi nadarid")
    let statustext = message.content.replace(`${cmd} ${status}`, '')
if(statustext == `${cmd} ${status}` || statustext == `${cmd}`){
message.reply("lotfan matn vared konid")
}else{
    let status2 = status.toUpperCase()
    if(status2 == "STREAMING" || status2 == "WATCHING" || status2 == "LISTENING" || status2 == "PLAYING" ){
        bot.user.setActivity(statustext, {
            type: status2
        }).then(message.reply("status ba movafaghiat change shod"))

    }else{
message.reply("lotfan type dorost vared konid")
    }
}
}
})
bot.on('guildMemberAdd', member =>{
    welcomechannel = bot.channels.cache.get("763503551405490227")
    if(welcomechannel){
        let welcomeembed = new discord.MessageEmbed()
        welcomeembed.setColor(`#2F44FF`)
        welcomeembed.setAuthor(`𝐌𝐑'𝐒 𝐂𝐋𝐀𝐍`, `${member.guild.iconURL({format: "png" || "gif" || "jpeg" || "jpg" || "webp", dynamic: true, size: 1024})}`)
        welcomeembed.setTitle(`${member.user.username} Welcome !`)
        welcomeembed.setDescription(`<@${member.user.id}> Welcome To The Our Server , Pls Read Rules<#763527091038978048> ,Verify YourSelf <#797816422906331156>, And Enjoy !`)
        welcomeembed.setImage(`https://cdn.discordapp.com/attachments/765321240587403275/874989350335688754/My_Video3.gif`)
        welcomeembed.setThumbnail(member.user.displayAvatarURL({format: "png" || "gif" || "jpeg" || "jpg" || "webp", dynamic: true, size: 1024}))

        welcomeembed.setFooter(`${member.user.tag}`)
        welcomechannel.send(welcomeembed)
    }
    })

    bot.login(botconfig.token)