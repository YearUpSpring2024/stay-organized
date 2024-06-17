"use strict";
const userSearch = document.getElementById("userSearch");
const contentDisplay = document.getElementById("contentDisplay");
window.onload = function () {
    console.log(userSearch.value);
    console.log(contentDisplay.value);
    populateUserSearchDropdown();
}
function populateUserSearchDropdown() {
    fetch("http://localhost:8083/api/todos")
        .then(responce => responce.json())
        .then(data => {
            console.log(data)
            for (let userData of data) {
                creatDropDownOptions(userData);
                console.log(userData.id);
            }

        })
}
function creatDropDownOptions(data) {
    let newOptions = document.createElement("option");
    newOptions.value = data.id;
    newOptions.innerHTML = data.id;
    userSearch.appendChild(newOptions);

}