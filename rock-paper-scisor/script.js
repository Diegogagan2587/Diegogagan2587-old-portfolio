const rock = document.getElementById('rock');
const paper = document.getElementById('paper'); 
const scissor = document.getElementById('scissors');
const result = document.getElementById('results');
rock.addEventListener('click',getWinner);
paper.addEventListener('click',getWinner);
scissor.addEventListener('click',getWinner);
console.log(rock,paper,scissor);




//functions bellow
/*function getUserPlay(e) { //This functions gets the user choice about rock, paper or scissor using promt

    let userPlay = prompt("¿Cual es tu eleccion?","piedra, papel o tijera").toLocaleLowerCase();
    //let userPlay =  ;
    console.log(userPlay);
    let letrMayus = userPlay.charAt(0).toUpperCase();
    let letrMinu = userPlay.slice(1);
    let finalUserPlay = letrMayus + letrMinu;

    return finalUserPlay;
}*/ //removed since now we will get userplay using buttons;

function getComputerPlay() { //This functions gets a ramdom numeric value between 100 and 0 and 
                             //asiggn the result to rock, paper or scissor, then return one of this strings                   

    let randNumber = ( Math.random() * 1000 ); //333.3333 - 1000 -

    if(randNumber <= 1000 && randNumber > 666.6667) {
        return "Rock";
    } else if ( randNumber <= 666.6667 && randNumber > 333.3334 ) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
const arrOfResults = [];
function getWinner(e) { //This functions make an evaluation to the user input and the PC input
    console.log('runing getWinner()')
    let userPlayer = e['target']['defaultValue'];
    console.log(userPlayer);
    let pcPlayer = getComputerPlay();
    let result;
    let winner = "Tu ganas, " + userPlayer + " vence a " + pcPlayer;
    let loser = "Tu pierdes, " + pcPlayer + " vence a " + userPlayer;

 if ( userPlayer == pcPlayer ) {
    result = "Empate";
} else if ( 

    (userPlayer == "Rock") && ( pcPlayer == "Scissors" ) 
    || (userPlayer == "Scissors") && ( pcPlayer == "Paper" ) 
    || (userPlayer == "Paper") && ( pcPlayer == "Rock" ) 

    )   {
    result = winner;
} else {
    result = loser;
};
console.log('getWinner will return =', result);
arrOfResults.push(result);
showGame(arrOfResults)
return result;
}
function game(arr) {
    console.log('runing fuction game()');
    let result;

    let totalScore = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i].indexOf('Tu ganas')){
            totalScore = totalScore+1;
        }
    }
    //determina los puntos del usuario, si gana y envia mensaje al ganador en consola
    if (totalScore >= 3) {
        result = "Felicidades, tu ganas la partida con " + totalScore + " puntos!" ;
    } else {
        result = "has perdido con tan solo " + totalScore + " puntos, ¡intentalo de nuevo!" ;
    }

    return result;
}
function showGame(arr){
    if(arr.length < 5){return};//stop id lees than 5 games;
    //append elements into result div;
    for(let i =0; i<arr.length; i++){
        let divToAdd = document.createElement('div');
        let textDiv = document.createTextNode(`${arrOfResults[i]}`);
        divToAdd.appendChild(textDiv);
        result.appendChild(divToAdd);
    }
    //finaley we append the final result;
    let divFinalResult = document.createElement('div');
    let finalResultText = document.createTextNode(`${game(arrOfResults)}`);
    divFinalResult.appendChild(finalResultText);
    result.appendChild(divFinalResult);


}


//game();
