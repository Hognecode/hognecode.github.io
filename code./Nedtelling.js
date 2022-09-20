setInterval(Klokke, 1000)

let antallSekunder = prompt("Hvor mange sekunder?");

let musikkNedtelling = new Audio("Frank Ocean - Nature Feels.mp3");
let musikkFerdig = new Audio("Kanye West- Christian Dior Denim Flow Ft. Kid Cudi, Pusha T, John Legend, Lloyd Banks & Ryan.mp3")

musikkNedtelling.play();

function Klokke()  {
   if (antallSekunder <= 3) {
      document.getElementById("utskrift").style.color = "red";
   }
   console.log(antallSekunder);
   document.getElementById("utskrift").innerText = antallSekunder
   
   if (antallSekunder <= 0) {
      document.getElementById("utskrift").innerText= "Gratulerer!";
      musikkNedtelling.pause();
      musikkFerdig.play();
    }
 
   antallSekunder = antallSekunder - 1; //Trekk fra en på antallSekunder per sekund
   }
   
