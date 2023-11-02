const secLabel = document.getElementById('sec');
const timerDiv = document.getElementById('timer');
const gameOverDiv = document.getElementById('gameOver');

let running;
let sec;

// runs when: the page is loaded or whne the reset button is clicked.
function reset() {
    sec = 60;
    running = false;
    clearInterval(timer);
    secLabel.innerHTML = sec;
    timerDiv.style.display = 'block';
    gameOverDiv.style.display = 'none';
}

// subtracks 1 from the timer and displays the reting time.
// Checks if the timer is not 0, and displays gameover when time is 0.
function calculateAndShowSec() {
    sec--;
    if (sec <= 0) {
        gameOver();
    }
    secLabel.innerHTML = sec;
}

// When the button start/stop is clicked, 
// if the timer is not running, start the timer, 
// else stop the timer.
function startStop() {
    running = !running;

    // if the timer has been stopped
    if (!running){
        clearInterval(timer);
        return;
    };

    // else 
    calculateAndShowSec()
    timer = setInterval(calculateAndShowSec, 1000);
}

// When then min20sec button is clicked, subtreckt 20sec from the timer.
function min20sec() {
    sec -= 20;
    secLabel.innerHTML = sec;
    if (sec <= 0) gameOver();
}

// When then add20sec button is clicked, add 20sec to the timer.
function add20sec() {
    sec += 20;
    secLabel.innerHTML = sec;
}



// Shows the gameOver text.
function gameOver() {
    timerDiv.style.display = 'none';
    gameOverDiv.style.display = 'block';
}