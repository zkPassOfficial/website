import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./main'), {
  ssr: false
})

const Home: NextPage = () => {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
      <meta name="description" content="zkPass is a decentralized KYC solution based on MPC (Multi-Party Computation) and ZKP (Zero-Knowledge Proof)" />
      <meta name="keywords" content="zkPass, KYC, Privacy, ZKP, zero-knowledge proofs" />
      <meta
        name="twitter:description"
        content="zkPass is a decentralized KYC solution based on MPC (Multi-Party Computation) and ZKP (Zero-Knowledge Proof)"
      />
      <meta name="twitter:title" content="zkPass | Privacy-preserving KYC Solution" />
      <meta property="og:title" content="zkPass | Privacy-preserving KYC Solution" />
      <meta property="og:site_name" content="zkPass | Privacy-preserving KYC Solution" />
      <meta property="og:description" content="zkPass is a decentralized KYC solution based on MPC (Multi-Party Computation) and ZKP (Zero-Knowledge Proof)" />
      <meta property="og:image" content="/images/logo.png" />

      <title>{`zkPass | Privacy-preserving KYC Solution`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
  </>

}

export default Home
