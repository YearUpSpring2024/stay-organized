# Stay Organized

Welcome to the "Stay Organized" project! This project is designed to help users manage their to-do lists efficiently. It features a sleek home page, a comprehensive task viewing page, and a user-friendly interface for adding new tasks.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contributors](#contributors)
- [Highlighted Code](#highlighted-code)

![Destiny-Monse](https://github.com/YearUpSpring2024/stay-organized/assets/35821623/db18f010-cfa4-4d3a-8b7a-1692cfbbcaf0)


![stay-organze](https://github.com/YearUpSpring2024/stay-organized/assets/35821623/3323a8e1-937a-40c6-9ee1-2e7483355718)


## Project Description

This project is a team effort aimed at building a website that allows users to keep track of their to-do tasks. The site interacts with a REST API connected to a back-end data store containing users and ToDos. It enables users to view and add new ToDo tasks. 

## Website Pages
- **Home Page (`index.html`)**: Highlights the "Stay Organized" website.
- **View ToDo Tasks (`todos.html`)**: Allows users to view all ToDo tasks for a specific user selected from a dropdown.
- **Add ToDo Task (`new_todo.html`)**: Enables users to add a new ToDo task.

## Stretch Goals
- **Add New User (`new_user.html`)**: Feature to add a new user.

## Features

- **View ToDo Tasks**: Easily view and manage your tasks.
- **Add ToDo Tasks**: Quickly add new tasks to your list.
- **Add New User**: Create a new user for task management.
- **Add New Todo for new user**: Create a new user for task management.

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- REST API

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YearUpSpring2024/stay-organized
   ```
2.	Navigate to the project directory:
   ```bash
   cd stay-organized
```
3. Clone the REST Api repository
```bash
https://github.com/DevelopIntelligenceBoulder/stay-organized-
workshop-express-server
```
4. Install the project’s dependencies:
```bash
npm install
```
5.	Start the local server:
   ```bash
   npm start
```
## Usage

	•	Navigate through the homepage to view it's content and layout.
	•	Use the “Add ToDo Tasks” feature to create new tasks.
	•	Use the “Add New User” feature to add a new user.

## Contributing

Contributions are welcome! Please follow these steps:

	1.	Fork the repository.
	2.	Create a new branch (git checkout -b feature-branch).
	3.	Make your changes.
	4.	Commit your changes (git commit -m 'Add some feature').
	5.	Push to the branch (git push --set-upstream origin feature-branch).
	6.	Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributors

This project is brought to you by the following team members:

Destiny - [GitHub Profile](https://github.com/Dmoncrief)
Monse - [GitHub Profile](https://github.com/monsecabral)
Ian - [GitHub Profile](https://github.com/IanNduta)
Adama - [GitHub Profile](https://github.com/AdamaDarboe)
Etson - [GitHub Profile](https://github.com/etsond)


## Additional Details

  Cloning, Configuring, Running and Understanding the REST API Server

  After cloning our team’s code base to your local computer, run the following command from the express server’s folder to install dependencies:

## Run 
```bash
npm start
```

### Expected Output
```bash
App listening at port 8083
```
### REST API Endpoints
```
GET http://localhost:8083/api/categories
```
### To get all ToDos:
```bash
GET http://localhost:8083/api/todos
```
### To get a specific ToDo:
```bash
GET http://localhost:8083/api/todos/{id}
```
### To get all users (excluding passwords):
```GET http://localhost:8083/api/users```
### To get ToDos for a specific registered user:
```GET http://localhost:8083/api/todos/byuser/{id}```
## Highlighted Code
```javascript
//author Adama Darboe
//Ian Nduta
function createOptionsForList(data) {
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
```
>>>This code is interesting because it dynamically creates and appends multiple option elements to a dropdown list based on the ToDo data fetched from the API. Each option represents a different attribute of the ToDo task (description, category, deadline, priority, and completion status). This approach efficiently populates the user interface with relevant data, enhancing the user experience by providing a detailed and organized view of the ToDo tasks.
