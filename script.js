document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded");

    // Reload page when logo is clicked
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.reload(); // Reload the page
    });
});