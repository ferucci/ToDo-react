import { useSelector } from "react-redux";
import { ToDo } from "../Interfaces"
import { ListItem } from "../components/ListItem/ListItem"
import { RootState } from "../store";

export const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  // Перебираю каждый элемент и вывожу ссылку на элемент (динамическую страницу)
  return (
    <section className="links">
      <ul>
        {
          todoList.map((todo: ToDo) => {
            return (<ListItem todo={todo} key={todo.id} />)
          })
        }
      </ul>
    </section>
  )
}