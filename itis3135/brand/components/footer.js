class Footer extends HTMLElement
{
    constructor()
    {
        super();
    }



    connectedCallback()
    {
        this.innerHTML =
        
            '<div id="footerText">Visit our sponsors!</div><nav><a href="https://i.pinimg.com/originals/8f/56/25/8f562595659af2c13c52da642e1d48a4.jpg">Purple 1967 Mustang</a>~<a href="https://www.riotgames.com/en">Riot Games</a>~<a href="https://www.square-enix.com/">Square-Enix</a></nav><footer><br /><p>Designed by Purple Trusting Hydra, LLC.</p><p>Copyright 2021 Purple Trusting Hydra, LLC</p></footer>';
    }
}

customElements.define('footer-component', Footer);