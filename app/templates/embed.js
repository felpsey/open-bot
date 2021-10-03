const { MessageEmbed } = require('discord.js');

module.exports = {
    general: function(color, url, title, description, footer) {
		return new MessageEmbed()
		.setColor(color)
		.setURL(url)
	    .setTitle(title)
	    .setDescription(description)
	    .setFooter(footer)
	    .setTimestamp()
	},

    error: function(title, description) {
		return new MessageEmbed()
		.setColor('#eb4034')
	    .setTitle(title)
	    .setDescription(description)
	    .setFooter('OU Student Space')
	    .setTimestamp()
	},

	command_error: function(title, stacktrace, user, command) {
		return new MessageEmbed()
		.setColor('#eb4034')
	    .setTitle(title)
	    .setDescription(stacktrace)
		.addFields(
			{ name: 'Command', value: command, inline: true },
			{ name: 'User', value: user, inline: true },
		)
	    .setFooter('OU Student Space')
	    .setTimestamp()
	},
}