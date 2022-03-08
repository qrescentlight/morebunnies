
class OneDialog extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div class="one=dialog">
        <p><h1>hallo</h1></p>
        <p>lets go</p>
    </div>`;
    document.getElementsByClassName("one-dialog")[1].style.backgroundColor = "yellow";


    }
}

customElements.define('one-dialog', OneDialog);

