// Set footer years
const y = new Date().getFullYear();
const year1 = document.getElementById("year");
const year2 = document.getElementById("year2");
if (year1) year1.textContent = y;
if (year2) year2.textContent = y;

// Highlight active nav link as you click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
