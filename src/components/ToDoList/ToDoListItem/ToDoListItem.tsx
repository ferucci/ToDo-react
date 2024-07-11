import { ToDo } from "../../../Interfaces";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoListItem = (
  props: {
    item: ToDo,
    updateToDo: Function,
    deleteToDo: Function
  }
) => {
  const { text, isDone } = props.item;
  const notify = (flag: number) => {
    switch (flag) {
      case 0:
        toast.warning("Задание было успешно удалено!")
        break;
      case 1:
        toast.success("Задание выполнено")
        break;
      case 2:
        toast.info("Задание не выполнено")
        break;

      default:
        break;
    }

  };
  return (
    <li className="todo-list-item__wrapper">
      <span>{text}</span>
      <div className="todo-list-item__buttons">

        <button
          className="btn-trash"
          onClick={() => {
            notify(0);
            props.deleteToDo(props.item)
          }}

        ></button>
        <button
          onClick={() => {
            !isDone ? notify(1) : notify(2)
            props.updateToDo(props.item)
          }}
          className={
            isDone ? "btn-check" : "btn-uncheck"
          }></button>

      </div>
    </li>
  );
}