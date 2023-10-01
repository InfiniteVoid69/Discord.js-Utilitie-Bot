const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("takeroles")
    .setDescription("Takes a targeted user's role")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("User to take the role from")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("Role taken from user")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const target = interaction.options.getUser("target");
    const member = await interaction.guild.members
      .fetch(target.id)
      .catch(console.error);
    const role = interaction.options.getRole("role");
    const embed = new EmbedBuilder()
      .setColor('Green')
      .setTitle(`Role Succesfully taken`)
      .addFields([
        {
          name: "User Targeted",
          value: `<@${target.id}>`,
          inline: true,
        },
        {
          name: "Role Taken",
          value: `${role}`,
          inline: true,
        }
      ])
      .setTimestamp(Date.now())
      .setFooter({
        text: `Requested By: ${interaction.user.username}`
      })
    member.roles.remove(role)
    await interaction.reply({
      embeds: [embed]
    });
  },
};