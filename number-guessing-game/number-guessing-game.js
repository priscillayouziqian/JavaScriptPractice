function runGame(){
    const target = Math.floor(Math.random() * 100) +1; //plus 1 to reach possibility of both 1, and 100.

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do{
        guessString = prompt("Enter a number between 1 and 100."); 
        numTries += 1
        guessNumber = +guessString;

        correct = checkGuess(guessNumber, target);
    }while(!correct)
    
    alert("You got it! The number was " + target + '.\n\nIt took you ' + numTries + " tries to guess correctly.");
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if(isNaN(guessNumber)){
        alert("You have not entered a number.\n\nPlease enter a number in the 1-100 range.");
    }else if((guessNumber < 1) || (guessNumber > 100)){
        alert("Please enter an integer in the 1-100 range.")
    }else if(guessNumber > target){
        alert("Your number is too large!");
    }else if(guessNumber < target){
        alert("Your number is too small!");
    }else{
        correct = true;
    }
    return correct;
}