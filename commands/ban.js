const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user')
        .addUserOption(option => option.setName('target').setDescription('User to ban').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply('❌ You need `Ban Members` permission!');
        const member = await interaction.guild.members.fetch(user.id);
        member.ban().then(() => interaction.reply(`✅ Banned ${user.tag}`)).catch(err => interaction.reply('❌ Failed to ban user.'));
    },
}; 