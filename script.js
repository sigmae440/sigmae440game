// Set the countdown target date (5 days from now)
const targetDate = new Date("2025-04-28T12:00:00"); // yyyy-mm-ddTHH:MM:SS

function updateCountdown() {
    const currentTime = new Date();
    const timeLeft = targetDate - currentTime;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "<h2>Countdown Ended</h2>";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Update every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
