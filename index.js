/**
 * The open-bot-interface - designed to work in conjunction with the Discord Bot.
 * Built by Ethan Phelps, free of licensing and copyright with no warranty.
 * 
 * @felpsey
 */

require('dotenv').config({ path: './test.env' });

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const test = require('./app/test');
const service = require('./app/service');

(async function() {
    let test_commands = await test.commands();
    let test_connection = await test.connection(client);

    return {
        commands: test_commands,
        connection: test_connection,
    };
})().then(test => {
    if (test.commands) { console.log('\x1b[32m%s\x1b[0m', 'Slash Commands registered successfully'); }
    if (test.connection) { console.log('\x1b[32m%s\x1b[0m', 'Connected to Discord Gateway successfully'); }

    service.start(client);
}).catch(error => {
    console.log(error);

    process.exit(1);
});