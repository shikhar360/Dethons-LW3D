import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <div className=" scroll-smooth ">
      <Head>
        <title> Deethon </title>
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css2?family=Caveat&family=DynaPuff&family=Montserrat:wght@500&display=swap"
        />
      </Head>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Navbar />
        <Component {...pageProps} />
      </ThirdwebProvider>
    </div>
  );
}

export default MyApp;
