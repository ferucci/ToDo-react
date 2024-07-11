import { useNavigate, useParams } from "react-router-dom"
import { CompoProps, ToDo } from "../Interfaces"
import { useEffect, useState } from "react"

export const ItemInfo = ({ todos }: CompoProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo>()
  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id);
    if (searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('/404')
    }
    // Следит за состоянием данных элементов: [todos, id, navigate]
  }, [todos, id, navigate])

  return (
    <section className="container">
      <h3>{todo?.text}</h3>
      <p>{todo?.description || "Default Description"}</p>
      <div>{todo?.notes || "Default Notes"}</div>
    </section>
  )
}

