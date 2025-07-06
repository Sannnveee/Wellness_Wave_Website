// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Sticky navigation on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
});

// Doctor Registration Form (example functionality)
if (document.getElementById("doctor-form")) {
  const doctorForm = document.getElementById("doctor-form");

  doctorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(doctorForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send this data to your server
    console.log("Doctor registration data:", data);

    // Show success message
    alert(
      "Thank you for registering as a volunteer doctor! We will contact you soon."
    );
    doctorForm.reset();
  });
}

// Simple health assessment quiz (example)
if (document.getElementById("health-quiz")) {
  const quizForm = document.getElementById("health-quiz");
  const quizResult = document.getElementById("quiz-result");

  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Calculate score
    let score = 0;
    const answers = quizForm.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((answer) => {
      score += parseInt(answer.value);
    });

    // Display result
    let message = "";
    if (score <= 10) {
      message =
        "Your health appears to be in good condition. Maintain your healthy habits!";
    } else if (score <= 20) {
      message =
        "You may have some health concerns. Consider consulting with one of our healthcare providers.";
    } else {
      message =
        "Your responses indicate several health concerns. We strongly recommend speaking with a healthcare professional soon.";
    }

    quizResult.innerHTML = `
            <h3>Your Health Assessment</h3>
            <p>${message}</p>
            <a href="find-help.html" class="btn-primary">Find a Healthcare Provider</a>
        `;
    quizResult.style.display = "block";
  });
}
