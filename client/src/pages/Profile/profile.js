import React, { useEffect, useState } from 'react'
import Navibar from "../../components/navbar"
import API from "../../utils/API"
import DeleteBtn from "../../components/DeleteBtn";
import { Table } from "react-bootstrap";
import { ColProfile, RowProfile } from "../../components/Grid"
import { Container, Row, Col } from "react-bootstrap"


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
      <Container>
        <Row>
          <Col md={12}>
            <div className="sign">
              <span className="fast-flicker">Pr</span>of<span className="flicker">i</span>le
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <RowProfile>
          <ColProfile size="md-12 sm-12">
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {media.map(titles => (
                      <tr key={titles._id}>
                        <td><img src={titles.img} style={{ maxHeight: "200px" }} className="w-100" alt="" /></td>
                        <td>{titles.title}</td>
                        <td>{titles.year}</td>
                        <td>{titles.imdbrating}</td>
                        <td>{titles.synopsis} </td>
                        <td><DeleteBtn onClick={() => deleteTitle(titles._id)} /></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                  <h3 style={{ color: "white" }}>No Results to Display</h3>
                )}
            </div>
          </ColProfile>
        </RowProfile>
      </Container>
    </>
  )
}

export default Profile