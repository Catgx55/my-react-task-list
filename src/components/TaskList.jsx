import Task from "./Task";

const TaskList = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input type="text" className="text" placeholder="Add your task" />
                    <button type="submit" className="button pink">Add</button>
                </div>
                <Task />
            </div>
            <div>
                <label>You have 3 pending tasks </label>
                <button type="reset" className="button blue">Clear all</button>
            </div>
            
        </form>

    );
}

export default TaskList