const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = {
    commands: function(rest) {
        return new Promise(function(resolve, reject) {
			const commands = [{
				name: 'about',
				description: 'A brief description of the community',
			}]; 

			const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

			(async function() {
				try {
					await rest.put(
						Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
						{ body: commands },
					);

					resolve(true);
				} catch (error) {
					reject(error);
				}
			})();
		});
    },

    connection: function(client) {
	    /**
	     * @test client : checks that the Discord gateway is online. 
	     */

        return new Promise(function(resolve, reject) {
			client.on('ready', () => {
				resolve(true);
			});

			try {
				client.login(process.env.DISCORD_TOKEN);
			} catch (error) {
				reject({
					message: error,
				});
			}
		});
    },
};