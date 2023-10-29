const { Events, ActivityType } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    client.user.setPresence({
      status: "dnd",
      activities: [
        {
          name: "Servis Araçlarını",
          type: ActivityType.Watching,
        },
      ],
    });

    client.on("messageCreate", (message) => {
      if (message.author.bot) return;
      if (message.channel.id != "983105466127220766") return;
      var extension = message.attachments.map((attachment) =>
        attachment.name.split(".").pop()
      );
      if (extension != "stl") {
        message
          .reply("Buraya Sadece STL Dosyası Atıyoruz Kardeşim!")
          .then((msg) => {
            setTimeout(() => {
              msg.delete();
              message.delete();
            }, 3000);
          });
      } else {
        return;
      }
    });
  },
};
