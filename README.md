# Student Task Management System

## Project Description

The Student Task Management System is a simple browser-based application used to add and display academic tasks.

This project is used to practise version control with Git, Git GUI and GitHub.

## Purpose

The purpose of this project is to give students one simple page where they can record their academic tasks, such as assignments, presentations and revision work.

It is also the starting point of a continuing DevOps project. The same repository will be reused in later assignments with GitHub, Maven, Jenkins and Terraform.

## Current Features

- Displays three sample student tasks.
- Allows a user to enter a task title and description.
- Adds a new task to the page.
- Prevents blank task submissions.
- Displays a clear status (Pending or Completed) on every task.
- Allows the status of any task to be changed with a button.
- Allows a user to choose a High, Medium or Low priority for every new task.
- Displays a coloured priority label on every task.
- Uses a responsive webpage layout.

## Technologies Used

- HTML5 for the page structure
- CSS3 for the layout and responsive design
- JavaScript for adding tasks and validating input
- Git and Git GUI for version control
- GitHub for remote hosting, issues, pull requests and releases

## Project Structure

```text
student-task-manager/
├── index.html      # Page structure, add-task form, priority field and sample tasks
├── style.css       # Layout, colours, status and priority labels, responsive design
├── script.js       # Adds tasks, blocks blank submissions, changes status
├── README.md       # Project documentation
└── .gitignore      # Files and folders that Git must not track
```

## Usage Instructions

1. Download or copy the `student-task-manager` folder.
2. Open `index.html` in a modern web browser such as Google Chrome, Microsoft Edge or Mozilla Firefox.
3. Enter a task title and a task description in the **Add New Task** form, then choose a **Task Priority** (High, Medium or Low).
4. Click **Add Task**. The new task appears at the end of the **Student Tasks** list.
5. If the title, the description or the priority is left blank, the task is not added and an error message is shown.
6. Every task shows its status. Click **Mark as Completed** or **Mark as Pending** to change it.

No installation, server or internet connection is required.

## Future DevOps Work

The repository is now published on GitHub. New features are developed on separate feature branches and merged into `main` through reviewed pull requests.

This repository will be reused in the next assignments of the DevOps series:

1. Convert the project into a Maven project structure with automated tests.
2. Integrate the repository with Jenkins for continuous integration.
3. Provision the required infrastructure using Terraform.
4. Deploy the application and monitor it.
