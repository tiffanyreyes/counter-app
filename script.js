// script.js

let taskCount = 0;

// Set GIF URLs
const gifs = {
    10: "https://giphy.com/embed/lXxTIsrjKqzO2b0CAs",  // GIF for 10 tasks
    50: "https://giphy.com/embed/5d1CNIT2nCgkzTdH5H",  // GIF for 50 tasks
    100: "https://giphy.com/embed/7zwiRiYY29ozcPOD6o"  // GIF for 100 tasks
};

document.getElementById('completeTaskButton').addEventListener('click', () => {
    taskCount++;
    updateTaskCount();
});

document.getElementById('resetTaskButton').addEventListener('click', () => {
    taskCount = 0;
    updateTaskCount();
});

function updateTaskCount() {
    document.getElementById('taskCount').innerText = taskCount;

    // Show motivational message if task count is 0
    const motivationMessage = document.getElementById('motivationMessage');
    if (taskCount === 0) {
        motivationMessage.style.display = 'block'; // Show message
    } else {
        motivationMessage.style.display = 'none'; // Hide message
    }

    // Show GIF only when task count reaches 10 or more
    const gifContainer = document.getElementById('gifContainer');
    const gifElement = document.getElementById('progressGif');
    const gifLink = document.getElementById('gifLink');

    if (taskCount >= 10) {
        gifContainer.style.display = 'block'; // Show the GIF container

        // Update GIF based on specific task counts
        if (taskCount === 10) {
            gifElement.src = "https://giphy.com/embed/lXxTIsrjKqzO2b0CAs"; // GIF for 10 tasks
            gifLink.href = "https://giphy.com/gifs/purple-cat-miuu-studio-lXxTIsrjKqzO2b0CAs"; // Link to 10 tasks GIF
        } else if (taskCount === 50) {
            gifElement.src = "https://giphy.com/embed/5d1CNIT2nCgkzTdH5H"; // GIF for 50 tasks
            gifLink.href = "https://giphy.com/gifs/purple-cat-miuu-studio-5d1CNIT2nCgkzTdH5H"; // Link to 50 tasks GIF
        } else if (taskCount >= 100) {
            gifElement.src = "https://giphy.com/embed/7zwiRiYY29ozcPOD6o"; // GIF for 100 tasks
            gifLink.href = "https://giphy.com/gifs/cat-dancing-miuu-7zwiRiYY29ozcPOD6o"; // Link to 100 tasks GIF
        }
        
        gifLink.style.display = 'block'; // Show the Giphy link
    } else {
        gifContainer.style.display = 'none'; // Hide the GIF container if tasks < 10
    }
}
