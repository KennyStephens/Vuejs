new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function(){
      const playerHealthbar = document.querySelector('.player-health').style.background = 'green';
      const monsterHealthbar = document.querySelector('.monster-health').style.background = 'green';
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.characterAppear();
      this.turns = [];
    },
    characterAppear: function() {
      TweenMax.from('.hero', 1.5, {x:-500});
      TweenMax.to('.hero', .1, {opacity: 1});

      TweenMax.from('.monster', 1.5, {x:500});
      TweenMax.to('.monster', .1, {opacity: 1});

    },
    attack: function() {
      this.attackMovement();
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function() {
      this.attackMovement();
      var damage = this.calculateDamage(10, 20);;
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    ultimateAttack: function(){
      this.attackMovement();
      let randNum = Math.floor(Math.random() * 2);
      // console.log(randNum);
      if(randNum === 0) {
        TweenMax.to('.monster', 1, {opacity: 0});
        this.monsterHealth = 0;
        setTimeout(() => {
          
          this.checkWin();
        }, 1500);
        
      } else {
        TweenMax.to('.hero', 1, {opacity: 0});
        this.playerHealth = 0;
        setTimeout(() => {
          this.checkWin();
        }, 1500);  
      }
    },
    heal: function() {
      this.healing();
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.healthbar();
      this.checkWin(); 
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Monster for ' + damage
      });
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    attackMovement: function() {
      TweenMax.fromTo('.monster', .5, {x:-30}, {x:30});
      TweenMax.fromTo('.hero', .5, {x:30}, {x:-30});
    },
    healing: function() {
      TweenMax.fromTo('.healing-hero', 1.5, {opacity:1}, {opacity: 0});
    },
    healthbar: function() {
      const playerHealthbar = document.querySelector('.player-health');
      const monsterHealthbar = document.querySelector('.monster-health');
      if(this.playerHealth < 50 && this.playerHealth >= 25) {
        playerHealthbar.style.background = 'yellow';
        playerHealthbar.style.color = 'black';
      } else if(this.playerHealth <= 24) {
        playerHealthbar.style.background = 'red';
        playerHealthbar.style.color = 'black';
      } else {
        playerHealthbar.style.background = 'green';
      }

      if(this.monsterHealth < 50 && this.monsterHealth >= 25) {
        monsterHealthbar.style.background = 'yellow';
        monsterHealthbar.style.color = 'black';
      } else if(this.monsterHealth <= 24) {
        monsterHealthbar.style.background = 'red';
        monsterHealthbar.style.color = 'black';
      } else {
        monsterHealthbar.style.background = 'green';
      }

    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0){
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});