import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap"

export default function ModalButton({ rating }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)

    return (
        <>
             <h5 className="inputFont text-center">Rating</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor:"red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-bg inputFont" closeButton>
                    Choose an  IMDB rating!
                </Modal.Header>
                <Modal.Body className="modal-bg inputFont">
                    <Form.Group>
                        <Form.Row>
                            <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="select" name="start_rating" onClick={e => changeButton(e.target.value)} onChange={e => rating(e.target.value)}  >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </Form.Control>
                        </Form.Row>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="modal-bg inputFont">
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
