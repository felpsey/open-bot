module.exports = {
    command: function(client, command_list, interaction) {
        for (var i = 0, len = command_list.length; i < len; i++) {
            if (interaction.commandName === command_list[i].name) {
                (async function() {
                    await command_list[i].execute(client, interaction);
                })();
            }
        }
    },

    select_menu_response: function(interaction) {
    	response = require(process.cwd() + '/app/components/responses/select_menus/' + interaction.customId);
    	response.logic(interaction);
    },
}