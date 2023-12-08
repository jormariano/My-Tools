import './ToDoItem.css'

const ToDoItem = ({todo, deleted}) => {
  return (
    <li>
        <span>{todo}</span>
        <button onClick={ () => deleted(todo)}>Eliminar</button>
    </li>
  )
}

export default ToDoItem