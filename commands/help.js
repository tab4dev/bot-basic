const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Show available commands!'),
    async execute(interaction) {
        await interaction.reply('📜 **Commands List:**\n- `/ping` - Check bot response\n- `/kick @user` - Kick a user\n- `/ban @user` - Ban a user\n- `/reactionrole` - Setup reaction roles');
    },
}; 