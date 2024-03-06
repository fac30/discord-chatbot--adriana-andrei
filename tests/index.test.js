// Require .env files
const dotenv = require('dotenv');
dotenv.config();

const {Client} = require('discord.js');

// Import the function to test
describe('testing if the Client object gets imported', () => {
  it('returns valid Client instance', () => {
    expect(Client).toBeTruthy();
  });
});

