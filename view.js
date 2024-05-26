function View(blackjack){
    this.dealerHand = document.querySelector('#dealerHand');
    this.playerHand = document.querySelector('#playerHand');
    this.dealerScore = document.querySelector('#dealerScore p');
    this.playerScore = document.querySelector('#playerScore p');
    this.message = document.querySelector('#message p');
    this.hit = document.querySelector('#hit');
    this.stay = document.querySelector('#stay');
    this.blackjack = blackjack;
    this.player = blackjack.player;
    this.dealer = blackjack.dealer;
    this.hit.addEventListener('click', evt =>{
        this.blackjack.hit();
    });
}

View.prototype.addPlayerCard = function(card){
    let img = new Image();
    img.src = card.image;
    img.alt = card.toString();
    this.playerHand.appendChild(img);
    this.playerScore.innerText = this.player.getScore();
}

View.prototype.addDealerCard = function(card, show){
    let img = new Image();
    img.src = show ? card.image : "images/cards/BACK.png";
    img.alt = card.toString();
    this.dealerHand.appendChild(img);
    this.dealerScore.innerText = this.dealer.getScore();
}

View.prototype.showMessage = function(text){
    return this.message.innerText = text;
}

View.prototype.stopGame = function(){
    this.hit.disabled = true;
    this.stay.disabled = true;
}


