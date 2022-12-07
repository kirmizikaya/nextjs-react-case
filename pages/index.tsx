import { useDispatch } from "react-redux";
import { GetServerSideProps, NextPage } from "next";

import ProductService from "../services/productService";
import { setResponseData } from "../stores/productSlice";
import { Product } from "../types/Product";
//bootsrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//components
import Slider from "../components/Slider/Slider";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDetail from "../components/ProductDetail/ProductDetail";

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await ProductService.getProduct();
  const items: Product = await result.json();
  return {
    props: { items },
  };
};

const Home: NextPage<{ items: Product }> = (props) => {
  const dispatch = useDispatch();

  dispatch(setResponseData(props.items));

  return (
    <Container className="mt-md-5 mt-3">
      <Row>
        <Col xs={12} md={4}>
          <Slider></Slider>
        </Col>
        <Col md={1} xs={12}></Col>
        <Col md={7} xs={12}>
          <Breadcrumb></Breadcrumb>
          <ProductDetail></ProductDetail>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
