document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Active Navigation Link
    // ===========================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

    // ===========================
    // Mobile Menu
    // ===========================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            mainNav.classList.toggle("active");

        });

        document.querySelectorAll(".main-nav a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                mainNav.classList.remove("active");

            });

        });

    }

    // ===========================
    // Sticky Header
    // ===========================

    const header = document.querySelector(".site-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        updateHeader();

        window.addEventListener("scroll", updateHeader);

    }

    // ===========================
    // Smooth Scroll
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

});