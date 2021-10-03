module.exports = {
    logic: async function(client, interaction) {
        const subcommand = interaction.options._subcommand;

        if (subcommand == "add") {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('add roles')
                        .setPlaceholder('No roles selected')
                        .setMinValues(1)
                        .setMaxValues(10)
                        .addOptions([
                            {
                                label: 'TM111',
                                description: 'TM111 module',
                                value: 'module tm111',
                            },
                            {
                                label: 'TM112',
                                description: 'TM112 module',
                                value: 'module tm112',
                            },
                        ]),
                );

            await interaction.reply({ content: 'Select roles to add', ephemeral: true, components: [row] });
        }

        if (subcommand == "remove") {
            await interaction.reply('You have chosen the remove roles command');
        }
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
