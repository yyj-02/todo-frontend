import axios from "axios";
import { Todo, TodoDocument } from ".";

const todo = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:5000/api/todo"
      : process.env.VUE_APP_BACKEND,
  timeout: 4000,
});

export const listTodo = async () => {
  const { data } = await todo.get<TodoDocument[]>("/");
  return data;
};
export const deleteTodo = async (id: string) => {
  await todo.delete(`/${id}`);
};
export const createTodo = async (title: string) => {
  const { data } = await todo.post<TodoDocument>("/", {
    title,
    status: false,
  });
  return data;
};
export const updateTodo = async (id: string, todoItem: Todo) => {
  await todo.put(`/${id}`, todoItem);
};
