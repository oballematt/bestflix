import React, { useState } from 'react'
import { Button, Modal, Form, Col, Row } from "react-bootstrap"

export default function ModalButton({ type}) {
    const [show, setShow] = useState(false);
    const [button, setButton] = useState("Choose...")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeButton = e => setButton(e)

    return (
        <>
             <h5 className="inputFont text-center">Type</h5>
            <Button style={{ backgroundColor: "black", opacity: "1", color: "white", borderColor:"red" }} variant="primary" className="w-100 mb-4 inputFont" onClick={handleShow}>
                {button}
            </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className="modal-bg inputFont" closeButton>
                        Movie or Tv Show
                    </Modal.Header>
                    <Modal.Body className="modal-bg inputFont">
                        <fieldset>
                            <Form.Group as={Row}>
                                <Col md={12}>
                                    <Form.Label className="text-center inputFont" as="legend" column="lg" >
                                        Type
                                    </Form.Label>
                                </Col>
                                <Col md={1} className="offset-3" >
                                    <Form.Check 
                                        id="movie"
                                        name="type"
                                        value="movie"
                                        type="radio"
                                        label="Movies"
                                        onChange={e => type(e.target.value)}
                                        onClick={e => changeButton(e.target.value)}
                                    />
                                </Col>
                                <Col md={1} className="offset-2" >
                                    <Form.Check 
                                        type="radio"
                                        label="Tv Shows"
                                        name="type"
                                        id="series"
                                        value="series"
                                        onChange={e => type(e.target.value)}
                                        onClick={e => changeButton(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
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