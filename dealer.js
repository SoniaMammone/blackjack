function Dealer(deck){
    this.deck = deck;
    this.deck.shuffle();
    this.hand = [];
}

Dealer.prototype.draw = function(){
    this.hand.push(this.deck.draw());
}

Dealer.prototype.drawInitialHand = function(){
    this.draw();
    this.draw();
}