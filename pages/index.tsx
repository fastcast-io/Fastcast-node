import React, { useState, useEffect } from "react";
import FastcastFullLogo from "../components/global/FastcastBrand/FastcastFullLogo";
// import Head from 'next/head'
// import Nav from '../components/nav'
import { Container } from "react-bulma-components"; //TODO: WHAT IS THIS LOL? SHOULD BE REACT
// import { useAuth } from '../components/firebase'
import { useRouter } from "next/router";

interface HomeProps {
  isLoggedIn: boolean;
  handleLogin: CallableFunction;
}

const Home = ({ isLoggedIn, handleLogin }: HomeProps) => {
  const brandStyle = {
    height: "19rem",
    width: "25rem"
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(false); // TODO: Redirect to home from google
      // TODO: Redirect after logout
      router.replace("/home");
    }
  }, [isLoggedIn]);

  const login = (isLoggedIn: boolean) => {
    setIsLoading(true);
    handleLogin(isLoggedIn);
  };

  // TODO: Add login
  // TODO: Fix the naming of the icons and fix the favicon

  return (
    <Container>
      {/* <h1>Login to continue</h1> */}
      <div className="index">
        {!isLoading ? (
          <>
            <h1>Login to</h1>
            <FastcastFullLogo styles={brandStyle} />

            {/* // TODO: Add style for google button to make it look like actual google button */}
            <button
              className="button is-primary"
              onClick={() => login(isLoggedIn)}
            >
              <strong>Google Login</strong>
            </button>
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
      <style jsx>{`
        .index {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 5px;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }
      `}</style>
    </Container>
  );
};

export default Home;

{
  /*<div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <h1>HELLOOOOOOO</h1>
     <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style> */
  /* </div> */
}
