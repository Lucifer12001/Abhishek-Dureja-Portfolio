document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const htmlEl = document.documentElement;

  // Restore saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) htmlEl.setAttribute("data-theme", savedTheme);

  // Theme toggle handler
  themeToggle?.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Typing animation
  const typingText = document.getElementById("typingText");
  const roles = ["Data Scientist", "AI Engineer", "Data Analyst", "ML Engineer", "Tech Enthusiast"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typingText) return;

    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    typingText.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, speed);
  }

  type();

  // Project filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        card.style.display = filter === "all" || category === filter ? "block" : "none";
      });
    });
  });
});
