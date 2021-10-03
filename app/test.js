const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const token = process.env.DISCORD_TOKEN;
const client_id = process.env.CLIENT_ID;
const guild_id = process.env.GUILD_ID;

module.exports = {
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