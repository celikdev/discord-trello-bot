const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Join a voice channel and listen your prompt!"),
  async execute(interaction) {
    await interaction.reply("Joining your voice channel...");
    const channel = interaction.member.voice.channel;
    if (!channel) {
      return interaction.editReply(
        "You need to be in a voice channel to use this command!"
      );
    }
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
    await interaction.editReply("Joined your voice channel!");
  },
};
