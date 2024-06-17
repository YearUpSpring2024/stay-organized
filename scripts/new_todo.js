"use strict";
// select html element
const selectedUser = document.getElementById('selectedUser');
const categorySelect = document.getElementById('categorySelect');
const newTodoForm = document.getElementById('newTodoForm');
const selectedPriority = document.getElementById("selectedPriority");
const deadline = document.getElementById("deadline");
const description = document.getElementById("description")

window.onload = function () {
    populateUsers();
    populateCategories();
    newTodoForm.onsubmit = submitNewTodoForm
}
// function to add users to the drop down
function populateUsers() {
    // get users and add to dropdown
    fetch('http://localhost:8083/api/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.text = user.name;
                selectedUser.appendChild(option);
            });
        })
        .catch(error => console.error('Error cannot find users:', error));
}
function populateCategories() {
    // get users and add to dropdown
    fetch('http://localhost:8083/api/categories')
        .then(response => response.json())
        .then(categories => {
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.name;
                option.text = category.name;
                categorySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error cannot find categories:', error));
}
// function to handle form submission to add a new todo
function submitNewTodoForm(event) {
    event.preventDefault();

    // create a new todo object with the form data
    const todo = {
        userid: selectedUser.value,
        category: categorySelect.value,
        description: description.value,
        deadline: deadline.value,
        priority: selectedPriority.value
    };

    // send post request to the server to add a todo
    fetch('http://localhost:8083/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
        .then(response => {
            if (response.ok) {
                // once successful print this
                console.log('cooking with grease!');
                newTodoForm.reset(); //this reset the form
            } else {
                return response.json()
                    .then(err => {
                        //https://stackoverflow.com/questions/73146097/how-to-use-throw-properly-in-try-catch-block-when-other-unexpected-errors-mi
                        throw new Error(err.message, "whoops");
                    });
            }
        })
        .catch(error => {
            console.error('Error adding ToDo:', error);

        });


}







