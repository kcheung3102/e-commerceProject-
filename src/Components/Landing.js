import React, { Component } from 'react';
import Carousel from './Carousel';
import JumbotronPage from './JumbotronPage';

class Landing extends Component {

  render() {
    return (
      <div className='container-landing'>
          <JumbotronPage />
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
