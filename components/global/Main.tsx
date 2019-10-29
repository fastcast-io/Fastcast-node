/**
 * Main.tsx - Main component. Root level where the auth status is handled
 */
import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import { AppProps } from 'next/app'
import { useAuth, IUserInfo } from '../firebase'
import NavBar from "./NavBar";
import Footer from './Footer'


type MainProps = React.PropsWithChildren<any> & AppProps<any>

const initialState : IUserInfo = {
  displayName: null,
  email: null,
  uid: "",
  photoURL: null
}

const Main = ({ Component, pageProps, children } : MainProps) => {
  
  const authStatus = useAuth()
  const [ userInfo, setUserInfo ] = useState<IUserInfo>(initialState)
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  
  useEffect(() => {
    setIsLoggedIn(authStatus.isLoggedIn as boolean)
    setUserInfo(authStatus.firebase.getUserInfo())

    return () => {
      // TODO: implement the cleanup method
    }
  })

  const initiateLogin = ( isLoggedIn: boolean ) => {
    if (!isLoggedIn) {
      authStatus.firebase.login()
    }
  }

  const initiateLogout = ( isLoggedIn: boolean ) => {
    if (isLoggedIn) {
      authStatus.firebase.logout()
    }
  }

  return (
  <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
    { isLoggedIn && <NavBar /> }
    <Container>
      <Component {...pageProps} {...children} />
    </Container>
    { isLoggedIn && <Footer /> }
  </div>
) }

export default Main;