import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalComponent.scss";
import { ButtonComponent } from "./button";
import { Todo } from "../interfaces/Todo";

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
  const [todoItem, setTodo] = useState<Todo>(todo);

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
            value={todoItem.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          />
          <label htmlFor="todoDescription">Todo description:</label>
          <input
            type="text"
            id="todoDescription"
            value={todoItem.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
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
