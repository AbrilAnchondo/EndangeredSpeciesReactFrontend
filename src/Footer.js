import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import QuoteGenerator from "./QuoteGenerator";

const fixed = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '15%',
  fontStyle: 'bold',
  fontSize: '1em'
}

const Footer = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4" style={fixed}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" style={{textAlign: "center", marginLeft: "25%"}}>
            <QuoteGenerator />
          </MDBCol>
          <MDBCol md="6">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        
      </div>
    </MDBFooter>
  );
}

export default Footer;