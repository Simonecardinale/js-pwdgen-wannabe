// messaggi di benvenuto
alert("Ciao e benvenuto nella tua sezione di creazione password super insicura!")

alert("Rispondi alle prossime semplici domande e avrai la password perfetta per i tuoi conti bancari!")

// domande

var nome = prompt("Come ti chiami?");
var iniziale_nome = nome.charAt(0);
var iniziale_nome_grande = iniziale_nome.toUpperCase();
var restante_nome = nome.substring(1);

console.log(nome);

var cognome = prompt("Perfetto, ora anche il tuo cognome grazie!");
var iniziale_cognome = cognome.charAt(0);
var iniziale_cognome_grande = iniziale_cognome.toUpperCase();
var restante_cognome = cognome.substring(1);

console.log(cognome);

var colore = prompt("Ok, e quale sarebbe il tuo colore preferito?");

console.log(colore);

alert("Ottimo, ora generermo la nostr.. ehm la tua password!")

// password

var totale = iniziale_nome_grande + restante_nome + iniziale_cognome_grande + restante_cognome + colore + "19";

document.getElementById('password').innerHTML= "Ecco qui la tua password: " + totale;



