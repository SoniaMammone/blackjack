function Deck(){
    this.cards = [];
    ['spades', 'hearts', 'diamonds', 'clubs'].forEach( s =>
        ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'].forEach(
            n => this.cards.push(new Card(s, n))
        )
    );
}

Deck.prototype.shuffle = function() {
    let m = this.cards.length;
    let i;
    //while (m) significà finchè m != 0
    while (m) {
        //Math.floor ritorna il numero intero più basso del numero decimale 
        //m-- per post decrement operator, quindi decrementa m dopo averlo usato
        i = Math.floor(Math.random() * m--);
        //m -= 1;
        [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
    }
  };

Deck.prototype.isEmpty = function(){
    return this.cards.length == 0;
}

  Deck.prototype.mustReshuffle = function(){
    if(this.cards.length < 17){
        return true;
    }
  }

Deck.prototype.draw = function(){
    //fa il controllo sul mazzo se è vuoto
    if(this.isEmpty()){
        throw new Error("No more cards");
    }
    //shift toglie e torna il primo elemento dell'array
    //pop invece l'ultimo
    return this.cards.shift();
}