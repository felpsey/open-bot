const admin_role_id = 885099979734147092;

module.exports = {
   
    func : async function(interaction) {

        // need to use process.cwd() as './' refers to the current scripts directory. [https://flaviocopes.com/node-get-current-folder/]
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

    command: {
        name: 'about',
		description: 'A brief description of the bot and space',
		permissions: [{
			id: admin_role_id,
			type: 'USER',
			permission: false,
		}],
    }

}
