function showMenu() {
    let links = document.getElementById("links");

    if( links.style.display === "none" ) {
        links.style.display = "inline";
    }
    else {
        links.style.display = "none";
    }
}

function showMenu2() {
    let links = document.getElementById("links2");

    if( links.style.display === "none" ) {
        links.style.display = "inline";
    }
    else {
        links.style.display = "none";
    }
}

window.addEventListener("scroll", popMenu);

function popMenu() {
    var burgerMenu = document.getElementById("burgerMenuPopUp");
    if (window.pageYOffset > 100) {
        burgerMenu.classList.remove("hidden");
    }
    else if (window.pageYOffset < 100) {
        burgerMenu.classList.add("hidden");
    }
}
