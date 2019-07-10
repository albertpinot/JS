let haut = document.getElementById("haut");
let bas = document.getElementById("bas");
let i = 0 ;

function cptNbr() {
  i += 1;
  document.querySelector("input[type=number]").value = i;
}

function cptNbrMoins() {
  if (document.getElementById("haut")){
    if (i !== 0) {
        i += -1;
        document.querySelector("input[type=number]").value = i;
    }
    else {
        i = 0;
        document.querySelector("input[type=number]").value = i;
    }
  }
}

if (haut) {
  haut.addEventListener("click", cptNbr);
}
if (bas) {
  bas.addEventListener("click", cptNbrMoins);
}
