import { defineLoader } from 'vitepress'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

declare const data: Todo[]
export { data }

export default defineLoader({
  async load(): Promise<Todo[]> {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
    return todos.json()
  },
})
