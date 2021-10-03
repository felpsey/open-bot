module.exports = {
    status: function(client, message) {
        client.user.setActivity('/help in #commands', { type: 'LISTENING' })
    },

    start: function(client, command_list, embed) {
        console.log('\x1b[32m%s\x1b[0m', 'Listening for commands...');

        client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;

            for (var i = 0, len = command_list.length; i < len; i++) {
                if (interaction.commandName === command_list[i].name) {
                    (async function() {
                        await command_list[i].execute(client, interaction);
                    })();
                }
            }
        });
    },
}
