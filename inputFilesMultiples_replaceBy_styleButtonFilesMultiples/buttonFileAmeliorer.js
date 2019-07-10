function afficheFichier() {
    // On récupère les fichiers sélectionnés 
    var f = document.getElementById('parcourir_1').files;
    var f2 = document.getElementById('parcourir_2').files;
    var f3 = document.getElementById('parcourir_3').files;
    // On vide la div où les anciens fichiers été sélectionné
    document.getElementById('name_file_1').innerHTML = "";
    document.getElementById('name_file_2').innerHTML = "";
    document.getElementById('name_file_3').innerHTML = "";
    // Remet le champs par défaut si aucun fichier n'est sélectionné 
    if (f.length === 0) {
        document.getElementById('name_file_1').classList.add("none-file");
        document.getElementById('name_file_1').innerHTML = "Aucun fichier séléctioné";
    } 
    if (f2.length === 0) {
        document.getElementById('name_file_2').classList.add("none-file");
        document.getElementById('name_file_2').innerHTML = "Aucun fichier séléctioné";
    }
    if (f3.length === 0) {
        
        document.getElementById('name_file_3').classList.add("none-file");
        document.getElementById('name_file_3').innerHTML = "Aucun fichier séléctioné";
    }
    // boucle for qui parcours tout les objets files
    for (var i = 0; i < f.length; i++) {
        var message;
        // Test si le fichier et le premier pour ne pas lui appliquer la virgule avant
        if(f[i] == f[0]) { 
            message = " " + f[0].name;
        } else  message = ", " + f[i].name;
        document.getElementById('name_file_1').innerHTML += message;
        document.getElementById('name_file_1').classList.remove("none-file");

    }
    for (var i = 0; i < f2.length; i++) {
        var message;
        // Test si le fichier et le premier pour ne pas lui appliquer la virgule avant
        if(f2[i] == f2[0]) { 
            message = " " + f2[0].name;
        } else  message = ", " + f2[i].name;
        document.getElementById('name_file_2').innerHTML += message;
        document.getElementById('name_file_2').classList.remove("none-file");

    }
    for (var i = 0; i < f3.length; i++) {
        var message;
        // Test si le fichier et le premier pour ne pas lui appliquer la virgule avant
        if(f3[i] == f3[0]) { 
            message = " " + f3[0].name;
        } else  message = ", " + f3[i].name;
        document.getElementById('name_file_3').innerHTML += message;
        document.getElementById('name_file_3').classList.remove("none-file");        
    }
}
document.getElementById('parcourir_1').addEventListener('change', afficheFichier);
document.getElementById('parcourir_2').addEventListener('change', afficheFichier);
document.getElementById('parcourir_3').addEventListener('change', afficheFichier);



var upload = document.getElementsByClassName("upload");
var info = document.getElementsByClassName("info");

for (let i = 0; i < upload.length; i++) {
    upload[i].addEventListener("change", function() {
    var filelist = upload[i].files;
    console.log(filelist); // C'est un objet qui est retourné. Dans console.log, on constate que pour afficher le nom du fichier, c'est : filelist[0].name
    info[i].innerText = ""; // Pour effacer le message "Aucun fichier selectionné". Bizarrement il n'est pas effacé tout seul
    if (filelist.length > 1) {
        for (let j=0; j<filelist.length; j++) {
            let list = filelist[j].name;
            if (j == filelist.length-1) {
                info[i].innerHTML += list+".";
            }
            else {
                info[i].innerHTML += list+", ";
            }
            info[i].classList.remove("none-file");  
        }
    }
    else if (filelist.length == 0) {
        info[i].classList.add("none-file");
        info[i].innerHTML = "Aucun fichier séléctioné";
    }
    else {
        info[i].innerText = filelist[0].name;
        // info[i].innerText = this.value.replace(/^.*[\\\/]/, ''); // S'il n'y a qu'un seul fichier, on peut utiliser this.value
    }
    });
}