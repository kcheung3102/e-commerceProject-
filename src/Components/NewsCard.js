import React, { Component } from 'react'
import { MDBCard, MDBIcon } from "mdbreact";
import "../App.css"

export default class NewsCard extends Component {
    render() {
        return (
            <div className="container News-card">
                <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#">
                  <p>
                    Sweatshirt <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
          </div>
             
        )
    }
}
