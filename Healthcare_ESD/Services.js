// Service Page Specific JavaScript
if (document.querySelector(".services-nav-links")) {
  // Initialize first service nav link as active
  document.querySelector(".service-nav-link").classList.add("active");

  // Mobile service navigation
  const serviceNav = document.querySelector(".services-nav-links");
  let isDown = false;
  let startX;
  let scrollLeft;

  serviceNav.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - serviceNav.offsetLeft;
    scrollLeft = serviceNav.scrollLeft;
  });

  serviceNav.addEventListener("mouseleave", () => {
    isDown = false;
  });

  serviceNav.addEventListener("mouseup", () => {
    isDown = false;
  });

  serviceNav.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - serviceNav.offsetLeft;
    const walk = (x - startX) * 2;
    serviceNav.scrollLeft = scrollLeft - walk;
  });

  // Service image hover effect for touch devices
  const serviceImages = document.querySelectorAll(".service-image img");
  serviceImages.forEach((img) => {
    img.addEventListener("touchstart", () => {
      img.style.transform = "scale(1.05)";
    });

    img.addEventListener("touchend", () => {
      img.style.transform = "scale(1)";
    });
  });
}
