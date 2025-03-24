// Set the target date and time for the countdown
const targetDate = new Date('May 11, 2025 00:00:00').getTime();

// Get the countdown container element
const countdownElement = document.getElementById('countdown');

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const currentTime = new Date().getTime();
  const remainingTime = targetDate - currentTime;

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the countdown display
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the countdown has ended
  if (remainingTime < 0) {
    clearInterval(countdownInterval);
    countdownElement.style.display = 'none';
    document.querySelector('.countdown-ended-message').style.display = 'block';
  }
}, 1000);