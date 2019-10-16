import React, { Component } from 'react';
import Carousel from './Carousel';
import JumbotronPage from './JumbotronPage';
import PopularBrands from './PopularBrands';
import PopTitle from './Headers/PopTitle'

class Landing extends Component {

  render() {
    return (
      <div>
          <JumbotronPage />
        <div className="container">
          <div className="row">
              <div className="col-sm">
                <Carousel />
              </div>
              <div className="col-sm">
                <Carousel />
              </div>
              <div className="col-sm">
                <Carousel />
              </div>
          </div>
        </div>
        <PopTitle />
        <PopularBrands />
      </div>
    );
  }

}

export default Landing;
