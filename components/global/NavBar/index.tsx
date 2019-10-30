import { Fragment } from "react";
import UserStatusZone from "./UserStatusZone";
import FastcastBrand from "../FastcastBrand/FastcastText";
// import { Navbar } from 'react-bulma-components'
import Link from 'next/link'
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
  // TODO: Fix the links and the nav bar color
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fastcastNavbar"
      >
        <Navbar.Brand>
          <FastcastBrand styles={brandStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href=""><Link href="/home">home</Link></Nav.Link> { /* home */ }
            <Nav.Link href=""><Link href="/circles">circles</Link></Nav.Link> { /* circles */ }
            <Nav.Link href=""><Link href="/sessions">sessions</Link></Nav.Link> { /* sessions */ }
            <Nav.Link href=""><Link href="/templates">templates</Link></Nav.Link> { /* templates */ }
            <Nav.Link href=""><Link href="/profile">profile</Link></Nav.Link> { /* profile */ }
            <UserStatusZone
              displayName={displayName}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* // Fix the styling. Good for now */}
      <style jsx>{`
        .fastcastNavbar {
          box-shadow: 0px 4px 2px rgba(195, 0, 0, 0.28) !important;
          color: black !important;
        }
      `}</style>
    </Fragment>
  );
};

export default NavBar;
