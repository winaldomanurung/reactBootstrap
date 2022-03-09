import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ColumnsBootstrapItem from "./ColumnsBootstrapItem";

const ColumnsBootstrap = () => {
  return (
    <Container>
      <Row className="mt-5">
        <ColumnsBootstrapItem />
        <ColumnsBootstrapItem />
        <ColumnsBootstrapItem />
      </Row>

      <hr className="h-1"></hr>
    </Container>
  );
};

export default ColumnsBootstrap;
