import axios from "axios";

export default axios.create({
  baseURL: "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/",
  headers: {
    "Content-type": "application/json"
  },

});