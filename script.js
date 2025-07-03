// Dark/Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) htmlEl.setAttribute("data-theme", savedTheme);
  startTypingEffect();
});

// Typing Effect
const typingText = document.getElementById("typingText");
const roles = ["Data Analyst","Data Scientist", "AI Engineer", "ML Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function startTypingEffect() {
  const currentRole = roles[roleIndex];
  const speed = isDeleting ? 50 : 100;

  typingText.textContent = currentRole.substring(0, charIndex);

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(startTypingEffect, speed);
}

// Project Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
