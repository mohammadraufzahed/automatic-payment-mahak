/**
 * @file Main file
 * @fileoverview Main file of the app
 * @author Mohammad Raufzahed <mohammadraufzahed@protonmail.com>
 */

import { Command } from "commander";
import Card from "./classes/Card";
import "colors";

/**
 * @name main
 * @description Main function of the program
 * @function
 * @example
 * main(); // Start the app
 * @returns {void} start the app
 */
async function main() {
  // Initilize the program information into the object
  const program: Command = new Command("Automatic Mahak Payment");
  program.version("0.0.1");
  program.description(
    "This app will automatically pay a payment as donation to the Mahak charity."
  );
  // Define the program options
  // 1-Card Options
  program.option("-sc --show-cards", "Show the all of the cards");
  program.option("-ac --add-card", "Add the new card to the list");
  // Parse the arguments
  program.parse(process.argv);
  // Save the arguments
  const opts = program.opts();
  // Run the app base on arguments
  if (opts.showCards) {
    // Run the app
    Card.printCards();
  } else if (opts.addCard) {
    const { addCard } = require("./modules/Card");
    addCard("Hello 2World", "6037701306549631", "1400", "05", "575");
  }
  // If no argument passed print the help
  else {
    program.help();
  }
}

// Start the program
main();
