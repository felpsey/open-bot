module.exports = {
    status: function(client, message) {
        client.user.setActivity('commands.mp3', { type: 'LISTENING' })
    },

    start: function(client, embed_template) {
        console.log('\x1b[32m%s\x1b[0m', 'Listening for commands...');

        client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;

            if (interaction.commandName === 'about') {
                let embed = embed_template.general(
                    '#0099ff',
                    'https://open.ac.uk',
                    'Welcome to the OU Student Space', 
                    `
                    This is a common area consisting of students of various courses and stages.\n
                    Moderation is in accordance with the Universities social media use policy.
                    `,
                    'This server is not officially affiliated with the Open University',
                );

                await interaction.reply({ embeds: [embed] });
            }
        });
    },
}