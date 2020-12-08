import React, { useState, useEffect } from "react"
import axios from "axios"
import Navibar from "../../components/navbar"
import TableData from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"
import { Container, Row, Col } from "react-bootstrap"


function Shows() {
    const [shows, setShows] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [titlesPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            const options = {
                method: 'GET',
                url: 'https://unogsng.p.rapidapi.com/search',
                params: {
                    type: "series",
                    orderby: 'rating',
                    limit: '200',
                    countrylist: '78',
                    audio: 'english',
                    end_year: '2020'
                },
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            };
            await axios.request(options).then(function (response) {
                console.log(response.data.results)
                setShows(response.data.results);
            }).catch(function (error) {
                console.error(error);
            });
        }
        fetchPosts()

    }, [])
    const indexOfLastTitle = currentPage * titlesPerPage
    const indexOfFirstTitle = indexOfLastTitle - titlesPerPage
    const currentTitle = shows.slice(indexOfFirstTitle, indexOfLastTitle)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="sign">
                            <span className="fast-flicker">Tv</span>Sh<span className="flicker">ow</span>s
                         </div>
                    </Col>
                </Row>
            </Container>
            <Navibar />
            <TableData titles={currentTitle} />
            <Pagination titlesPerPage={titlesPerPage} totalTitles={shows.length} paginate={paginate} />


        </>
    )
}


export default Shows