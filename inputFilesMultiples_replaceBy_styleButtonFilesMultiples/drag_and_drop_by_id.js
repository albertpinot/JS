var drag = document.getElementById('drag');

drag.addEventListener('dragover', function(e) {
    e.preventDefault(); // Annule l'interdiction de "drop"
    
},false);
drag.addEventListener('drop', function(e) {
    e.preventDefault(); // Cette méthode est toujours nécessaire pour éviter une éventuelle redirection inattendue

    var files = e.dataTransfer.files,
        filesLen = files.length,
        filenames = "";
        if (filesLen > 1) {
            for (var i = 0 ; i < filesLen ; i++) {
                filenames += '\n' + files[i].name;
                drag.innerHTML = filenames;
                //info[i].classList.remove("none-file");  
            }
                
        }
    //alert(files.length + ' fichier(s) :\n' + filenames);
}, false);

