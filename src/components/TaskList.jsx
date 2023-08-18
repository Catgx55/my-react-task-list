import Task from "./Task";
import style from "../style/taskLists.module.css";

const TaskList = ({taskList, onDelete, onComplete}) => {
    const taskListQuantity = taskList.length;
    const completedTaskList = taskList.filter(task => task.isCompleted).lenth;
    console.log(completedTaskList);

    return(
        <section className={style.tasks}>
            <header className={style.header}>
                <div>
                    <p>Crear tu tarea</p>
                    <span>{taskListQuantity}</span>
                </div>

                <div>
                    <p className={style.textPurple}>Tarea completa</p>
                    <span>{completedTaskList} De {taskListQuantity}</span>
                </div>
            </header>

            <div className={style.list}>
                {taskList.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />))}
            </div>
        </section>
    );
}

export default TaskList