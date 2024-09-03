import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { Reclame } from "../components/Реклама/Index"

import { ToDo } from "../Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import { Toggle } from "../components/ToggleTheme/Toggle";

export const TDLPage = () => {
  // Получаю данные с помощью Redux
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispath = useDispatch()

  const createNewToDo = (text: string, description: string, color?: string) => {
    dispath(createAction({ text, description, color }))
  }
  const updateToDo = (item: ToDo) => {
    dispath(updateAction(item))
  }
  const deleteToDo = (item: ToDo) => {
    dispath(deleteAction(item))
  }

  return (
    <>
      <ThemeContext.Consumer>
        {({ theme, setTheme }: any) => (
          <Toggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark)
              if (theme === themes.dark) setTheme(themes.light)
            }}
            value={theme === themes.dark}
          />
        )}
      </ThemeContext.Consumer>
      <Form createNewToDo={createNewToDo}></Form>
      <ToDoList todos={todoList} deleteToDo={deleteToDo} updateToDo={updateToDo} />
      <Reclame />
    </>
  )

}