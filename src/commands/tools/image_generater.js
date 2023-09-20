const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("generate")
    .setDescription("Generates an image with the users information"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('Red')
      .setTitle(`Bot Shutting Down`)
      .setTimestamp(Date.now())
      .setFooter({
        text: `Requested By: ${interaction.user.username}`
      })
    await interaction.reply({
      embeds: [embed], ephemeral: true
    });
  },
};