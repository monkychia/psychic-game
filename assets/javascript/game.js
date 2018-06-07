var totalCount = 12;  // user has total of 12 plays if they loss
var wins = 0;
var losses = 0;
var guessesSoFar = '';
var computerGuess = randomChoice();
results(wins, losses, totalCount, guessesSoFar);

document.onkeypress = function(event) {
    var userGuess = (event.key).toLowerCase();
    if (totalCount > 0) {
        if (userGuess === computerGuess) {
            wins++;
            computerGuess = randomChoice();
        } else {
            if (totalCount < 12) {
                guessesSoFar =  guessesSoFar + ",";
            }
            losses++;
            totalCount--;
            guessesSoFar = guessesSoFar + " " + userGuess;
        }
    } else {
        alert("Game Over!  Computer was thinking: " + computerGuess);
    }
    
    results(wins, losses, totalCount, guessesSoFar);
};

function results(wins, losses, totalCount, userGuess) {
    var html = 
        "<p> Wins: " + wins + "</p>" +
        "<p> Loses: " + losses + "</p>" +
        "<p> Guesses Left: " + totalCount + "</p>" +
        "<p> Your Guesses so far: " + userGuess + "</p>";

    document.querySelector("#game").innerHTML = html;  
};

function randomChoice() {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var choice = letters[Math.floor(Math.random() * letters.length)];
    return choice;
}



 