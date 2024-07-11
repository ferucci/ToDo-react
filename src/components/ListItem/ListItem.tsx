import { Link } from "react-router-dom"
import { ToDo } from "../../Interfaces"
import classes from "./ListItem.module.scss"

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <li>
      <Link to={`${todo.id}`}
        className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}>
        {todo.text}
      </Link>
    </li>
  )
}