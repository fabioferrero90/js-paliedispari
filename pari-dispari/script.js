// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// 3. Sommiamo i due numeri
// 4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// 5. Dichiariamo chi ha vinto.

let bet;
let betNumber;

// Controllo che l'utente inserisca una scommessa PARI o DISPARI correttamente
while (!bet) {
  let promptedBet = prompt("Scegli PARI o DISPARI")
  let message = "Devi inserire PARI o DISPARI"
  if (promptedBet && isCorrectString(promptedBet)) {
    bet = promptedBet;
    message = `Hai scommesso ${bet}`;
  }
  alert(message)
}

// Controllo che l'utente inserisca un numero da 1 a 5 correttamente
while (!betNumber) {
  let promptedNumber = prompt("Scegli un numero da 1 a 5")
  let message = "Devi inserire un numero da 1 a 5"
  if (promptedNumber && isCorrectNumber(promptedNumber)) {
    betNumber = promptedNumber
    message = `Hai scelto ${betNumber}`
  }
  alert(message)
}

// Itero il controllo sul pari o dispari e determino il vincitore
const botNumber = sortBotNumber()
const sum = sumNumbers(betNumber, botNumber)

let result = "Il risultato è dispari"
let win = "Hai perso!"

if (isPair(sum) && bet === "PARI") {
  result = 'Il risultato è PARI';
  win = 'Hai vinto!'
} else if (!isPair(sum) && bet === "DISPARI") {
  win = 'Hai vinto!'
}

alert(`LA TUA SCOMMESSA:\n${betNumber} - ${bet}\n\nIl bot ha giocato ${botNumber}\n\n${result}, ${win}`)


// ELENCO FUNZIONI
function isCorrectString(string) {
  return string.toUpperCase() === "PARI" || string.toUpperCase() === "DISPARI"
}

function isCorrectNumber(number) {
  return (parseInt(number) > 0) && (parseInt(number) <= 5)
}


function sortBotNumber() {
  return Math.ceil(Math.random() * 5);
}

function sumNumbers(num1, num2) {
  return parseInt(num1) + parseInt(num2)
}

function isPair(number) {
  return !(number % 2)
}