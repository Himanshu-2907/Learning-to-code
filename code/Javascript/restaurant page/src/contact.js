function createContactPage() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-content");
    
    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    title.classList.add("contact-title");
    
    // Contact info container
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    
    // Phone
    const phoneTitle = document.createElement("h3");
    phoneTitle.textContent = "Phone";
    const phone = document.createElement("p");
    phone.textContent = "(555) 123-4567";
    
    // Email
    const emailTitle = document.createElement("h3");
    emailTitle.textContent = "Email";
    const email = document.createElement("p");
    email.textContent = "info@flavorhaven.com";
    
    // Address
    const addressTitle = document.createElement("h3");
    addressTitle.textContent = "Address";
    const address = document.createElement("p");
    address.textContent = "123 Foodie Street, Culinary District, Food City, FC 12345";
    
    contactInfo.appendChild(phoneTitle);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(emailTitle);
    contactInfo.appendChild(email);
    contactInfo.appendChild(addressTitle);
    contactInfo.appendChild(address);
    
    // Map placeholder
    const mapPlaceholder = document.createElement("div");
    mapPlaceholder.classList.add("map-placeholder");
    mapPlaceholder.textContent = "📍 Map location would be displayed here";
    
    contactDiv.appendChild(title);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(mapPlaceholder);
    
    return contactDiv;
}

export default createContactPage;