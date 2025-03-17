const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a user')
        .addUserOption(option => option.setName('target').setDescription('User to kick').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (!interaction.member.permissions.has('KICK_MEMBERS')) return interaction.reply('❌ You need `Kick Members` permission!');
        const member = await interaction.guild.members.fetch(user.id);
        member.kick().then(() => interaction.reply(`✅ Kicked ${user.tag}`)).catch(err => interaction.reply('❌ Failed to kick user.'));
    },
}; 