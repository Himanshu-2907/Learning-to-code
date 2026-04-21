import "./styles.css";  // ADD THIS LINE
import { greeting } from "./greeting.js";
import myImage from "./my-image.png"
console.log(greeting);
const img=document.createElement("img")
img.src=myImage
document.body.appendChild(img)