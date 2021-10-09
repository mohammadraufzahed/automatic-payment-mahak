/**
 * @file
 * @fileoverview Main file of the app
 * @author Mohammad Raufzahed <mohammadraufzahed@protonmail.com>
 */
const { Command } = require("commander");

/**
 * @name main
 * @description Main function of the program
 * @function
 * @async
 * @example
 * main(); // Start the app
 * @returns {void} start the app
 */
async function main() {
  // Initilize the program information into the object
  const program = new Command("Automatic Mahak Payment");
  program.version("0.0.1");
  program.description(
    "This app will automatically pay a payment as donation to the Mahak charity."
  );
  // Define the program options
  // 1-Card Options
  program.option("-sc --show-cards", "Show the all of the cards");
  // Parse the arguments
  program.parse(process.argv);
  // Save the arguments
  const opts = program.opts();
  // Run the app base on arguments
  if (opts.showCards) {
    // Imports the printCards function from Cards module
    const { printCards } = require("./modules/Card");
    // Run the app
    printCards();
  }
  // If no argument passed print the help
  else {
    program.help();
  }
}

// Start the program
main();
