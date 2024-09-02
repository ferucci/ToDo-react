import { useNavigate, useParams } from "react-router-dom";
import { ToDo } from "../../Interfaces";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import cls from './index.module.scss';
import defaultPhoto from '../../assets/images/default_item_bg.png';

export const ItemInfo = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo>()
  useEffect(() => {
    const searchTodo = todoList.find((todo) => String(todo.id) === id);
    if (searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('/404')
    }
    // Следит за состоянием данных элементов: [todos, id, navigate]
  }, [todoList, id, navigate])

  return (
    <section className="container">
      <img className={cls.item} src={todo?.urlPhoto || defaultPhoto} alt="" />
      <article className={cls.desc}>
        <h3>{todo?.text}</h3>
        <p>{todo?.description || "Default Description"}</p>
        <div>{todo?.notes || "Default Notes"}</div>
      </article>

    </section>
  )
}