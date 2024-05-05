// document.addEventListener("load", () => {
const sections = document.querySelectorAll(".scroll-animation");
const petImage = document.getElementById("pet-image");
let lastScrollY = window.scrollY;

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });

  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

  if (window.innerWidth >= 768) {
    // Only apply effect on large screens
    const petHeight = petImage.offsetHeight;
    const viewportHeight = window.innerHeight;
    const driftRatio = petHeight / viewportHeight;

    if (scrollDirection === "down") {
      petImage.style.transform = `translateX(${50 * driftRatio}%)`; // Drift image away to the right by the calculated ratio
    } else {
      petImage.style.transform = "translateX(0)"; // Move image back to its original position
    }
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", checkScroll);

checkScroll();
// });
