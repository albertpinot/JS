const pourcentInitial = parseInt(document.getElementById("percent").textContent, 10); // On utilise parseInt, car la valeur récupérée est de type chaîne et non de type number
document.getElementById("laBar").style.width = pourcentInitial + "%";

console.log(pourcentInitial);

if (pourcentInitial == 0) {
  var pourcentArrivee = 50; /* à modifier selon la page */
}
else if (pourcentInitial == 50) {
  var pourcentArrivee = 75; /* à modifier selon la page */
}
else {
  var pourcentArrivee = 100; /* à modifier selon la page */
}

console.log(pourcentArrivee);

document.getElementById("laBar").style.width = pourcentInitial + "%"; // Barre par défaut

function checkValue(event) {

  let pourcent = pourcentInitial;
  let rempli = 0;
  let champs = event.currentTarget.form.getElementsByClassName("champs");
  console.log(champs.length);

  for (let i = 0; i < champs.length; i += 1) {

    let champ = champs[i];

    // Incrémente à chaque case remplie :
    if ( (champ.type == "radio" && champ.checked) || (champ.type == "text" && champ.value != "") || (champ.type == "number" && champ.value != "") || (champ.type == "email" && champ.value != "") || (champ.type == "password" && champ.value != "") || (champ.type == "file" && champ.value != "") || (champ.tagName == "SELECT" && champ.selectedIndex != 0) ) {

      rempli += 1;
    
      // De 0 à X % :
      if (pourcentInitial == 0) {
        pourcent = Math.round(rempli * pourcentArrivee / (champs.length - 2));
        // pourcent += 5;
      }

      // De X % à X % :
      else {
        pourcent = Math.round(pourcentInitial + (rempli * (pourcentArrivee - pourcentInitial) / champs.length));
      }  
    }
  }

document.getElementById("percent").innerText = pourcent; // Affichage du pourcentage de progression
document.getElementById("laBar").style.width = pourcent + "%"; // Affichage de la barre de progression

}



// Pour faciliter la sélection, on ajoute une class à chaque input. Il suffit alors de viser la class="champs" en faisant une boucle :

let champs = document.getElementsByClassName("champs"); // S'il y a plusieurs formulaires : document.forms[0].getElementsByClassName("champs")

for (let i = 0; i < champs.length; i += 1) {
  champs[i].addEventListener("input", checkValue);
}

