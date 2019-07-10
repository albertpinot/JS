
function checkProgress(event) {

    let rempli = 0,
        pourcent = 0,
        champs = event.currentTarget.form.getElementsByClassName("myinput");
        
    // nbStage = parseInt(document.getElementById("number_stage").textContent, 10);
    let nbStage = 0;

    for (let j=0; j<champs.length; j+=1) {

        let champ = champs[j];

        if (champ.type == "file" && champ.value != "") {
            rempli += 1;
            nbStage += 1;
        }

    }

    // console.log(rempli);

    pourcent = Math.round( rempli*100 / leschamps.length );

    // console.log(pourcent);

    document.getElementById("percent").innerText = pourcent+"%"; // Affiche pourcentage de progression
    document.getElementById("laBar").style.width = pourcent+"%"; // Affiche barre de progression
    document.getElementById("number_stage").innerText = nbStage; // Affiche étape

    let ancestor = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

    // ancestor.style.backgroundColor = "#EBEDEE";
    // ancestor.style.opacity = "0.7";

    if (ancestor.classList.contains("filled")) {
        ancestor.classList.remove("filled");
        ancestor.querySelector(".sub-percent").innerText = "0%";
    }
    else {
        ancestor.classList.add("filled");
        ancestor.querySelector(".sub-percent").innerText = "100%";
    }


}


let leschamps = document.getElementsByClassName("myinput");

for (let i=0; i<leschamps.length; i+=1) {
    leschamps[i].addEventListener('input', checkProgress);
}

