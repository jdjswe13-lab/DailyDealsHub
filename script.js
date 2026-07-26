// DailyDealsHub Script

console.log("Welcome to DailyDealsHub");

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Buy button animation
document.querySelectorAll(".product a").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// Welcome message
window.addEventListener("load", () => {
  console.log("Website Loaded Successfully");
});
