import { buildHeader } from "./header"
import { buildFooter } from "./footer";
import { buildHero, buildAbout, buildMenuAction } from "./about";
console.log("Hello webpack!")
let currentTab = "Menu" //"Home", "Contact", "Menu"

let content = document.querySelector('#content')
let main = document.querySelector("main");
content.prepend(buildHeader());
if(currentTab === "Home"){
    main.prepend(buildMenuAction());
    main.prepend(buildAbout());
    main.prepend(buildHero());
}
main.appendChild(buildFooter());