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

Player.prototype.getScore = function(){
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

Player.prototype.getLastCard = function(){
    return this.hand[this.hand.length -1];
}