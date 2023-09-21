const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("generate")
    .setDescription("Generates an image with the users information"),
  async execute(interaction, client) {
    const canvas = Canvas.createCanvas(700, 250);
    const context = canvas.getContext('2d');
	  const background = await Canvas.loadImage(`../../../BotImage.png`);

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
  
  
    const embed = new EmbedBuilder()
      .setColor('Blue')
      .setTitle(`test`)
      .setTimestamp(Date.now())
      .setFooter({
        text: `Requested By: ${interaction.user.username}`
      })
    await interaction.reply({
      files: [attachment],
      embeds: [embed],
      ephemeral: true
    });
  },
};