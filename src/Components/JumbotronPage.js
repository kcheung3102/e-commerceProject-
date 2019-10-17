import React from "react";
import { MDBJumbotron, MDBContainer, MDBBtn, MDBCol } from "mdbreact";


const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid className="jumbo-bg text-center">
      <MDBContainer>
          <MDBCol className="text-white">
            <h2 className="display-4">New Select Styles</h2>
            < p className = "Lead" > Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.</ p>
            <MDBBtn outline color ="white" className="jumbo-btn">Shop now</MDBBtn>
          </MDBCol>
      </MDBContainer>
    </MDBJumbotron>
  )
}





export default JumbotronPage;
