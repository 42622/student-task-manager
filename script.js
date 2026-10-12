const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// The only priority values a task is allowed to have.
const allowedPriorities = ["High", "Medium", "Low"];

// Shows the task's priority (High, Medium or Low) as a coloured label above its title.
function addPriorityLabel(taskCard) {
    const priority = taskCard.dataset.priority;

    if (!allowedPriorities.includes(priority)) {
        return;
    }

    const priorityLabel = document.createElement("span");
    priorityLabel.className = "priority-badge priority-" + priority.toLowerCase();
    priorityLabel.textContent = priority + " Priority";

    taskCard.insertBefore(priorityLabel, taskCard.firstChild);
}

// Shows the given status on a task card and updates its button text.
// status must be "pending" or "completed".
function setTaskStatus(taskCard, status) {
    const statusLabel = taskCard.querySelector(".status-badge");
    const statusButton = taskCard.querySelector(".status-button");

    taskCard.dataset.status = status;

    if (status === "completed") {
        statusLabel.textContent = "Completed";
        statusButton.textContent = "Mark as Pending";
    } else {
        statusLabel.textContent = "Pending";
        statusButton.textContent = "Mark as Completed";
    }
}

// Adds a status label and a button that changes the status of a task card.
function addStatusControls(taskCard) {
    const statusArea = document.createElement("div");
    statusArea.className = "task-status";

    const statusLabel = document.createElement("span");
    statusLabel.className = "status-badge";

    const statusButton = document.createElement("button");
    statusButton.type = "button";
    statusButton.className = "status-button";

    statusButton.addEventListener("click", function () {
        if (taskCard.dataset.status === "completed") {
            setTaskStatus(taskCard, "pending");
        } else {
            setTaskStatus(taskCard, "completed");
        }
    });

    statusArea.appendChild(statusLabel);
    statusArea.appendChild(statusButton);
    taskCard.appendChild(statusArea);

    // Sample tasks take their status from data-status; anything else starts as Pending.
    if (taskCard.dataset.status === "completed") {
        setTaskStatus(taskCard, "completed");
    } else {
        setTaskStatus(taskCard, "pending");
    }
}

// Give the sample tasks that are already on the page a priority label and a status.
document.querySelectorAll(".task-card").forEach(function (taskCard) {
    addPriorityLabel(taskCard);
    addStatusControls(taskCard);
});

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    const priority = taskPriority.value;

    if (title === "" || description === "" || !allowedPriorities.includes(priority)) {
        message.textContent = "Please enter the task title, description and priority.";
        message.style.color = "red";
        return;
    }

    const taskCard = document.createElement("article");
    taskCard.className = "task-card";
    taskCard.dataset.status = "pending";
    taskCard.dataset.priority = priority;

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    taskCard.appendChild(heading);
    taskCard.appendChild(paragraph);
    addPriorityLabel(taskCard);
    addStatusControls(taskCard);
    taskList.appendChild(taskCard);

    taskForm.reset();

    message.textContent = "Task added successfully.";
    message.style.color = "green";
});
