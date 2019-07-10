var haut = document.getElementById('haut');
var bas = document.getElementById('bas');
var i = 0 ;
function cptNbr () {
    i += 1;
    document.querySelector('input[type="number"]').value = i;
}
function cptNbrMoins () {
    if (i !== 0) {
        i += -1;
        document.querySelector('input[type="number"]').value = i;
    }
    else {
        i = 0;
        document.querySelector('input[type="number"]').value = i;
    }
}

haut.addEventListener('click', cptNbr);
bas.addEventListener('click', cptNbrMoins);
