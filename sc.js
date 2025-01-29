// Function to update the time
function updateTime() {
    const timeElement = document.getElementById("current-time-span");
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    timeElement.textContent = now.toLocaleTimeString('en-US', options);
}

// Function to update the date
function updateDate() {
    const dateElement = document.getElementById("current-date");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Call the update functions on page load
updateDate();
updateTime();

// Optionally, update the time every second
setInterval(updateTime, 1000);