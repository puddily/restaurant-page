import { buildHeader } from "./header"
console.log("Hello webpack!")

let content = document.querySelector('#content')
content.prepend(buildHeader());


{/* <header>
    <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
</header> */}