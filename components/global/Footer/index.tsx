import FastcastFullLogo from "../FastcastBrand/FastcastFullLogo";
import { Nav, Navbar, Container } from "react-bootstrap";


// TODO: FIX THE LINKS!!!!! GRRRRR
const Footer = () => {
  const brandStyles = {
    height: "8rem",
    width: "14rem"
  };

  return (
    <footer className="footer">
    {/* // <div className="footer"> */}
    <Container>
        <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <div className="footer-left">
            <FastcastFullLogo styles={brandStyles} />
            </div>
        </Navbar.Brand>
        <div className="footer-right">
            {/* FIX THE LINKS */}
            <div className="footer-content-links"><Nav.Link href="#FIX-ME">Terms of use</Nav.Link></div>
            <div className="footer-content-links"><Nav.Link href="#FIX-ME">About Us</Nav.Link></div>
            <div className="footer-content-links"><Nav.Link href="#FIX-ME">Contact Us</Nav.Link></div>
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
                /* color: rgba(255,255,255,.5); */
                margin: 25px;
            }
        `}</style>
        </Navbar>
    </Container>
    {/* </div> */}
     </footer>
  );
};

export default Footer;
