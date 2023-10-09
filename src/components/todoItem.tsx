import { useState, useRef } from "react";
import { Todo } from "../interfaces/Todo";
import { ButtonComponent } from "./button";
import "../style/todoItem.scss";
import { ModalComponent } from "./modal";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../store/todoListSlice";

interface propStuff {
  todo: Todo;
}

export const TodoItem = ({ todo }: propStuff) => {
  const { name, description, done, id } = todo;

  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editDescription, setEditDescription] = useState<boolean>(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const updateValue = (type: string, inputVal: string) => {
    const update = {
      ...todo,
      [type]: inputVal,
    };
    dispatch(updateTodo(update));
  };

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
      className={`card mt-5 border-primary ${done ? "done" : "unfinished"}`}
      style={{ width: "18em" }}
    >
      {!editTitle ? (
        <h3
          onDoubleClick={() => makeEditiable("title")}
          className="card-header mb-5 pointer"
          title="double click to edit"
        >
          {name}
        </h3>
      ) : (
        <input
          ref={titleInputRef}
          type="text"
          name="bla"
          value={name}
          onBlur={() => setEditTitle(false)}
          className="inline-edit card-header"
          onChange={(e) => updateValue("name", e.target.value)}
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
            {description}
          </p>
        ) : (
          <input
            ref={descriptionInputRef}
            type="text"
            name="bla"
            value={description}
            onBlur={() => setEditDescription(false)}
            className="inline-edit card-header"
            onChange={(e) => updateValue("description", e.target.value)}
          />
        )}
      </div>
      <div className="d-flex justify-content-end align-items-end">
        <ButtonComponent
          clickHandler={() => dispatch(removeTodo(id))}
          btnIcon="bi bi-trash-fill"
        ></ButtonComponent>
        <ModalComponent modalTitle="Edit Todo" todo={todo}></ModalComponent>
      </div>
    </div>
  );
};
