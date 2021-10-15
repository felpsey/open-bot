router = require(process.cwd() + '/app/router');

module.exports = {
    status: function(client, message) {
        client.user.setActivity('/help in #commands', { type: 'LISTENING' })
    },

    start: function(client, command_list) {
        console.log('\x1b[32m%s\x1b[0m', 'Listening for commands...');

        client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;
            router.command(client, command_list, interaction)
        });

        client.on('interactionCreate', interaction => {
            if (!interaction.isSelectMenu()) return;
            router.select_menu_response(interaction)
        });
    },
}
