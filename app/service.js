const { Commands } = require("./CommandBuilder");

module.exports = {
    status: function(client, message) {
        client.user.setActivity('/help in #commands', { type: 'LISTENING' })
    },

    start: function(client) {
        console.log('\x1b[32m%s\x1b[0m', 'Listening for commands...');

        client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;

            if (Commands[interaction.commandName]) // @gpc91 check that the command actually exists (though if it doesn't then it shouldn't have been registered)
            {
                Commands[interaction.commandName].Execute(interaction);
            }
        });
    },
}