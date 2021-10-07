/**
 * @module Card
 * @description Contains the functions to work with cards data
 * @author Mohammad Raufzahed <mohammadraufzahed@protonmail.com>
 */

/**
 * @name showCards
 * @description Show the cards saved in the app
 * @function
 * @example
 * await showCards(); // Print the saved cards
 * @returns {void} Print the saved cards
 */
async function showCards() {
  // Get the required modules
  const { readFileSync } = require("fs");
  const { normalize } = require("path");
  const { verify } = require("jsonwebtoken");
  // Enable Colors for terminal
  require("colors");
  // Parse the dotenv
  require("dotenv").config({
    path: normalize(__dirname + "/../assets/dotenv"),
  });
  // Try to read the data
  let cards = [];
  try {
    cards = verify(
      readFileSync(normalize(__dirname + "/../assets/cards"), "utf-8"),
      process.env.SECRET_OR_PUBLICKEY
    );
  } catch (e) {
    // If not found any card print the error and exit
    console.log("Cards list are empty".bgRed.white);
    process.exit(1);
  }
  // Print all of the cards
  for (const card of cards) {
    console.log("*************".rainbow);
    console.log("Card Title: ".bold + `${card.title}`);
    console.log("Card Number: ".bold + `${card.cardNo}`);
    console.log("Card Expiration:".bold);
    console.log("\tYear: ".bold + `${card.expire.year}`);
    console.log("\tMonth: ".bold + `${card.expire.month}`);
    console.log("CVV2:".bold + `${card.cvv2}`);
    console.log("*************".rainbow);
  }
}

module.exports = {
  showCards,
};
