import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../Interfaces'
import { todos as data } from '../data/index';

export interface ToDoState {
  todos: ToDo[]
}
// state ( состояние )
const initialState: ToDoState = {
  // Массив внутри данного стора
  todos: data, // Заменить значение на data, чтоб отображались все элементы существующие в data
}

// Весь reducer
export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  // reducer - некий мутатор нашего состояния
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: state.todos.length,
        // Объект payload принимает наш текст
        text: action.payload,
        isDone: false
      }
      state.todos = [...state.todos, newToDo]
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      // map - изменяет объекты
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
      state.todos = newTodos
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
      state.todos = newTodos
    },
  },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer