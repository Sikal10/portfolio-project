import Head from 'next/head'
import Home from "../components/Home/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Sikal's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Home />

    </div>
  )
}
