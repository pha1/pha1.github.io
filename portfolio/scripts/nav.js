fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.getElementById("replace_with_navbar");
    oldelem.innerHTML = text;
    /*
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "navbar");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
    */
})