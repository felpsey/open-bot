module.exports = {
    logic: async function(interaction) {
        await interaction.member.roles.remove(interaction.values);
        await interaction.reply('Your roles have been updated');
    },
}