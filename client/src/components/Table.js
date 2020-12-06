import React from 'react'
import { Table, Container, Button } from "react-bootstrap"
import API from '../utils/API'
import SaveBtn from "../components/SaveBtn"


export default function TableData(props) {
    
    const handleSave = (result) => {
        console.log(result)
        API.saveMedia({
            title: result.title,
            year: result.year,
            imdbrating: result.imdbrating,
            synopsis: result.synopsis
        })
      
     }
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
                        <td>{result.synopsis}<SaveBtn onClick={()=>handleSave(result)}/> </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </Container> 
    )
}

