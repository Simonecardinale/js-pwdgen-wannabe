// messaggi di benvenuto
alert("Ciao e benvenuto nella tua sezione di creazione password super insicura!")

alert("Rispondi alle prossime semplici domande e avrai la password perfetta per i tuoi conti bancari!")

// domande

var nome = prompt("Come ti chiami?");

console.log(nome);

var cognome = prompt("Perfetto, ora anche il tuo cognome grazie!");

console.log(cognome);

var colore = prompt("Ok, e quale sarebbe il tuo colore preferito?");

console.log(colore);

alert("Ottimo, ora generermo la nostr.. ehm la tua password!")

// password

var totale = nome + cognome + colore + "19";

document.getElementById('password').innerHTML= "Ecco qui la tua password: " + totale;



