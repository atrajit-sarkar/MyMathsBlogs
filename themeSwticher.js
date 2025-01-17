// Theme switcher
// Function to apply the theme based on the selected value
function applyTheme(theme) {
    // Create a mapping of themes to their stylesheet paths
    const themePaths = {
        LightDefault: "BlogStyles\\LightThemes\\style.css",
        LightSunset: "BlogStyles\\LightThemes\\sunset.css",
        LightMordernMinimal: "BlogStyles\\LightThemes\\mordernminimal.css",
        Lightmonochrome: "BlogStyles\\LightThemes\\monochrome.css",
        LightEarthly: "BlogStyles\\LightThemes\\earthly.css",
        LightOceanBreeze: "BlogStyles\\LightThemes\\oceanBreeze.css",
        DarkDefault: "BlogStyles\\DarkThemes\\style.css",
        DarkSunset: "BlogStyles\\DarkThemes\\sunset.css",
        DarkMordernMinimal: "BlogStyles\\DarkThemes\\mordernMinimal.css",
        Darkmonochrome: "BlogStyles\\DarkThemes\\monochrome.css",
        DarkEarthly: "BlogStyles\\DarkThemes\\earthly.css",
        DarkOceanBreeze: "BlogStyles\\DarkThemes\\oceanBreeze.css"
    };

    // Get the correct path based on the selected theme
    const themePath = themePaths[theme];

    // Find the existing link element or create a new one if not present
    let linkElement = document.querySelector('link[rel="stylesheet"][data-theme]');
    if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = "stylesheet";
        linkElement.dataset.theme = "true"; // To identify it easily
        document.head.appendChild(linkElement);
    }

    // Update the href of the link element
    linkElement.href = themePath;

    // Save the selected theme in localStorage
    localStorage.setItem('selectedTheme', theme);
}

// Event listener for theme selection
document.getElementById('theme-type').addEventListener('change', function () {
    const selectedTheme = this.value;
    applyTheme(selectedTheme);
});

// On page load, apply the saved theme if available
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('selectedTheme');

    // Set the dropdown to the saved theme and apply it
    if (savedTheme) {
        document.getElementById('theme-type').value = savedTheme;
        applyTheme(savedTheme);
    }
});


// Get the font dropdown element
const fontDropdown = document.getElementById("font-type");

// Load the saved font from localStorage on page load
window.addEventListener("DOMContentLoaded", function () {
    const savedFont = localStorage.getItem("selectedFont");
    if (savedFont) {
        document.body.style.fontFamily = savedFont; // Apply the saved font to the body
        fontDropdown.value = savedFont; // Set the dropdown to the saved value
    }
});

// Update font style and save the selection to localStorage
fontDropdown.addEventListener("change", function () {
    const selectedFont = this.value;
    document.body.style.fontFamily = selectedFont; // Change the font of the body
    localStorage.setItem("selectedFont", selectedFont); // Save the selected font to localStorage
});


