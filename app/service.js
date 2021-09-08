const embed_template = require('./templates/embed');

module.exports = {
    start: function(client) {
        console.log('\x1b[32m%s\x1b[0m', 'Listening for commands...');

        client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;

            if (interaction.commandName === 'help') {
                let embed = embed_template.general(
                    'Welcome to the OU Students Discord', 
                    `
                    This is a common area consisting of students of various courses and stages of their OU experience.
                    Moderation is in accordance with the Universities social media use policies which can be found on the open.ac.uk website.
                    `,
                    'This server is not officially affiliated with the Open University',
                );

                await interaction.reply({ embeds: [embed] });
            }
        });
    }
}