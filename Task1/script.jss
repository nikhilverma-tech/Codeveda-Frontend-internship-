const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile Menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Form Validation
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    msg.innerText = "Please fill all fields!";
    msg.style.color = "red";
  } else {
    msg.innerText = "Message sent successfully!";
    msg.style.color = "green";
    form.reset();
  }
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});
