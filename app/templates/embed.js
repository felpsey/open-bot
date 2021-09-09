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
	}
}