import './styles/footer.css'

export function buildFooter() {
    let section = document.createElement('section')
    section.id = 'footer'
    let p = document.createElement('p')
    let a = document.createElement('a')
    a.href = 'https://github.com/puddily'
    a.textContent = 'Made by Puddily - view my github'

    p.appendChild(a)
    section.appendChild(p)
    return section
}
