import React from 'react';
import Head from "next/head"
import tw from "twin.macro"
import Memes from "@components/Memes/"
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    console.log(router.route)
  })
  return (
    <AnimatePresence>
      <Head>
          <title>Kesegaran Compfest - Explore</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        animate={{ opacity: 1.0 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        key={router.route}
      >
        <main
          tw="flex flex-col my-16 min-h-screen"
        >
          <h1 tw="font-bold text-4xl text-center my-10">
            Explore.
          </h1>
          <Memes />
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
