import { Field } from "./classes/fieldClass";

let previousValue = 6;
export const noRepeatRandomValue = () => {
    let newValue = Math.floor(Math.random() * 6) + 1;
    while (newValue === previousValue) {
        newValue = Math.floor(Math.random() * 6) + 1;
    }
    previousValue = newValue;
    return newValue;
}
export const fieldsNames = [
    'Aces',
    'Twos',
    'Threes',
    'Fours',
    'Fives',
    'Sixes',
    'Upper bonus',
    'Upper total',
    'Three of a kind',
    'Four of a kind',
    'Full house',
    'Small straight',
    'Long straight',
    'Yahtzee',
    'Chance',
    'Yahtzee bonus',
    'Lower total',
    'Grand total',
];




// console.log ({ a: 33, fun: () => 'ssss'}.fun())
// const numberOfPlayers = 4
// let resultsStorage = [...Array(numberOfPlayers)].fill(new Results());