import * as discord from "oceanic.js";
import "dotenv/config";
const client = new discord.Client({
  auth: "Bot " + process.env.TOKEN,
  gateway: {
    intents: [
      "GUILDS",
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

client.on("ready", async () =>{
// setInterval(() => {
  const guilds = client.guilds.map(a => a.id);
   for(const guild of guilds){
    let nop = 0;
    const voiceCh = client.guilds.get(guild).channels.filter(a => a.type === discord.ChannelTypes.GUILD_VOICE);
    console.log(voiceCh);/*
    voiceCh.forEach(ch => nop += ch.voiceMembers.size);
    console.log(nop);
    const counter = ch.find(ch => ch.name.match(/^VC接続人数:/));
    try{
      counter.setName("VC接続人数: " + nop);
    } catch(e){
      console.log(e);
    }
  }*/
  console.log("Refreshed!");
//}, 360000);
}});
client.connect().catch(e => console.log(e));
