// This file contains the JavaScript code for handling commands in the Office Add-In.
// It defines functions that respond to user commands, such as button clicks.

function runCommand() {
    // Code to execute when the command is triggered
    console.log("Command executed!");
}

// Add event listeners for command buttons
document.addEventListener("DOMContentLoaded", function() {
    const commandButton = document.getElementById("commandButton");
    if (commandButton) {
        commandButton.addEventListener("click", runCommand);
    }
});