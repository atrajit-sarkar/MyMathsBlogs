// Configure marked.js
marked.setOptions({
    gfm: true, // Enable GitHub-Flavored Markdown
    breaks: true, // Enable line breaks for better readability
    smartypants: false, // Disable automatic replacement of quotes and dashes
    renderer: new marked.Renderer(), // Use the default renderer
});

// Path to your Markdown file
const myMarkDownFile = "index.md";

// Fetch and render the Markdown file
async function getmd() {
    try {
        // Fetch the Markdown file
        const response = await fetch(myMarkDownFile);

        if (!response.ok) {
            throw new Error(`Failed to fetch markdown file: ${response.statusText}`);
        }

        const markdownContent = await response.text();

        // Render Markdown using marked.js
        const mdContainer = document.querySelector(".md");
        mdContainer.innerHTML = marked.parse(markdownContent);

        // Add copy buttons to code blocks
        addCopyButtons();

        // Apply Prism.js syntax highlighting
        Prism.highlightAll();

        // Trigger MathJax to typeset the new content
        await MathJax.typesetPromise([mdContainer]);
    } catch (error) {
        console.error("Error fetching or rendering markdown:", error);
    }
}

// Function to add copy buttons to <pre><code> blocks
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((block) => {
        // Create a copy button
        const button = document.createElement("button");
        button.className = "copy-button";
        button.innerHTML = '<i class="fas fa-clipboard"></i>'; // Font Awesome icon for copy button

        // Append the button to the code block
        block.appendChild(button);

        // Add click event to copy the code block content
        button.addEventListener("click", () => {
            copyCode(block, button);
        });
    });
}

// Function to copy the code block content to the clipboard
function copyCode(block, button) {
    const code = block.querySelector("code").innerText;

    // Copy to clipboard and provide feedback
    navigator.clipboard
        .writeText(code)
        .then(() => {
            button.classList.add("copied");
            setTimeout(() => button.classList.remove("copied"), 1000);
        })
        .catch((err) => console.error("Failed to copy code:", err));
}

// Call the function to fetch and render the markdown
getmd();
