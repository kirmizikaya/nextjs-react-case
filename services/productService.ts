import http from "./http-common";
import { Product } from "../types/Product";
 
const getProduct = () => {
  return http.get<Array<Product>>("/api/Item/1");
};



const ProductService = {
  getProduct
};

export default ProductService;