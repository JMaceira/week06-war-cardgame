///////     Creating WAR CARD GAME   /////////

/// Creating variable suits and values to give specifc identification for each card being created.


const suits = ["♦", "♥", "♣", "♠"]
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'] 


class Player {          
    ////creating Player Class
    constructor() {
    this.hand = [];         
    ///creating empty hand array to store individual players cards
    this.score = 0;
    }
    drawCard(card) {
        this.hand.push(card)
    }

    playCard() {
      return this.hand.pop()
    }
}




class Deck {                    
    // creating deck class to store cards in
    constructor() {
        this.cards = [];
    }
    
    createDeck () {
        // created for loop to iterate over suits and values length and shuffle cards
        for (let i = 0; i < suits.length; i++) {                
            for (let j = 0; j < values.length; j++) {
                let cards = { value: j+2, suit: suits[i], face: values[j] };
                this.cards.push(cards);                                   
            }
        }
    }


    shuffleDeck() {
        // created shuffle function to be able to randomize cards 
    for (let i = this.cards.length - 1; i > 0; i--) {            
        let j = Math.floor(Math.random() * i);            
        let oldCards = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = oldCards;
    }
    }

}
class Game {
    // creating Game class to be able to create new players and new deck
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player();
        this.player2 = new Player();
    }

    startGame () {
        // creating startGame function to be able to run the game 
        let tempCard1;
        let tempCard2;

        this.deck.createDeck();
        // called createDeck function to create new Deck for game
        
        this.deck.shuffleDeck();
        
        this.splitDeck();
        // called splitDeck to hand each player their 26 randomized cards


        for(let i = 0; i < 26; i++) {
            // using a for loop to iterate through players hand/deck to continue to play cards
            tempCard1 = this.player1.playCard();
            tempCard2 = this.player2.playCard();

        // used several if statements to compare the 2 players individual card values and add points.
        if (tempCard1.value > tempCard2.value) {
            this.player1.score += 1;
            /// adding points for player1 because value was greater

            console.log(`Player1 plays: ${tempCard1.face} of ${tempCard1.suit}`)
            console.log(`Player2 plays: ${tempCard2.face} of ${tempCard2.suit}`)
            console.log('Player1 Wins the Hand!')
            console.log('-------------------------')
        
        }  if (tempCard2.value > tempCard1.value) {
            this.player2.score += 1;
            console.log(`Player1 plays: ${tempCard1.face} of ${tempCard1.suit}`)
            console.log(`Player2 plays: ${tempCard2.face} of ${tempCard2.suit}`)
            console.log('Player2 Wins the Hand!')
            console.log('-------------------------')
        
        }   if (tempCard1.value === tempCard2.value) {
            console.log(`Player1 plays: ${tempCard1.face} of ${tempCard1.suit}`)
            console.log(`Player2 plays: ${tempCard2.face} of ${tempCard2.suit}`)
            console.log('Tie Hand. Nobody wins!')
            console.log('-------------------------')
        }

    }
        // Logging out both players points totals
        console.log(`Player1 points: ${this.player1.score}`)
        console.log(`Player2 points: ${this.player2.score}`)

        if(this.player1.score > this.player2.score) {
            console.log('Player 1 Wins the Game!')
        } if(this.player2.score > this.player1.score){
            console.log('Player 2 Wins the Game!')
        } if (this.player1.score === this.player2.score) {
            console.log("Tie Game. There's no winner!")
        }
}
 

    splitDeck() {                                               
        //created split deck function to split deck between 2 players
        const middleOfDeck = Math.floor(this.deck.cards.length / 2);
        this.player1.hand = this.deck.cards.slice(0, middleOfDeck);
        this.player2.hand = this.deck.cards.slice(middleOfDeck);
    }

    //// for visual purpose of testing out code ////
    testPlayerHand() {
        console.table(this.player2.hand)
    }

}


// Creating a new Game
let myGame = new Game(); 

// Calling the startGame function to begin the game
myGame.startGame();



