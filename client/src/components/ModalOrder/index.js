import React, { useState } from 'react'
import { Button, Modal, ListGroup } from "react-bootstrap"

export default function ModalButton({ order }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)


    return (
        <>
            <h5 className="inputFont text-center">Order By</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor: "red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="modal-bg inputFont">
                    Order By
                </Modal.Header>
                <Modal.Body className="modal-bg">
                    <ListGroup>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Rating" value="rating" onClick={e => { order(e.target.value); changeButton(e.target.name); handleClose() }}>Rating</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Title" value="title" onClick={e => { order(e.target.value); changeButton(e.target.name); handleClose() }}>Title</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Runtime" value="runtime" onClick={e => { order(e.target.value); changeButton(e.target.name); handleClose() }}>Runtime</Button></ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}
