import { buildHeader } from "./components/header"
import { buildFooter } from "./components/footer";
import { buildHero, buildAbout, buildMenuAction } from "./components/about";
import { buildMenu } from "./components/menu";
import { buildContact } from "./components/contact";
import "./index.css"
console.log("Hello webpack!")

function buildSite(tab){ //"Home", "Contact", "Menu"
    let currentTab = tab
    let content = document.querySelector('#content')

    content.replaceChildren(); //Clear content

    let newMain = document.createElement('main') //Readd "main" tag
    content.appendChild(newMain);
    let main = content.querySelector("main");


    content.prepend(buildHeader((newTab)=>{
        if(newTab !== currentTab) {
            buildSite(newTab)
        }
    }, currentTab));
    if(currentTab === "Home"){
        //TODO: Modularize sections into "Home Page" module
        main.prepend(buildMenuAction(()=>{
            buildSite('Menu')
        }));
        main.prepend(buildAbout());
        main.prepend(buildHero());
    }
    if(currentTab === "Menu"){
        //TODO: Move topHeader to module
        let topHeader = document.createElement('h1');
        topHeader.textContent = "Cozy Bean Café" 
        main.prepend(topHeader);
        main.prepend(buildMenu());
    }
    if(currentTab === "Contact"){
        //TODO: Move topHeader to module
        let topHeader = document.createElement('h1');
        topHeader.textContent = "Cozy Bean Café" 
        main.prepend(topHeader);
        main.prepend(buildContact());
    }
    content.appendChild(buildFooter());
}

buildSite("Home");