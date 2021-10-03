module.exports = {
    list: async function(Command) {
        command_list = [];

        return new Promise(function(resolve, reject) {
            (async function() {
                let fs = require('fs').promises;

                await fs.readdir('./app/commands/', { withFileTypes: true})
                .then(files => {
                    for (let file of files) {
                        if (file.isFile() && file.name != "") {                        
                            let command_schema = require(process.cwd() + '/app/commands/' + file.name);

                            let command = new Command(
                                command_schema.snowflake.name,
                                command_schema.snowflake,
                                command_schema.logic,
                                command_schema.permissions,
                            );

                            this.command_list.push(command);
                        }
                    }
                })
                .catch(error => {
                    reject(error);
                });

                resolve(command_list);
            })();
        });
    },

    register: async function(Routes, rest, client_id, guild_id, command_list) {
        return new Promise(function(resolve, reject) {
            try {
                let snowflake_list = [];

                for (var i = 0, len = command_list.length; i < len; i++) {
                    snowflake_list.push(command_list[i].snowflake);
                }

                (async function() {
                    await rest.put(Routes.applicationGuildCommands(client_id, guild_id), { body: snowflake_list });
                })();
            } catch (error) {
                reject(error);
            }

            resolve(true);
        });
    },
}