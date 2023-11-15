import { year } from '../util/string.js';
const tagName = 'custom-input';
const template = `<input type="text" placeholder="${year()}" />`;

class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    console.log('input created');
  }
}

customElements.define(tagName, Input);