clicked = false;
punteggio = 0;

function inizia() {     // fa partire il gioco

   if (!clicked) {
      clicked = true;

      a = setInterval(Colora, 800);
      document.getElementById("game").style.backgroundColor = "black";
      document.getElementById("game").style.borderColor = "black";
      document.getElementById("game").style.borderStyle = "solid";
      document.getElementById("game").style.borderWidth = "10px";
      document.getElementById("game").style.borderRadius = "20%";    // curvatura del quadrato

      document.getElementById("guess").innerHTML="Punteggio: "+punteggio;  // aggiorna il punteggio
   }

}  

sequenza = 0;       // la sequenza che man mano viene generata
length_sequenza = 5;    // la lunghezza iniziale
guess = false;      // quando l'utente deve indovinare
sequence = ""       // contiene la sequenza da indovinare
user_guess = "";    // la sequenza dell'utente

i = 0;

function Colora() {     // illumina il quadrato e aggiorna la variabile 'sequence'
   if (sequenza == length_sequenza) {
      clearInterval(a);    // interrompe il setInterval
      sequenza = 0;
      document.getElementById("game").style.borderColor = "black";
      guess = true;

      i = 0;

   } else {

      if (i % 2 == 0) {

         sequenza ++;
         colore = Math.floor(Math.random() * 4) + 1;

         if (colore == 1) {
            document.getElementById("game").style.borderColor = "red";
            sequence += "r";   
         } else if (colore == 2) {
            document.getElementById("game").style.borderColor = "yellow";
            sequence += "y";   
         } else if (colore == 3) {
            document.getElementById("game").style.borderColor = "green";  
            sequence += "g";    
         } else if (colore == 4) {
            document.getElementById("game").style.borderColor = "blue";
            sequence += "b";  
         }
         
      } else {
         document.getElementById("game").style.borderColor = "black";
      }

      i++;
   }
}

function check() {      // controlla se l'utente ha finito di inserie la sequenza
   if (user_guess.length == sequence.length) {
      if (user_guess == sequence) {
         document.getElementById("guess").innerHTML="Hai vinto!";
         clicked = false;
         length_sequenza++;
         punteggio++;
      } else {
         document.getElementById("guess").innerHTML="Hai perso :(";
         clicked = false;
         length_sequenza = 5;
         punteggio = 0;
      }

      guess = false;
      sequence = ""
      user_guess = "";
   }
}
   

function color_red(){
   if (guess) {
      user_guess += "r";
      document.getElementById("game").style.borderColor = "red";
      check();
   }
}

function color_yellow(){
   if (guess) {
      user_guess += "y";
      document.getElementById("game").style.borderColor = "yellow";
      check();
   }
}

function color_green(){
   if (guess) {
      user_guess += "g";
      document.getElementById("game").style.borderColor = "green";
      check();
   }
}

function color_blu(){
   if (guess) {
      user_guess += "b";
      document.getElementById("game").style.borderColor = "blue";
      check();
   }
}