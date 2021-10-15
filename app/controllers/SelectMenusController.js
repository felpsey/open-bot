const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    build: async function(customId, options) {
        return new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId(customId)
            .setPlaceholder('Nothing selected')
            .addOptions(options),
        );
    },
}