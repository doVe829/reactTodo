import { useState, useRef } from "react";
import { Todo } from "../interfaces/Todo";
import { ButtonComponent } from "./button";
import "./todoItem.scss";
import { ModalComponent } from "./modal";

type propStuff = {
  todo: Todo;
};
export const TodoItem = ({ todo }: propStuff) => {
  const [todoName, setTodoName] = useState<string>(todo.name);
  const [todoDescription, setTodoDescription] = useState<string>(
    todo.description
  );
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editDescription, setEditDescription] = useState<boolean>(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const makeEditiable = (type: string) => {
    if (type === "title") {
      setEditTitle(true);
      setTimeout(() => titleInputRef.current?.focus());
    }
    if (type === "descr") {
      setEditDescription(true);
      setTimeout(() => descriptionInputRef.current?.focus());
    }
  };

  return (
    <div
      className={`card mt-5 border-primary ${
        todo.done ? "done" : "unfinished"
      }`}
      style={{ width: "18em" }}
    >
      {!editTitle ? (
        <h3
          onDoubleClick={() => makeEditiable("title")}
          className="card-header mb-5 pointer"
          title="double click to edit"
        >
          {todoName}
        </h3>
      ) : (
        <input
          ref={titleInputRef}
          type="text"
          name="bla"
          value={todoName}
          onBlur={() => setEditTitle(false)}
          className="inline-edit card-header"
          onChange={(e) => setTodoName(e.target.value)}
        />
      )}

      <div className="card-body">
        {!editDescription ? (
          <p
            className="card-text mb-5 pointer"
            data-toggle="tooltip"
            title="double click to edit"
            onDoubleClick={() => makeEditiable("descr")}
          >
            {todoDescription}
          </p>
        ) : (
          <input
            ref={descriptionInputRef}
            type="text"
            name="bla"
            value={todoDescription}
            onBlur={() => setEditDescription(false)}
            className="inline-edit card-header"
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        )}
      </div>
      <div className="d-flex justify-content-end align-items-end">
        <ButtonComponent btnIcon="bi bi-trash-fill"></ButtonComponent>
        <ModalComponent modalTitle="Edit Todo" todo={todo}></ModalComponent>
      </div>
    </div>
  );
};
