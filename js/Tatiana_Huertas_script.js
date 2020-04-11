/* To show more info when the user clicks the show-more button */
function showMoreButton() {
    if (document.querySelector('div.hidden-text').classList.contains("hide")) {
        document.querySelector('div.hidden-text').classList.toggle("hide");
        document.querySelector('a.show-more').innerHTML = "Show less";
    } else {
        document.querySelector('div.hidden-text').classList.toggle("hide");
        document.querySelector('a.show-more').innerHTML = "Show more";
    }
}

/* to display the close button when the menu is expanded in small screens */
function showCloseBtn() {
    document.querySelector('img.burgerBtn').classList.toggle("hide");
    document.querySelector('img.closeBtn').classList.toggle("hide");
}

/* to Shot the edit-btn in projects */
function showSetupButtons() {
    var listEditButtons = document.querySelectorAll('img.edit-btn');
    for (let i = 0; i < listEditButtons.length; i++) {
        listEditButtons[i].classList.toggle('hide');
    }
}

/* Event Listeners */
document.querySelector('img.burgerBtn').addEventListener("click", showCloseBtn);
document.querySelector('img.closeBtn').addEventListener("click", showCloseBtn);
document.querySelector('a.edit-projects').addEventListener("click", showSetupButtons);
document.querySelector('a.show-more').addEventListener("click", showMoreButton);