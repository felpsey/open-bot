class Command {
    constructor(name, snowflake, logic, permissions, preload = false) {
        this.name = name;
        this.snowflake = snowflake;
        this.logic = logic;
        this.permissions = permissions;
    }

    execute(interaction) {

        // Todo: Wrap this in async function
        if (this.permissions !== undefined) {
            console.log('This command is restricted');

            // Todo: Call middleware whether restriction is user, role or group based, pass interaction.user.roleId for example
            // Await result from middleware, reject() will log incident and push reject embed to user
            // 2nd line level middleware check as Discord *should* already restrict commands on registration
        }

        this.logic(interaction);
    }
}

module.exports = { Command }