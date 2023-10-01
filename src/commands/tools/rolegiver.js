const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gimmiroles")
    .setDescription("Gives a targeted user a role")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("User to give the role to")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("Role For User")
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
      .setTitle(`Role Succesfully given`)
      .addFields([
        {
          name: "User Targeted",
          value: `<@${target.id}>`,
          inline: true,
        },
        {
          name: "Role Given",
          value: `${role}`,
          inline: true,
        }
      ])
      .setTimestamp(Date.now())
      .setFooter({
        text: `Requested By: ${interaction.user.username}`
      })
    member.roles.add(role)
    await interaction.reply({
      embeds: [embed]
    });
  },
};