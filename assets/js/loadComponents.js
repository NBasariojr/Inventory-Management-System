// Function to load components dynamically
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(componentId).innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load navbar when the page is ready
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("navbar", "components/navbar.html");
});
