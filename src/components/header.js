export function buildHeader(swapTab){
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const liHome = document.createElement('li')
    liHome.id = "header-home"
    liHome.textContent = "Home"
    liHome.addEventListener('click', ()=>{
        swapTab('Home')
    })
    const liMenu = document.createElement('li')
    liHome.id = "header-menu"
    liMenu.textContent = "Menu"
    liMenu.addEventListener('click', ()=>{
        swapTab('Menu')
    })
    const liContact = document.createElement('li')
    liContact.addEventListener('click', ()=>{
        swapTab('Contact')
    })
    liHome.id = "header-contact"
    liContact.textContent = "Contact"
    ul.appendChild(liHome)
    ul.appendChild(liMenu)
    ul.appendChild(liContact)
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