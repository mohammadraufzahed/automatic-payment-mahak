/**
 * @module CardsTypes
 * @description This module contains the data types for cards
 * @author Mohammad Raufzahed <mohammadraufzahed@protonmail.com>
 */

/**
 * @interface CardType
 */
interface CardType {
  title: string;
  cardNo: string;
  expire: {
    year: string;
    month: string;
  };
  cvv2: string;
}

export { CardType };
