import Spinner from "react-bootstrap/Spinner";
 

export default function Loading() {
 
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Yükleniyor...</span>
      </Spinner>
    </div>
  );
}
