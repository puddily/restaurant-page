export function buildHero(){
    let section = document.createElement('section')
    section.id = "hero"
    let img = document.createElement('img')
    img.id= "hero-img"
    img.setAttribute('src', 'images/coffee.jpg')
    let heroContentOverlay = document.createElement('div')
    heroContentOverlay.id = "hero-content-overlay"

    //Create hero section header
    let h2 = document.createElement('h2')
    let altTextSpan1 = document.createElement('span')
    altTextSpan1.className = 'alt-color';
    altTextSpan1.textContent = 'Amazing';
    let altTextSpan2 = document.createElement('span')
    altTextSpan2.className = 'alt-color';
    altTextSpan2.textContent = 'warmly';

    h2.appendChild(altTextSpan1);
    h2.appendChild(document.createTextNode(' coffee '));
    h2.appendChild(altTextSpan2);
    h2.appendChild(document.createTextNode(' enjoyed'));

    //Put everything back together
    heroContentOverlay.appendChild(h2)
    section.appendChild(img)
    section.appendChild(heroContentOverlay)
    return section;
}



{/* <section id="hero">
    <img id="hero-img" src="images/coffee.jpg">
    <div id="hero-content-overlay">
        <h2><span class="alt-color">Amazing</span> coffee <span class="alt-color">warmly</span> enjoyed</h2>
    </div>
</section> */}