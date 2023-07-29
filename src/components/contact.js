import "./styles/contact.css"
import map from './images/map.png'

export function buildContact(){
    let contactSection = document.createElement('section')
    contactSection.id = "contact"
    let contactHeader = document.createElement('h2')
    contactHeader.textContent = "Contact Us"
    contactHeader.id = "contact-header";
    let contactBlurb = document.createElement('p')
    contactBlurb.textContent = 
    `We would love to hear from you! If you have any questions, 
    feedback, or inquiries, please don't hesitate to reach out to us. 
    Here are the ways you can get in touch!`
    contactBlurb.id = "contact-blurb";
    let contactMap = document.createElement('img');
    contactMap.setAttribute('src', map)   
    contactMap.setAttribute('alt', 
    "Map containing address in Huntsville, AL")   
    contactMap.id = "contact-map"; 
    let email = document.createElement('p')
    email.textContent = "Email: contact@cozybeancafe.com"
    let phone = document.createElement('p')
    phone.textContent = "+1 (123) 456-7890";

    contactSection.appendChild(contactHeader)
    contactSection.appendChild(contactBlurb)
    contactSection.appendChild(contactMap)
    contactSection.appendChild(email)
    contactSection.appendChild(phone)
    return contactSection;
}