

// customElements.define('my-paragraph',
//     class extends HTMLElement {
//         constructor() {
//             super();
//             let template = document.getElementById('my-paragraph');
//             let templateContent = template.content;

//             const shadowRoot = this.attachShadow({ mode: 'open' });
//             shadowRoot.appendChild(templateContent.cloneNode(true));
//         }
//     }
// );

getText("template.txt");

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.getElementById("demo").innerHTML = myText;
}

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "template.txt");
    xhttp.send();
}

