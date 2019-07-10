var input = document.querySelectorAll('input');
var select = document.querySelectorAll('select');

for (i = 0; i < input.length; i++) {
    var element = input[i];
    if (element.type == 'radio') {
        input[i].addEventListener('change', changeBar);
    }
    if (element.type == 'text' || element.type == 'email' || element.type == 'password') {
        input[i].addEventListener('change', changeBar);
    }
}
for (i = 0; i < select.length; i++) {
    select[i].addEventListener('change', changeBar);
}

function changeBar () {
    var width = 0, obj = 0;
    for (i = 0; i < input.length; i++) {
        var element = input[i];
        if (element.type == 'radio') {
            // Test si le nom de la checkbox est modifier
            if (input[i].name === "sex" || input[i].name === "salaried") {
                // Test si le bouton est checked
                if (input[i].checked) {
                    // Ajoute le style
                    obj ++;
                    width = (obj / 20 ) * 100;
                    document.getElementById('laBar').style.width = width + "%";
                    document.getElementById('percent').innerHTML = width + '%'; 
                }
            }
        }
        if (element.type == 'text' || element.type == 'email' || element.type == 'password') {
            if ((input[i].value.length >= 1)) {
                obj ++;
                width = (obj / 20 ) * 100;
                document.getElementById('laBar').style.width = width + "%";
                document.getElementById('percent').innerHTML = width +'%';  
            }
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
                document.getElementById('laBar').style.width = width + "%";
                document.getElementById('percent').innerHTML = width + '%';     
            }
        }
    }
}
