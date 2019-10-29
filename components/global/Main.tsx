/**
 * Main.tsx - Main component. Root level where the auth status is handled
 */
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AppProps } from "next/app";
import { useAuth, IUserInfo } from "../firebase";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Footer from "./Footer";

type MainProps = React.PropsWithChildren<any> & AppProps<any>;

const initialState: IUserInfo = {
  displayName: null,
  email: null,
  uid: "",
  photoURL: null
};
// TODO: Add redirect feature. ie: Pass redirect link to index
const Main = ({ Component, pageProps, children }: MainProps) => {
  const authStatus = useAuth();
  const router = useRouter();  
  const [userInfo, setUserInfo] = useState<IUserInfo>(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  // TODO: MAKE LOGIN/LOGOUT TRANSITIONS SMOOTHER
  useEffect(() => {
    setIsLoggedIn(authStatus.isLoggedIn as boolean);
    setUserInfo(authStatus.firebase.getUserInfo());

    return () => {
      if(!isLoggedIn) {
        router.replace('/index');
      }
      // TODO: implement the cleanup method
    };
  }, [authStatus.isLoggedIn]);

  const initiateLogin = (isLoggedIn: boolean) => {
    if (!isLoggedIn) {
      authStatus.firebase.login();
    }
  };

  const initiateLogout = (isLoggedIn: boolean) => {
    if (isLoggedIn) {
      authStatus.firebase.logout();
    }
  };

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {isLoggedIn && (
        <NavBar
          isLoggedIn={isLoggedIn}
          handleLogin={initiateLogin}
          handleLogout={initiateLogout}
          {...userInfo}
        />
      )}
      <Container>
        <Component
          {...pageProps}
          {...children}
          {...userInfo}
          isLoggedIn={isLoggedIn}
          handleLogin={initiateLogin}
          handleLogout={initiateLogout}
        />
      </Container>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default Main;
