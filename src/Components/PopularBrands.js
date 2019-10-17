import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../App.css';
import popimg_1 from '../images/off-white-air-jordan-1.jpg';
import popimg_2 from '../images/yeezy_350.jpg';
import popimg_3 from '../images/jordan-cny.jpg';
import popimg_4 from '../images/adidas-Ultra-Boost-4.jpg';
import nikelogo from '../images/nike-logo.jpg';
import adidaslogo from '../images/adidas-logo.jpg';
import jordanlogo from '../images/jordan-logo.jpg';
import yzylogo from '../images/yzy-logo.jpg';

const PopularBrands = () => {
  return (
    <MDBContainer className="container-pop">
      <MDBRow className="row-popbrand">
          <MDBCol className="col-popbrand" >
            <img src = {
              popimg_1
            }
            className = "img-fluid border-bottom border-dark popbrand"
            alt = "off-white-1" />
            <img src = {
              nikelogo
            }
            className = "img-fluid brand-logo"
            alt = "logo" />
          </MDBCol>
          <MDBCol  className="col-popbrand">
            <img src = {
              popimg_2
            }
            className = "img-fluid border-bottom border-dark popbrand"
            alt = "yeezy-350" />
               <img src = {
                 yzylogo
               }
               className = "img-fluid brand-logo"
               alt = "logo" />
          </MDBCol>
          <MDBCol className="col-popbrand">
            <img src={popimg_3} className="img-fluid border-bottom border-dark popbrand" alt="air-jordan-cny" />
               <img src = {
                 jordanlogo
               }
               className = "img-fluid brand-logo"
               alt = "logo" />
          </MDBCol>
          <MDBCol className="col-popbrand">
            <img src = {
              popimg_4
            }
            className = "img-fluid border-bottom border-dark popbrand"
            alt = "shoe" />
              < img src = {
                adidaslogo
              }
              className = "img-fluid brand-logo"
              alt = "logo" / >
          </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PopularBrands;
