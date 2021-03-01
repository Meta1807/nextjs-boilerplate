import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import tw from "twin.macro"
import Memes from "@components/Memes/"
import Search from "@components/base/Search"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const router = useRouter()
  const [search, setSearch] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 5)
    return () => clearTimeout(timer)
  }, [search])

  return (
    <>
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
          css={[
            tw`flex flex-col min-h-screen relative`,
            !search && tw`justify-center`,
            search && tw`my-16`,
          ]}
        >
          <div
            css={[
              tw`relative transition-transform transform w-full duration-500`,
              !search && tw`translate-y-1/4`,
              search && tw`translate-y-0 inset-y-16`,
            ]}
          >
            <div css={[search && tw`mb-8`]}>
              <h1 tw="font-bold text-4xl text-center mb-8">Explore.</h1>
              <Search search={search} searchHandler={setSearch} />
            </div>
            {search && <Memes search={search} />}
          </div>
        </main>
      </motion.div>
    </>
  )
}
