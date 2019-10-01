import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import img from '../images/nike-shoes.jpg';
import img_2 from '../images/nike-air-hurache.jpg';
import img_3 from '../images/red-white-air-jordan-1.jpg';
import '../App.css';

const CarouselPage = () => {
  return (
    <MDBContainer className="carousel">
      <div className='w-responsive text-center mx-auto p-3 mt-2'>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner className="carousel-inner">
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={img}
                alt="nike shoes on foot"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={img_2}
                alt="nike huraches"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={img_3}
                alt="air jordan 1"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </div>
    </MDBContainer>
  );
}

export default CarouselPage;
