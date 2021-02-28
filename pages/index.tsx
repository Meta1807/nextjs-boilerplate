import React, { useState } from 'react';
import Head from "next/head"
import tw from "twin.macro"
import Memes from "@components/Memes/"
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');

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
        transition={{ ease: "easeInOut", duration: 0.5 }}
        key={router.route}
      >
        <main
          tw="flex flex-col my-16 min-h-screen"
        >
          <div tw="my-10">
            <h1 tw="font-bold text-4xl text-center mb-10">
              Explore.
            </h1>
            <div tw="flex justify-center">
              <div tw="w-1/4">
                <input
                  type="text"
                  tw="border border-gray-400 py-2 px-2 w-full rounded-lg focus:(outline-none)"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  placeholder="search for memes ..."
                />
              </div>
            </div>
          </div>
          <Memes search={search} />
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
