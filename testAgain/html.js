
class OneDialog extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<template id="my-paragraph">
<style>
p {
    color: white;
    background-color: #666;
    padding: 5px;
}
</style>
<p>My paragraph</p>
</template>`;


    }
}

customElements.define('one-dialog', OneDialog);

