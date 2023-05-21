console.log("Hello webpack!")

let content = document.querySelector('#content')
//Nav
const header = document.createElement('header')
const nav = document.createElement('nav')
const ul = document.createElement('ul')
const liHome = document.createElement('li')
liHome.textContent = "Home"
const liMenu = document.createElement('li')
liMenu.textContent = "Menu"
const liContact = document.createElement('li')
liContact.textContent = "Contact"
ul.appendChild(liHome)
ul.appendChild(liMenu)
ul.appendChild(liContact)
nav.appendChild(ul)
header.appendChild(nav)
content.prepend(header)

{/* <header>
    <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
</header> */}