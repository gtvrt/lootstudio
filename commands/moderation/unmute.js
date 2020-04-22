module.exports = {
    name: "mute",
    aliases: ["mt", "mute"],
    category: "moderation",
    description: "Mutes the annoying members.",
    usage: "<user> <reason>",
    run: (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "admin-logs") || message.channel;
        const mutedrole = message.guild.roles.find(c => c.name === "Muted");
        
        const lackofperms = new RichEmbed()
        .setColor("RED")
        .setTitle("**MISSING PERMISSIONS**")
        .setAuthor('Loot Studio | Moderations', 'https://i.imgur.com/5HKWh2E.png')
        .addField("❌ You do not have permissions to execute this command!", "**Any problem please contact the owner!**")
        .setThumbnail('https://i.imgur.com/5HKWh2E.png')
        .setTimestamp()
        .setFooter('Loot Studio | Failed to unmute!', 'https://i.imgur.com/5HKWh2E.png');

        const lackofuser = new RichEmbed()
        .setColor("RED")
        .setTitle("**MISSING TARGET**")
        .setAuthor('Loot Studio | Moderations', 'https://i.imgur.com/5HKWh2E.png')
        .addField("❌ Please enter the user you wanted to mute!", "**Fix: Add user in args[0]!**")
        .setThumbnail('https://i.imgur.com/5HKWh2E.png')
        .setTimestamp()
        .setFooter('Loot Studio | Failed to unmute!', 'https://i.imgur.com/5HKWh2E.png');

        if(!message.member.hasPermissions("MANAGE_ROLES") || !message.guild.owner) return message.reply(lackofperms)

        const unmutedsuccess = new RichEmbed()
        .setColor("GREEN")
        .setTitle("**SUCCESS**")
        .setAuthor('Loot Studio | Moderations', 'https://i.imgur.com/5HKWh2E.png')
        .addField(`${message.guild.name} is successfully being unmuted!`, `**Unmuted! 🙂**`)
        .setThumbnail('https://i.imgur.com/5HKWh2E.png')
        .setTimestamp()
        .setFooter('Loot Studio | Unmuted!', 'https://i.imgur.com/5HKWh2E.png');

        const usernotmuted = new RichEmbed()
        .setColor("RED")
        .setTitle("**USER NOT MUTED**")
        .setAuthor('Loot Studio | Moderations', 'https://i.imgur.com/5HKWh2E.png')
        .addField("❌ The user you entered is maybe unmuted or not muted!", "**Fix: Contact the creators.**")
        .setThumbnail('https://i.imgur.com/5HKWh2E.png')
        .setTimestamp()
        .setFooter('Loot Studio | Failed to unmute!', 'https://i.imgur.com/5HKWh2E.png');

        const unmutedlogs = new RichEmbed()
        .setColor("GREEN")
        .setTitle("**LOGS**")
        .setAuthor('Loot Studio | Logs', 'https://i.imgur.com/5HKWh2E.png')
        .addField("Moderation:", "Unmute")
        .addField("User:", mutee.user.username)
        .addField("Unmuted By:", message.author.username)
        .addField("Date:", message.createdAt)
        .addField("Reasons:", reason)
        .setThumbnail('https://i.imgur.com/5HKWh2E.png')
        .setTimestamp()
        .setFooter('Loot Studio | Unmuted!', 'https://i.imgur.com/5HKWh2E.png');

        if(mutee.roles.has(mutedrole)){
            mutee.removeRole(mutedrole).then(() => {
                message.delete()
                mutee.removeRole(Memberrr)
                message.reply(unmutedsuccess)
            })
        }else{
            message.reply(usernotmuted)
        }

        logChannel.send(unmutedlogs)
    }
}