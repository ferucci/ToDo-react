import { ToDo } from "../../../Interfaces";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import data from "../../../data" - получать с помощью хука Redux-a useSelector

export const ToDoListItem = (
  props: {
    item: ToDo,
    updateToDo: Function,
    deleteToDo: Function
  }
) => {
  const { text, color, isDone } = props.item;
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
      <span className={color ? `text` : ""}>{text}</span>
      <div className="todo-list-item__buttons">

        <button
          className="btn-trash"
          onClick={() => {
            notify(0);
            props.deleteToDo(props.item)
          }}>
          <svg
            width="1.5rem" height="1.5rem" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z" /><path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z" />
          </svg>
        </button>
        <button
          onClick={() => {
            !isDone ? notify(1) : notify(2)
            props.updateToDo(props.item)
          }}
          className={
            isDone ? "btn-check" : "btn-uncheck"
          }>
          <svg width="2rem" height="2rem" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <title>success-standard-line</title>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"></path><path d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"></path>

          </svg>
        </button>

      </div>
    </li>
  );
}