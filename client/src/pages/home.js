import React, { useState, useEffect } from "react"
import { Form, Card, Button, Jumbotron, Container, Col, Row, CardDeck } from "react-bootstrap"
import Navibar from "../components/navbar"
import axios from "axios"

export default function Home() {
    const [options, SetOptions] = useState({
        method: 'GET',
            url: 'https://unogsng.p.rapidapi.com/search',
            params: {
                type: "movie",
                genrelist: '',
                orderby: 'rating',
                limit: '1',
                countrylist: '78',
                audio: 'english',
                end_year: '2020'
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                'x-rapidapi-host': 'unogsng.p.rapidapi.com'
            }
    })

    useEffect(() => {
        
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
    
    return (
        <>
        <Navibar />
        <Container className="d-flex align-items-center justify-content-center mt-5"
            style={{ minHeight: "100vh" }}>
               
            <div className="w-100" style={{ maxWidth: "800px" }}>
                <Jumbotron>
                    <Row>
                        <Col md={6}>
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
                                </Form.Group>
                                <br />
                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column="lg" lg={2}>
                                            Type
                            </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                label="Movies"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Tv Shows"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <br />
                                <Form.Group>
                                    <Form.Row>
                                        <Form.Label column="lg" lg={2}>
                                            IMDB Rating
                                </Form.Label>
                                        <Col xs={7}>
                                            <Form.Control size="lg" as="select" />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Form.Row>
                                        <Form.Label column="lg" lg={2}>
                                            Start Year
                                </Form.Label>
                                        <Col xs={7}>
                                            <Form.Control size="lg" as="input" />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Button variant="primary" className="w-100">Generate!</Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <CardDeck style={{display: "none"}}>
                                <Card>
                                    <Card.Img variant="top" src="https://www.placehold.it/200x200" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        </Container>
        </>
    )
}
