const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactionrole')
        .setDescription('Setup a reaction role system.')
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('Channel to send the message in')
                .setRequired(true))
        .addRoleOption(option => 
            option.setName('role')
                .setDescription('Role to assign')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('message')
                .setDescription('Message to send')
                .setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const role = interaction.options.getRole('role');
        const messageContent = interaction.options.getString('message');

        const message = await channel.send(`${messageContent} \nReact with this emoji to get the role: ${role}`);
        await message.react('👍'); 


        
        await interaction.reply(`✅ Reaction role setup in ${channel} with role ${role}`);
    },
}; 