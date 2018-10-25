// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');
var cheerio = require('cheerio');
var request = require('request');

// Create an instance of a Discord client
const client = new Client();

/*
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
    switch(message.content) {
        case '!birb':
            request('https://random.birb.pw/tweet/', function (error, response, html) {
                if (!error && response.statusCode == 200) {
                    // create attachment
                    const attachment = new Attachment('https://random.birb.pw/img/' + html);
                    // send attachement
                    message.channel.send(attachment);
                }
            });
            break;
        case '!ping':
            message.channel.send('pong!');
            break;
        case 'hey guys':
            message.channel.send('Hey!');
            break;
        // make a help command
    }
});

client.login('NTAzMjgyNTUxMjY4NTczMTg0.Dq0asQ.EE94OzdMHM-x0QDMEHSxhfzy1Ww');
