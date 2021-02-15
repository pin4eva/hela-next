import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "rsuite";

const ModalComp = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={props.onClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalComp.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};
ModalComp.defaultProps = {
  show: false,
};

export default ModalComp;
