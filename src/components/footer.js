import './styles/footer.css'

export function buildFooter() {
    let section = document.createElement('section')
    section.id = 'footer'
    let p = document.createElement('p')
    let a = document.createElement('a')
    a.href = 'https://github.com/puddily/restaurant-page'
    a.textContent = 'Made by Puddily - view me on Github!'

    p.appendChild(a)
    section.appendChild(p)
    return section
}
