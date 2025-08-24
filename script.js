// Dynamic tagline script

// Define the phrases to rotate through
const phrases = [
  'Patient listener.',
  'Drunk on creativity.',
  'A 3D & Motion generalist.',
  'Your one‑stop shop, with more disco.'
];

let currentIndex = 0;
const heroHeading = document.getElementById('hero-text');

function updateTagline() {
  // Add fade-out class
  heroHeading.classList.add('fade-out');
  // After fade-out completes, update text and fade back in
  setTimeout(() => {
    heroHeading.textContent = phrases[currentIndex % phrases.length];
    heroHeading.classList.remove('fade-out');
    heroHeading.classList.add('fade-in');
    // Remove fade-in class after animation ends
    setTimeout(() => {
      heroHeading.classList.remove('fade-in');
    }, 500);
    currentIndex++;
  }, 500);
}

// Start rotation after initial delay
setTimeout(() => {
  updateTagline();
  setInterval(updateTagline, 4000);
}, 2000);