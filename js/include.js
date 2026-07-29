async function loadInclude(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Unable to load ${file}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadInclude("header", "includes/header.html");

    await loadInclude("footer", "includes/footer.html");

    if (typeof initializeSite === "function") {
        initializeSite();
    }

});