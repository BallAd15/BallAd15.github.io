function openOverlay() {
    document.getElementsByClassName("overlay")[0].style.height = "100vh";
  }
  
function closeOverlay() {
    document.getElementsByClassName("overlay")[0].style.height = "12%";
    document.getElementsByClassName("overlay-about")[0].style.display = "none";
    document.getElementsByClassName("overlay-arrow")[0].style.display = "none";
    document.getElementsByClassName("navbar")[0].style.display = "flex";
}

function menubarShow(){
    const hiddenDiv = document.getElementById("nvbm");
    const menuIcon = document.getElementsByClassName("menubar-icon")[0];
    if ( hiddenDiv.classList.contains('navbar-menu')) {
        hiddenDiv.classList.remove('navbar-menu');
        hiddenDiv.classList.add('visible');
        document.getElementsByClassName("overlay")[0].style.height = "315px";
        document.getElementsByClassName("site-title")[0].style.borderBottom = "1px solid rgb(99, 95, 95)";
        menuIcon.textContent="expand_less"
    } else {
        hiddenDiv.classList.remove('visible');
        hiddenDiv.classList.add('navbar-menu');
        document.getElementsByClassName("overlay")[0].style.height = "12%";
        document.getElementsByClassName("site-title")[0].style.borderBottom = "none";
        menuIcon.textContent="menu"
    }
}

window.onload = function() {
    closeOverlay();
}
