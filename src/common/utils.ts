import axios from "axios";

const todo = axios.create({
  baseURL: "http://127.0.0.1:8080/api/todo",
  timeout: 4000,
});

export const listTodo = async () => {
  const data = await todo.get("/");
  return data;
};
