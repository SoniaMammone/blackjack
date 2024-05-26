function Blackjack(){
    this.deck = new Deck();
    this.player = new Player(this.deck);
    this.dealer = new Dealer(this.deck);
    this.view = new View(this);
}

Blackjack.prototype.newGame = function(){
    this.player.drawInitialHand();
    this.player.hand.forEach(c => this.view.addPlayerCard(c));
    this.dealer.drawInitialHand();
    this.view.addDealerCard(this.dealer.hand[0], false);
    this.view.addDealerCard(this.dealer.hand[1], true);
}

Blackjack.prototype.hit = function(){
    this.player.draw();
    this.view.addPlayerCard(this.player.getLastCard());
    if(this.player.getScore() > 21){
        this.view.showMessage("Vai a zappare che è meglio");
        this.view.stopGame();
    }
}

let b = new Blackjack();
b.newGame();