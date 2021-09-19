const admin_role_id = 885099979734147092;

module.exports = {

    /*
        The logic of the command when being executed.
    */
    func : async function(interaction)
    {
        await interaction.reply("Yum!"); // @gpc91 not sure what this function actually does right now...
    },

    /*
        The command snowflake that is to be sent to the Discord gateway to register commands on the server.
    */
    command: {
        name: 'feed',
		description: 'Sends a new message in the #feed channel',
		permissions: [{
			id: admin_role_id,
			type: 'USER',
			permission: false,
		}],
		options: [{
			name: 'new',
			description: 'Manage the feed',
			type: 2,
			options: [
				{
					name: 'message',
					description: 'Sends a new message in the feed channel',
					type: 1,
				},

				{
					name: 'notification',
					description: 'Sends a message in the feed channel and tags everyone',
					type: 1,
				}
			]
		}]
    }

}
