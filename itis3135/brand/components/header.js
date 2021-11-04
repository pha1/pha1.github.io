class Header extends HTMLElement
{
    constructor()
    {
        super();
    }



    connectedCallback()
    {
        this.innerHTML =
        
            '<header><div id="brandName"><h1>Purple Trusting Hydra, LLC.</h1><img src="images/purplehydra-openclipart-org.png" height="204" width="243" alt="Purple Trusting Hydra, LLC. Logo"></div></header><div><nav><a href="index.html">Home</a>~~<a href="about.html">About Us</a>~~<a href="contact.html">Contact Us</a></nav></div>';
    }
}

customElements.define('header-component', Header);