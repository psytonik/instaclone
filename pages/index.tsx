import Head from 'next/head'
import {Header} from "@/components";
import Feed from "@/screens";

export default function Home() {
  return (
    <>
      <Head>
        <title>Insta Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          {/* HEADER */}
        <Header />
          {/* FEED */}
        <Feed/>
          {/* MODAL */}
    </>
  )
}
