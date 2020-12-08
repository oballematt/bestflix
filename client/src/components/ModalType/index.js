import React, { useState } from 'react'
import { Button, Modal, ListGroup } from "react-bootstrap"

export default function ModalButton({ type }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)

    return (
        <>
            <h5 className="inputFont text-center">Type</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor: "red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-bg inputFont" closeButton>
                    Movie or Tv Show
                    </Modal.Header>
                <Modal.Body className="modal-bg inputFont">
                    <ListGroup>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="Movies" value="movie" onClick={e => { type(e.target.value); changeButton(e.target.name); handleClose() }}>Movies</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="TV Shows" value="series" onClick={e => { type(e.target.value); changeButton(e.target.name); handleClose() }}>Tv Shows</Button></ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}