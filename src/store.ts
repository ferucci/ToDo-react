import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { saveToLS, loadFromLS } from './helpers/store'

// Собирает все состояния приложения и создаёт базовое.
export const store = configureStore({
  // @ts-ignore
  reducer: { todoList: todoReducer },
  preloadedState: loadFromLS()

})
// Подписываюсь на все изменения стора
store.subscribe(() => saveToLS(store.getState()));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;