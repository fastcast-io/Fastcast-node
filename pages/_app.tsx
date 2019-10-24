import React, { Component } from 'react'
import App, { Container, AppContext, AppProps, AppInitialProps } from 'next/app'
import { Firebase, AuthProvider } from '../components/firebase'

import "../styling/global.scss";
import NavBar from '../components/global/NavBar'


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
            <Container>
                <AuthProvider value={new Firebase()}>
                    <div className="container">
                        <NavBar />
                        <Component {...pageProps} { ...children }/>
                    </div>
                </AuthProvider>
            </Container>
        )
    }
}