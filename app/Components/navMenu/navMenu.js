export class NavMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode:"opnen" });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML=`
    <div class="nav-container">
        <nav>
            <section class="container1">
                <img id="logo" src="/images/logoWhite.png" alt="">
                <a class="alink" href="">Inicio</a>
                <a class="alink" href="servicios/servicios.html">Servicios</a>
                <a class="alink" href="">Nosotros</a>
            </section>
        </nav>
    </div>`
    }
}