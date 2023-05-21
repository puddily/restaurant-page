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


export function buildAbout(){
    let section = document.createElement('section')
    section.id = "about"
    let contentWrapper = document.createElement('div')
    contentWrapper.classList.add('content-wrapper')

    let h1 = document.createElement('h1')
        h1.textContent = "Cozy Bean Café"
    let h2 = document.createElement('h2')
        h2.textContent = "Simple, Homely, Coffee"
    let p1 = document.createElement('p')
        p1.textContent = "Cozy Bean Café is your go-to destination for a delightful coffee experience in a warm and inviting atmosphere. Our cozy café is designed to be your home away from home, where you can relax, connect, and savor the perfect cup of coffee."
    let p2 = document.createElement('p')
        p2.textContent = "Our dedicated baristas take pride in crafting each coffee with precision and care. From classic espresso to creamy cappuccinos and refreshing cold brews, our menu offers a wide range of options to cater to all coffee lovers."

    contentWrapper.appendChild(h1)
    contentWrapper.appendChild(h2)
    contentWrapper.appendChild(p1)
    contentWrapper.appendChild(p2)
    section.appendChild(contentWrapper)
    return section
}

{/* <section id="about">
    <div class="content-wrapper"> 
        <h1>Cozy Bean Café</h1>
        <h2>Simple, Homely, Coffee</h2>
        <p>Cozy Bean Café is your go-to destination for a delightful coffee experience in a warm and inviting atmosphere. Our cozy café is designed to be your home away from home, where you can relax, connect, and savor the perfect cup of coffee.</p>
        <p>Our dedicated baristas take pride in crafting each coffee with precision and care. From classic espresso to creamy cappuccinos and refreshing cold brews, our menu offers a wide range of options to cater to all coffee lovers.</p>
    </div>
</section> */}