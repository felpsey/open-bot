class Command {
    constructor(name, snowflake, logic, preload = false) {
        this.name = name;
        this.snowflake = snowflake;
        this.logic = logic;
    }

    execute(interaction) {
        this.logic(interaction);
    }
}

module.exports = { Command }