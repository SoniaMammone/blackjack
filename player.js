function Player(deck){
    this.hand = [];
    this.deck = deck;
}

Player.prototype.draw = function(){
    this.hand.push(this.deck.draw());
}

Player.prototype.drawInitialHand = function(){
    this.draw();
    this.draw();
}