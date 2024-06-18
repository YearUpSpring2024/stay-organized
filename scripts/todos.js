"use strict";

// select the html elements
const userSearch = document.getElementById("userSearch");
const contentDisplay = document.getElementById("contentDisplay");

// once the window load
window.onload = function () {
    console.log(userSearch.value);
    console.log(contentDisplay.value);
    populateUserSearchDropdown();
    userSearch.onchange = onChangeUserSearch;
    clearList();
}
//this populates the list box & & handle the change event for the user search dropdown
function onChangeUserSearch() {
    let studentName;
    clearList();
    console.log("hi");
    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(users => {
            for (let studentUser of users) {
                if (studentUser.id == userSearch.value) {
                    studentName = studentUser.name;
                    break;
                }
            }
            return fetch("http://localhost:8083/api/todos");
        })
        .then(response => response.json())
        .then(data => {
            for (let studentData of data) {
                if (studentData.userid == userSearch.value) {

                    console.log(studentData.id);
                    createOptionsForList(studentData);
                    createCard(studentData, studentName)
                }

            }
        })
        .catch(error => console.error("Error cannot fetch data", error));
}
//this functions creates the options list box
function createOptionsForList(data) {
    // 
    let newOptions = document.createElement("option");
    newOptions.value = data.description;
    newOptions.innerHTML = "Description: " + data.description;
    contentDisplay.appendChild(newOptions);

    let newOptions2 = document.createElement("option");
    newOptions2.value = data.category;
    newOptions2.innerHTML = "Category: " + data.category;
    contentDisplay.appendChild(newOptions2);

    let newOptions3 = document.createElement("option");
    newOptions3.value = data.deadline;
    newOptions3.innerHTML = "Deadline: " + data.deadline;
    contentDisplay.appendChild(newOptions3);

    let newOptions4 = document.createElement("option");
    newOptions4.value = data.priority;
    newOptions4.innerHTML = "Priority type: " + data.priority;
    contentDisplay.appendChild(newOptions4);

    let newOptions5 = document.createElement("option");
    newOptions5.value = data.completed;
    newOptions5.innerHTML = "Completed?: " + data.completed;
    contentDisplay.appendChild(newOptions5);
}
//this populates the userSearch dropdown
function populateUserSearchDropdown() {
    fetch("http://localhost:8083/api/users")
        .then(responce => responce.json())
        .then(data => {
            // console.log(data)
            for (let userData of data) {
                creatDropDownOptions(userData);
                // console.log(userData.id);
            }

        }).catch(error => console.error('Error, cannot find user', error))
}
//this creates the dropdown options for the userSearch
function creatDropDownOptions(data) {
    let newOptions = document.createElement("option");
    newOptions.value = data.id;
    newOptions.innerHTML = data.name;
    userSearch.appendChild(newOptions);

}

function createCard(data, studentName) {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mt-3");

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body", "border");
    cardDiv.appendChild(cardBodyDiv);

    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = data.category //add api data
    cardBodyDiv.appendChild(h5);

    let h6 = document.createElement("h6");
    h6.classList.add("card-subtitle", "mb-2", "text-body-secondary");
    h6.innerHTML = studentName;
    cardBodyDiv.appendChild(h6);

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = "Description: " + data.description;
    cardBodyDiv.appendChild(p);

    let p2 = document.createElement("p");
    p2.classList.add("card-text");
    p.innerHTML = "Deadline: " + data.deadline;
    cardBodyDiv.appendChild(p2);

    let p3 = document.createElement("p");
    p3.classList.add("card-text");
    p3.innerHTML = "Priority: " + data.priority;
    cardBodyDiv.appendChild(p3);

    let p4 = document.createElement("p");
    p4.classList.add("card-text");
    p4.innerHTML = "Completed: " + data.completed;
    cardBodyDiv.appendChild(p4);

    const cardOutput = document.getElementById("cardOutput");
    cardOutput.appendChild(cardDiv);
}

function clearList() {
    contentDisplay.innerHTML = '';
    cardOutput.innerHTML = '';
}