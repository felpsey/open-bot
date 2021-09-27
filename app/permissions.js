module.exports = [
	/**
	 * @role 		user
	 * @description users of the Discord server
	 */
	{
		index: 0,
		name: 'user',
		role_id: process.env.USER_ROLE_ID,
	},

	/**
	 * @role 		moderator
	 * @description moderators of the Discord server
	 */
	{
		index: 1,
		name: 'moderator',
		role_id: process.env.MODERATOR_ROLE_ID,
	},

	/**
	 * @role 		admin
	 * @description admins of the Discord server
	 */
	{
		index: 2,
		name: 'admin',
		role_id: process.env.ADMINISTRATOR_ROLE_ID,
	},
	
];