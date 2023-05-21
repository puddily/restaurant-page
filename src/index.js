import { buildHeader } from "./header"
import { buildHero, buildAbout } from "./about";
console.log("Hello webpack!")

let content = document.querySelector('#content')
content.prepend(buildHeader());
let main = document.querySelector("main");
main.prepend(buildAbout());
main.prepend(buildHero());