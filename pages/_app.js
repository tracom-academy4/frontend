import '../styles/globals.css'
import '../styles/Home.module.css'
import Head from 'next/head'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <link rel="icon" href="/favicon Tracom.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
