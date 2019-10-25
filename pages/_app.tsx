import React, { Component } from 'react'
import App, { AppContext, AppProps, AppInitialProps } from 'next/app'
import { Firebase, AuthProvider } from '../components/firebase'
import { Container } from 'react-bootstrap'
// import "../styling/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/global/NavBar/NavBar'


export interface MyAppInitialProps {}

const getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppProps & AppInitialProps> => {
    const initialProps: MyAppInitialProps = {}

    const pageProps = Component.getInitialProps && (await Component.getInitialProps({ ...ctx, ...initialProps}))

    return ({ pageProps, ...initialProps } as AppProps)
    // return ({ ...pageProps } as AppProps)
}

export default class MyApp extends App<AppProps<any>> {
    static getInitialProps = getInitialProps

    render() {
        const { Component, pageProps, children } = this.props

        return (
            <AuthProvider value={new Firebase()}>
                <div style={{fontFamily: "'IBM Plex Sans', sans-serif"}}>
                    <NavBar />
                    <Container>
                        <Component {...pageProps} { ...children }/>
                    </Container>
                </div>
            </AuthProvider>
        )
    }
}