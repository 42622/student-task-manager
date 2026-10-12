# Student Task Management System

## Project Description

The Student Task Management System is a simple browser-based application used to add and display academic tasks.

This project is used to practise local version control with Git and Git GUI.

## Purpose

The purpose of this project is to give students one simple page where they can record their academic tasks, such as assignments, presentations and revision work.

It is also the starting point of a continuing DevOps project. The same repository will be reused in later assignments with GitHub, Maven, Jenkins and Terraform.

## Current Features

- Displays three sample student tasks.
- Allows a user to enter a task title and description.
- Adds a new task to the page.
- Prevents blank task submissions.
- Uses a responsive webpage layout.

## Technologies Used

- HTML5 for the page structure
- CSS3 for the layout and responsive design
- JavaScript for adding tasks and validating input
- Git and Git GUI for version control

## Project Structure

```text
student-task-manager/
├── index.html      # Page structure, add-task form and sample tasks
├── style.css       # Layout, colours and responsive design
├── script.js       # Adds new tasks and blocks blank submissions
├── README.md       # Project documentation
└── .gitignore      # Files and folders that Git must not track
```

## Usage Instructions

1. Download or copy the `student-task-manager` folder.
2. Open `index.html` in a modern web browser such as Google Chrome, Microsoft Edge or Mozilla Firefox.
3. Enter a task title and a task description in the **Add New Task** form.
4. Click **Add Task**. The new task appears at the end of the **Student Tasks** list.
5. If the title or the description is left blank, the task is not added and an error message is shown.

No installation, server or internet connection is required.

## Future DevOps Work

This repository will be reused in the next assignments of the DevOps series:

1. Publish the repository to GitHub and use branches, issues and pull requests for collaboration.
2. Convert the project into a Maven project structure with automated tests.
3. Integrate the repository with Jenkins for continuous integration.
4. Provision the required infrastructure using Terraform.
5. Deploy the application and monitor it.
