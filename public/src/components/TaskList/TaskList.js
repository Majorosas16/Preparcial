import '../TaskItem/TaskItem.js'
    
class TaskList extends HTMLElement {

    constructor (){
        super();
        this.attachShadow({mode: 'open'}); //Para que todo se pueda ver en el DOM
        this.task = [];
    }

    connectedCallback(){
        this.render();

        // const form = this.shadowRoot.querySelector('.task-form')

        // form.addEventListener("submit",(e)=>{
        //     e.preventDefault();
           
        //     const title = this.shadowRoot.querySelector('.input-title').value // al final el value porque interesa es capturar el nombre de la tarea
        //     const bio = this.shadowRoot.querySelector('.input-bio').value 

        //     this.task.push ({ title, bio, state:false })

        //     console.log(this.task);
        // })
    }


    render(){
        this.shadowRoot.innerHTML=`
        <h2>Task List</h2>

        <form class="task-form">
            <input type = "text" placeholder="Escribe el nombre de la tarea" class= "input-title" required>
            <input type = "text" placeholder="Describe la tarea" class= "input-bio" required>
            <button>Agregar tarea</button>
            <ul class="tasks-container"></ul>
        </form>
        `
        this.shadowRoot.querySelector('.task-form').addEventListener("submit", (e) => {
            e.preventDefault(); 
            
        const title = this.shadowRoot.querySelector('.input-title').value // al final el value porque interesa es capturar el nombre de la tarea
        const bio = this.shadowRoot.querySelector('.input-bio').value 

        this.task.push ({ title, bio, state:false })

            this.addTask({ title, bio, state:false })
            
            this.shadowRoot.querySelector('.task-form').reset();
            
        });

        this.task.forEach(tasks => this.addTask(tasks))
    }

    addTask({ title, bio, state }) {
        
        const tasksContainer = this.shadowRoot.querySelector('.tasks-container')
        tasksContainer.innerHTML += `
        <task-item title="${title}" bio="${bio}" state="${state}"></task-item>
        `

        // const taskItem2 = document.createElement('task-item')
        // taskItem2.setAttribute('title', title)
        // taskItem2.setAttribute('bio', bio)
        // taskItem2.setAttribute('state', state)
        
        // this.shadowRoot.querySelector('.task-container').appendChild(taskItem2)

    }
}

customElements.define('task-list',TaskList);
export default TaskList; // se exporta la clase para poder usarla