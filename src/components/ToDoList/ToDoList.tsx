import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss';
import { ToDo } from "../../Interfaces";
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoList = (
  props: {
    todos: ToDo[],
    updateToDo: Function,
    deleteToDo: Function
  }) => {
  const checksList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, id) => {
        return (
          <ToDoListItem
            item={item}
            key={id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      })
  }
  const unchecksList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, id) => {
        return (
          <ToDoListItem
            item={item}
            key={id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      })
  }
  return (
    <div className="todo-container">
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Flip}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ul className="todo-list failed">
        {checksList()}
      </ul>
      <ul className="todo-list completed">
        {unchecksList()}
      </ul>
    </div>
  );
}