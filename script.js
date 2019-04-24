const jogador1 = 'x';
const jogador2 = 'o';

let jogadorDaVez = jogador1;
let gameOver = false;
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let v1 = 0;
let v2 = 0;

function marcarEspaco(){
   let espacos = document.getElementsByClassName('individual');     
   for(let i = 0; i < espacos.length; i ++){
      espacos[i].addEventListener("click", function(){
         if(gameOver){
            return;
         }
         else{
            if(this.getElementsByTagName("img").length == 0){            
               if(jogadorDaVez == jogador1){
                  this.innerHTML = "<img src='imagens/muriel.png'>";
                  this.setAttribute("jogada", jogador1);              
                  jogadorDaVez = jogador2;
               }
               else{
                  this.innerHTML = "<img src='imagens/juju.png'>";
                  this.setAttribute("jogada", jogador2);
                  jogadorDaVez = jogador1;
               }
            }
            verificarVencedor();
         }
      });
   }
}

function verificarVencedor(){
   
   let a1 = document.getElementById("A1").getAttribute('jogada');
   let a2 = document.getElementById("A2").getAttribute('jogada');
   let a3 = document.getElementById("A3").getAttribute('jogada');
   let b1 = document.getElementById("B1").getAttribute('jogada');
   let b2 = document.getElementById("B2").getAttribute('jogada');
   let b3 = document.getElementById("B3").getAttribute('jogada');
   let c1 = document.getElementById("C1").getAttribute('jogada');
   let c2 = document.getElementById("C2").getAttribute('jogada');
   let c3 = document.getElementById("C3").getAttribute('jogada');
   
   let vencedor = "";
   
   if((a1 == a2 && a2 == a3 && a3 != "")  || (a1 == b1 && b1 == c1 && c1 != "") || (a1 == b2 &&  b2 == c3 && c3 != "") ){
      vencedor = a1;
      gameOver = true;
   }
   else 
   if((b2 == b1 && b2 == b3 && b2 != 0) || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "") ){
      vencedor = b2;
      gameOver = true;
   }
   else 
   if((c3 == c1 && c3 == c2 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")){
      vencedor = c3;
      gameOver = true;
   }
   
   if(vencedor != ""){      
      if(vencedor == jogador1){
         v1 = v1 + 1;
         valor1.innerHTML = v1;
         vencedor = "";         
         setTimeout(() => {
            alert("Parabés Muriel! Você venceu!!!");
            zerarJogadas();
         }, 200);
         gameOver = false;         
      }
      else{
         v2 = v2 + 1;
         valor2.innerHTML = v2;
         vencedor = "";        
         setTimeout(() => {
            alert("Parabés vovó Juju! Você venceu!!!");
            zerarJogadas();
         }, 200);
         gameOver = false;      
      }
   }
   
   return;
}

function zerarJogadas(){
   let espacos = document.getElementsByClassName('individual');   
   for(let i = 0; i < espacos.length; i ++){
      if(espacos[i].getElementsByTagName("img").length != 0){           
         espacos[i].innerHTML = "";
         espacos[i].setAttribute("jogada", "");              
         jogadorDaVez = jogador1;
      }
   }
}
marcarEspaco();


