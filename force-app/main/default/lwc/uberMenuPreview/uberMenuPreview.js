import { LightningElement, api } from "lwc";

export default class UberMenuPreview extends LightningElement {
  _menuItems;

  @api
  get menuItems() {
    return this._menuItems;
  }
  set menuItems(value) {
    this._menuItems = value;
    this.loading = false;
  }

  loading = true;

  handleClose() {
    this.close();
  }
}

// this code may be inside ./uber-library.js
class UberModal extends HTMLElement {}

customElements.define("uber-menu-container", UberModal);
