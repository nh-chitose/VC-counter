import * as discord from "oceanic.js";
import "dotenv/config";

const client = new discord.Client({
  auth: "Bot " + process.env.TOKEN,
  gateway: {
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
    ],
  },
});

client.on("ready", async () => {
  console.log("Bot is ready as " + client.user.tag);
  console.log(client.guilds.map(a => a.name));
  await client.editStatus("online", [
    {
      type: discord.ActivityTypes.GAME,
      name: "on " + client.guilds.size + " servers",
    },
  ]).catch(e => console.log(e));
});

setInterval(() => {
  const guilds = client.guilds.map(a => a.id);
  for(const guild of guilds){
    const channels = client.guilds.get(guild).channels;
    const voiceCh = channels.filter(ch => ch.type === discord.ChannelTypes.GUILD_VOICE) as discord.VoiceChannel[];
    const nop = voiceCh.reduce((prev, current) => prev + current.voiceMembers.size, 0);
    console.log("Guild ID: " + guild + ", Number of people in VC: " + nop);
    const counter = channels.find(ch => ch.name.startsWith("VC接続人数:"));
    counter.edit({
      name: "VC接続人数: " + nop,
    }).catch(e => console.log(e));
  }
  console.log("Refreshed!");
}, 360000); // 6 mins

client.connect().catch(e => console.log(e));
