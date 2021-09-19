const { Commands } = require("./CommandBuilder");

module.exports = {
    status: function(client, message) {
        client.user.setActivity('/help in #commands', { type: 'LISTENING' })
    },

    start: function(client) {
        console.log('\x1b[32m%s\x1b[0m', 'Listening for commands...');

        client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;

            /**
             * @command     about
             * @description returns a message in the channel that the command was called in
             */

            if (interaction.commandName === 'about') {
                if (interaction.member.roles.cache.some(role => role.name === 'some_other_role')) {
                    let about_embed = embed.general(
                        '#0099ff',
                        'https://discord.gg/Kq3ukQJsdc',
                        'Welcome to the OU Student Space', 
                        'This is a common area consisting of students of various courses and stages.\nModeration is in accordance with the Universities social media use policy.',
                        'OU Student Space',
                    );

                    await interaction.reply({ embeds: [about_embed] });
                } else {
                    let error_embed = embed.general(
                        '#ed4e5c',
                        'https://discord.gg/Kq3ukQJsdc',
                        'Access denied', 
                        'You are unable to execute this command.',
                        'OU Student Space',
                    );

                    await interaction.reply({ embeds: [error_embed] });
                }
            }
        });
    },
}
