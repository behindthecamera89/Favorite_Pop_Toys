'use strict'
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
