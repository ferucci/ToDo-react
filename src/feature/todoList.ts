import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../Interfaces'

export interface ToDoState {
  todos: ToDo[]
}
// state ( состояние )
const initialState: ToDoState = {
  // Массив внутри данного стора
  todos: [],
}

export const todoSlice = createSlice({
  // Весь reducer 
  name: 'todoList',
  initialState,
  // reducer - некий мутатор нашего состояния
  reducers: {
    createAction: (state) => {

    },
    updateAction: (state) => {

    },
    deleteAction: (state, action: PayloadAction<number>) => {

    },
  },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer