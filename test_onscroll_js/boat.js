window.onscroll = function() { boatGo()};
var boat = document.getElementById('boat'), boatPos = 0;
function boatGo () {
    if (document.documentElement.scrollTop > boatPos) {
        boat.style.transform = "translateX(600px)";
        boat.style.transition = "ease-out 2.5s";
    } else {
        boat.style.transform = "translateX(0)";
        boat.style.transition = "ease-out 2.5s";
    }
    boatPos = document.documentElement.scrollTop;
}