import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import tw from "twin.macro";
import Saved from "@components/Saved/";

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    console.log(router.route)
  })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex flex-col my-16 min-h-screen">
        <h1 tw="font-bold text-4xl text-center my-10">
          Your saved memes.
        </h1>
        <Saved />
      </main>
    </div>
  )
}
