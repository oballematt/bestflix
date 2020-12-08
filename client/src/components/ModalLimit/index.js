import React, { useState } from 'react'
import { Button, Modal, ListGroup } from "react-bootstrap"

export default function ModalButton({ limit }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)

    return (
        <>
            <h5 className="inputFont text-center">Limit</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor: "red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-bg inputFont" closeButton>
                    How many titles do you want to display?
                    </Modal.Header>
                <Modal.Body className="modal-bg">
                    <ListGroup>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="5" value="5" onClick={e => { limit(e.target.value); changeButton(e.target.name); handleClose() }}>5</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="10" value="10" onClick={e => { limit(e.target.value); changeButton(e.target.name); handleClose() }}>10</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="15" value="15" onClick={e => { limit(e.target.value); changeButton(e.target.name); handleClose() }}>15</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="20" value="20" onClick={e => { limit(e.target.value); changeButton(e.target.name); handleClose() }}>20</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="50" value="50" onClick={e => { limit(e.target.value); changeButton(e.target.name); handleClose() }}>50</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="100" value="100" onClick={e => { limit(e.target.value); changeButton(e.target.name); handleClose() }}>100</Button></ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}