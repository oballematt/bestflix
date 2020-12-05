import React, { useState } from "react"
import { Form, Card, Button, Jumbotron, Container, Col, Row, CardDeck } from "react-bootstrap"
import Navibar from "../components/navbar"
import axios from "axios"


function Home(){
    const [type, setType] = useState()
    const [genrelist, setGenrelist] = useState()
    const [start_year, setStart_year] = useState()
    const [start_rating, setStart_rating] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://unogsng.p.rapidapi.com/search',
            params: {
                type: type,
                genrelist: genrelist,
                start_year: start_year, 
                start_rating: start_rating, 
                end_rating: "10",
                orderby: 'rating',
                limit: '100',
                countrylist: '78',
                audio: 'english',
                end_year: '2020'
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                'x-rapidapi-host': 'unogsng.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

        return (
            <>
                <Navibar />
                <Container className="d-flex align-items-center justify-content-center mt-5"
                    style={{ minHeight: "100vh" }}>
                    <div className="w-100" style={{ maxWidth: "800px" }}>
                        <Jumbotron>
                            <Row>
                                <Col md={6}>
                                    <Form style={{ maxWidth: "400px" }} onSubmit={handleSubmit} >
                                        <Form.Group>
                                            <Form.Row>
                                                <Form.Label column="lg" lg={2}>
                                                    Genre
                                                </Form.Label>
                                                <Col xs={7}>
                                                    <Form.Control size="lg" as="select" placeholder="Large text" name="genrelist" onChange={e => setGenrelist(e.target.value)} >
                                                        <option value="899">Action and Adventure</option>
                                                        <option value="4698">Animation</option>
                                                        <option value="1492">Sci-Fi and Fantasy</option>
                                                        <option value="9744">Fantasy</option>
                                                        <option value="7424">Anime</option>
                                                        <option value="783">Children and Family</option>
                                                        <option value="9736">Comedies</option>
                                                        <option value="8673">Documentaries</option>
                                                        <option value="5763">Dramas</option>
                                                        <option value="9327">Sports</option>
                                                        <option value="8711">Horror Films</option>
                                                        <option value="26126">Crime Docuseries</option>
                                                        <option value="7992">TV Animated Comedies</option>
                                                    </Form.Control>
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
                                                        id="movie"
                                                        name="type"
                                                        value="movie"
                                                        type="radio"
                                                        label="Movies"
                                                        onChange={e => setType(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Tv Shows"
                                                        name="type"
                                                        id="series"
                                                        value="series"
                                                        onChange={e => setType(e.target.value)}
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
                                                    <Form.Control size="lg" as="select" name="start_rating"  onChange={e => setStart_rating(e.target.value)}  >
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
                                                    <Form.Control size="lg" as="input" name="start_year" onChange={e => setStart_year(e.target.value)}/>
                                                </Col>
                                            </Form.Row>
                                        </Form.Group>
                                        <Button type="submit" variant="primary" className="w-100">Generate!</Button>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <CardDeck >
                                        <Card>
                                            <Card.Img variant="top" src="https://www.placehold.it/200x200" />
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                  
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

export default Home
