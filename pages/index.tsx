import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductService from "../services/productService";
import { RootState } from "../stores";
import { setLoading, setResponseData } from "../stores/productSlice";
import styles from "../styles/Home.module.css";
import { Product } from "../types/Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";

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
