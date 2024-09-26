function rollDice(){
    let goldCoins = 0;

    for(let i = 0; i < 10; i++){
        const roll = Math.floor(Math.random() * 6) + 1; //+1, so that result is 1~6, not 0~5
        alert("The roll is " + roll);

        if(roll === 1){
            alert("Game over, no more rolls!");
            break;
        }else if(roll < 5){
            continue;
        }else{
            alert(`Congratulations, you win ${roll} gold coins!`)
        }

        goldCoins += roll;
    }

    alert(`You have won total of ${goldCoins} gold coins.`)
}