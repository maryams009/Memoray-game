document.addEventListener('DOMContentLoaded', () => {
    

let cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },


]
cardArray.sort(() => 0.5 - Math.random());

let gridDisplay = document.querySelector('#grid');
let resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardsChosenIds = [];
let cardWon =[];

function createBoard(){
    for( let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch(){
   const cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenIds[0];
   const optionTwoId = cardsChosenIds[1];
   if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('You have clicked the same image!');
   }
   
   else if( cardChosen[0] ===  cardChosen[1]){
        alert('You have found a match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click',flipcard);
        cards[optionTwoId].removeEventListener('click',flipcard);
        cardWon.push(cardChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry! try again!');

    }
    
    cardChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardWon.length;
    if(cardWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!';

    }
}
function flipcard(){
    let cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500);
    }
    

}
})