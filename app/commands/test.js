module.exports = {

    /*
        The logic of the command when being executed.
    */
    func : async function(interaction)
    {
        await interaction.reply(
            {
                content: "This is a test reply.",
                ephemeral: true // send only to the user calling the function
            }
        );
    },

    /*
        The command snowflake that is to be sent to the Discord gateway to register commands on the server.        
    */
    command: {
        name: "test",
        description: "A test command",
    }

}
