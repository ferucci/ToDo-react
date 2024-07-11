import { CompoProps, ToDo } from "../Interfaces"
import { ListItem } from "../components/ListItem/ListItem"

export const ViewList = ({ todos }: CompoProps) => {
  // Перебираю каждый элемент и вывожу ссылку на элемент (динамическую страницу)
  return (
    <section className="links">
      <ul>
        {
          todos.map((todo: ToDo) => {
            return (<ListItem todo={todo} key={todo.id} />)
          })
        }
      </ul>
    </section>
  )
}