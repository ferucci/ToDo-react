import { useSelector } from 'react-redux';
import './Index.scss';
import { RootState } from '../../store';
import { ToDo } from '../../Interfaces';
import { ListItem } from '../ListItem/ListItem';

export const ViewListItem = () => {

  const todoList = useSelector((state: RootState) => state.todoList.todos);
  // Перебираю каждый элемент и вывожу ссылку на элемент (динамическую страницу)

  return (
    <>
      {
        todoList.map((todo: ToDo) => {
          return (<ListItem todo={todo} key={todo.id} />)
        })
      }
    </>
  );
}