class Item extends HTMLElement {
    constructor() {
      super();
        this.attachShadow({ mode: "open" });
        this.state = false;
    }

    static get observedAttributes() {
        return ["title", "bio", "state"];
      }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      if (oldValue !== newValue) {
        this[propName] = newValue;
        this.render();
      }
    }

    stateValue() {
        if (this.state) {
            this.state = !this.state;
        }
        this.render();
    }
  
    render() {
        this.shadowRoot.innerHTML = `
        <h1>${this.title}</h1>
        <p>${this.bio}</p>
        <button>${this.state ? 'Completada' : 'Pendiente'}</button>
  
      `;
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.stateValue());
        
     //El this.state entra en true porque pasó por le método stateValue()
    }
  }
  
  customElements.define("task-item", Item);
  export default Item;