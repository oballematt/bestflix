import React from 'react'
import { Table, Container } from "react-bootstrap"

export default function TableData(props) {
    return (
       
        <Container className="mt-5" >
            <Table striped bordered hover>
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
                    {props.results.map(result => (
                    <tr key={result.id}>
                        <td><img src={result.poster} style={{maxHeight: "200px"}} className="w-100" alt=""/></td>
                        <td>{result.title}</td>
                        <td>{result.year}</td>
                        <td>{result.imdbrating}</td>
                        <td>{result.synopsis}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </Container> 
    )
}

