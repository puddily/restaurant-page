import "./styles/header.css"

export function buildHeader(swapTab, currentTab){
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const liHome = document.createElement('li')
    const aHome = document.createElement('a')
    const topHeader = document.createElement('h1');
    topHeader.textContent = "Cozy Bean Café" 
    aHome.id = "header-home"
    aHome.textContent = "Home"
    aHome.addEventListener('click', (e)=>{
        e.preventDefault()
        swapTab('Home')
    })
    const liMenu = document.createElement('li')
    const aMenu = document.createElement('a')
    aMenu.id = "header-menu"
    aMenu.textContent = "Menu"
    aMenu.addEventListener('click', (e)=>{
        e.preventDefault()
        swapTab('Menu')
    })
    const liContact = document.createElement('li')
    const aContact = document.createElement('a')
    aContact.addEventListener('click', (e)=>{
        e.preventDefault()
        swapTab('Contact')
    })
    aContact.id = "header-contact"
    aContact.textContent = "Contact"

    if(currentTab === 'Home'){
        liHome.classList.add('focused')
    }
    else if(currentTab === 'Menu'){
        liMenu.classList.add('focused')
    }
    else if(currentTab === 'Contact'){
        liContact.classList.add('focused')
    }

    liHome.appendChild(aHome)
    liMenu.appendChild(aMenu)
    liContact.appendChild(aContact)

    ul.appendChild(liHome)
    ul.appendChild(liMenu)
    ul.appendChild(liContact)

    nav.appendChild(topHeader)
    nav.appendChild(ul)
    header.appendChild(nav)
    return header
}


{/* <header>
    <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
</header> */}