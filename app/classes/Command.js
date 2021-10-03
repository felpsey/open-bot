const middleware_permissions_command = require(process.cwd() + '/app/middleware/permissions/command');
const embed = require(process.cwd() + '/app/templates/embed');

class Command {
    constructor(name, snowflake, logic, permissions, preload = false) {
        this.name = name;
        this.snowflake = snowflake;
        this.logic = logic;
        this.permissions = permissions;
    }

    execute(client, interaction) {
        const check_permissions = async function(interaction, permissions) {
            let is_authorised = await middleware_permissions_command.check(permissions, interaction.member._roles);

            return {
                authorised: is_authorised,
            };
        };

        check_permissions(interaction, this.permissions).then(result => {
            if (result.authorised) { 
                this.logic(client, interaction); 
            }
        }).catch(error => {
            let error_embed = embed.error(
                'An error has occured', 
                'Command failed to run, this error has been logged.\nTry again later.',
            );

            let command_error = embed.command_error(
                'An interface error has occured', 
                error.message,
                '<@' + interaction.user.id + '>',
                this.name,
            );

            interaction.reply({ embeds: [error_embed] });
            client.channels.cache.get(process.env.LOG_CHANNEL_ID).send({ embeds: [command_error] })

        });
    }
}

module.exports = { Command }