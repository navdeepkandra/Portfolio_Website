document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.getElementById("header");
  const scrollToTopButton = document.getElementById("scroll-to-top");

  // --- Mobile Menu ---
  mobileMenuButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mobileMenu.classList.add("hidden");
  });

  // --- Header Shadow & Scroll-to-Top Button ---
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow-lg", window.scrollY > 50);
    header.classList.toggle("shadow-slate-800/20", window.scrollY > 50);
    scrollToTopButton.classList.toggle("hidden", window.scrollY <= 300);
  });
  scrollToTopButton.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // --- Active Nav Link Highlighting ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "section-active",
              link.getAttribute("href").substring(1) === entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));

  // --- Custom Cursor ---
  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
  });

  // --- Scroll-in Animations ---
  const animatedElements = document.querySelectorAll(".fade-in-up");
  const animationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    animationObserver.observe(element);
  });

  // --- Project Card Glow Effect ---
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
