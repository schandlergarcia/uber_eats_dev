import { LightningElement, api } from 'lwc';

// import 3rd party web component library
import "./uber-library";

export default class UberMenuPreview extends LightningElement {

    @api
    get menuItems() {
        return this._menuItems;
    }
    set menuItems(value) {
       this.menuItems = value;
       this.loading = false;
    }

    loading = true;

    handleClose() {
        this.close();
    }

}

// this code may be inside ./uber-library.js
class UberModal extends HTMLElement {}

customElements.define('uber-menu-container', UberModal);