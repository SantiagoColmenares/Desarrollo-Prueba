export class MainContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
    <style rel="stylesheet">
        @import "./App/Components/mainPage/mainStyle.css";
    </style>

    <div class="first-message">
        <h1>Bienvenid@ Camper</h1>
        <p>Campus Programer Land</p>
        <h3>Acerca de la pagina</h3>
    </div>
    <div class="homepage">
        <p>Esta es una pagina informativa acerca de nuestros servicios ofrecidos a <br>nuestros queridos Campers</p>
    </div>
        
    <div class="contactanos container-grid">
        <img src="images/Space astronaut cartoon.png" alt="">
        
        <div class="social">
            <h3 class="contact-info contact-info-container">¡Contactanos!</h3>
            <a href="" class="contact-info contact-info-container"><img src="images/whatsapp.svg" alt="">+57 3118807659</a>
            <a href="" class="contact-info contact-info-container"><img src="images/facebookF.svg" alt="">@Campusland</a>
            <a href="" class="contact-info contact-info-container"><img src="images/twitter.svg" alt="">@CampusLatam</a>
            <a href="" class="contact-info contact-info-container"><img src="images/instagram.svg" alt="">@campusdevelopers</a>
        </div>
    </div>`
    }
}
customElements.define("main-content", MainContent);