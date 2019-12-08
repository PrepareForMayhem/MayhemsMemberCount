const discord = require('discord.js');
const client = new discord.Client();

const token = require('./config.json').token;

client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.get('544354777866305566');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('653099561799254017');
    console.log(memberCountChannel.name);
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.get('544354777866305566');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('653099561799254017');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.get('544354777866305566');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('653099561799254017');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
