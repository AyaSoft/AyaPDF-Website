async function loadIncludes() {

    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (header) {

        const response = await fetch("includes/header.html");
        header.innerHTML = await response.text();

    }

    if (footer) {

        const response = await fetch("includes/footer.html");
        footer.innerHTML = await response.text();

    }

    initializeNavigation();

}

document.addEventListener("DOMContentLoaded", loadIncludes);



function initializeNavigation() {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (!menuButton || !navigation)
        return;

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

        menuButton.innerHTML =
            navigation.classList.contains("active")
                ? "✕"
                : "☰";

    });




    const links = navigation.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");
            menuButton.innerHTML = "☰";

        });

    });

}