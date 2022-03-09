import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ContentBootstrapItem from "./ContentBootstrapItem";
import ContentBootstrapItemReverse from "./ContentBootstrapItemReverse";

const ContentBootstrap = () => {
  return (
    <Container>
      <ContentBootstrapItem />
      <ContentBootstrapItemReverse />
      <ContentBootstrapItem />
    </Container>
  );
};

export default ContentBootstrap;
