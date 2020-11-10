let game = {
  cards: [],
  state: 'play',
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
