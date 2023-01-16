// Get all the buttons
const buttons = document.querySelectorAll('.round-button');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', event => {
        // Get the text of the button that was clicked
        const buttonText = event.target.id;

        // Use an if-else statement to handle the different button clicks
        if (buttonText === 'about-button') {
            // Code to handle the 'Home' button click
        } else if (buttonText === 'language-switch') {
            // Code to handle the 'About' button click
        } else if (buttonText === 'contact-button') {
            // Code to handle the 'Contact' button click
            alert('Add me on Discord! :) \n Louis#7723 \n ------- \n E-Mail: \n louisrost.schule@gmail.com');
            
        }
    });
});

let homeButton = document.getElementById("about-button");
homeButton.addEventListener("click", function(){
        console.log("About button clicked");
        window.location.href = "about.html";
});

function updateContent(language) {
    // Load translations from JSON file
    fetch('https://api.npoint.io/a7d9053c972d766856a5')

        .then(response => response.json())
        .then(data => {
            // Get translations for chosen language
            const translations = data[language];

            // Update text on website
            document.querySelector('#about-button').innerText = translations.about;
            document.querySelector('#contact-button').innerText = translations.contact;
            document.querySelector('#language-switch').innerText = translations.lang;
            document.querySelector('#portfolio_item1').innerText = translations.portfolio_item1;
        });
}

let languageSwitch = document.getElementById("language-switch");
languageSwitch.addEventListener("click", function(){
    // toggle the language
    if (languageSwitch.innerText === "Deutsch") {
        languageSwitch.innerText = "Loading...";
        updateContent("en");
    } else {
        languageSwitch.innerText = "Lädt...";
        updateContent("de");
    }
});
