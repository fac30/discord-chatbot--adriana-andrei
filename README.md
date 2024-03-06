## Contributions

[@revforev](https://github.com/revforev)
<br>
[@Adrianalaffa](https://github.com/AdrianaIaffa)

# Discord Chatbot

This project is an AI infused chat bot developed using Discord.js and OpenAI API.

## Setup

To setup this project locally, you will need to fork the repository and clone it to your local machine.

Next, you'll have to create an new account on the [discord dev portal](https://discord.com/developers/). You must create your bot in this portal, which you will later associate with the code from this project by replacing the GUILD_ID and CLIENT_ID variables with your own.
![image of discord dev portal](/images/readme/dev_portal.png)

To create a bot, simply click on the `Applications` tab and then `New Application`. Add a name for your bot and click `create`. You should now see the General Information page that allows you to edit the application's name, add a description and change its avatar.

Navigate to the Bot tab and you will see settings for your bot. Under the username you will see a button `Reset Token`. This will generate a token for your bot that is essentially its password to login to discord. It should always be kept private.

![image of bot settings](/images/readme/bot_page.png)

Now that you have setup your bot application, you will need to invite it to your server. To do that, navigate to the `URL Generator` in the `OAuth2` tab.

For scopes, tick:

- bot
- application.commands

![scopes for the bot](/images/readme/bot-scope.png)

For permissions, tick at least:

General permissions:

- Read Messages/ View Channels

Text permissions

- Send Messages
- Read Message History
- Manage Messages
- Use Slash Commands

![permissions for the bot](/images/readme/bot-permissions.png)

_More info about permissions can be found [here](https://discord.com/developers/docs/topics/permissions)._

At the bottom of the page you'll see a generated url for your bot. Copy the url and paste it into your browser.
The link should take you to a page that prompts you to add the bot to a server. Make sure you have "Manage Server" permissions for the server to be able to do that.

Now that you've added the bot to your server it should appear in your server's member list.

## Configuring your bot

After adding your bot to your server, it is time to configure the keys required to run the bot.
This project uses the openai api to generate user responses so you are required to sign up for an api key over at [platform.openai.com](https://platform.openai.com/docs/overview)

Once, you've created an api key, return to the discord dev portal to find your client (application) id, and discord token. Your server (guild) id can be found by right clicking on your server name above the chat channels in your server. Paste your ids and token into your .env file before you run the bot. A template in the root directory will show you an example how to name your keys.

After that you can run `node deploy-commands.js` to load the bot's commands and finally run `node index.js` to start the bot. If everything is running correctly you will see a console message `Ready! Logged in as "bot name"`.

## Environmental variables

Please fetch the 4 environmental variables used in the code and placed them into your .env file:

```
DISCORD_TOKEN=
CLIENT_ID=
GUILD_ID=
OPENAI_API_KEY=

```

Please make sure you are familiar with the Dotenv dependency, which you will aquire by running npm install:

- [Dotenv](https://www.dotenv.org/docs/)

You can find instructions on how to get your DISCORD_TOKEN above:

- [Discord Developers](https://discord.com/developers/)

You can find instructions on how to get your OPENAI_API_KEY in the following document:

- [Openai](https://help.openai.com/en/)

To get your CLIENT_ID and GUILD_ID, you simply have to find them in your discord server. Please refer to:

- [Discord.js](https://discord.js.org/)

## Adding Features

Whenever you add a new command, please make sure the file is created in the commands folder, and you run the deploy-commnds.js script to register the command.
