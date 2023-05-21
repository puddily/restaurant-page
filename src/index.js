import { buildHeader } from "./header"
import { buildFooter } from "./footer";
import { buildHero, buildAbout, buildMenuAction } from "./about";
console.log("Hello webpack!")

let content = document.querySelector('#content')
content.prepend(buildHeader());
let main = document.querySelector("main");
main.prepend(buildMenuAction());
main.prepend(buildAbout());
main.prepend(buildHero());
main.appendChild(buildFooter());