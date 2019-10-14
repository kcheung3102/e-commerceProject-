import React, { Component } from 'react';
import Carousel from './Carousel';

class Landing extends Component {

  render() {
    return (
      <div className='container'>
        <section className="row">
          <div className="col-sm">
            <Carousel />
          </div>
        </section>
      </div>
    );
  }

}

export default Landing;
