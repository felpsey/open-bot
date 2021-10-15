const roles_controller = require(process.cwd() + '/app/controllers/RolesController');
const select_menus_controller = require(process.cwd() + '/app/controllers/SelectMenusController');
const embed = require(process.cwd() + '/app/templates/embed');
const { Role } = require(process.cwd() + '/app/classes/Role');

module.exports = {
    logic: async function(client, interaction) {
        const subcommand = interaction.options._subcommand;

        const route_command = async function(client, interaction, subcommand) {
            if (subcommand == "add") {
                let user_roles = await interaction.member._roles;
                let role_list = await roles_controller.index();

                for(var ri = 0; ri < role_list.length; ri++) {
                    console.log(role_list[ri].label);
                    for (var i = 0; i < user_roles.length; i++) {
                        if (user_roles[i] === role_list[ri].value) {
                            const removeIndex = role_list.findIndex( role => role.value === user_roles[i] );
                            role_list.splice( removeIndex, 1 );
                        }
                    }
                }

                if (role_list.length === 0) {
                    let error_embed = embed.error(
                        'An error has occured', 
                        'You already have all assignable roles.',
                    );

                    await interaction.reply({ embeds: [error_embed] });
                } else {
                    let select_menu = await select_menus_controller.build('add_roles_menu', role_list);
                    await interaction.reply({ content: 'Select roles to add from the list below', ephemeral: true, components: [select_menu] });
                }
            }

            if (subcommand == "remove") {
                let role_list = [];
                let user_roles = await interaction.member._roles;

                for (var i = 0; i < user_roles.length; i++) {
                    let role_information = interaction.guild.roles.cache.get(user_roles[i]);
                    let role = new Role(role_information.name, '', role_information.id);

                    role_list.push(role);
                }

                if (role_list.length === 0) {
                    let error_embed = embed.error(
                        'An error has occured', 
                        'You do not have any roles assigned.',
                    );

                    await interaction.reply({ embeds: [error_embed] });
                } else {
                    let select_menu = await select_menus_controller.build('remove_roles_menu', role_list);                    
                    await interaction.reply({ content: 'Select roles to remove from the list below', ephemeral: true, components: [select_menu] });
                }
            }
        };

        route_command(client, interaction, subcommand)
        .catch(error => {
            let error_embed = embed.error(
                'An error has occured', 
                'Command failed to run, this error has been logged.\nTry again later.',
            );

            let command_error = embed.object_error(
                error.message,
                '<@' + interaction.user.id + '>',
                'Command role ' + subcommand,
            );

            console.error(error);
            interaction.reply({ embeds: [error_embed] });
            client.channels.cache.get(process.env.LOG_CHANNEL_ID).send({ embeds: [command_error] })
        });
    },

    snowflake: {
        "name": 'role',
		"description": 'List the available assignable roles',
        "options": [
            {
                "name": "add",
                "description": "Add new roles",
                "type": 1,
            },

            {
                "name": "remove",
                "description": "Remove assigned roles",
                "type": 1,
            },
        ]
    },

    permissions: [
        {
            id: process.env.USER_ROLE_ID,
            type: 'ROLE',
            permission: true,
        }
    ],
}
