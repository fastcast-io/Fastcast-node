import FastcastFullLogo from "../FastcastBrand/FastcastFullLogo";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from 'next/link'


// TODO: FIX THE LINKS!!!!! GRRRRR
const Footer = () => {
  const brandStyles = {
    height: "8rem",
    width: "14rem"
  };

  return (
    // <footer className="footer">
    // {/* // <div className="footer"> */}
    // <Container>
        <Navbar /*fixed="bottom"*/ expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <div className="footer-left">
            <FastcastFullLogo styles={brandStyles} />
            </div>
        </Navbar.Brand>
        <div className="footer-right">
            {/* FIX THE LINKS */}
            <div className="footer-content-links"><Link href="/terms"><Nav.Link as="a">Terms of use</Nav.Link></Link></div>
            <div className="footer-content-links"><Link href="/about"><Nav.Link as="a">About Us</Nav.Link></Link></div>
            <div className="footer-content-links"><Link href="/contactus"><Nav.Link as="a">Contact Us</Nav.Link></Link></div>
        </div>
        <style jsx>{`
            .footer { /* TODO: FIX ME */ }
            
            .footer-left {}

            .footer-right {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 80%;
                margin: 0;
            }

            .footer-content-links {
                color: rgba(255,255,255,.5);
                cursor: pointer;
                margin: 25px;
              }
              
            .footer-content-links:hover {
              color: white;
            }
        `}</style>
        </Navbar>
    // </Container>
    // {/* </div> */}
    //  </footer>
  );
};

export default Footer;
