
class OneDialog extends HTMLElement {
    connectedCallback() {

        this.innerHTML = myTitl[0];

    }
}

customElements.define('one-dialog', OneDialog);

