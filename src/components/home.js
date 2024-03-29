import './styles/home.css'
import coffee from './images/coffee.jpg'

export function buildHome(switchToMenuTab) {
    let container = document.createElement('div')
    container.prepend(buildMenuAction(switchToMenuTab))
    container.prepend(buildAbout())
    container.prepend(buildHero())
    return container
}

function buildHero() {
    let section = document.createElement('section')
    section.id = 'hero'
    let img = document.createElement('img')
    img.setAttribute('src', coffee)
    img.setAttribute('alt', '')
    img.id = 'hero-img'
    let heroContentOverlay = document.createElement('div')
    heroContentOverlay.id = 'hero-content-overlay'

    //Create hero section header
    let h2 = document.createElement('h2')
    let altTextSpan1 = document.createElement('span')
    altTextSpan1.className = 'alt-color'
    altTextSpan1.textContent = 'Amazing'
    let altTextSpan2 = document.createElement('span')
    altTextSpan2.className = 'alt-color'
    altTextSpan2.textContent = 'warmly'

    h2.appendChild(altTextSpan1)
    h2.appendChild(document.createTextNode(' coffee '))
    h2.appendChild(altTextSpan2)
    h2.appendChild(document.createTextNode(' enjoyed'))

    //Put everything back together
    heroContentOverlay.appendChild(h2)
    section.appendChild(img)
    section.appendChild(heroContentOverlay)
    return section
}

function buildAbout() {
    let section = document.createElement('section')
    section.id = 'about'
    let contentWrapper = document.createElement('div')
    contentWrapper.classList.add('content-wrapper')

    let h2 = document.createElement('h2')
    h2.textContent = 'Simple, Homely, Coffee'
    let p1 = document.createElement('p')
    p1.textContent =
        `Cozy Bean Café is your go-to destination for a delightful 
        coffee experience in a warm and inviting atmosphere. 
        Our cozy café is designed to be your home away from home, 
        where you can relax, connect, and savor the perfect cup of coffee.`
    let p2 = document.createElement('p')
    p2.textContent =
        `Our dedicated baristas take pride in crafting each coffee 
        with precision and care. From classic espresso to creamy cappuccinos 
        and refreshing cold brews, our menu offers a wide range of options to 
        cater to all coffee lovers.`
    contentWrapper.appendChild(h2)
    contentWrapper.appendChild(p1)
    contentWrapper.appendChild(p2)
    section.appendChild(contentWrapper)
    return section
}

function buildMenuAction(goToHomeTab) {
    let section = document.createElement('section')
    section.id = 'menu-action'
    let overlay = document.createElement('div')
    overlay.id = 'menu-action-overlay'
    let container1 = buildMenuActionContainer(
        'Wide Assortment',
        `No matter what you like - strong, smooth, or something special - 
        we've got a cup with your name on it!`,
    )
    let container2 = buildMenuActionContainer(
        'High Quality Beans',
        `We use 100% Arabica beans, sourced ethically from small farms 
        around the globe.`,
    )
    let container3 = buildMenuActionContainer(
        'Help the globe',
        `Our coffee cups are made from 100% recycled materials. We also use 
        biodegradable straws and compost our coffee grounds.`,
    )

    let menuLink = document.createElement('div')
    menuLink.id = 'menu-link'
    let menuLinkA = document.createElement('a')
    menuLinkA.href = '#Menu'
    menuLinkA.textContent = 'Visit our menu'
    menuLinkA.addEventListener('click', (e) => {
        e.preventDefault()
        window.location = '#Menu'
        goToHomeTab()
    })
    menuLink.appendChild(menuLinkA)

    overlay.appendChild(container1)
    overlay.appendChild(container2)
    overlay.appendChild(container3)
    section.appendChild(overlay)
    section.appendChild(menuLink)
    return section
}
function buildMenuActionContainer(headerText, text) {
    let container = document.createElement('div')
    container.classList.add('container')
    let header = document.createElement('h3')
    header.textContent = headerText
    let p = document.createElement('p')
    p.textContent = text
    container.appendChild(header)
    container.appendChild(p)
    return container
}

