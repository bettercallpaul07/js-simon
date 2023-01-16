

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
let score = 0;



// ------------FUNCTIONS------------

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function playgame() {

    let i = 0;
    if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 3;
    let id = setInterval(frame, 300);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }


//Scelta del livello del gioco

  const choiselevel = document.getElementById('level');
  const lvl = choiselevel.value
    
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


for (let i = 0; i < 5; i++) {

    number = getRandomNumber (1, max);
    casualNumbers.push(number);

    first.innerHTML = casualNumbers[0];
    second.innerHTML = casualNumbers[1];
    third.innerHTML = casualNumbers[2];
    fourth.innerHTML = casualNumbers[3];
    fifth.innerHTML = casualNumbers[4];
  }


  setTimeout(function () {

    first.innerHTML = '?';
    second.innerHTML = '?';
    third.innerHTML = '?';
    fourth.innerHTML = '?';
    fifth.innerHTML = '?';

}, 30000);

setTimeout(function () {

  let firstIn = parseInt(prompt('Bene, ora inserisci il primo numero: '));
  let secondIn = parseInt(prompt('Ora inserisci il secondo numero: '));
  let thirdIn = parseInt(prompt('Ora inserisci il terzo numero: '));
  let fourthIn = parseInt(prompt('Ora inserisci il quarto numero: '));
  let fifthIn = parseInt(prompt('Ora inserisci il quinto numero: '));
  
  control(firstIn, casualNumbers[0], first) 
  control(secondIn, casualNumbers[1], second) 
  control(thirdIn, casualNumbers[2], third)
  control(fourthIn, casualNumbers[3], fourth)
  control(fifthIn, casualNumbers[4], fifth)

  
  alert("Il tuo punteggio è di: " + score)
  

}, 31000);


}



function control(inputN, CasualN, box) {

  if(inputN == CasualN) {

      score = score + 1;
      box.classList.add('right');
      console.log('punteggio', score)

      first.innerHTML = casualNumbers[0];
      second.innerHTML = casualNumbers[1];
      third.innerHTML = casualNumbers[2];
      fourth.innerHTML = casualNumbers[3];
      fifth.innerHTML = casualNumbers[4];


  } else {
      box.classList.add('false');
      
  }


}


    
  
// ------------RUNCODE------------

