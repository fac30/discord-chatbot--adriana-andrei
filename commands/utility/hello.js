// const {SlashCommandBuilder} = require('discord.js');

// module.exports = {
//   data: new SlashCommandBuilder().setName('hi').setDescription('Replies with hello!'),
//   async execute(interaction) {
//     await interaction.reply('Hello there!');
//   },
// };

const { SlashCommandBuilder } = require('discord.js');

// Define the command data separately
const commandData = new SlashCommandBuilder()
  .setName('hi')
  .setDescription('Replies with hello!');

// Function to execute the interaction
async function executeInteraction(interaction) {
  await interaction.reply('Hello there!');
}

module.exports = {
  data: commandData,
  execute: executeInteraction
};