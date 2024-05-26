Card.scoreMap = new Map();
Card.scoreMap.set ('ace', 1);
for(let i = 2; i <= 10; i++){
    Card.scoreMap.set (i.toString(), i);
}
['jack', 'queen', 'king'].forEach(s => Card.scoreMap.set(s, 10));

function Card(suit, name){
    this.suit = suit;
    this.name = name;
    this.image = this.createImgPath();
    this.score = Card.scoreMap.get(name);
}

Card.prototype.isAce = function(){
    return this.name == 'ace';
}

Card.prototype.toString = function(){
    return `${this.name} of ${this.suit}`;
}

Card.prototype.isSpecialCard = function(){
    return this.name == 'ace' || this.name == 'jack' || this.name == 'queen' || this.name == 'king';
}

Card.prototype.createImgPath = function(){
    return `images/cards/${this.suit.substring(0, 1)}${this.isSpecialCard() ?
         this.name.substring(0, 1).toUpperCase() : this.name}.png`;
}




