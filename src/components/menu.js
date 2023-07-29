import './styles/menu.css'
import menuItem from './images/menu-item.svg'

export function buildMenu() {
    let menuSection = document.createElement('section')
    menuSection.id = 'menu'

    let menuHeader = document.createElement('h2')
    menuHeader.id = 'menu-header'
    menuHeader.textContent = 'Cozy Bean Café Menu'

    let menuCardsContainer = document.createElement('div')
    menuCardsContainer.classList.add('menu-cards')

    let menuCard1 = buildMenuCard(
        'Cozy Bean Signature Blend',
        'Our house specialty, a carefully crafted blend of premium coffee beans, resulting in a smooth and rich flavor profile.',
        '$3.50',
    )
    let menuCard2 = buildMenuCard(
        'Café Latte',
        'Smooth espresso combined with velvety steamed milk, creating a creamy and comforting coffee delight.',
        '$4.50',
    )
    let menuCard3 = buildMenuCard(
        'Classic Espresso',
        'A rich and bold shot of espresso, expertly brewed to perfection.',
        '$3.50',
    )
    let menuCard4 = buildMenuCard(
        'Americano',
        'A strong and robust shot of espresso diluted with hot water, providing a bold and invigorating coffee experience.',
        '$3.50',
    )
    let menuCard5 = buildMenuCard(
        'Cappuccino',
        'Equal parts espresso, steamed milk, and frothed milk, resulting in a perfectly balanced coffee with a fluffy foam topping.',
        '$4.50',
    )

    menuCardsContainer.append(menuCard1)
    menuCardsContainer.append(menuCard2)
    menuCardsContainer.append(menuCard3)
    menuCardsContainer.append(menuCard4)
    menuCardsContainer.append(menuCard5)

    menuSection.append(menuHeader)
    menuSection.append(menuCardsContainer)
    return menuSection
}

function buildMenuCard(itemName, description, price) {
    let menuCard = document.createElement('div')
    menuCard.classList.add('menu-card')
    let menuCardImg = document.createElement('img')
    menuCardImg.setAttribute('src', menuItem)
    menuCardImg.setAttribute('alt', '')
    menuCardImg.setAttribute('width', '100px')
    menuCardImg.classList.add('menu-img')

    let menuCardInfoContainer = document.createElement('div')
    menuCardInfoContainer.classList.add('card-info')
    let menuCardInfoHeader = document.createElement('h3')
    menuCardInfoHeader.textContent = itemName
    let menuCardInfoDescription = document.createElement('p')
    menuCardInfoDescription.textContent = description
    let menuCardInfoPrice = document.createElement('p')
    menuCardInfoPrice.textContent = price

    menuCardInfoContainer.appendChild(menuCardInfoHeader)
    menuCardInfoContainer.appendChild(menuCardInfoDescription)
    menuCardInfoContainer.appendChild(menuCardInfoPrice)

    menuCard.appendChild(menuCardImg)
    menuCard.appendChild(menuCardInfoContainer)

    return menuCard
}
