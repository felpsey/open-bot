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

	object_error: function(stacktrace, user, object) {
		return new MessageEmbed()
		.setColor('#eb4034')
	    .setTitle('An interface error has occured')
	    .setDescription(stacktrace)
		.addFields(
			{ name: 'Object', value: object, inline: true },
			{ name: 'User', value: user, inline: true },
		)
	    .setFooter('OU Student Space')
	    .setTimestamp()
	},
}