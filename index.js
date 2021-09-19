/**
 * The open-bot-interface - designed to work in conjunction with the Discord Bot.
 * Built by Ethan Phelps, free of licensing and copyright with no warranty.
 * 
 * @felpsey
 */

/**
* @dependent packages to be included on application boot.
*/

require('dotenv').config({ path: './.env.production' });

const cron = require('node-cron');
const axios = require('axios');
const cheerio = require('cheerio');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const test = require('./app/test');
const service = require('./app/service');
const crawler = require('./app/crawler');
const embed = require('./app/templates/embed');

const command_controller = require('./app/controllers/CommandsController');

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Command } = require(process.cwd() + '/app/classes/Command');

const token = process.env.DISCORD_TOKEN;
const client_id = process.env.CLIENT_ID;
const guild_id = process.env.GUILD_ID;

/**
* @test  gateway connection, slash commands
* @start interface service
*/

(async function() {    
    const rest = new REST({version: '9'}).setToken(token);

    let test_connection = await test.connection(client);
    let command_list = await command_controller.load(Command);
    let register_commands = await command_controller.register(Routes, rest, client_id, guild_id, command_list);

    return {
        connection: test_connection,
        command_list, command_list,
        commands_loaded: register_commands,        
    };
})().then(test => {
    if (test.commands_loaded) { console.log('\x1b[32m%s\x1b[0m', 'Slash Commands registered successfully'); }
    if (test.connection) { console.log('\x1b[32m%s\x1b[0m', 'Connected to Discord Gateway successfully'); }

    service.status(client, '/help for command usage');
    service.start(client, command_list, embed);
}).catch(error => {
    console.error(error);
});

/**
* @cron tasks set to run once per two days.
*/

cron.schedule('0 0 */2 * *', function() {
    (async function() {   
        let get_ou_status = await crawler.scrape(axios, 'status.open.ac.uk');

        return {
            ou_status: get_ou_status,
        }
    })().then(source => {
        const $ = cheerio.load(source.ou_status.data);

        let current_ou_status = $('strong[id="statusbar_text"]').text();
        let current_status_message = $('div[class="panel-title"] > h5[class="white"] > a').text();

        if (current_ou_status == "Active Incident") {
            let embed = embed_template.general(
                '#f5b642',
                'https://status.open.ac.uk',
                'OU System Status', 
                current_ou_status + ': ' + current_status_message,
                'This server is not officially affiliated with the Open University',
            );

            client.channels.fetch(process.env.SERVICE_INFORMATION_CHANNEL_ID)
            .then(channel => {
                channel.send({ embeds: [embed] });
            })
            .catch(console.error);
        }
    }).catch(error => {
        console.error(error);
    });
});