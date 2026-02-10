// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector("[data-menu-btn]");
const mobilePanel = document.querySelector("[data-mobile-panel]");

function toggleMenu(button, panel, forceClose = false) {
  const isOpen = forceClose ? false : panel.classList.toggle("open");

  panel.classList.toggle("open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));

  const label = button.querySelector("span");
  if (label) {
    label.textContent = isOpen ? "Close" : "Menu";
  }
}

if (menuBtn && mobilePanel) {
  // Open / close menu
  menuBtn.addEventListener("click", () => {
    toggleMenu(menuBtn, mobilePanel);
  });

  // Close menu when a link is clicked (mobile)
  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(menuBtn, mobilePanel, true);
    });
  });
}

// ===== Contact Form (Demo Only) =====
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only — connect a backend to send emails.)");
    contactForm.reset();
  });
}
