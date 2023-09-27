const scoreLabel = document.getElementById('scoreLabel');
const currentCardLabel = document.getElementById('currentCardLabel');
const gameoverLabel = document.getElementById('gameoverLabel');
const wrongCard = document.getElementById('wrongCard');
const gameBox = document.getElementById('gameBox');
const gameoverBox = document.getElementById('gameoverBox');

const valueCards = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
const valueSuit = ["1","2","3","4"];
var indexCurrentCard
var indexSuit
var indexNewCard
var score;

function newIndex() {
    
    let index = Math.floor(Math.random() * 13);
    console.log(index);
    return index;
}

function newSuit() {
    let suit = Math.floor(Math.random() * 4);
    console.log(suit);
    return suit;
}

function lower() {
    console.log("lower");
    indexNewCard = newIndex();
    indexSuit = newSuit();
    if (indexNewCard < indexCurrentCard || indexCurrentCard == indexNewCard) {
        incrementScore();
        showImage(indexNewCard, indexSuit, currentCardLabel);
        indexCurrentCard = indexNewCard;
    }  else {
        gameOver();
    }

}

function higher() {
    console.log("higher");
    indexNewCard = newIndex();
    indexSuit = newSuit();
    if (indexCurrentCard < indexNewCard || indexCurrentCard == indexNewCard) {
        incrementScore();
        showImage(indexNewCard, indexSuit, currentCardLabel);
        indexCurrentCard = indexNewCard;
    } else {
        gameOver();
    }
}

function onload() {
    indexCurrentCard = newIndex();
    indexSuit = newSuit();
    showImage(indexCurrentCard, indexSuit, currentCardLabel);
    score = 0
    gameoverLabel.innerHTML = "";
    scoreLabel.innerHTML = "";
    wrongCard.innerHTML = "";

}

function reset() {
    onload();
    gameoverBoxAppear();
}

function incrementScore() {
    score ++;
    scoreLabel.innerHTML = "Score: " + score;
}

function gameOver() {
    gameoverLabel.innerHTML = "Game Over, you got " + score + " points and the card was:";
    showImage(indexNewCard, indexSuit, wrongCard)
    gameoverBoxAppear()
}


function showImage(index, suit, el) {
    // hearts
    if (suit == 0){
        if (index == 0){
            el.innerHTML="<img src=\"cards/ace_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 1){
            el.innerHTML="<img src=\"cards/2_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 2){
            el.innerHTML="<img src=\"cards/3_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 3){
            el.innerHTML="<img src=\"cards/4_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 4){
            el.innerHTML="<img src=\"cards/5_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 5){
            el.innerHTML="<img src=\"cards/6_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 6){
            el.innerHTML="<img src=\"cards/7_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 7){
            el.innerHTML="<img src=\"cards/8_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 8){
            el.innerHTML="<img src=\"cards/9_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 9){
            el.innerHTML="<img src=\"cards/10_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 10){
            el.innerHTML="<img src=\"cards/jack_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 11){
            el.innerHTML="<img src=\"cards/queen_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 12){
            el.innerHTML="<img src=\"cards/king_of_hearts.png\" width=\"125px\" height=\"181.5px\">";
        }

    } else if (suit == 1){
        // diamonds
        if (index == 0){
            el.innerHTML="<img src=\"cards/ace_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 1){
            el.innerHTML="<img src=\"cards/2_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 2){
            el.innerHTML="<img src=\"cards/3_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 3){
            el.innerHTML="<img src=\"cards/4_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 4){
            el.innerHTML="<img src=\"cards/5_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 5){
            el.innerHTML="<img src=\"cards/6_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 6){
            el.innerHTML="<img src=\"cards/7_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 7){
            el.innerHTML="<img src=\"cards/8_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 8){
            el.innerHTML="<img src=\"cards/9_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 9){
            el.innerHTML="<img src=\"cards/10_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 10){
            el.innerHTML="<img src=\"cards/jack_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 11){
            el.innerHTML="<img src=\"cards/queen_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 12){
            el.innerHTML="<img src=\"cards/king_of_diamonds.png\" width=\"125px\" height=\"181.5px\">";
        }
    } else if (suit == 2){
        // clubs
        if (index == 0){
            el.innerHTML="<img src=\"cards/ace_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 1){
            el.innerHTML="<img src=\"cards/2_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 2){
            el.innerHTML="<img src=\"cards/3_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 3){
            el.innerHTML="<img src=\"cards/4_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 4){
            el.innerHTML="<img src=\"cards/5_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 5){
            el.innerHTML="<img src=\"cards/6_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 6){
            el.innerHTML="<img src=\"cards/7_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 7){
            el.innerHTML="<img src=\"cards/8_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 8){
            el.innerHTML="<img src=\"cards/9_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 9){
            el.innerHTML="<img src=\"cards/10_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 10){
            el.innerHTML="<img src=\"cards/jack_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 11){
            el.innerHTML="<img src=\"cards/queen_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 12){
            el.innerHTML="<img src=\"cards/king_of_clubs.png\" width=\"125px\" height=\"181.5px\">";
        }
    } else if (suit == 3){
        // spades
        if (index == 0){
            el.innerHTML="<img src=\"cards/ace_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 1){
            el.innerHTML="<img src=\"cards/2_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 2){
            el.innerHTML="<img src=\"cards/3_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 3){
            el.innerHTML="<img src=\"cards/4_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 4){
            el.innerHTML="<img src=\"cards/5_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 5){
            el.innerHTML="<img src=\"cards/6_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 6){
            el.innerHTML="<img src=\"cards/7_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 7){
            el.innerHTML="<img src=\"cards/8_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 8){
            el.innerHTML="<img src=\"cards/9_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 9){
            el.innerHTML="<img src=\"cards/10_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 10){
            el.innerHTML="<img src=\"cards/jack_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 11){
            el.innerHTML="<img src=\"cards/queen_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
        if (index == 12){
            el.innerHTML="<img src=\"cards/king_of_spades.png\" width=\"125px\" height=\"181.5px\">";
        }
    }

}

function gameoverBoxAppear() {
    if (gameoverBox.style.display == "none"){
        gameoverBox.style.display = "block";
        gameBox.style.display = "none";
    } else {
        gameoverBox.style.display = "none";
        gameBox.style.display = "block";
    }    
}


window.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 72){
        higher();
    }
});

window.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 76){
        lower();
    }
});