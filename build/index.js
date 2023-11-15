// src/util/string.js
var add = function() {
  return "add";
};
var year = function() {
  return new Date().getFullYear();
};

// src/components/input.js
var tagName = "custom-input";
var template = `
  <input type="text" placeholder="${year()}" />
`;

class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
    console.log("input created");
  }
}
customElements.define(tagName, Input);

// src/components/select.js
var tagName2 = "custom-select";
var template2 = `
  <select>
    <option value="${add()}">${year()}</option>
  </select>
`;

class Input2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template2;
    console.log("input created");
  }
}
customElements.define(tagName2, Input2);

//# debugId=DA8D2FDA1CB9205064756e2164756e21
