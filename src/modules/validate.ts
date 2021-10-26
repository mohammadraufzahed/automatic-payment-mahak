/**
 /* @module validate
  * @description This module cotains the functions to validate the data
  * @author Mohammad Raufzahed <mohammadraufzahed@protonmail.com>
 */

/**
 * @name validateCardNumber
 * @description Validate the card number
 * @function
 * @param {string} cardNumber
 * @example
 * validateCardNumber("6282123412345566") // False
 * @returns {boolean}
 */
export function validateCardNumber(cardNumber: string): boolean {
  // Check the card basic style
  if (/^([4-6])([0-9]){15}$/gs.test(cardNumber)) {
    // Calculate the sum of the numbers
    let sumOfAll: number = 0;
    cardNumber.split("").map((numberV: string, index) => {
      // Parse the string number to number
      let number: number = parseInt(numberV);
      // If the number was divided by 2, multiply it with 2
      if (index % 2 == 0) {
        let multiply: number = number * 2;
        // if multiply was bigger than 9 subtract it with 9
        if (multiply > 9) sumOfAll += multiply - 9;
        // Else sum the multiply to last result
        else sumOfAll += multiply;
      }
      // If number was not divided by 2, sum it with last result
      else sumOfAll += number;
    });
    // if the result was divided by 10 return the true
    if (sumOfAll % 10 == 0) return true;
    else return false;
  }
  // Else return the false
  else {
    return false;
  }
}
