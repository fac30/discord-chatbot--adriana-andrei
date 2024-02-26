// Import the function to test
const { execute } = require('/Users/TLH 20009/Desktop/discord-chatbot--adriana-andrei/commands/utility/hello.js');

// Define the testing functions
function equal(actual, expected, message) {
    if (actual === expected) {
        const defaultMessage = `Expected ${expected} and received ${actual}`;
        console.info("Pass: " + (message || defaultMessage));
    } else {
        const defaultMessage = `Expected ${expected} but received ${actual} instead`;
        console.error("Fail: " + (message || defaultMessage));
    }
}

function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd();
}

// Define the test case
test('executeInteraction should reply with "Hello there!"', () => {
    // Mock interaction object
    const interaction = {
        reply: function(message) {
            // Check if the reply function is called with the expected message
            equal(message, 'Hello there!', 'Should reply with "Hello there!"');
        }
    };

    // Call the function to test
    execute(interaction);
});
