import React, { useEffect, useState} from 'react'
import Navibar from "../components/navbar"
import API from "../utils/API"
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import TableData from "../components/Table"



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
    <Navibar/>
    <br/>
    <br/>
    <br/>
    <Container>
      <Row>
    <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>What To Watch</h1>
            </Jumbotron>
            {media.length ? (
              <List>
                {media.map(titles => (
                  <ListItem key={titles._id}>
                    <li>{titles.title}</li>
                    <li>{titles.year}</li>
                    <li>{titles.imdbrating}</li>
                    <li>{titles.synopsis}</li>
                    <DeleteBtn onClick={() => deleteTitle(titles._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>
          </Container>
    </>
  )
}

export default Profile