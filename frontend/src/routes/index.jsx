import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../Components/nav';

export default function Index()
{
    return(
        <>
        <NavigationBar/>
        <Container className="d-flex justify-content-center">
            <Row>
                <Col md={3} style={{paddingRight:"20px"}}>
                    <Card className='text-center mt-5' style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Card.Img variant="top" src="https://internationalsecurityjournal.com/wp-content/uploads/2022/02/shutterstock_359957216.jpg"/>
                        <Card.Body>
                            <Card.Title>Alarm Response</Card.Title>
                            <Card.Text>We respond to Alarm</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{paddingRight:"20px"}}>
                    <Card className='text-center mt-5' style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Card.Img variant="top" src="https://internationalsecurityjournal.com/wp-content/uploads/2022/02/shutterstock_359957216.jpg"/>
                        <Card.Body>
                            <Card.Title>Alarm Response</Card.Title>
                            <Card.Text>We respond to Alarm</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{paddingRight:"20px"}}>
                    <Card className='text-center mt-5' style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Card.Img variant="top" src="https://internationalsecurityjournal.com/wp-content/uploads/2022/02/shutterstock_359957216.jpg"/>
                        <Card.Body>
                            <Card.Title>Alarm Response</Card.Title>
                            <Card.Text>We respond to Alarm</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center mt-5' style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                        <Card.Img variant="top" src="https://internationalsecurityjournal.com/wp-content/uploads/2022/02/shutterstock_359957216.jpg"/>
                        <Card.Body>
                            <Card.Title>Alarm Response</Card.Title>
                            <Card.Text>We respond to Alarm</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}