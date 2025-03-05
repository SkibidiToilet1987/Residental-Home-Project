import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../../Components/nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <>
      <NavigationBar/>
      <Container fluid className="vh-100 d-flex align-items-center">
        <Row className="w-100 justify-content-center">
          <Col md={6}>
            <Card className="shadow">
              <Card.Body>
                <Form>
                  <Card.Title className="fs-2 text-center"><strong>Login</strong></Card.Title>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
