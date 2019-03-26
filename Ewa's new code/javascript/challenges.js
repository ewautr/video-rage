let template = document.getElementById("glassTemp").content;

let container = document.getElementById("switchChallenges");
let glassContainer = document.getElementById("glasses");

const link = "https://spreadsheets.google.com/feeds/list/1i7ghv2kJPc8hUpnMN1LQZ9NXrM-COlQ6Di0uPgGXWxM/od6/public/values?alt=json";

function loadData(link) {
    fetch(link).then(e => e.json()).then(data => data.feed.entry.forEach(displayGlassData));
}

loadData(link);

let i = 1;

function displayGlassData(item) {
    const clone = template.cloneNode("true");
    clone.querySelector(".day").textContent = item.gsx$day.$t + "#";
    clone.querySelector(".title").textContent = item.gsx$title.$t;
    clone.querySelector("p").textContent = item.gsx$description.$t;

    clone.querySelector("#content").className = "content" + i;

    if (i !== 1) {
        clone.querySelector("#content").classList.add("hidden");
    }

    let glass = clone.querySelector("#straightGlass");

    glass.className = "day" + i;
    glass.classList.add("straightGlassActive");

    if (i === 1) {
        glass.classList.add("activeChecker");
    }
    glass.addEventListener("click", changeContent);
    glassContainer.appendChild(glass);

    var articleEl = document.createElement("article");
    articleEl.className = "day" + i;
    i = i + 1;
    articleEl.appendChild(clone);
    container.appendChild(articleEl);
}

function changeContent() {

    // Searching for previous glass

    let selectGlass = document.querySelector(".activeChecker");
    selectGlass.classList.remove("activeChecker");

    // Search content for previous glass and remove it

    let classPrevious = selectGlass.classList[0];
    let hideContent = document.querySelectorAll("."+classPrevious)[1];
    console.log(hideContent);
    hideContent.firstElementChild.classList.add("hidden");

    // Add the state checker to the clicked glass

    this.classList.add("activeChecker");

    // Look for the right article by class and show it

    let nextClass = this.classList[0];
    console.log(nextClass);
    let showContent = document.querySelectorAll("."+nextClass)[1];
    console.log(showContent);
    showContent.firstElementChild.classList.remove("hidden");

}
