let game = {
  cards: [],
  state: 'play',
  get card() {
    let cardsLength = this.cards.length;
    let randomIndex = Math.floor(Math.random() * cardsLength) - 1;
    let cardObject = this.cards[randomIndex];

    // splice mutates
    this.cards.splice(randomIndex, 1);

    return cardObject;
  },
  generateCards: function () {
    let upperLimit = 10;
    let suites = ['heart', 'club', 'spade', 'diamond'];
    let nonNumericCards = ['J', 'Q', 'K'];

    suites.forEach((suite) => {
      for (let i = 2; i <= upperLimit; i++) {
        let cardObject = {
          suite,
          // suite: suite
          value: i,
          displayValue: i,
        };

        this.cards.push(cardObject);
      }

      nonNumericCards.forEach((letter) => {
        let cardObject = {
          suite,
          value: 10,
          displayValue: letter,
        };

        this.cards.push(cardObject);
      });

      this.cards.push({
        suite,
        value: 11,
        displayValue: 'A',
      });
    });
  },
};

game.generateCards();
console.log(game);
