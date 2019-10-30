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
  let index = router.pathname == 'index' || router.pathname == ''

  // TODO: MAKE LOGIN/LOGOUT TRANSITIONS SMOOTHER
  useEffect(() => {
    setIsLoggedIn(authStatus.isLoggedIn as boolean);
    setUserInfo(authStatus.firebase.getUserInfo());
    index = router.pathname == 'index' || router.pathname == ''
    
    return () => {
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
    else {
      router.replace('/index');
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
      {true && (<div className="main-wrapper">
        <div className="content-wrapper">
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
        </div>
      </div>)}
      <style jsx>{`
      .main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #F9F9F9 !important;
        /* min-height: 50rem !important;
        max-height: 100% !important; */
        min-height: 50rem !important;
        height: 50rem !important;    
        max-height: 65rem !important;    
        min-width: 100% !important;
        max-width: 100% !important;
      }
      
      .content-wrapper {
        padding: 23px 23px 0px;        
        background: #FFFFFF !important;
        min-width: 80% !important;
        max-width: 80% !important;
        height: 100% !important;
        /* min-height: 50rem !important; */
      }
      `}</style>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default Main;
