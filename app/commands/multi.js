exports.multiA = {
    func : async function(interaction)
    {
        await interaction.reply(
            {
                content: "This is multi A!",
                ephemeral: true // send only to the user calling the function
            }
        );
    },
    command: {
        name: "testmultia",
        description: "multi-a test",
    }   
}

exports.multiB = {
    func : async function(interaction)
    {
        await interaction.reply(
            {
                content: "This is multi B!",
                ephemeral: true // send only to the user calling the function
            }
        );
    },
    command: {
        name: "testmultib",
        description: "multi-b test",
    } 
}

/*
    export each object as an array
*/
module.exports = [
    this.multiA, this.multiB
]