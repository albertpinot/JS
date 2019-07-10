//document.addEventListener('DOMContentLoaded',function() {

var text = document.querySelectorAll('input[type="text"]');
var password = document.querySelectorAll('input[type="password"]');
var email = document.querySelectorAll('input[type="email"]');
var select = document.querySelectorAll('select');
var radio = document.querySelectorAll('input[type="radio"]');





for (i = 0; i < text.length; i++) {
    text[i].addEventListener('input', changeBar);
}
for (i = 0; i < password.length; i++) {
    password[i].addEventListener('change', changeBar);
}
for (i = 0; i < email.length; i++) {
    email[i].addEventListener('change', changeBar);
}
for (i = 0; i < select.length; i++) {
    select[i].addEventListener('change', changeBar);
}
for (i = 0; i < radio.length; i++) {
    radio[i].addEventListener('change', changeBar);
}
//console.log(select);
console.log(text);
function changeBar () {
    var width = 0, percent = 0;
    //console.log('bonjour');
    for (i = 0; i < radio.length - 2; i++) {
        
            if (radio[i].checked) {
                document.getElementById('laBar').style.width = 5+"%";
                document.getElementById('percent').innerHTML =+ 5 +'%'; 
            }
    }
    for (i = 0; i < radio.length + 2; i++) {
        if (radio[i] == radio[2] || radio[i] == radio[3]) {
            if (radio[i].checked) {
                document.getElementById('laBar').style.width = 5+"%";
                document.getElementById('percent').innerHTML =+ 5 +'%'; 
            }
        }
    }
  // Remplissage formulaire bouton radio
    for (i = 0; i < radio.length; i++) {
        // Test si c'est le bouton un ou deux
        if (radio[i] === radio[0] || radio[i] === radio[1]) {
            // Test si le nom de la checkbox est modifier
            if (radio[i].name === "sex") {
                // Test si le bouton est checked
                if (radio[i].checked) {
                    // Ajoute le style
                    percent += 5;
                    width += 5;
                    document.getElementById('laBar').style.width = width + "%";
                    document.getElementById('percent').innerHTML = percent + '%'; 
                }
            }
            
        // Test si c'est le bouton trois ou quatre
        } else if (radio[i] === radio[2] || radio[i] === radio[3]) {
            // Test si le nom de la checkbox est modifier
            if (radio[i].name === "salaried") {
                // Test si le bouton est checked
                if (radio[i].checked) {
                    // Ajoute le style
                    percent += 5;
                    width += 5;
                    document.getElementById('laBar').style.width = width + "%";
                    document.getElementById('percent').innerHTML = percent +'%'; 
                }
            }
        }
    }
    // Remplissage formulaire input selected
    for (i = 0; i < select.length; i++) {
        // Test si c'est le premier select 
        if (select[i] === select[0]) {
            // Test si l'index de l'option sélectioner est différent de 0
            if (select[i].selectedIndex !== 0) {
                // Ajoute le style 
                percent += 5;
                width += 5;
                document.getElementById('laBar').style.width = width + "%";
                document.getElementById('percent').innerHTML = percent + '%';     
            }
        }
         // Test si c'est le premier select 
        if (select[i] === select[1]) {
            // Test si l'index de l'option sélectioner est différent de 0
            if (select[i].selectedIndex !== 0) {
                // Ajoute le style
                percent += 5;
                width += 5;
                document.getElementById('laBar').style.width = width + "%";
                document.getElementById('percent').innerHTML = percent +'%';  
            }
        }
    }

    for (i = 0; i < text.length; i++) {
        if (text[i] === text[0]) {
            if ((text[i].value.length >= 1)) {
                percent += 5;
                width += 5;
                document.getElementById('laBar').style.width = width + "%";
                document.getElementById('percent').innerHTML = percent +'%';  
            }
            else if ((text[i].value.length < 1)) {
                percent = percent - 5;
                width = width - 5;
                document.getElementById('laBar').style.width = width + "%";
                document.getElementById('percent').innerHTML = percent +'%';  
            }
        }
    }

    
}

//function changeText () {
    // Remplissage formulaire input text
    
//}

/* Réduction de code*/
/*
var afficherBarre = false;
	var lInputs = document.getElementById('monform').getElementsByTagName('input');
	for(var bouton = 0; bouton < lInputs.length; bouton++){
		var oElement = lInputs[bouton];
		// Si bouton radio...
		if(oElement.type == 'radio') {
			// on compte le nombre total
			if(oElement.name != nameBouton) {
				nameBouton = oElement.name;
				totalBoutons++;
			}
			// ce bouton est-il coché ?
			if(oElement.checked) {
				totalBoutonsCoches++;
			}
        }*/
//});

/*var input = document.querySelectorAll('input');
var select = document.querySelectorAll('select');
var progressBar = document.getElementById('laBar');
var percent = document.getElementById('percent');

for (i = 0; i < input.length; i++) {
    var element = input[i];
    if (element.type == 'radio') {
        input[i].addEventListener('change', changeBar);
    }
    if (element.type == 'text' || element.type == 'email' || element.type == 'password') {
        input[i].addEventListener('input', changeBar);
    }
}
for (i = 0; i < select.length; i++) {
    select[i].addEventListener('change', changeBar);
}

*/
//function changeBar () {
   /* var n = 5; // Nombre final du compteur
    var cpt; // Initialisation du compteur
    var duree = 1; // Durée en seconde pendant laquel le compteur ira de 0 à 15
    var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
    function countdown() {
      
        if( lastWidth < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
            setTimeout(countdown, delta);
        } else if( lastWidth == n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
            //setTimeout(countdown, delta);
            n +=5;
        }
        if (lastWidth == 50) {

        }
        else {
            percent.innerHTML = ++lastWidth + '%';
        }
    } 
    */
 /*  var width = 0, obj = 0; //lastWidth;
    var rempli;
    for (i = 0; i < input.length; i++) {
        //var cpt = lastWidth; // Initialisation du compteur
        var element = input[i];
        if (element.type == 'radio') {
            // Test si le nom de la checkbox est modifier
            if (input[i].name === "sex" || input[i].name === "salaried") {
                // Test si le bouton est checked
                if (input[i].checked) {
                    // Ajoute le style
                    obj ++;
                    width = (obj / 20 ) * 100;
                    progressBar.style.width = width + "%";
                    progressBar.style.transition = "0.5s";   
                    percent.innerHTML = width + '%';  
                    setTimeout(countdown, delta);   
                    lastWidth = parseInt(percent.innerHTML);
                }
            }
        }
        if ((element.type == 'text' && element.value !== "") || (element.type == 'email' && element.value !== "") || (element.type == 'password' && element.value !== "")) {
                obj ++;
                width = (obj / 20 ) * 100;
                progressBar.style.width = width + "%";
                progressBar.style.transition = "0.5s";
                percent.innerHTML = width +'%';
                //element.setAttribute(rempli, 1);
              setTimeout(countdown, delta);   
                lastWidth = parseInt(percent.innerHTML);
        }
    }
     // Remplissage formulaire input selected
     for (i = 0; i < select.length; i++) {
        if (select[i] === select[0] || select[i] === select[1]) {
            // Test si l'index de l'option sélectioner est différent de 0
            if (select[i].selectedIndex !== 0) {
                // Ajoute le style 
                obj ++;
                width = (obj / 20 ) * 100;
                progressBar.style.width = width + "%";
                progressBar.style.transition = "0.5s";
                percent.innerHTML = width + '%';  
                setTimeout(countdown, delta);   
                lastWidth = parseInt(percent.innerHTML);
            }
        }
    }
}
*/