
class OneDialog extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `hihi`;

    }
}

customElements.define('one-dialog', OneDialog);

