# Open Bot

An OU Student Space Discord bot service.

### Installation and setup for contributors

- Clone this repository
- Go to the [Discord Applications](https://discord.com/developers/docs/intro#bots-and-apps) page and create an application
- Click the Bot tab and register a bot
- Copy the `.env.example` to `.env`
- Enter the Client ID and Discord Token into the appropriate fields in the .env file
- Create a Discord server
- Invite the bot to the Discord server with Administrator permissions
- Grant the applications.commands scope in the OAuth2 tab of the Discord Application config
- Create a "log" channel and enter the ID of the channel into the .env file
- Create a "service information" channel and enter the ID of the channel into the .env file
- Create user, moderator and administrator roles and enter the IDs of the roles into the .env file
- Install node packages using `npm install`
- If you have `nodemon` installed globally, you can reload when files are updated using `npm run dev`

### Dependencies

- NodeJS 16.6.0
- DiscordJS 13.1.0
- DiscordJS/REST 0.1.0
- Discord API Types 0.23.1
- Axios 0.21.4
- Cheerio 1.0.0
- dotenv 10.0.0
- nodecron 3.0.0

Visit the [OU Student Space server](https://discord.gg/Kq3ukQJsdc)

For rights or University policy concerns, email me at [ethan.phelps@ou.ac.uk](mailto:ethan.phelps@ou.ac.uk)

<img src="https://cdn.discordapp.com/icons/885092857256484875/cae4b43ba7ebc76b51968bf1f5cfa636.webp?size=128" width="100" height="100">
