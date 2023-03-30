// **Consegna**
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

/*
Steps
1. prendo gli elementi necessari
2. creo la funzione per generare i blocchi
3. ciclo la generazione di blocchi
4. lego la generazione al click del bottone "gioca"
5. aggiungo il reset

BONUS
6.creo la select in html e la aggiungo agli elementi
7.creo una funzione per la scelta della difficoltà
8. la aggiungo alla select della difficoltà
*/

//1.
//---------------elements--------

const startGame       = document.querySelector('.start-game');
const campoGriglia    = document.querySelector('.grid-camp');
//6.
const inputDifficoltà = document.querySelector('.difficulty');
let numeroCelle       = 100


//-----------------------------------
//8.
inputDifficoltà.addEventListener('click', function() {
  numeroCelle = sceltaDifficolta()  
  })
  // TODO:sistemare grandezze griglia e quadrati in base alla difficoltà
//4.
startGame.addEventListener('click', function(){
 console.log(numeroCelle);
  reset(); 

  griglia = document.createElement('div')
  griglia.classList.add('grid')
  campoGriglia.appendChild(griglia);

  //3.  
  for (let i = 1; i < numeroCelle + 1; i++) {
    const squareReady = generatoreQuadri(i);
    squareReady.classList.add('d-' + numeroCelle)
    griglia.append(squareReady);    
  }

  
})



//2.
//--------------functions-----------

/**
 * Genera un blocco già cliccabile con assegnato come proprietà custom il numero passato
 * @param {number} numInterno 
 * @returns quadrato griglia cliccabile e numerato internamente
 */
function generatoreQuadri(numInterno) {
   const newSquare = document.createElement('div');
   newSquare.classList.add('square');
   newSquare.assignedNum = numInterno;
   newSquare.addEventListener('click', function () {
    this.classList.toggle('clicked');
    console.log(this.assignedNum);
   })
   return newSquare;
}

//7.
/**
 * la funzione ritorna il numero di celle in base alla difficoltà
 * @returns 
 */
function sceltaDifficolta (){
  let celleInBaseDifficolta = 0;
  let difficoltà      = inputDifficoltà.value;
  if (difficoltà === 'easy') {
    celleInBaseDifficolta = 100;
    }else if (difficoltà === 'medium'){
      celleInBaseDifficolta = 81;
    }else if (difficoltà === 'hard'){
      celleInBaseDifficolta = 49;
    }
  return celleInBaseDifficolta
}

//5. 
function reset() {
  campoGriglia.innerHTML = '';
}

