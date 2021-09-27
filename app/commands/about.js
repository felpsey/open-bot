module.exports = {
    logic: async function(interaction) {
        const embed = require(process.cwd() + '/app/templates/embed');

        let about_embed = embed.general(
            '#0099ff',
            'https://discord.gg/Kq3ukQJsdc',
            'Welcome to the OU Student Space', 
            'This is a common area consisting of students of various courses and stages.\nModeration is in accordance with the Universities social media use policy.',
            'OU Student Space',
        );

        await interaction.reply({ embeds: [about_embed] });
    },

    snowflake: {
        "name": 'about',
		"description": 'A brief description of the bot and space',
    },

    permissions: {
        "restricted": true,
    }

}
