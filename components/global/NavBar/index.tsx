import UserStatusZone from "./UserStatusZone";
import FastcastBrand from "../FastcastBrand/FastcastText";
// import { Navbar } from 'react-bulma-components'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IUserInfo } from "../../firebase";

interface INavbarProps {
  // email: string | null,
  displayName: string | null;
  // photoURL: string | null,
  // uid: string
  isLoggedIn: boolean;
  handleLogin: CallableFunction;
  handleLogout: CallableFunction;
}

// type NavbarPropsType = React.ComponentProps<any> & */ INavbarProps

const NavBar = (props: INavbarProps) => {
  const brandStyle = {
    height: "2rem",
    width: "9rem"
  };

  const { displayName, isLoggedIn, handleLogin, handleLogout } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <FastcastBrand styles={brandStyle} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {/* <div style={{color: 'white'}}>Hi Junior</div> */}
          {/* {color: 'white'} */}
          <UserStatusZone
            displayName={displayName}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

    //     <Navbar.Collapse>
    //     </Navbar.Collapse>
    // </Navbar>

    // <Navbar>
    //     <Navbar.Brand color="#484848">
    //         <Navbar.Item renderAs="a" >
    //             <FastcastBrand />
    //         </Navbar.Item>
    //         <Navbar.Container>
    //             {/* <div className="navbar-end">
    //                 <div className="navbar-items">
    //                     <div className="buttons"> */}
    //                         <Navbar.Container position="end">
    //                             <div>Hi Junior</div>
    //                         </Navbar.Container>
    //                     {/* </div>
    //                 </div>
    //             </div> */}
    //         </Navbar.Container>
    //     </Navbar.Brand>
    // </Navbar>
  );
};

export default NavBar;
