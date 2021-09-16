const admin_role_id = 885099979734147092;

module.exports = [
	/**
	 * @command 	about
	 * @description returns a message in the channel that the command was called in
	 */
	{
		name: 'about',
		description: 'A brief description of the bot and space',
		permissions: [{
			id: admin_role_id,
			type: 'USER',
			permission: false,
		}],
	},

	/**
	 * @command 	feed.new
	 * @description sends a message in the feed channel
	 */
	{
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
	},
];