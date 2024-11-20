let correct;

// Controllo in un ciclo che la parola inserita sia verificabile
while (!correct){

  // Chiedo la parola da esaminare all'utente
  let promptedWord = prompt("Scrivi una parola per testare se è palindroma:")

  // Verifico che l'utente abbia inserito una parola senza spazi
  if (promptedWord && !promptedWord.includes(" ")){
    correct = true
    isPalindromic(promptedWord) ? (message = "La parola è palindroma") : (message = "La parola non è palindroma");
  } else if (!promptedWord) {
    message = "Devi inserire una parola!"  
  } else {
    message = "Devi inserire una sola parola!"
  }

  // Comunico l'esito
  alert(message)
}


// Creo una funzione che controlla se la parola è uguale anche al contrario (Palindroma)
function isPalindromic(string){
  const reversestring = string.split("").reverse().join("")
  return reversestring.toLowerCase() === string.toLowerCase()
}