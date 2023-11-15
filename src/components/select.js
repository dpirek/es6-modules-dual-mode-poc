import { year } from '../util/string.js';
const tagName = 'custom-select';
const template = `
  <select>
    <option>${year()}</option>
  </select>
`;

class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    console.log('input created');
  }
}

customElements.define(tagName, Input);