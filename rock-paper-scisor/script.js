const rock = document.getElementById('rock');
const paper = document.getElementById('paper'); 
const scissor = document.getElementById('scissors');
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
return result;
}



function game() {
    console.log('runing fuction garme()');
    //Introducimos los datos de cada ronda
    let rond1 = getWinner();
    console.log("Ronda 1 " + rond1 );
    let rond2 = getWinner();
    console.log("Ronda 2 " + rond2 );
    let rond3 = getWinner();
    console.log("Ronda 3 " + rond3 );
    let rond4 = getWinner();
    console.log("Ronda 4 " + rond4 );
    let rond5 = getWinner();
    console.log("Ronda 5 " + rond5 );
    //Determina los puntos por partida del usuario
    let userScore1 = !(rond1.indexOf("Tu ganas")) ? 1 : 0 ;
    let userScore2 = !(rond2.indexOf("Tu ganas")) ? 1 : 0 ;
    let userScore3 = !(rond3.indexOf("Tu ganas")) ? 1 : 0 ;
    let userScore4 = !(rond4.indexOf("Tu ganas")) ? 1 : 0 ;
    let userScore5 = !(rond5.indexOf("Tu ganas")) ? 1 : 0 ;
    //suma los puntos 
    let totalScore = userScore1 + userScore2 + userScore3 + userScore4 + userScore5;
    //determina los puntos del usuario, si gana y envia mensaje al ganador en consola
    if (totalScore >= 3) {
        console.log ("Felicidades, tu ganas la partida con " + totalScore + " puntos!");
    } else {
        console.log( "has perdido con tan solo " + totalScore + " puntos, ¡intentalo de nuevo!" ) ;
    }
}

//game();
