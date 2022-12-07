import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import ProductService from "../../services/productService";
import { RootState } from "../../stores";
import { setLoading, setResponseData } from "../../stores/productSlice";
import styles from "../styles/Home.module.css";
import { Product } from "../../types/Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";

export default function Loading() {
 
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Yükleniyor...</span>
      </Spinner>
    </div>
  );
}
