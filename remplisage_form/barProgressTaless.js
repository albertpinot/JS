function changeBar(event) {
 
    var width = 0;
    let id_champs = event.currentTarget.form.getElementsByClassName('champs');
    
    for (var i = 0; i < id_champs.length; i++) {
        var element = id_champs[i];
        if ((element.type == "radio" && element.checked) || (element.type == "text" && element.value != "") || (element.type == "email" && element.value != "") || (element.type == "password" && element.value != "") || (element.type == "file" && element.value != "") || (element.name == "naf" && element.selectedIndex != 0) || (element.name == "statut" && element.selectedIndex != 0)) {
                width += 5;
        }
    }
    progressBar.style.width = width + "%";
    percent.innerHTML = width +"%";
}

var progressBar = document.getElementById('laBar');
var percent = document.getElementById('percent');
var champs = document.getElementsByClassName('champs');
for (var i = 0; i < champs.length; i++) {
    champs[i].addEventListener('input', changeBar);
}


