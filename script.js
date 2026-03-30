// Navbar collapse on link click (for mobile)
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// Typed.js example for home section (if needed)
if (document.querySelector("#home-typed")) {
  var typed = new Typed("#home-typed", {
    strings: ["Frontend Developer", "Bootstrap Expert", "React Enthusiast"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });
}
