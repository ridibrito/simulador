import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simulador | Coruss</title>
        <meta name="description" content="CRM para gestão de planosde saúde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icone.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
