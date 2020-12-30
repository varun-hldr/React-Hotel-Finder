import React from "react";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";

const LoginModel = (props) => {
  const { show, onHide, setAdminLoggin } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm {...props} setAdminLoggin={setAdminLoggin} />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModel;
