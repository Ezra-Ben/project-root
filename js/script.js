// Load articles' text from txt files and display them in the respective sections

document.addEventListener("DOMContentLoaded", function() {
    
    fetch('txt/sports-complex.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("sports-complex-text").innerHTML = `<p>${data}</p>`;
        })
        .catch(error => console.error('Error loading Sports Complex article:', error));

    
    fetch('txt/patriotism-week.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("patriotism-week-text").innerHTML = `<p>${data}</p>`;
        })
        .catch(error => console.error('Error loading Patriotism Week article:', error));
    
    fetch('txt/upcoming-event.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("upcoming-event-text").innerHTML = `<p>${data}</p>`;
        })
        .catch(error => console.error('Error loading Upcoming event article:', error));
    
    fetch('txt/science-fair.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("science-fair-text").innerHTML = `<p>${data}</p>`;
        })
        .catch(error => console.error('Error loading Science Fair article:', error));
        
    fetch('txt/library-opening.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("library-opening-text").innerHTML = `<p>${data}</p>`;
        })
        .catch(error => console.error('Error loading Library opening article:', error));

    });

