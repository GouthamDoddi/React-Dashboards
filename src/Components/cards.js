import React from 'react'
import {Container,Row,Card,Col} from 'react-bootstrap'
import "./cards.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function cards() {
    return (
        <div>
            <Container className="cardlist">
  <Row>
    <Col>
    <Card className="card">
  <Card.Body>
    <Card.Title>SANITY CHECKLIST</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><CheckCircleIcon fontSize='large'/></Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>
    <Col><Card className="card">
  <Card.Body>
    <Card.Title>HEART BEAT</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><FavoriteIcon fontSize='large'/></Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col><Card className="card">
  <Card.Body>
    <Card.Title>SECURITY CHECKLIST</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><VerifiedUserIcon fontSize='large' /></Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col><Card className="card">
  <Card.Body>
    <Card.Title>DATA CHECK POINTS</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><FitnessCenterIcon fontSize='large'/></Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  </Row>
</Container>
        </div>
    )
}

export default cards
