import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../stores";
import { Tag } from "../../types/Product";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

//icons
import { BiUser,  } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { TbCreditCard, TbArrowBackUp, TbBox } from "react-icons/tb";
import { CiExport,CiHeart } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
//css module
import styles from "./ProductDetail.module.css";


const Badge = (item: Tag, index: number) => {
  var badgeStyle = {
    backgroundColor: item.tagBackgroundColor,
    color: item.tagTextColor,
    fontSize: "13px",
    borderRadius: "6px",
    fontWeight: "600",
    padding: "4px 8px 7px 8px",
  };
  return (
    <span style={badgeStyle} key={index} className="me-2">
      {item.tagName === "GARANTILI" && (
        <RiSecurePaymentLine style={{ width: "22px", height: "24px" }} />
      )}
      {item.tagName}
    </span>
  );
};

function SellerModal(props: any) {
  const data = useSelector((state: RootState) => state.responseData);
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <SellerCard></SellerCard>
          <div className="mt-2 ">Açıklama : {data.seller.description}</div>
          <hr />
          Puan: <strong>{data.seller.totalSold}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-secondary">
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// SellerCard -- StyledComponent
const SellerWrapper = styled.div`
border: 1px solid #e0e0e0;
border-radius: 6px;
padding: 15px;
color: rgba(0, 0, 0, 0.749);
display: inline-block;
&:hover {
  cursor: pointer;
}
`;
const SellerName = styled.div`
padding-right: 15px;
span {
  font-size: 16px;
  font-weight: bold;
}
`;
const SellerWarnig = styled.div`
background-color: #feba00 !important;
border-radius: 3px;
padding: 0 6px;
font-size: 13px;
`;

const SellerCard = () => {
  const responseData = useSelector((state: RootState) => state.responseData);

  return (
    <>
      <SellerWrapper>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex justify-content-start align-items-center">
            <BiUser style={{ width: "44px", height: "24px" }} />
            <SellerName>
              Satıcı: <span>{responseData.seller?.name}</span>
            </SellerName>
          </div>
          <SellerWarnig>
            <div className="d-flex justify-content-center align-items-center">
              <div style={{ marginTop: "-2px" }}>
                <AiFillStar />
              </div>
              <strong className="font-bold">
                {responseData.seller?.rating}
              </strong>
            </div>
          </SellerWarnig>
        </div>
      </SellerWrapper>
    </>
  );
};


//ProductDetail -- StyledComponent
const Price = styled.div`
font-size: 32px;
font-weight: bold;
margin-top: 30px;
p.price_penny {
  font-size: 24px;
  display: inline;
}
`;

const DiscountPrice = styled.div`
font-size: 16px;
padding: 0;
font-weight: 600;
background: #dbdada;
border-radius: 15px;
position: relative;
display: inline-flex;
z-index: 2;
height: 35px;
justify-content: center;
align-items: center;
padding-right: 10px;
padding-left: 10px;
`;
const DiscountDescription = styled.div`
font-size: 13px;
padding: 0;
background: #eee;
border-radius: 15px;
margin-left: -25px;
display: inline-flex;
position: absolute;
height: 35px;
justify-content: center;
align-items: center;
z-index: -1;
padding-right: 10px;
padding-left: 35px;
`;
const SubDetailList = styled.div`
ul {
  padding: 0;
}
li {
  list-style: none;
  font-size: 14px;
  padding-bottom: 6px;
}
span {
  margin-left: 5px;
  padding-top: 10px;
}
span.underline {
  text-decoration: underline;
}
svg {
  width: 32px;
  height: 32px;
}
`;
const Buttons = styled.div`
svg {
  width: 42px;
  height: 42px;
  background:#eee;  border-radius: 50%;
  font-weight:normal; padding:7px; margin-right:12px;
}
svg:hover{opacity:0.8;}
&:hover{
  cursor:pointer; 
}
.hemenAl{
  background-color: rgba(0,0,0,.749)!important;
  color: #fff!important; font-weight:700; border:0
}

`;

const ProductDetail = () => {
  const data = useSelector((state: RootState) => state.responseData);
  const [modalShow, setModalShow] = React.useState(false);

  const handleSellerModal = () => {
    setModalShow(true);
  };


  return (
    <div className="mt-2 mb-5">
      <h1 className={styles.brandName}>{data.itemName}</h1>
      <div className="mt-3">
        {data.tag?.length > 0 &&
          data.tag.map((item, index) => {
            return Badge(item, index);
          })}
      </div>
      <div className="text-black mt-4 fs-4">{data.description}</div>
      <div>
        <div onClick={handleSellerModal} className="mt-4">
          <SellerCard ></SellerCard>
        </div>
        <Price>
          {data.price}
          <p className="price_penny">,00</p>
        </Price>
        <div className="mt-2">
          <DiscountPrice>
            <del>6.780,00</del>
          </DiscountPrice>
          <DiscountDescription>%5 bizden olsun</DiscountDescription>
        </div>

        <div className="mt-3">
          <SubDetailList>
            <ul>
              <li>
                <TbBox />
                <span>Ücretsiz Kargo</span>
              </li>
              <li>
                <TbCreditCard />
                <span className="underline">800,88 x 6 aya kadar taksit</span>
              </li>
              <li>
                <TbArrowBackUp />
                <span className="underline">Paran Güvende</span>
              </li>
            </ul>
          </SubDetailList>
        </div>
        <SellerModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <Buttons>
        <CiExport/>
        <CiHeart/>
        <Button className="btn-outline-secondary hemenAl">Hemen al</Button>
      </Buttons>
    </div>
  );
};

export default ProductDetail;
