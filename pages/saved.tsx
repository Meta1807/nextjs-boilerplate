import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import tw from "twin.macro"
import Saved from "@components/Saved/"

export default function Home() {
  const router = useRouter()
  React.useEffect(() => {
    console.log(router.route)
  })
  return (
    <div>
      <Head>
        <title>Kesegaran Compfest - Saved Memes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex flex-col my-16 min-h-screen">
        <motion.h1
          tw="font-bold text-4xl text-center my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your saved memes.
        </motion.h1>
        <Saved />
      </main>
    </div>
  )
}
