import style from '../style/header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from "react";

const Header = ({handleAddTask}) => {
    const [title, setTitle] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        handleAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return(
        <header className={style.header}>
            <form onSubmit={handleSubmit} className={style.newTaskForm}>
                <input placeholder="Agregar una nueva tarea" type="text" onChange={onChangeTitle} value={title} />
                <button>Agregar <AiOutlinePlusCircle size={20} /></button>
            </form>
        </header>
    )
}

export default Header