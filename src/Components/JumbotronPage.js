import React from "react";
import { MDBJumbotron, MDBContainer, MDBBtn, MDBCol, MDBRow, MDBIcon  } from "mdbreact";
import backgroundimg from "../images/off-white-air-jordan-1.jpg";

const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid className="jumbo-bg">
      <MDBContainer>
          <MDBCol className="text-white">
            <h2 className="display-4">New Select Styles</h2>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <MDBBtn outline color ="white" className="jumbo-btn">Shop now</MDBBtn>
          </MDBCol>
      </MDBContainer>
    </MDBJumbotron>
  )
}





export default JumbotronPage;
