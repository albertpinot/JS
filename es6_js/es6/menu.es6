function functBurger() {

    document.querySelector(".header").classList.toggle("menu-active"); /* Gagne la class="menu-active" */

    document.getElementById("id_burger").classList.toggle("change"); // Ajout de cette class quand cette fonction est appelée
}

document.getElementById("id_burger").addEventListener("click", functBurger)
document.getElementById('burger-overlay').addEventListener('click', functBurger);