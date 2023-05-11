import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete, onToggle }) {
    return (
      <div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task._id)}>
        <h3>
            {task.task} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task._id)} 
            />
        </h3>
        <p>{task.date}</p>
      </div>
    )
}
  
export default Task