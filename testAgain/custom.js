
// class OneDialog extends HTMLElement {
//     connectedCallback() {

//         this.innerHTML = `<div class="one=dialog">
//         <p><h1>hallo</h1></p>
//         <p>lets go</p>
//     </div>`;
//     document.getElementsByClassName("one-dialog")[1].style.backgroundColor = "yellow";


//     }
// }

// customElements.define('one-dialog', OneDialog);


{/* <template id="my-paragraph">
        <style>
            p {
                color: white;
                background-color: #666;
                padding: 5px;
            }
        </style>
        <p>My paragraph</p>
    </template> */}



customElements.define('my-paragraph',
class extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById('my-paragraph');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
);
