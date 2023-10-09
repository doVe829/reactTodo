import { Todo } from "../interfaces/Todo";
import { TodoItem } from "./todoItem";
import { useAppSelector } from "../store/hooks";
import { selectTodos } from "../store/todoListSlice";

export const TodoItemList = () => {
  const todoList = useAppSelector(selectTodos);

  const items = todoList.map((item: Todo) => (
    <TodoItem key={item.id} todo={item}></TodoItem>
  ));

  return (
    <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
      {items}
    </div>
  );
};
