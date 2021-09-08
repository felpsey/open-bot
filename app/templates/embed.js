const { MessageEmbed } = require('discord.js');

module.exports = {
    general: function(title, description, footer) {
		return new MessageEmbed()
		.setColor('#0099ff')
	    .setTitle(title)
	    .setDescription(description)
	    .setFooter(footer)
	    .setTimestamp()
	}
}