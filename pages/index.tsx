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
import  Slider  from "../components/Slider";
import Breadcrumb from "../components/Breadcrumb";

export default function Home() {
  const [product, setProduct] = useState<Product>();

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    retrieveProduct();
  }, []);

  const retrieveProduct = () => {
    ProductService.getProduct()
      .then((response: any) => {
        dispatch(setResponseData(response.data as Product));
        dispatch(setLoading(true));

        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    
    <Container className="mt-5">
      {!loading && <Loading />}

      {loading && (
        <Row className="d-flex justify-content-center align-items-center">
           <Col md={4}></Col>
          <Col xs={12} md={4}>
            <Slider></Slider>
            <Breadcrumb></Breadcrumb>
          </Col>
         
          <Col md={4}></Col>
        </Row>
      )}
    </Container>
  );
}
