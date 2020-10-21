var data = (function (){

  var data = {
    score: 0,
    highscore: 0
  }

  return {
    addScore: function (points) {
      data.score += points;
    },

    setHighScore: function () {
      if (data.score >= data.highscore) {
        data.highscore = data.score;
      }
    },

    generateNumber: function () {
      return Math.floor(Math.random() * 5) + 1;
    },

    resetScore: function () {
      this.setHighScore();
      data.score = 0;
    },

    getScores: function () {
      return {
        score: data.score,
        highscore: data.highscore
      }
    }
  }
})();

var UI = (function () {
  const domStrings = {
    btnAgain: '.again',
    number: '.number',
    guess: '.guess',
    scoreNum: '.score',
    highScoreNum: '.highscore',
    check: '.check',
    message: '.message'
  };

  return {
    getGuess: function () {
      return document.querySelector(domStrings.guess).value;
    },

    showDetails: function (num, score, highscore, correct) {
      if(correct) {
        document.querySelector(domStrings.message).textContent = 'You guessed correct!';
      } else {
        document.querySelector(domStrings.message).textContent = 'Oops! You guessed wrong!';
      }

      document.querySelector(domStrings.number).textContent = num;
      document.querySelector(domStrings.scoreNum).textContent = score;
      document.querySelector(domStrings.highScoreNum).textContent = highscore;
    },

    getDomStrings: function () {
      return domStrings;
    },

    resetGuess: function () {
      document.querySelector(domStrings.guess).value = '';
      document.querySelector(domStrings.number).textContent = '?';
      document.querySelector(domStrings.message).textContent = 'Start guessing...';
    },

    disableBtn: function () {
      if(!document.querySelector(domStrings.check).disabled) {
        document.querySelector(domStrings.check).disabled = true;
      } else {
        document.querySelector(domStrings.check).disabled = false;
      }
    }
  }
})();

var controller = (function (dataCtrl, UICtrl) {
  const setupEventListeners = function () {

    const DOM = UICtrl.getDomStrings();

    document.querySelector(DOM.btnAgain).addEventListener('click', resetGuess);

    document.querySelector(DOM.check).addEventListener('click', checkGuess);
  };

  var checkGuess = function () {
    const guess = Number(UICtrl.getGuess());
    const actual = dataCtrl.generateNumber();

    if (guess === actual) {
      dataCtrl.addScore(10);
      const scores = dataCtrl.getScores();
      UICtrl.showDetails(actual, scores.score, scores.highscore, true);
    } else {
      dataCtrl.setHighScore();
      dataCtrl.resetScore();
      const scores = dataCtrl.getScores();
      UICtrl.showDetails(actual, scores.score, scores.highscore, false);
    }

    UICtrl.disableBtn();

  };

  var resetGuess = function () {
    UICtrl.disableBtn();
    UICtrl.resetGuess();
  };

  return {
    init: function () {
      console.log('App has started');
      setupEventListeners();
    }
  }

})(data, UI);

controller.init();