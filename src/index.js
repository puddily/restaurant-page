console.log("Hello webpack!")

let content = document.querySelector('#content')
//Nav
const header = document.createElement('header')
const nav = document.createElement('nav')
const ul = document.createElement('ul')
const liHome = document.createElement('li')
const liMenu = document.createElement('li')
const liContact = document.createElement('li')
ul.appendChild(liHome)
ul.appendChild(liMenu)
ul.appendChild(liContact)
nav.appendChild(ul)
header.appendChild(nav)
content.appendChild(header)

{/* <header>
    <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
</header> */}