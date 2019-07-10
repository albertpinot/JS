function afficheFichier() {
    // On récupère les fichiers sélectionnés 
    var f = document.getElementById('parcourir').files;
    // On vide la div où les anciens fichiers été sélectionné
    document.getElementById('name_file').innerHTML = "";
    // Remet le champs par défaut si aucun fichier n'est sélectionné 
    if (f.length === 0) {
        document.getElementById("none_file").classList.remove("hide");
    }
    // boucle for qui parcours tout les objets files
    for (var i = 0; i < f.length; i++) {
        var message;
        // Test si le fichier et le premier pour ne pas lui appliquer la virgule avant
        if(f[i] == f[0]) { 
            message = " " + f[0].name;
        } else  message = ", " + f[i].name;
        document.getElementById('name_file').innerHTML += message;
        document.getElementById("none_file").classList.add("hide");
    }
}
document.getElementById('parcourir').addEventListener('change', afficheFichier);
