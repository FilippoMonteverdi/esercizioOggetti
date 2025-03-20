var oggetti = [];
var n = 0;
url = "https://filippomonteeverdi.github.io/esercizioOggetti/tabella.html";

function add(){
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var scuola = document.getElementById("scuola").value;
    oggetti[n] = {nome:nome, cognome:cognome, scuola:scuola};
    n++;
}

function change(){
    localStorage.setItem("dati", JSON.stringify(oggetti));
    location.href = url;
}
