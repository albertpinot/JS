let haut = document.getElementById("haut");
let bas = document.getElementById("bas");
let number = document.getElementById("don");
let compteur = 0;

function cptNbr() {
  compteur = Number(number.value); // Convertis en entier la value 
    /* Si l'input n'est pas vide */
    if (this.getAttribute("id") === "haut") {
        //console.log(compteur);
        compteur += 1;
    } else if (this.getAttribute("id") === "bas") {
        // Si compteur est différent de 0 
      if (compteur > 0) {
          compteur += -1;
      } else {
      // Sinon compteur = 0
        compteur = 0;
      }
    }
  number.value = compteur;
  // Simule l'evenement input sur l'input number qui est utilisé dans notre fonction
  number.dispatchEvent(new Event('input'));
}

if (haut) {
  haut.addEventListener("click", cptNbr);
}
if (bas) {
  bas.addEventListener("click", cptNbr);
}
