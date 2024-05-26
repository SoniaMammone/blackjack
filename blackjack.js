function Blackjack(){
    this.deck = new Deck();
    this.player = new Player(deck);
    this.dealer = new Dealer(deck);
}

Blackjack.prototype.newGame = function(){
    this.player.drawInitialHand();
    this.dealer.drawInitialHand();
}