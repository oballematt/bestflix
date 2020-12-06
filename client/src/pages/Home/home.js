import React, { useState } from "react"
import { Form, Button, Jumbotron, Container, Col, Row, Table } from "react-bootstrap"
import Navibar from "../../components/navbar"
import axios from "axios"
import API from "../../utils/API"
import SaveBtn from "../../components/SaveBtn"
import "./style.css"

function Home() {
    const [type, setType] = useState()
    const [genrelist, setGenrelist] = useState()
    const [start_year, setStart_year] = useState()
    const [start_rating, setStart_rating] = useState()
    const [limit, setLimit] = useState()
    const [cardDetails, setCardDetails] = useState([])

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
                limit: limit,
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
            console.log(response.data.results)
            setCardDetails(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }
    const handleSave = (titles) => {
        console.log(titles)
        API.saveMedia({
            title: titles.title,
            year: titles.year,
            imdbrating: titles.imdbrating,
            synopsis: titles.synopsis,
            img: titles.img
        })

    }

    return (
        <>
            <div className="home-style">
                <Navibar />
                <Container className="d-flex align-items-center justify-content-center search"
                    style={{ minHeight: "100vh" }}>
                    <div className="w-100" style={{ maxWidth: "800px" }}>
                        <Row>
                            <Col className="offset-3" md={6}>
                                <Jumbotron style={{ backgroundColor: "black", opacity: ".8" }} >
                                    <Form style={{ maxWidth: "400px" }} onSubmit={handleSubmit} >
                                        <Form.Group>
                                            <Form.Row>
                                                <Form.Label className="text-center inputFont" column="lg">
                                                    Genre
                                                </Form.Label>
                                                <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} className="align-items-end" size="lg" as="select" placeholder="Large text" name="genrelist" onChange={e => setGenrelist(e.target.value)} >
                                                    <option className="inputFont" value="899">Action and Adventure</option>
                                                    <option className="inputFont" value="4698">Animation</option>
                                                    <option className="inputFont" value="1492">Sci-Fi and Fantasy</option>
                                                    <option className="inputFont" value="9744">Fantasy</option>
                                                    <option className="inputFont" value="7424">Anime</option>
                                                    <option className="inputFont" value="783">Children and Family</option>
                                                    <option className="inputFont" value="9736">Comedies</option>
                                                    <option className="inputFont" value="8673">Documentaries</option>
                                                    <option className="inputFont" value="5763">Dramas</option>
                                                    <option className="inputFont" value="9327">Sports</option>
                                                    <option className="inputFont" value="8711">Horror Films</option>
                                                    <option className="inputFont" value="26126">Crime Docuseries</option>
                                                    <option className="inputFont" value="7992">TV Animated Comedies</option>
                                                </Form.Control>
                                            </Form.Row>
                                        </Form.Group>
                                        <br />
                                        <fieldset>
                                            <Form.Group as={Row}>
                                                <Col md={12}>
                                                    <Form.Label className="text-center inputFont" as="legend" column="lg" >
                                                        Type
                                                </Form.Label>
                                                </Col>
                                                <Col md={4} className="offset-1" >
                                                    <Form.Check style={{ backgroundColor: "#383838", opacity: "1", color: "white" }}
                                                        id="movie"
                                                        name="type"
                                                        value="movie"
                                                        type="radio"
                                                        label="Movies"
                                                        onChange={e => setType(e.target.value)}
                                                    />
                                                </Col>
                                                <Col md={4} className="offset-2">
                                                    <Form.Check style={{ backgroundColor: "#383838", opacity: "1", color: "white" }}
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
                                                <Form.Label column="lg" className="text-center inputFont">
                                                    IMDB Rating
                                                </Form.Label>
                                                <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="select" name="start_rating" onChange={e => setStart_rating(e.target.value)}  >
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
                                        <br />
                                        <Form.Group>
                                            <Form.Row>
                                                <Form.Label className="text-center inputFont" column="lg" >
                                                    Start Year
                                                </Form.Label>
                                                <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="input" name="start_year" onChange={e => setStart_year(e.target.value)} />
                                            </Form.Row>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Row>
                                                <Form.Label className="text-center inputFont" column="lg">
                                                    Title Limit
                                                </Form.Label>
                                                <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="input" name="limit" onChange={e => setLimit(e.target.value)} />
                                            </Form.Row>
                                        </Form.Group>
                                        <Button style={{ backgroundColor: "red" }} type="submit" variant="primary" className="w-100">Generate!</Button>
                                    </Form>
                                </Jumbotron>
                            </Col>
                        </Row>
                        <Row >
                            {cardDetails.length ? (
                            <Col md={12}>
                                    <Table className="table-dark" striped bordered style={{ color: "white" }}>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Title</th>
                                                <th>Year Released</th>
                                                <th>IMBD Score</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cardDetails.map(titles => (
                                                <tr key={titles.id}>
                                                    <td><img src={titles.poster} style={{ maxHeight: "200px" }} className="w-100" alt="" /></td>
                                                    <td>{titles.title}</td>
                                                    <td>{titles.year}</td>
                                                    <td>{titles.imdbrating}</td>
                                                    <td>{titles.synopsis}<SaveBtn onClick={() => handleSave(titles)} /> </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>                               
                            </Col>
                            ): (
                                <h3>No Results to Display</h3>
                            )}
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )

}

export default Home
