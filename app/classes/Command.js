const middleware_user_roles = require(process.cwd() + '/app/middleware/user_roles');
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
            let is_authorised = await middleware_user_roles.check(permissions, interaction.member._roles);

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
                error.message,
            );

            let command_error = embed.object_error(
                error.message,
                '<@' + interaction.user.id + '>',
                'Command' + this.name,
            );

            interaction.reply({ embeds: [error_embed] });
            client.channels.cache.get(process.env.LOG_CHANNEL_ID).send({ embeds: [command_error] })
        });
    }
}

module.exports = { Command }