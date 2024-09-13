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

Componentes con data: https://github.com/LeiderCalvo/DCA/blob/08_webComponentsWithData/public/src/indexAbuelo2.js

