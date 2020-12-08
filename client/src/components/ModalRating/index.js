import React, { useState } from 'react'
import { Button, Modal, ListGroup } from "react-bootstrap"

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
                <ListGroup>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="1" value="1" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>1</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="2" value="2" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>2</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="3" value="3" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>3</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="4" value="4" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>4</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="5" value="5" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>5</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="6" value="6" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>6</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="7" value="7" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>7</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="8" value="8" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>8</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="9" value="9" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>9</Button></ListGroup.Item>
                        <ListGroup.Item className="modal-bg"><Button style={{ backgroundColor: "black", opacity: ".8", color: "white", borderColor: "red" }} className="inputFont w-100" name="10" value="10" onClick={e => {rating(e.target.value); changeButton(e.target.name); handleClose()}}>10</Button></ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}
