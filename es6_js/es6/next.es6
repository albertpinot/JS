

// // ======== Pour un seul input de type file : ========

// document.getElementById("letter1").addEventListener("change", function() {

//     // // ----- Méthode 1 ----- :
//     // let filename = this.value; // Recup nom de fichier avec son chemin
//     let filename = this.value.replace(/^.*[\\\/]/, ''); // Recup nom de fichier sans son chemin
//     document.getElementById("info1").innerText = filename;

//     // // ----- Méthode 2 ----- :
//     // let file = document.getElementById("letter1").files;
//     // console.log(file); // Dans console.log, on constate que c'est un objet qui est retourné. Pour accéder au nom du fichier, c'est : file[0].name
//     // document.getElementById("info1").innerText = file[0].name;

// });



// ======== Pour plusieurs inputs de type file : ========

let myinput = document.getElementsByClassName("myinput");
let inform = document.getElementsByClassName("inform");

for (let i = 0; i < myinput.length; i += 1) {

  myinput[i].addEventListener("change", function() {

    let filelist = myinput[i].files;

    inform[i].innerText = filelist[0].name;
  
  });
}

/* ====================== Ouvrir/Fermer mini div ====================== */

let acc = document.getElementsByClassName("proceed-box");

for (let i =  0; i < acc.length; i += 1) {

  acc[i].addEventListener("click", function() {

    // On vise sa propre div :
    this.classList.toggle("active");


    // On vise la div suivante :
    let panel = this.nextElementSibling;

    if (panel.classList.contains("hidden")) {
      panel.classList.remove("hidden");
    }
    else {
      panel.classList.add("hidden");
    }
  });
}






/* ====================== Checkbox Passer ====================== */

let checkbox = document.querySelectorAll("input[type=checkbox]");

for (let k = 0; k < checkbox.length; k += 1) {
  checkbox[k].addEventListener("change", function() {

    let ancestor = this.parentNode.parentNode.parentNode.parentNode;

    if (this.checked) {
      document.getElementsByClassName("next")[k].innerHTML = "Passé";
        // ancestor.classList.toggle("filled");
    }
    else {
      document.getElementsByClassName("next")[k].innerHTML = "Passer";
        // ancestor.classList.toggle("filled");
    }

    if (ancestor.classList.contains("filled")) {
      ancestor.classList.remove("filled");
    }
    else {
      ancestor.classList.add("filled");
    }
  });
}

