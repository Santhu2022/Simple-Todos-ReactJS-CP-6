import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {title, id} = todoDetails
  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-text">{title}</p>
      <button className="delete-button" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
