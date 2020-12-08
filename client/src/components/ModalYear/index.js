import React, { useState } from 'react'
import { Button, Modal, Form} from "react-bootstrap"

export default function ModalButton({ year }) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)

    return (
        <>
             <h5 className="inputFont text-center">Year</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor:"red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="inputFont modal-bg" closeButton>
                    Choose a starting year!
                    </Modal.Header>
                <Modal.Body className="inputFont modal-bg">
                    <Form.Group>
                        <Form.Row>
                            <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="input" name="start_year" onChange={e => {year(e.target.value); changeButton(e.target.value)}} />
                        </Form.Row>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="inputFont modal-bg">
                    <Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor:"red" }} variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}