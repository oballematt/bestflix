import React, { useState } from 'react'
import { Button, Modal, ListGroup } from "react-bootstrap"



export default function ModalButton({ setData, title, arrayData, dataTitle }) {
    
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const listGroupArray = [...arrayData]

    const changeButton = e => setButton(e)

    return (
        <>
        <h5 className="inputFont text-center">{title}</h5>
        <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor: "red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
            {button}
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modal-bg inputFont">
                {dataTitle}
            </Modal.Header>
            <Modal.Body className="modal-bg">
                <ListGroup>
            {listGroupArray.map(item => (
              <ListGroup.Item key={item.id} className="modal-bg">
                <Button
                  style={{
                    backgroundColor: "black",
                    opacity: ".8",
                    color: "white",
                    borderColor: "red",
                  }}
                  className="inputFont w-100"
                  name={item.name}
                  value={item.value}
                  onClick={(e) => {
                    setData(item.value);
                    changeButton(item.name);
                    handleClose();
                  }}
                >
                  {item.name}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
    );
}



