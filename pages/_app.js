import Head from 'next/head';
import '../styles/globals.css';


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head >
      <title>Roos'</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Gorditas:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
