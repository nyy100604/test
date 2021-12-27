/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            Wei-Chen Liu {new Date().getFullYear()}©, Designed by React{" "}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
