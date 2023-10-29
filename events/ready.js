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

    const guild = client.guilds.cache.get(process.env.GUID);
    if (guild) {
      guild.commands.set(
        [...client.commands.values()].map((command) => command.data)
      );
    } else {
      client.application.commands.set(
        [...client.commands.values()].map((command) => command.data)
      ); // Bu, komutu tüm sunucularda kullanılabilir hale getirir.
    }

    client.on("messageCreate", (message) => {});
  },
};
