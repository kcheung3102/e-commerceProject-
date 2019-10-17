import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import img from '../images/nike-shoes.jpg';
import img_2 from '../images/nike-air-hurache.jpg';
import img_3 from '../images/red-white-air-jordan-1.jpg';
import '../App.css';

const CarouselPage = () => {
  return (
     <MDBContainer className = "carousel"
     Id = "background-carousel" >
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner className="carousel-inner">
          <MDBCarouselItem className="item" itemId="1">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src={img}
                alt="nike shoes on foot"
              />
            </MDBView>
          </MDBCarouselItem >

          <MDBCarouselItem  className="item" itemId="2">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src={img_2}
                alt="nike huraches"
              />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem className="item" itemId="3">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src={img_3}
                alt="air jordan 1"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
