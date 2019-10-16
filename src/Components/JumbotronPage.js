import React from "react";
import { MDBJumbotron, MDBContainer, MDBBtn, MDBCol, MDBRow,  } from "mdbreact";
import backgroundimg from "../images/off-white-air-jordan-1.jpg";

const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid style={{ backgroundImage: 'url:({backgroundimg})'}}>
      <MDBContainer>
          <MDBCol>
            <h2 className="display-4">Fluid jumbotron</h2>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </MDBCol>
      </MDBContainer>
    </MDBJumbotron>
  )
}



export default JumbotronPage;
