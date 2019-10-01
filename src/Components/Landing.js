import React, { Component } from 'react';
import Carousel from './Carousel';

class Landing extends Component {

  render() {
    return (
      <div className='Landing'>
      <section className="wrapper-carousel">
          <Carousel />
      </section>
      </div>
    );
  }

}

export default Landing;
