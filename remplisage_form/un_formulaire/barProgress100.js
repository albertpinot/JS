let totalquestions;

var n = 0; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta; // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
 
function countdown() {
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
     document.getElementById("percent").innerHTML = ++cpt;
  } else if (cpt > n) {
    setTimeout(countdown, delta);
     document.getElementById("percent").innerHTML = --cpt;
  }
}
 
function checkValue(event) {
  let rempli = 0;
  let pourcent = 0;
  let allchamps = event.currentTarget.form.getElementsByClassName("champs");
  // console.log(allchamps.length);

  for (let i = 0; i < allchamps.length; i += 1) {

    let champ = allchamps[i];

    // Incrémente à chaque case remplie :
    if ( (champ.type === "radio" && champ.checked) || (champ.type === "text" && champ.value !== "") || (champ.type === "number" && champ.value !== "") || (champ.type === "email" && champ.value !== "") || (champ.type === "password" && champ.value !== "") || (champ.type === "file" && champ.value !== "") || (champ.tagName === "SELECT" && champ.selectedIndex !== 0) ) {

      rempli += 1;
      pourcent = Math.round( (rempli*100) / totalquestions );
      n = pourcent;
      delta = 200;
      if (n === pourcent) {
        setTimeout(countdown, delta);
      } else if (n < pourcent) {
        n += pourcent;
      } else if (n > pourcent) {
        n = pourcent;
      }
     
    }
  }
  
  //document.getElementById("percent").innerText = pourcent; // Affichage du pourcentage de progression
  document.getElementById("laBar").style.width = pourcent + "%"; // Affichage de la barre de progression

}

//setTimeout(countdown, delta);
let allchamps = document.getElementsByClassName("champs"); // S'il y a plusieurs formulaires : document.forms[0].getElementsByClassName("allchamps")



// Calculer nb de questions :
let reduire = 0;
for (let i = 0; i < allchamps.length; i += 1) {
  let c = allchamps[i];
  if (c.type === "radio") {
    reduire += 1;
  }
}
totalquestions = allchamps.length - (reduire/2);



for (let i = 0; i < allchamps.length; i += 1) {
  allchamps[i].addEventListener("input", checkValue);
}
