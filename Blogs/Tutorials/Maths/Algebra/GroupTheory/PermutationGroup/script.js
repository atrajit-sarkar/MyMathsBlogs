// Paste the link of your mark down file here to render it into your site
const myMarkDownFile = "index.md";

/* Function to fetch from the markdown file title of the website and content title...
 in the markdown:
    title: Title of the website
    content-title: Title of the content
    Rest of the content
    
    If the title is not found, it will set the title to "Default Title"
    If the content title is not found, it will set the content title to "Default Content"
    Rest will be taken as the content of the website
 */

async function getmdTitle(con) {
    let titleMatch = con.match(/title: (.*)/);
    let contentMatch = con.match(/content-title: (.*)/);
    let title = titleMatch ? titleMatch[1] : "Default Title";
    let content = contentMatch ? contentMatch[1] : "Default Content";
    document.title = title;
    document.querySelector(".title p").innerHTML = content;
    return con.replace(/title: .*[\r\n]+content-title: .*[\r\n]+/, '');
}

// Fetch the Markdown file and render it
async function getmd() {
    let res = await fetch(myMarkDownFile);
    let con = await res.text();
    con = await getmdTitle(con);
    document.getElementsByClassName("md")[0].innerHTML = marked.parse(con);

    // Add copy buttons to code blocks after rendering
    addCopyButtons();

    // Apply Prism.js syntax highlighting after rendering
    Prism.highlightAll();

    // Render Equations
    MathJax.typeset();
}


// Function to add copy buttons to all <pre><code> blocks
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block, index) => {
        // Create a copy button element
        const button = document.createElement('button');
        button.className = "copy-button";
        button.innerHTML = '<i class="fas fa-clipboard"></i>'; // Use Font Awesome icon for the button

        // Append the button to the code block
        block.appendChild(button);

        // Add click event to the button for copying the text
        button.addEventListener('click', () => {
            copyCode(block, button);
        });
    });
}

// Function to copy the code block content
function copyCode(block, button) {
    const code = block.querySelector('code').innerText;

    // Copy the code to the clipboard
    navigator.clipboard.writeText(code).then(() => {
        // Add copied class for animation
        button.classList.add('copied');
        setTimeout(() => {
            button.classList.remove('copied');
        }, 1000);
    });
}

// Call the function to fetch and render the markdown
getmd();
