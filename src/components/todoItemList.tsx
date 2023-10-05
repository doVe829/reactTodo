import { useState } from "react";
import { TodoData } from "../mockData/mockTodos";
import { Todo } from "../interfaces/Todo";
import { TodoItem } from "./todoItem";

export const TodoItemList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(TodoData);

  const items = todoList.map((item) => (
    <TodoItem key={item.id} todo={item}></TodoItem>
  ));

  return (
    <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
      {items}
    </div>
  );
};
