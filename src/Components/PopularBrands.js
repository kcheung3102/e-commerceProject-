import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../App.css';
import popimg_1 from '../images/off-white-air-jordan-1.jpg';
import popimg_2 from '../images/yeezy_350.jpg';
import popimg_3 from '../images/jordan-cny.jpg';
import popimg_4 from '../images/adidas-Ultra-Boost-4.jpg';

const PopularBrands = () => {
  return (
    <MDBContainer className="container-pop">
      <MDBRow className="row-popbrand">
          <MDBCol className="col-popbrand" >
            <img src={popimg_1} className="img-fluid" alt="off-white-jordan-1" />
          </MDBCol>
          <MDBCol  className="col-popbrand">
            <img src={popimg_2} className="img-fluid" alt="yeezy-350" />
          </MDBCol>
          <MDBCol className="col-popbrand">
            <img src={popimg_3} className="img-fluid" alt="air-jordan-cny" />
          </MDBCol>
          <MDBCol className="col-popbrand">
            <img src={popimg_4} className="img-fluid" alt="air-jordan-cny" />
          </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PopularBrands;
