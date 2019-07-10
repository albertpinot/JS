let upload = document.getElementsByClassName("upload");
let info = document.getElementsByClassName("info");
let drag = document.getElementsByClassName("drag");

for (let i = 0; i < upload.length; i+=1) {

  upload[i].addEventListener("change", function() {

    let filelist = upload[i].files;
    console.log(filelist); // C"est un objet qui est retourné. Dans console.log, on constate que pour afficher le nom du fichier, c"est : filelist[0].name
    info[i].innerText = ""; // Pour effacer le message "Aucun fichier selectionné". Bizarrement il n"est pas effacé tout seul
    
    if (filelist.length > 1) {
      for (let j = 0; j < filelist.length; j+=1) {
        let list = filelist[j].name;
        if (j == filelist.length-1) {
            info[i].innerHTML += list+".";
        }
        else {
            info[i].innerHTML += list+", ";
        }
        info[i].classList.remove("none-file");  
      }
    } else if (filelist.length == 0) {
        info[i].classList.add("none-file");
        info[i].innerHTML = "Aucun fichier séléctioné";
    } else {
        info[i].innerText = filelist[0].name;
        info[i].classList.remove("none-file"); 
        // info[i].innerText = this.value.replace(/^.*[\\\/]/, ""); // S"il n"y a qu"un seul fichier, on peut utiliser this.value
    }
  });
}

/* ------- Drag & Drop ------- */
for (let i = 0; i < drag.length; i+=1) {
  drag[i].addEventListener("dragover", function(e) {
    e.preventDefault(); // Cette méthode est toujours nécessaire pour éviter une éventuelle redirection inattendue

  },false);
}

for (let i = 0; i < drag.length; i+=1) {

  drag[i].addEventListener("drop", function(e) {

    e.preventDefault();
    info[i].innerText = "";
    let files = e.dataTransfer.files,
    filesLen = files.length,
    filenames = "";
    
    if (filesLen > 1) {
      for (let j = 0 ; j < filesLen ; j+=1) {
        filenames = files[j].name;
          if (j == filesLen - 1) {
            info[i].innerHTML += filenames+".";
          }
          else {
            info[i].innerHTML += filenames+", ";
          }
        info[i].classList.remove("none-file");  
      }       
    } else {
        filenames = files[0].name;
        info[i].innerText = filenames;
        info[i].classList.remove("none-file");  
    }
    upload[i].files = files;
    //console.log(upload[i].files)
  }, false);
}