import { useEffect, useState } from 'react';
import Header from './components/Header'
import TaskList from './components/TaskList'

const LOCAL_STORAGE_KEY = 'todo:taskList';

function App() {
  const [taskList, setTaskList] = useState([]);

  function loadSaveTasks(){
    const save = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(save){
      setTaskList(JSON.parse(save));
    }
  }

  function setTaskListAndSave(newTasks){
    setTaskList(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSaveTasks();
  }, [])

  function addTask(taskTitle){
    if(taskTitle == ""){
      window.alert("No haz ingresado nada.")
    }else{
      setTaskListAndSave([...taskList, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }]);
    }
    
  }

  function deleteTaskById(taskId){
    const newTasks = taskList.filter(task => task.id !== taskId);
    setTaskListAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId){
    const newTasks = taskList.map(task => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTaskListAndSave(newTasks);
  }
  
  return (
    <div>
      <Header handleAddTask={addTask} />
      <TaskList taskList={taskList} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById} />
    </div>
  )
}

export default App
