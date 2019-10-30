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
            <Link href="/home"><Nav.Link href="" as="a">home</Nav.Link></Link> { /* home */ }
            <Link href="/circles"><Nav.Link href="" as="a">circles</Nav.Link></Link> { /* circles */ }
            <Link href="/sessions"><Nav.Link href="" as="a">sessions</Nav.Link></Link> { /* sessions */ }
            <Link href="/templates"><Nav.Link href="" as="a">templates</Nav.Link></Link> { /* templates */ }
            <Link href="/profile"><Nav.Link href="" as="a">profile</Nav.Link></Link> { /* profile */ }
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
