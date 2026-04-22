import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

const contentDiv = document.getElementById("content");

function clearContent() {
    contentDiv.innerHTML = "";
}

function loadHome() {
    console.log("loadHome function called");
    clearContent();
    contentDiv.appendChild(createHomePage());
    console.log("Home page loaded");
}

function loadMenu() {
    console.log("loadMenu function called");
    clearContent();
    contentDiv.appendChild(createMenuPage());
    console.log("Menu page loaded");
}

function loadContact() {
    console.log("loadContact function called");
    clearContent();
    contentDiv.appendChild(createContactPage());
    console.log("Contact page loaded");
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
    
    // Load Home page by default
    loadHome();
    
    // Get buttons
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("contact-btn");
    
    // Debug: Log what we found
    console.log("Home button found:", homeBtn);
    console.log("Menu button found:", menuBtn);
    console.log("Contact button found:", contactBtn);
    
    // Add event listeners with both click and pointer events
    if (homeBtn) {
        homeBtn.addEventListener("click", loadHome);
        console.log("Home button listener added");
    } else {
        console.error("Home button NOT found!");
    }
    
    if (menuBtn) {
        menuBtn.addEventListener("click", loadMenu);
        console.log("Menu button listener added");
    } else {
        console.error("Menu button NOT found!");
    }
    
    if (contactBtn) {
        contactBtn.addEventListener("click", loadContact);
        console.log("Contact button listener added");
    } else {
        console.error("Contact button NOT found!");
    }
});