const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription("Returns The Tageted Users Information")
    .addUserOption((option) =>
      option.setName("target").setDescription('the targeted user').setRequired(false)
    ),
  async execute(interaction, client) {
    let target = interaction.options.getUser("target");
    if (!target) target = interaction.user
    const embed = new EmbedBuilder()
      .setColor('Blue')
      .setTitle(`${target?.username}'s Info`)
      .setDescription(`${target?.id}`)
      .addFields([
        {
          name: 'User mention',
          value: `<@${target.id}>`,
          inline: true
        },
        { 
          name: 'Discord Join Date',
          value: moment(target.user.createdTimestamp).format('LLLL'),
          inline: true
        }
      ])
      .setTimestamp(Date.now())
      .setFooter({
        text: `Requested By: ${interaction.user.username}`
      })
    await interaction.reply({
      embeds: [embed]
    });
  },
};