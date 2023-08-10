function List ({task, isTask})  {
    return (
        <li className="list">
            {isTask ? (<del>{task +' ✔'}</del>) : (task + '❌')} 
        </li>
    )
}

const Task = () => {
    return(
        <div>
            <ol>
                <List isTask={false} task={"Terminar proyectos de Ada School"} />
                <List isTask={true} task={"Organizar la cama"} />
                <List isTask={false} task={"Ver la clases de Ada School"} />
                <List isTask={true} task={"Terminar el Todo App"} />
                <List isTask={false} task={"Terminar la seccion React Hooks de Ada School"} />
            </ol>
        </div>
    )

}

export default Task