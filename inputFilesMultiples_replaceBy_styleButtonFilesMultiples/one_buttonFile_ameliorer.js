function afficheFichier() {
    // On récupère les fichiers sélectionnés 
    var f = document.getElementById('parcourir').files;
    // On vide la div où les anciens fichiers été sélectionné
    document.getElementById('name_file').innerHTML = "";
    // Remet le champs par défaut si aucun fichier n'est sélectionné 
    if (f.length === 0) {
        document.getElementById("name_file").classList.add("none-file");
        document.getElementById('name_file').innerHTML ="Aucun fichier sélectionné";
    }
    // boucle for qui parcours tout les objets files
    for (var i = 0; i < f.length; i++) {
        var message;
        // Test si le fichier et le denier pour lui concaténer le point
        if(i == f.length-1) { 
            message = f[i].name + ".";
        } else  message = f[i].name + ", ";
        document.getElementById('name_file').innerHTML += message;
        document.getElementById("name_file").classList.remove("none-file");
    }
}
document.getElementById('parcourir').addEventListener('change', afficheFichier);
