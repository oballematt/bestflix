import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap"

export default function ModalButton({ order }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)


    return (
        <>
             <h5 className="inputFont text-center">Order By</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor:"red" }} variant="primary" className="w-100 mb-4 inputFont"  onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="modal-bg inputFont">
                    Order By
                </Modal.Header>
                <Modal.Body className="modal-bg">
                    <Form.Group>
                        <Form.Row>
                            <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="select" name="orderby" onClick={e => changeButton(e.target.value)} onChange={e => order(e.target.value)}  >
                                <option value="rating">Choose...</option>
                                <option value="rating">Rating</option>
                                <option value="title">Title</option>
                                <option value="date">Year Released</option>
                                <option value="runtime">Runtime</option>
                            </Form.Control>
                        </Form.Row>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="modal-bg">
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
