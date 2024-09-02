export interface ToDo {
  id: number,
  text: string,
  description?: string,
  notes?: [],
  isDone: boolean,
  urlPhoto?: string,
  color?: string
}

export interface CompoProps {
  todos: ToDo[];
}