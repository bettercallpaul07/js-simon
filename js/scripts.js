

// ------------TO DO------------

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Genera 5 numeri casuali e mostrali a video
// Genera un timer di 30 secondi
// Inserisci un prompt che faccia inserire all'utente i numeri uno per volta
// Generare un punteggio se numero generato == numero inserito
// Stampare il punteggio



// -----------DOM ELEMENTS-------------

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');

const choiselevel = document.getElementById('level');
const lvl = choiselevel.value
console.log(lvl)



// -----------DECLARE-------------

let number = 0; //
let casualNumbers = []
let chooseNumbers = [];
let inputNumbers = [];
let max = 0;


// ------------FUNCTIONS------------

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// ------------RUNCODE------------

switch(lvl){
    case 'easy':
        max = 10; 
        break;
    case 'med':
        max = 100; 
        break;
    case 'hard':
        max = 1000; 
        break;
    case 'champion':
        max = 10000; 
        break;
}

console.log(max)




for (let i = 0; i < 5; i++) {

    number = getRandomNumber (1, max);

    console.log(lvl)


    console.log(number);

    casualNumbers.push(number);

    console.log(casualNumbers);


    first.innerHTML = casualNumbers[0];
    second.innerHTML = casualNumbers[1];
    third.innerHTML = casualNumbers[2];
    fourth.innerHTML = casualNumbers[3];
    fifth.innerHTML = casualNumbers[4];
    

  }



