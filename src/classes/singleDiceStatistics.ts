export class SingleDiceStatistics {
    diceValue; // this dice value
    currentDices; // array of dices got after the roll
    quantity = 0; // quantity od dices with this specific dice value
    sum = 0; // addition of all dices with this specific dice value

    constructor(num: number, arr: number[]){
        this.diceValue = num;
        this.currentDices = arr;
        this.countQuantity();
        this.countSum();
    }
    countQuantity = () => {
        const filteredArray = this.currentDices.filter(
            currentDice => currentDice === this.diceValue
        );
        this.quantity = filteredArray.length
        
    }
    countSum = () => {
        this.sum = this.diceValue * this.quantity
    }
}