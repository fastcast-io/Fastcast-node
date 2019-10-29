import React from 'react'
import App, { AppContext, AppProps, AppInitialProps } from 'next/app'
import { Firebase, AuthProvider } from '../components/firebase'
import Main from '../components/global/Main'
// import "../styling/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


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
                <Main Component={Component} pageProps={pageProps} children={children} />
            </AuthProvider>
        )
    }
}