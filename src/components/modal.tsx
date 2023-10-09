import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/modalComponent.scss";
import { ButtonComponent } from "./button";
import { Todo } from "../interfaces/Todo";
import { updateTodo } from "../store/todoListSlice";
import { useDispatch } from "react-redux";

interface ModalProps {
  modalTitle: string;
  todo: Todo;
}

export const ModalComponent = ({ modalTitle, todo }: ModalProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showModal = () => {
    handleShow();
  };
  const dispatch = useDispatch();

  const updateValue = (type: string, inputVal: string) => {
    const update = {
      ...todo,
      [type]: inputVal,
    };
    dispatch(updateTodo(update));
  };

  return (
    <>
      <ButtonComponent
        clickHandler={showModal}
        btnIcon="bi bi-pen-fill"
      ></ButtonComponent>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="todoName">Todo name:</label>
          <input
            type="text"
            id="todoName"
            value={todo.name}
            onChange={(e) => updateValue("name", e.target.value)}
          />
          <label htmlFor="todoDescription">Todo description:</label>
          <input
            type="text"
            id="todoDescription"
            value={todo.description}
            onChange={(e) => updateValue("description", e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
