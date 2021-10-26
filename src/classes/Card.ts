/**
 * @description This file contains the Card Class
 * @author Mohammad Raufzahed <mohammadraufzahed@protonmail.com>
 * @file
 */

import dotenv from "dotenv";
import { normalize as pathNormalize } from "path";
import { readFileSync } from "fs";
import { verify } from "jsonwebtoken";
import { CardType } from "cardTypes";
// Initilize the process enviroment variables
dotenv.config({ path: pathNormalize(__dirname + "/../assets/dotenv") });

/**
 * @class Cards
 * @classdesc This class contains the Card Management functions
 */
class Card {
  constructor() {}
  /**
   * @name getCards
   * @description Get the cards saved in the app
   * @method
   * @example
   * const cards =  Card.getCards(); // Print the saved cards
   * @returns {CardType[]} List of the cards
   */
  static getCards(): CardType[] {
    try {
      // Read the cards list
      const file: string = readFileSync(
        pathNormalize(__dirname + "/../assets/cards"),
        "utf-8"
      );
      // Return the cards list if it was valid
      return <CardType[]>verify(file, process.env.SECRET_OR_PUBLICKEY);
    } catch (e) {
      // If an error occured or cards list was empty print the error and exit the program
      // If not found any card print the error and exit
      console.log("Cards list are empty".bgRed.white);
      process.exit(1);
    }
  }
  /**
   * @name printCards
   * @description Print the all of the cards in the list
   * @method
   * @example
   * Card.printCards(); // Print the cards
   * @returns {void}
   */
  static printCards(): void {
    // Get the cards list
    const cards: CardType[] = this.getCards();
    // Iterate over the cards list
    cards.map((card: CardType) => {
      console.log("*************".rainbow);
      console.log("Card Title: ".bold + `${card.title}`);
      console.log("Card Number: ".bold + `${card.cardNo}`);
      console.log("Card Expiration:".bold);
      console.log("\tYear: ".bold + `${card.expire.year}`);
      console.log("\tMonth: ".bold + `${card.expire.month}`);
      console.log("CVV2:".bold + `${card.cvv2}`);
      console.log("*************".rainbow);
    });
  }
}

export default Card;
