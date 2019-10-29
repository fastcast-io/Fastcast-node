import { Container } from "react-bootstrap";
import { AppProps } from 'next/app'
import NavBar from "./NavBar/NavBar";

type MainProps = React.PropsWithChildren<any> & AppProps<any>

const Main = ({ Component, pageProps, children } : MainProps) => (
  <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
    <NavBar />
    <Container>
      <Component {...pageProps} {...children} />
    </Container>
  </div>
)

export default Main;