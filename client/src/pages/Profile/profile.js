import React, { useEffect, useState } from 'react'
import Navibar from "../../components/navbar"
import API from "../../utils/API"
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Table, } from "react-bootstrap";
import { Container, Col, Row } from "../../components/Grid"


function Profile() {
  const [media, setMedia] = useState({})


  useEffect(() => {
    API.getMedia()
      .then(res => setMedia(res.data))
      .catch(err => console.log(err))
  })

  function deleteTitle(id) {
    API.deleteMedia(id)
      .then(res => API.getMedia())
      .catch(err => console.log(err));
  }
  return (
    <>
      <Navibar />
      <Container className="mt-5">
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron style={{opacity: ".8", marginTop: "50"}}>
              <h1>What to Watch</h1>
            </Jumbotron>
            <div className="table-style">
              {media.length ? (
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
                    {media.map(titles => (
                      <tr key={titles._id}>
                        <td><img src={titles.img} style={{ maxHeight: "200px" }} className="w-100" alt="" /></td>
                        <td>{titles.title}</td>
                        <td>{titles.year}</td>
                        <td>{titles.imdbrating}</td>
                        <td>{titles.synopsis}<DeleteBtn onClick={() => deleteTitle(titles._id)} /> </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                  <h3 style={{ color: "white" }}>No Results to Display</h3>
                )}
            </div>
          </Col>
        </Row>
      </Container>



    </>
  )
}

export default Profile