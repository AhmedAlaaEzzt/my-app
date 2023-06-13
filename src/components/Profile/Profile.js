import { Image, Container, Row, Col } from "react-bootstrap";

export const Profile = ({ email }) => {
  return (
    <Container className="w-25 d-flex flex-column mt-5 border p-3">
      <h1 className="mb-3">Profile</h1>
      <Row>
        <Col>
          <Image
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            rounded
            fluid
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Email: {email}</h4>
        </Col>
      </Row>
    </Container>
  );
};
