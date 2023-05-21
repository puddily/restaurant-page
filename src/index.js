import { buildHeader } from "./header"
import { buildHero } from "./hero";
console.log("Hello webpack!")

let content = document.querySelector('#content')
content.prepend(buildHeader());
let main = document.querySelector("main");
main.prepend(buildHero());