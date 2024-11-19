// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// 3. Sommiamo i due numeri
// 4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// 5. Dichiariamo chi ha vinto.

let bet;
let betNumber;

while (!bet) {
  let promptedBet = prompt("Scegli PARI o DISPARI")
  if (promptedBet && isCorrectString(promptedBet)) {
    bet = promptedBet;
    message = `Hai scommesso ${bet}`;
  } else {
    message = "Devi inserire PARI o DISPARI"
  }
  alert(message)
}

while (!betNumber) {
  let promptedNumber = prompt("Scegli un numero da 1 a 5")
  if (promptedNumber && isCorrectNumber(promptedNumber)) {
    betNumber = promptedNumber
    message = `Hai scelto ${betNumber}`
  } else {
    message = "Devi inserire un numero da 1 a 5"
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
  if (string.toUpperCase() === "PARI" || string.toUpperCase() === "DISPARI"){
    return true
  }
  return false
}

function isCorrectNumber(number) {
  if ((parseInt(number) > 0) && (parseInt(number) <= 5)) {
    return true
  }
  return false
}


function sortBotNumber() {
  return Math.ceil(Math.random() * 5);
}

function sumNumbers(num1, num2) {
  return parseInt(num1) + parseInt(num2)
}

function isPair(number) {
  if (!(number % 2)) {
    return true
  } 
  return false
}