import React from 'react'
import { Form, Card, Button, Jumbotron, Container, Col } from "react-bootstrap"

export default function Home() {
    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "800px" }}>
                <Jumbotron>
                    <Form style={{ maxWidth: "400px" }}>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column="lg" lg={2}>
                                    Genre
                                </Form.Label>
                                <Col xs={7}>
                                    <Form.Control size="lg" as="select" placeholder="Large text" />
                                </Col>
                            </Form.Row>
                            <br />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Check type="radio" aria-label="radio 1" />
                        </Form.Group>
                    </Form>
                </Jumbotron>
            </div>
        </Container>
    )
}
