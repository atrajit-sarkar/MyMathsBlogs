
const blogs = [
    { title: 'Infinite Dimension Vector Spaces Anomaly', url: 'Blogs\\InfiniteDimensionVectorSpacesAnomaly\\index.html' },

];

const blogList = document.getElementById('blog-list');

blogs.forEach(blog => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = blog.title;
    link.href = blog.url;
    listItem.appendChild(link);
    blogList.appendChild(listItem);
});

// Theme switcher
// Function to apply the theme based on the selected value
function applyTheme(theme) {
    // Create a mapping of themes to their stylesheet paths
    const themePaths = {
        LightDefault: "styles/LightThemes/style.css",
        LightSunset: "styles/LightThemes/sunset.css",
        LightMordernMinimal: "styles/LightThemes/mordernminimal.css",
        Lightmonochrome: "styles/LightThemes/monochrome.css",
        LightEarthly: "styles/LightThemes/earthly.css",
        LightOceanBreeze: "styles/LightThemes/oceanBreeze.css",
        DarkDefault: "styles/DarkThemes/style.css",
        DarkSunset: "styles/DarkThemes/sunset.css",
        DarkMordernMinimal: "styles/DarkThemes/mordernminimal.css",
        Darkmonochrome: "styles/DarkThemes/monochrome.css",
        DarkEarthly: "styles/DarkThemes/earthly.css",
        DarkOceanBreeze: "styles/DarkThemes/oceanBreeze.css"
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
    localStorage.setItem('selectedHomeTheme', theme);
}

// Event listener for theme selection
document.getElementById('theme-type').addEventListener('change', function () {
    const selectedHomeTheme = this.value;
    applyTheme(selectedHomeTheme);
});

// On page load, apply the saved theme if available
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('selectedHomeTheme');

    // Set the dropdown to the saved theme and apply it
    if (savedTheme) {
        document.getElementById('theme-type').value = savedTheme;
        applyTheme(savedTheme);
    }
});

const toggleSampleBlogs = document.querySelector(".sample-blogs")
var isVisibleSampleList = false

toggleSampleBlogs.addEventListener("click", () => {
    isVisibleSampleList = !isVisibleSampleList
    if (isVisibleSampleList) {
        document.querySelector(".sampleList").style.display = "grid"
        toggleSampleBlogs.setAttribute("class", "sample-blogs-visible")
    } else {
        document.querySelector(".sampleList").style.display = "none"
        toggleSampleBlogs.removeAttribute("class", "sample-blogs-visible")
        toggleSampleBlogs.setAttribute("class", "sample-blogs")
    }
})


