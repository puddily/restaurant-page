import { buildHeader } from "./components/header"
import { buildFooter } from "./components/footer";
import { buildHero, buildAbout, buildMenuAction } from "./components/about";
import { buildMenu } from "./components/menu";
console.log("Hello webpack!")
let currentTab = "Contact" //"Home", "Contact", "Menu"

let content = document.querySelector('#content')
let main = document.querySelector("main");
content.prepend(buildHeader());
if(currentTab === "Home"){
    main.prepend(buildMenuAction());
    main.prepend(buildAbout());
    main.prepend(buildHero());
}
if(currentTab === "Menu"){
    //TODO: Move topheader to module
    let topHeader = document.createElement('h1');
    topHeader.textContent = "Cozy Bean Cafe" 
    main.prepend(topHeader);
    main.prepend(buildMenu());
}
if(currentTab === "Contact"){
    //TODO: Move topheader to module
}
main.appendChild(buildFooter());