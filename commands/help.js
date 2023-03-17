const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Welcome to Trello Integration Bot!"),
  async execute(interaction) {
    await interaction.reply(
      `Hello, if you need help, please visit our website: https://trello-integration-bot.herokuapp.com/`
    );
  },
};
