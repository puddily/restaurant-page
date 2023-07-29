import { buildHeader } from "./components/header"
import { buildFooter } from "./components/footer";
import { buildHome } from "./components/home";
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
        //Pass in buildSite('Menu') so that the "visit our menu" button can
        //switch to the menu tab
        main.prepend(buildHome(()=>{
            buildSite('Menu') 
        }));
    }
    if(currentTab === "Menu"){
        main.prepend(buildMenu());
    }
    if(currentTab === "Contact"){
        main.prepend(buildContact());
    }
    content.appendChild(buildFooter());
}

buildSite("Home");