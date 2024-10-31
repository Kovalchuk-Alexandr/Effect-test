// --------- Mobile nav ---------------------
document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelector(".mobile-nav-btn");
    const closeBtn = document.querySelector(".mobile-close-btn");
    const nav = document.querySelector(".mobile-nav");
    const fade = document.querySelector(".mobile-nav-fade");

    navBtn.onclick = toggleMobile;
    closeBtn.onclick = toggleMobile;
    fade.onclick = toggleMobile;

    function toggleMobile() {
        nav.classList.toggle("active");
        navBtn.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
        fade.classList.toggle("mobile-nav-fade--open");
    }

    // --------- Scroll Reveal ---------------------
    // Базовые настройки
    ScrollReveal({
        distance: "60px",
        duration: 1500,
        reset: true,
    });

    ScrollReveal().reveal(".hero-row", {
        origin: "top",
        delay: 500,
    });

    ScrollReveal().reveal(".hero-heading", {
        origin: "left",
        delay: 1000,
    });

    ScrollReveal().reveal(".hero-info", {
        origin: "right",
        delay: 1500,
    });
});