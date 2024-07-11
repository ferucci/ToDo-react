import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { Reclame } from "../components/Реклама/Index"

import { useState } from "react";

import { todos as data } from '../data/index';
import { ToDo } from "../Interfaces";

export const TDLPage = () => {
  // Типизирую получаемые данные: useState<ToDo[]>
  const [todos, setTodos] = useState<ToDo[]>(data);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    // Добавляю все элементы из массива todos, а так же новую тудушку
    setTodos([...todos, newToDo]);
  }
  const updateToDo = (item: ToDo) => {
    // map - изменяет объекты
    const newTodos = todos.map(todo => {
      if (todo.id === item.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(newTodos);
  }
  const deleteToDo = (item: ToDo) => {
    const newTodos = todos.filter(todo => todo.id !== item.id)
    setTodos(newTodos);
  }

  return (
    <>
      <Form createNewToDo={createNewToDo}></Form>
      <ToDoList
        todos={todos}
        deleteToDo={deleteToDo}
        updateToDo={updateToDo}
      ></ToDoList>

      <Reclame />
    </>
  )

}