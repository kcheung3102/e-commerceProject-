import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip, MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import "../App.css"

export default class NewsCard extends Component {
    render() {
        return (
          <section>
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Red trousers <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Accessories <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>

          </section>
             
        )
    }
}
