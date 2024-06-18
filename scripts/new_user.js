"use strict";
const newUserForm = document.getElementById('newUserForm');

window.onload = function () {

}

function submitNewUserForm(event) {
    event.prevenDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const user = {
        name: name,
        username: username,
        password: password
    };

    // Send a POST request to the server to add the new user
    fetch('http://localhost:8083/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.ok) {
            alert('User added successfully!');
            newUserForm.reset();
        } else {
            return response.json().then(err => { throw new Error(err.message); });
        }
    }).catch(error => {
        console.error('Error adding user:', error);
        alert('Error adding user: ' + error.message);
    });
}