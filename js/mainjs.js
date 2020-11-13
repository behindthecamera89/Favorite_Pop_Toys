'use strict'

function whoThis(){
    let userName = prompt('What is your name?');

    document.write('<h3>' + userName + '</h3>');
}

function timeofDay(){
    var today = new Date();

    var hourNow = today.getHours();
    
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'good evening!';
    } else if (hourNow > 12) {
        greeting = 'Starwars Pop are the best toys!';
    } else if (hourNow > 1) {
        greeting = 'On second thought, DBZ pop toys are the best!';
    } else {
        greeting = 'welcome!';
    }
    document.write('<h3>' + greeting + '</h3>');
}

function goodMovie(){
    let movieConfirm = confirm('what does this do?');

    if (movieConfirm){
        document.write('this doesnt make sense at all?');
    } else {
        document.write('im just copying code and not understanding what is going on, and it doesnt seem to ever work...');
    }
}

function askToPlay(){
    let wannaPlay = prompt('do you want to win a pop toy? (yes or no)')
    while(wannaPlay = 'yes')
    guessingGame();
    wannaPlay = prompt ('Do you want to play again? (yes or no)')
}
askToPlay();

