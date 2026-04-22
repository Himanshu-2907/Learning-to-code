import "./styles.css";
import createHomePage from "./home.js";

const contentDiv = document.getElementById("content");
contentDiv.innerHTML = "";
contentDiv.appendChild(createHomePage());

console.log("Home page loaded!");