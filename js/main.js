// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector("[data-menu-btn]");
const mobilePanel = document.querySelector("[data-mobile-panel]");

function toggleMenu(button, panel, forceClose = false) {
  const isOpen = forceClose ? false : !panel.classList.contains("open");

  panel.classList.toggle("open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));

  const label = button.querySelector("span");
  if (label) {
    label.textContent = isOpen ? "Close" : "Menu";
  }
}

if (menuBtn && mobilePanel) {
  menuBtn.addEventListener("click", () => {
    toggleMenu(menuBtn, mobilePanel);
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(menuBtn, mobilePanel, true);
    });
  });
}

// ===== Contact Form (EmailJS) =====
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Replace these with your EmailJS keys
    const serviceID = "service_3s4ioyu";
    const templateID = "template_fjpl0w9";
    const publicKey = "76kAlcxApm1sEE3S1";

    emailjs.sendForm(serviceID, templateID, this, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      }, (err) => {
        console.error(err);
        alert("Failed to send message. Try again.");
      });
  });
}
