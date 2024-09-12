class TaskList extends HTMLElement {

    constructor (){
        super();
        this.attachShadow({mode: 'open'}); //Para que todo se pueda ver en el DOM
        this.task = [];
    }

    connectedCallback(){
        this.render();

        const form = this.shadowRoot.querySelector('.task-form')

        form.addEventListener("submit",(e)=>{
            e.preventDefault();
           
            const title = this.shadowRoot.querySelector('.input-title').value // al final el value porque interesa es capturar el nombre de la tarea
            const bio = this.shadowRoot.querySelector('.input-bio').value 

            this.task.push ({ title, bio, state:false })

            console.log(this.task);
        })
    }


    render(){
        this.shadowRoot.innerHTML=`
        <h2>Task List</h2>

        <form class="task-form">
            <input type = "text" placeholder="Escribe el nombre de la tarea" class= "input-title" required>
            <input type = "text" placeholder="Describe la tarea" class= "input-bio" required>
            <button>Agregar tarea</button>
            <ul class="task-container"></ul>
        </form>
        `
        // this.shadowRoot.querySelector('task-form').addEventListener("submit", (e) => {
        // e.preventDefault(); 
        // alert("Hola");
        // });
    }
}

customElements.define('task-list',TaskList);
export default TaskList; // se exporta la clase para poder usarla