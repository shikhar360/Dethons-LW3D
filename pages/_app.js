import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Deethon",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

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
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: "#8338ec",
            accentColorForeground: "#10002b",
          })}
        >
          <Navbar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
