import style from '../style/task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

const Task = ({task, onDelete, onComplete}) => {
    console.log(task);
    return(
        <div className={style.task}>
            <button className={style.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? style.textCompleted : " "}>{task.title}</p>

            <button className={style.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )

}

export default Task