document.addEventListener('DOMContentLoaded', function() {

  function activeMenu() {

    const a = document.querySelector(".ul-1 > li > a.active");
    if (a) {
        a.classList.remove("active");
        a.parentNode.classList.remove("active");
    }
    this.classList.add("active");    
    this.parentNode.classList.add("active")
  }

  let link = document.querySelectorAll(".ul-1 > li > a");
  for (let i = 0; i < link.length; i += 1) {
    link[i].addEventListener("click", activeMenu);
  }

  function activeSubMenu() {

    const b = document.querySelector(".ul-1 .li-1 .ul-2 li a.active");
    if (b) {
      b.classList.remove("active");
    }
    this.classList.add("active");
  }

  let linktarget = document.querySelectorAll(".ul-1 .li-1 .ul-2 li a");
  for (let j = 0; j < linktarget.length; j += 1) {
    linktarget[j].addEventListener("click", activeSubMenu);
  }
});
