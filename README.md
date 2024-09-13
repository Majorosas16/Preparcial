Keep in mind Majo

npm init -y
npm install serve -D
start = "serve"
type = "module"

>users options
"explorer.compactFolders": false,

then file system (according with the rules)

public
|  |src
|  |  | components
|  |  |   | charactersCard
|  |  |   |    charactersCard.js
|  |  |   |    charactersCard.css
|  |  | indexPadre.js
|  |  indexAbuelo.js
index.html
index.css

En el abuelo: class AppContainer / constructor(){} / connectedCallback(){} / render(){} / customElements.define('app-container',AppContainer)

el super(); // inicializar elemtnos como el HTML que heredan de otrad clases y así poder usarlos / habilitarlo

LINKS DE REPOS

Ejercicios de For each: https://github.com/pangar03/Repaso-quiz-1
Componentes con data: https://github.com/LeiderCalvo/DCA/blob/08_webComponentsWithData/public/src/indexAbuelo2.js
Componentes boton (counter): https://github.com/LeiderCalvo/DCA/tree/07_webComponentsActionsButtons
repo Nikol entendible: https://github.com/NikSala10/Preparcial1/tree/main/public/src/components

-------------------------------------
guia de como hacerlo:

// product-card.js
import './styles.css';

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.showDetail();
        });
    }

    render() {
        const title = this.getAttribute('title') || 'Product Title';
        const description = this.getAttribute('description') || 'Product Description';

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles.css">
            <div class="card">
                <h3>${title}</h3>
                <p>${description}</p>
                <button>Show Details</button>
            </div>
        `;
    }

    showDetail() {
        const event = new CustomEvent('show-detail', {
            detail: {
                title: this.getAttribute('title'),
                description: this.getAttribute('description')
            }
        });
        this.dispatchEvent(event);
    }
}

customElements.define('product-card', ProductCard);

