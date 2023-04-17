import { Servicios } from "../../db/servicios.js";
export class ServiceContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style rel="stylesheet">
        @import ".app/components/servicios/servicesStyle.css";
        </style>
        <h1>Pagina Servicios</h1>
        
        `
    }
}