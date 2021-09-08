/**
 * The open-bot-interface - designed to work in conjunction with the Discord Bot.
 * Built by Ethan Phelps, free of licensing and copyright with no warranty.
 * 
 * @felpsey
 */

require('dotenv').config();

const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const discord = new Client({ intents: [Intents.FLAGS.GUILDS] });

const test = require('./app/test');
const service = require('./app/service');

(async function() {
    let test_connection = await test.connection(discord);
    let test_commands = await test.commands(discord);

    return {
        connection: test_connection,
        commands: test_commands,
    };
})().then(results => {
    if (results.connection) { console.log('\x1b[32m%s\x1b[0m', 'Connected to Discord Gateway successfully'); }
    if (results.commands) { console.log('\x1b[32m%s\x1b[0m', 'Slash commands registered'); }

    service.connect(discord);
}).catch(error => {
    console.log(error);

    process.exit(1);
});