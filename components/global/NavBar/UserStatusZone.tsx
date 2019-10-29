// import { useState, useEffect } from "react";
// import { IUserInfo } from "../../firebase";
import { Button, Nav } from "react-bootstrap";

// TODO: FIX GOOGLE BUTTON SIGN-IN

const NotLoggedIn = (handleLogin: CallableFunction, isLoggedIn: boolean) => (
  <Button onClick={() => handleLogin(isLoggedIn)}>Google Login</Button>
);

const LoggedIn = (userInfoString: string) => (
  <Nav.Link style={{ color: "white" }}> {/* "black" */}
    Hi{" "}
    <strong>
      <i>{userInfoString}</i>
    </strong>{" "}
    |
  </Nav.Link>
);

const LogOut = (handleLogout: CallableFunction, isLoggedIn: boolean) => (
  <Nav.Link onClick={() => handleLogout(isLoggedIn)} style={{ color: "#17A2B8" }}>
    Logout
  </Nav.Link>
);

// interface IUserStatusInfo extends IUserInfo {
//   isLoggedIn: boolean;
//   handleLogin: CallableFunction;
//   handleLogout: CallableFunction;
// }

interface IUserStatusInfo {
    // email: string | null,
  displayName: string | null,
    // photoURL: string | null,
    // uid: string
  isLoggedIn: boolean;
  handleLogin: CallableFunction;
  handleLogout: CallableFunction;
}

const UserStatusZone = ({
  displayName,
  /* photoURL,*/ isLoggedIn,
  handleLogin,
  handleLogout
}: IUserStatusInfo) => {
  // TODO: Redirect from google after logout
  
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace("/index");
  //   }
  // }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <Nav.Item style={{ display: "flex", flexDirection: "row" }}>
          {LoggedIn(displayName as string)}
          {LogOut(handleLogout, isLoggedIn)}
        </Nav.Item>
      ) : (
        NotLoggedIn(handleLogin, isLoggedIn)
      )}
    </div>
  );
};

export default UserStatusZone;
