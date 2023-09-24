const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
// 5120 x 2880
module.exports = {
  data: new SlashCommandBuilder()
    .setName("generate")
    .setDescription("Generates an image with the users information"),
  async execute(interaction, client) {

    const canvas = Canvas.createCanvas(5120, 2880);
    const context = canvas.getContext('2d');
    const background = await Canvas.loadImage(path.join(''));

    
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
      text: 'test'
    });
  },
};