module.exports = {
    logic: async function(interaction) {
        const embed = require(process.cwd() + '/app/templates/embed');

        let contribute_embed = embed.general(
            '#0099ff',
            'https://github.com/felpsey/open-bot-interface',
            'This bot is open source', 
            'Contribute to this project on GitHub by clicking the link',
            'OU Student Space',
        );

        await interaction.reply({ embeds: [contribute_embed] });
    },

    snowflake: {
        "name": 'contribute',
		"description": 'This bot is open source, find out how to contribute',
    }
}