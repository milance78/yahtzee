import { SingleDiceStatistics } from "./singleDiceStatistics";
import { fieldsNames } from "../functions";
const diceValues = [1, 2, 3, 4, 5, 6]

export class Field {
  fieldName;
  fieldIndex;
  currentDices;
  possibleFieldValue = 0;
  definiteFieldValue = 0;
  inputOpen = false;
  threeOfAKind = 0;
  fourOfAKind = 0;
  yahtzee = 0;
  fullHouse = 0;
  smallStreight = 0;
  longStreight = 0;
  dicesStatistics: SingleDiceStatistics[] = [];

  constructor(
    name: string,
    index: number,
    dices: number[]
  ) {
    this.fieldName = name;
    this.fieldIndex = index;
    this.currentDices = dices;
    this.countDicesStatistics();
    this.countMultipleEqualDices();
    this.countFullHouse();
    this.setPossibleFieldValue();
  }

  countDicesStatistics = () => {
    diceValues.forEach(diceValue =>
      this.dicesStatistics = [
        ...this.dicesStatistics,
        new SingleDiceStatistics(diceValue, this.currentDices)
      ]);
  }

  countMultipleEqualDices = () => {
    this.dicesStatistics.forEach((el: SingleDiceStatistics) => {
      el.quantity >= 3
        && (this.threeOfAKind = el.diceValue * 3);
      el.quantity >= 4
        && (this.fourOfAKind = el.diceValue * 4);
      if (el.quantity >= 5) {
        this.yahtzee = el.diceValue * 5;
        this.fullHouse = el.diceValue * 5;
      };
    });
  }

  countFullHouse = () => {
    let twoDicesSum = 0;
    let threeDicesSum = 0

    this.dicesStatistics.forEach((el: SingleDiceStatistics) => {
      el.quantity === 2
        && (twoDicesSum = el.sum);
      el.quantity === 3
        && (threeDicesSum = el.sum);
      twoDicesSum && threeDicesSum
        && (this.fullHouse = twoDicesSum + threeDicesSum)
    });
  }

  countStraights = () => {
    if (this.currentDices.includes(1)
      && this.currentDices.includes(2)
      && this.currentDices.includes(3)
      && this.currentDices.includes(4)
      && this.currentDices.includes(5)
    ) {
      this.smallStreight = 30;
    }
    if (this.currentDices.includes(2)
      && this.currentDices.includes(3)
      && this.currentDices.includes(4)
      && this.currentDices.includes(5)
      && this.currentDices.includes(6)
    ) {
      this.longStreight = 40;
    }
  }
  // static method - completely independent from a class
  static buildResultsArray = (currentDicesArray: number[]) => {
    let playerResults: Field[] = [];
    fieldsNames.forEach((name, i) => 
      playerResults = [
        ...playerResults,
        new Field(name, i, currentDicesArray)
      ]
    );
    return playerResults
  }

  setPossibleFieldValue = () => {
    this.fieldIndex < 6
      ? this.possibleFieldValue = this.dicesStatistics[this.fieldIndex].sum
      : this.fieldIndex === 8
        ? this.possibleFieldValue = this.threeOfAKind
        : this.fieldIndex === 9
          ? this.possibleFieldValue = this.fourOfAKind
          : this.fieldIndex === 10
            ? this.possibleFieldValue = this.fullHouse
            : this.fieldIndex === 11
              ? this.possibleFieldValue = this.smallStreight
              : this.fieldIndex === 12
                ? this.possibleFieldValue = this.longStreight
                : this.fieldIndex === 13
                  ? this.possibleFieldValue = this.yahtzee
                  : this.fieldIndex = 0
  }
}