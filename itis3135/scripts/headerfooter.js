document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data for the first navbar menu
    fetch("mainmenu.json")
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById("menu-container");
            data.forEach(item => {
                const menuItem = createMenuItem(item);
                menuContainer.appendChild(menuItem);
            });
        })
        .catch(error => console.error("Error fetching first navbar menu:", error));

    //Fetch JSON data for the subnav bar menu (submenu.json)
    fetch("submenu.json")
        .then(response => response.json())
        .then(data => {
            const subnavContainer = document.getElementById("subnav-container");
            data.forEach(item => {
                const menuItem = createMenuItem(item);
                subnavContainer.appendChild(menuItem);
            });
        })
        .catch(error => console.error("Error fetching subnav bar menu:", error));

    // Fetch JSON data for the footer menu
    fetch("lastmenu.json")
        .then(response => response.json())
        .then(data => {
            const footerContainer = document.getElementById("footer-container");
            data.forEach(item => {
                const menuItem = createMenuItem(item);
                footerContainer.appendChild(menuItem);
            });

            // Add the footer content
            const footerContent = `<p> Page Designed By <a href="https://www.PatelEnterprise.com/index.html">Patel Enterprise</a> © 2023, <a href="https://www.freecodecamp.org/certification/kpate222/responsive-web-design">Certified in RWD</a>, <a href="https://www.freecodecamp.org/certification/kpate222/javascript-algorithms-and-data-structures-v8"> Certified in JS </a></p>`;
            footerContainer.innerHTML += footerContent;
        })
        .catch(error => console.error("Error fetching footer menu:", error));

    // Function to create a menu item
    function createMenuItem(item) {
        const menuItem = document.createElement("a");
        menuItem.classList.add("menu-item");
        menuItem.textContent = item.name;
        menuItem.href = item.url;

        // Create and append the favicon
        const favicon = document.createElement("img");
        favicon.src = "images/bear.png";
        favicon.alt = "Favicon";
        favicon.classList.add("favicon");
        menuItem.appendChild(favicon);

        return menuItem;
    }

    // Set font size for menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.style.fontSize = "20px";
    });
});

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://webaim.org/search/?q=afsd", "_blank");
}