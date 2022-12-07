const baseUrl = "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/";

const getProduct = async() =>{
  return fetch(baseUrl+"/api/Item/1");
}

const ProductService = {
  getProduct
};

export default ProductService;