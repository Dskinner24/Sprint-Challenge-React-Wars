// Write your Character component here
import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Container, Row, Col} from 'reactstrap';

function Character(props) {
    console.log(props.characterArray)
    return(
        <Container>
            <Row>
            {props.characterArray.map((c) => {
                return(
                    <Col xs='4'>
                    <Card key={c.created}>
                        <CardBody>
                            <CardTitle>{c.name}</CardTitle>
                            <CardSubtitle>{c.status}</CardSubtitle>
                            <CardText>{c.species}</CardText>                           
                        </CardBody>
                    </Card>
                    </Col>
                )
            })}
            </Row>
        </Container>
    )
};

export default Character;