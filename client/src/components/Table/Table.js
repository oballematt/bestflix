import React from 'react'
import { Table, Container, Row, Col } from "react-bootstrap"
import API from '../../utils/API'
import SaveBtn from "../SaveBtn"



export default function TableData({ titles }) {


    const handleSave = (result) => {
        console.log(result)
        API.saveMedia({
            title: result.title,
            year: result.year,
            imdbrating: result.imdbrating,
            synopsis: result.synopsis,
            img: result.poster
        })

    }
    return (
        <div className="search">
            <Container className="mt-5" >
                <Row>
                    <Col xs={12}>
                        <Table className="table-dark" striped bordered style={{ color: "white" }}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Year Released</th>
                                    <th>IMBD Score</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {titles.map(result => (
                                    <tr key={result.id}>
                                        <td><img src={result.poster} style={{ maxHeight: "200px" }} className="w-100" alt="" /></td>
                                        <td>{result.title}</td>
                                        <td>{result.year}</td>
                                        <td>{result.imdbrating}</td>
                                        <td>{result.synopsis} </td>
                                        <td><SaveBtn onClick={() => handleSave(result)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

