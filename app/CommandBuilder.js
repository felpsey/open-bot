/*
    @gpc91

    This module allows for modular commands to be added at startup.

    For now to add a new command all you need to do is copy the '.skeleton.js' to a new file 
    and put the command logic in 'func' and the registration information in 'command'

    Before using 'Commands.Build()' the Commands object MUST have data loaded into it via the 'Commands.Load()' function.

*/

class Command 
{
    constructor(name, command, func, preload = false)
    {
        this.name = name;
        this.command = command;
        this.func = func;
    }

    Execute(interaction)
    {
        this.func(interaction);
    }
}

class Commands
{    
    static commands = [];

    static Load = async function()
    {
        let fs = require('fs').promises;
        let status = await fs.readdir('./app/commands/', { withFileTypes: true})
            .then(files => {
                for (let file of files)
                { 
                    // @gpc91 any file beginning with '.' will be ignored.
                    let fname = file.name.split(".")[0];
                    if (file.isFile() && fname != "")
                    {                        
                        let fdata = require(`./commands/${fname}`);

                        // check to see if the command file is a single command or a multi-command
                        if (Array.isArray(fdata))
                        {
                            /* 
                                if the module contains multiple command definitions, iterate through
                                them and assign them as normal
                            */
                            for (let module of fdata)
                            {
                                Commands.NewCommand(module.command.name, module.command, module.func);
                            }        
                        } 
                        else
                        {
                            /*
                                if it's a single command file, add the command as normal.
                            */
                            Commands.NewCommand(fdata.command.name, fdata.command, fdata.func);                                
                        }                            
                    }
                }
                return 1;
            })
            .catch(error => {
                console.error(error);
                return 0;
            });            
        // 0 - failure | 1 - success
        return status;
    }

    static Build = async function()
    {
        let _c = [];
        for (let command of Commands.commands)
        {            
            _c.push(Commands[command].command);
        }
        return _c;
    }

    static NewCommand = async function(name, data, func)
    {
        /*
            @gpc91 avoid adding duplicate commands to the array otherwise registration will fail with DiscordAPIError[50035] APPLICATION_COMMANDS_DUPLICATE_NAME.
            Currently the first command given a specific name that gets registered is the only command with that name will get registered.
        */
        if (!Commands[name])
        {
            let command = new Command(name, data, func);
            Commands[name] = command;
            Commands.commands.push(name);
        }
        else
        {
            console.error("\x1b[31mERROR:\x1b[0m%s.", `attempted to add a \x1b[36mduplicate command\x1b[0m named \x1b[33m${name}\x1b[0m`);
        }  
    }
}

module.exports =
{
    Command,
    Commands
}
