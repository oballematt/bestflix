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
    const [order, setOrder] = useState()
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
                orderby: order,
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
                                                    <option className="inputFont" value="10673,10702,11804,11828,1192487,1365,1568,2125,2653,43040,43048,4344,46576,7442,75418,76501,77232,788212,801362,899,9584">Action and Adventure</option>
                                                    <option className="inputFont" value="13335,13573,32392,52852,55774,59433,84488,88635">Muscials</option>
                                                    <option className="inputFont" value="1492,108533,11014,1372,1568,1694,2595,2729,3327,3916,47147,4734,49110,50232,52780,52849,5903,6000,6926,852491">Sci-Fi</option>
                                                    <option className="inputFont" value="9744">Fantasy</option>
                                                    <option className="inputFont" value="10306,10499,10504,10719,11014,11140,1138506,1321,1774,3269,43048,46588,5505,58798,65558,6867,75390,78507,799,852488,8933,98911,9147,972">Thrillers</option>
                                                    <option className="inputFont" value="10695,11146,2653,2729,3063,413820,452,6721,9302,7424">Anime</option>
                                                    <option className="inputFont" value="10056,27480,27950,28034,28083,28233,48586,5455,561,6218,6796,6962,78120,89513,783">Children and Family</option>
                                                    <option className="inputFont" value="1009,10256,10375,105,10778,11559,11755,1208951,1333288,1402,1747,17648,2030,2700,31694,3300,34157,3519,3996,4058,4195,43040,4426,4906,52104,52140,52847,5286,5475,5610,56174,58905,59169,61132,61330,6197,63092,63115,6548,711366,7120,72407,7539,77599,77907,78163,78655,79871,7992,852492,869,89585,9302,9434,9702,9736">Comedies</option>
                                                    <option className="inputFont" value="10005,10105,10599,1159,15456,180,2595,2616,2760,28269,3652,3675,4006,4720,48768,49110,49547,50232,5161,5349,55087,56178,58710,60026,6839,7018,72384,77245,852494,90361,9875">Documentaries</option>
                                                    <option className="inputFont" value="11,11075,11714,1208954,1255,12995,13158,2150,25955,26009,2696,2748,2757,2893,29809,3179,31901,34204,3653,3682,384,3916,3947,4282,4425,452,4961,500,5012,52148,52904,56169,58755,58796,59064,6206,62235,6616,6763,68699,6889,711367,71591,71591,72354,7243,7539,75459,76507,78628,852493,89804,9299,9847,9873,5763">Dramas</option>
                                                    <option className="inputFont" value="180,25788,4370,5286,7243,9327">Sports</option>
                                                    <option className="inputFont" value="10695,10944,1694,42023,45028,48303,61546,75405,75804,75930,8195,83059,8711,89585">Horror</option>
                                                    <option className="inputFont" value="29281,36103,502675">Romance</option>
                                                    <option className="inputFont" value="10032,11093,13158,29809,2994,31273,31574,31694,32392,46553,46560,46576,46588,47147,47465,48303,48586,48744,76186">Classics</option>
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
                                                    Number of Titles
                                                </Form.Label>
                                                <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="input" name="limit" onChange={e => setLimit(e.target.value)} />
                                            </Form.Row>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Row>
                                                <Form.Label column="lg" className="text-center inputFont">
                                                    Order By
                                                </Form.Label>
                                                <Form.Control style={{ backgroundColor: "#383838", opacity: "1", color: "white" }} size="lg" as="select" name="orderby" onChange={e => setOrder(e.target.value)}  >
                                                    <option value="rating">Rating</option>
                                                    <option value="title">Title</option>
                                                    <option value="date">Year Released</option>
                                                    <option value="runtime">Runtime</option>
                                
                                                </Form.Control>
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
