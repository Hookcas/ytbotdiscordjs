module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(member) {
    const channel = member.guild.channels.find(ch => ch.name === "lobby");
    channel.send(`Bienvenue à toi, ${member}`);
  }
};
