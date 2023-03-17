const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("auth")
    .setDescription("Login With Trello!"),
  async execute(interaction) {
    await interaction.reply(
      "Hello, Welcome to Trello Integration Bot! Please login with Trello to continue!"
    );
  },
};
