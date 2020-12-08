import React, { useState } from "react"
import { Form, Button, Jumbotron, Container, Col, Row, Table } from "react-bootstrap"
import Navibar from "../../components/navbar"
import axios from "axios"
import API from "../../utils/API"
import SaveBtn from "../../components/SaveBtn"
import ModalGenre from "../../components/ModalGenre"
import ModalType from "../../components/ModalType"
import ModalRating from "../../components/ModalRating"
import ModalYear from "../../components/ModalYear"
import ModalLimit from "../../components/ModalLimit"
import ModalOrder from "../../components/ModalOrder"

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
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="sign">
                                <span className="fast-flicker">be</span>st<span className="flicker">fl</span>ix
                         </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex align-items-center justify-content-center search"
                    style={{ minHeight: "100vh" }}>

                    <div className="w-100" style={{ maxWidth: "800px" }}>

                        <Row>
                            <Col md={12} >
                                <Jumbotron style={{ backgroundColor: "black", opacity: ".8" }} >
                                    <Form onSubmit={handleSubmit}>
                                        <ModalGenre genre={setGenrelist} />
                                        <ModalType type={setType} />
                                        <ModalRating rating={setStart_rating} />
                                        <ModalYear year={setStart_year} />
                                        <ModalLimit limit={setLimit} />
                                        <ModalOrder order={setOrder} />
                                        <Button style={{backgroundColor: "red"}} type="submit" variant="primary" className="w-100">Generate!</Button>
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
                            ) : (
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
