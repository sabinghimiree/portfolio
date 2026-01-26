// Mobile menu open/close
const menuBtn = document.querySelector("[data-menu-btn]");
const mobilePanel = document.querySelector("[data-mobile-panel]");

if (menuBtn && mobilePanel) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.querySelector("span").textContent = isOpen ? "Close" : "Menu";
  });

  // Close menu when a link is clicked (mobile)
  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.querySelector("span").textContent = "Menu";
    });
  });
}

// Optional: simple contact form demo (no backend)
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only — connect a backend to really send emails.)");
    contactForm.reset();
  });
}
