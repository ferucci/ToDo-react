export interface ToDo {
  id: number,
  text: string,
  description?: string,
  notes?: [],
  isDone: boolean
}

export interface CompoProps {
  todos: ToDo[];
}