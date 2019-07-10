function scroll() {
  // récupère la hauteur a laquelle se trouve le scroll
  var winScroll = document.documentElement.scrollTop;
  // console.log(winScroll);
  // soustrait la hauteur du scroll a la hauteur du moniteur du client
  //.clientHeight = la hauteur de la fenêtre du client.
  //.scrollHeight = la hauteur totale de la fenêtre.
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
  // calcule la valeur en pourcentage de la width a assigner a la progress-bar
  // console.log(height);
  // console.log(document.documentElement.scrollHeight);
  // console.log(document.documentElement.clientHeight);
  var scrolled = (winScroll / height) * 100;
  document.getElementById('laBar').style.width = scrolled + "%";
}
//écouteur d'event scroll
window.addEventListener('scroll', scroll);