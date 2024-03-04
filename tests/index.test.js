// Require .env files
const dotenv = require('dotenv');
dotenv.config();

// const { Client } = require("discord.js")

// describe("testing if the Client object gets imported", () => {
//     it("returns valid Client instance", () => {

//         expect(Client instanceof require("discord.js").Client).toBeTruthy();
//     })
// })

const { Client } = require("discord.js");

describe("testing if the Client object gets imported", () => {
    it("returns valid Client instance", () => {
        expect(Client instanceof require("discord.js").Client).toBeTruthy();
    });
});
