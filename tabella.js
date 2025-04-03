function creapagina(){
     var dati = JSON.parse(localStorage.getItem("dati"));
     for (var i = 0; i < oggetti.length; i++){
         var tabella = document.getElementById("tabella");
         var riga = document.createElement("tr");
         var el1 = document.createElement("th");
         el1.innerHTML=dati[i].nome;
         var el2 = document.createElement("th");
         el2.innerHTML=dati[i].cognome;
         var el3 = document.createElement("th");
         el3.innerHTML=dati[i].scuola;
         riga.appendChild(el1);
         riga.appendChild(el2);
         riga.appendChild(el3);
         tabella.appendChild(riga);
     }
 }
