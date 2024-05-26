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

Dealer.prototype.getScore = function(){
    let score = 0;
    let numAces = 0;
    this.hand.forEach(c => {
        if(c.isAce()){
            numAces++;
        } else{
            score += c.score;
        }
    });
    if(numAces == 0){
        return score;
    }
    if(score + 11 + (numAces -1) <= 21){
        return score + 11 + (numAces -1);
    }
    return score + numAces;

}