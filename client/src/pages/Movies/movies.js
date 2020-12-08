import React, { useState, useEffect } from "react"
import axios from "axios"
import Navibar from "../../components/navbar"
import TableData from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"
import { Container, Col, Row } from "react-bootstrap"


function Movies() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [titlesPerPage] = useState(10)


    useEffect(() => {
        const fetchPosts = async () => {
            const options = {
                method: 'GET',
                url: 'https://unogsng.p.rapidapi.com/search',
                params: {
                    type: "movie",
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
            await axios.request(options).then(function (response) {
                console.log(response.data.results)
                setMovies(response.data.results);
            }).catch(function (error) {
                console.error(error);
            });
        }
        fetchPosts()

    }, [])
    const indexOfLastTitle = currentPage * titlesPerPage
    const indexOfFirstTitle = indexOfLastTitle - titlesPerPage
    const currentTitle = movies.slice(indexOfFirstTitle, indexOfLastTitle)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <>
            <Navibar />
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="sign">
                            <span className="fast-flicker">Mo</span>v<span className="flicker">ie</span>s
                         </div>
                    </Col>
                </Row>
            </Container>
            <TableData titles={currentTitle} />
            <Pagination titlesPerPage={titlesPerPage} totalTitles={movies.length} paginate={paginate} />
        </>
    )
}


export default Movies