// Import the function to test
const {execute} = require('../commands/utility/hello');

// Define the test case
test('executeInteraction should reply with "Hello there!"', () => {
  // Mock interaction object
  const interaction = {
    reply: jest.fn(), // Create a Jest mock function
  };

  // Call the function to test
  execute(interaction);

  // Check if the reply function is called with the expected message
  expect(interaction.reply).toHaveBeenCalledWith('Hello there!');
});
