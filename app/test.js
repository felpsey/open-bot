const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const token = process.env.DISCORD_TOKEN;
const client_id = process.env.CLIENT_ID;
const guild_id = process.env.GUILD_ID;

module.exports = {
	/*
		@gpc91: no longer needed as now have the new "CommandBuilder" module
	*/ 
    commands: function(rest) {
        return new Promise(function(resolve, reject) {
			const commands = require('./commands.js'); 

			const rest = new REST({ version: '9' }).setToken(token);

			(async function() {
				try {
					await rest.put(
						Routes.applicationGuildCommands(client_id, guild_id),
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
				client.login(token);
			} catch (error) {
				reject({
					message: error,
				});
			}
		});
    },
};