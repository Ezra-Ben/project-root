// Function to load HTML content into an element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Function to setup Dark Mode
function setupDarkMode() {
    // Check if dark mode is enabled from localStorage and apply it on page load
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Dark mode toggle button logic
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }
}

// Function to load specific article based on page
function loadArticles() {
    const path = window.location.pathname; // Get current page path

    // Check if the specific article container exists and load the corresponding article
    if (document.getElementById("sports-complex-text")) {
        fetch('txt/sports-complex.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById("sports-complex-text").innerHTML = `<p>${data}</p>`;
            })
            .catch(error => console.error('Error loading Sports Complex article:', error));
    }

    if (document.getElementById("patriotism-week-text")) {
        fetch('txt/patriotism-week.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById("patriotism-week-text").innerHTML = `<p>${data}</p>`;
            })
            .catch(error => console.error('Error loading Patriotism Week article:', error));
    }

    if (document.getElementById("upcoming-event-text")) {
        fetch('txt/upcoming-event.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById("upcoming-event-text").innerHTML = `<p>${data}</p>`;
            })
            .catch(error => console.error('Error loading Upcoming event article:', error));
    }

    if (document.getElementById("science-fair-text")) {
        fetch('txt/science-fair.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById("science-fair-text").innerHTML = `<p>${data}</p>`;
            })
            .catch(error => console.error('Error loading Science Fair article:', error));
    }

    if (document.getElementById("library-opening-text")) {
        fetch('txt/library-opening.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById("library-opening-text").innerHTML = `<p>${data}</p>`;
            })
            .catch(error => console.error('Error loading Library opening article:', error));
    }
}

// Wait for the (only) DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Load header and footer (same for all pages)
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');

    // Load the relevant articles (this will load only the articles that are on the current page)
    loadArticles();
});

// For setting up dark mode after everything is loaded (including styles)
window.onload = function() {
    setupDarkMode();
};