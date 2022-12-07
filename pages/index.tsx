import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductService from "../services/productService";
import { RootState } from "../stores";
import { setLoading, setResponseData } from "../stores/productSlice";
import { Product } from "../types/Product";
//bootsrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//components
import Loading from "../components/Loading/Loading";
import Slider from "../components/Slider/Slider";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDetail from "../components/ProductDetail/ProductDetail";

export default function Home() {
  const [product, setProduct] = useState<Product>();

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading);
 
 
  useEffect(() => {
    const retrieveProduct = () => {
      ProductService.getProduct()
        .then((response: any) => {
          dispatch(setResponseData(response.data as Product));
          dispatch(setLoading(true));
          })
        .catch((e: Error) => {
          console.log(e);
        });
    };

    retrieveProduct();
  }, []);



  return (
    <Container className="mt-5 ">
      {!loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Loading />
        </div>
      )}

      {loading && (
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
      )}
    </Container>
  );
}
