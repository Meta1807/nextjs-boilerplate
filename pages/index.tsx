import Head from "next/head"
import tw from "twin.macro"
import { Memes } from "../components/Memes/"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex flex-col my-16">
        <h1 tw="font-bold text-4xl text-center my-10">
          Explore.
        </h1>
        <Memes />
      </main>
    </div>
  )
}
