const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "verify",
    category: "verification",
    description: "Verify and gives you **member** role",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "admin-logs") || message.channel;
        const memberrole = message.guild.roles.find(c => c.name === "Members") || message.channel;
        if (message.deletable) message.delete();

        const failed = new RichEmbed()
        .setColor("RED")
        .setTitle("**Failed To Verify**")
        .setAuthor('Azurite BOT | Verification', 'https://i.imgur.com/QklWiqQ.png')
        .addField("❌ Failed to verify. This is because you are already verified in this server!", "**Ways to fix:** \nAsk WhyyAxel#7203 if you do not know what to do")
        .setThumbnail('https://i.imgur.com/QklWiqQ.png')
        .setTimestamp()
        .setFooter('Azurite BOT | Failed to verify!', 'https://i.imgur.com/QklWiqQ.png');

        const success = new RichEmbed()
        .setColor("GREEN")
        .setTitle("**Verified!**")
        .setAuthor('Azurite BOT | Verification', 'https://i.imgur.com/QklWiqQ.png')
        .addField("✅ You are succesfully being verified!", "**Congrats!**")
        .setThumbnail('https://i.imgur.com/QklWiqQ.png')
        .setTimestamp()
        .setFooter('Azurite BOT | Verified successfully!', 'https://i.imgur.com/QklWiqQ.png');

        const successlog = new RichEmbed()
        .setColor("GREEN")
        .setTitle("**Verified!**")
        .setAuthor('Azurite BOT | Logs', 'https://i.imgur.com/QklWiqQ.png')
        .addField(`✅ ${message.member.user.username} is succesfully being verified!`, "**Congrats!**")
        .setThumbnail(message.member.user.displayAvatarURL)
        .setTimestamp()
        .setFooter('Azurite BOT | Verified successfully!', 'https://i.imgur.com/QklWiqQ.png');

        const failedlog = new RichEmbed()
        .setColor("RED")
        .setTitle("**Verified!**")
        .setAuthor('Azurite BOT | Logs', 'https://i.imgur.com/QklWiqQ.png')
        .addField(`✅ ${message.member.user.username} failed to verify!`, "**Sorry!**")
        .setThumbnail(message.member.user.displayAvatarURL)
        .setTimestamp()
        .setFooter('Azurite BOT | Failed to verify!', 'https://i.imgur.com/QklWiqQ.png');
            
        if(!message.member.roles.has(memberrole)){
            message.channel.send(success);
            message.member.addRole(memberrole);
            logChannel.send(successlog);
        }
        if(message.member.roles.has(memberrole)){
            message.channel.send(failed);
            logChannel.send(failedlog);
        }


        }
    }