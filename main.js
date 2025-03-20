var oggetti = [];
var n = 0;
url = "https://filippomonteverdi.github.io/esercizioOggetti/tabella.html";

function add(){
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var scuola = document.getElementById("scuola").value;
    oggetti[n] = {nome:nome, cognome:cognome, scuola:scuola};
    n++;
}

function change(){
    localStorage.setItem("oggetti", JSON.stringify(oggetti));
    location.href = url;
}
