class Player {
    dicesArray = [];
    statisticsObject = {};

    playerName = 'muu';

    aces;
    twos;
    threes;
    fours;
    fives;
    sixes;
    threeOfAKind;
    fourOfAKind;
    fullHouse;
    smallStraight;
    largeStraight;
    yahtzee;
    chance;

    constructor() {
        this.createDicesArray();
        this.rollDices();
        this.countStatistics();
        this.upperSectionPossibleScores();
    }
    set playerNameValue(name) {
        this.playerName = name;
    }
    createDicesArray = () => {
        for (let index = 0; index < 5; index++) {
            this.dicesArray = [...this.dicesArray,
            { index: index, toBeRolled: true, diceNumber: null }];
        }
    }
    rollDices = () => {
        this.dicesArray = [...this.dicesArray.map(
            dice => dice.toBeRolled ?
                { ...dice, diceNumber: Math.floor(Math.random() * 6) + 1 } :
                dice
        )];
    }
    countStatistics = () => {
        for (let index = 1; index < 7; index++) {
            let count = 0;
            this.dicesArray.forEach((dice) => {
                dice.diceNumber === index && count++;
            })

            this.statisticsObject[index] = count;
        }
    }
    upperSectionPossibleScores = () => {
        this.aces = this.statisticsObject[1] * 1;
        this.twos = this.statisticsObject[2] * 2;
        this.threes = this.statisticsObject[3] * 3;
        this.fours = this.statisticsObject[4] * 4;
        this.fives = this.statisticsObject[5] * 5;
        this.sixes = this.statisticsObject[6] * 6;
    }

    dicesForSecondRoll = (diceToBeKept) => {
        this.dicesArray = [...this.dicesArray.map(
            (dice) => diceToBeKept === dice.index ?
                { ...dice, toBeRolled: !dice.toBeRolled } :
                dice
        )];
    }

}

export default Player;

