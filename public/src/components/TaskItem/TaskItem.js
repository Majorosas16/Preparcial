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
        this[propName] = propName === "state"? newValue === "true" : newValue ; //que llegue bien el prop de state  
        this.render();
      }
    }

    stateValue() {
        this.state = !this.state;
        this.render();
    }
  
    render() {
        this.shadowRoot.innerHTML = `
        <li>
        <h2>${this.title}</h2>
        <p>${this.bio}</p>
        <p>${!this.state ? 'Pendiente' : 'Completada'}</p>
        <input type="checkbox" ${this.state ? "checked" : ""} class="task-checkbox"> 
        </li>
  
      `;
        this.shadowRoot.querySelector('.task-checkbox').addEventListener('change', () => this.stateValue());
        
      //El this.state entra en true porque pasó por le método stateValue()
      // El input type="checkbox" Va a permitir checkear y descheckear la tarea
    }
  }
  
  customElements.define("task-item", Item);
  export default Item;