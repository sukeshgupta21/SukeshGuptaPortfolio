// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .slide");
    const links = document.querySelectorAll("aside.sidebar nav ul li a");

    // Function to show the current section and hide others
    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove("active");
            if (i === index) {
                section.classList.add("active");
            }
        });

        links.forEach((link, i) => {
            link.classList.remove("active");
            if (i === index) {
                link.classList.add("active");
            }
        });
    }

    // Initially show the first section
    showSection(0);

    // Add click event listener to each link
    links.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            showSection(index); // Show the corresponding section
        });
    });
});
