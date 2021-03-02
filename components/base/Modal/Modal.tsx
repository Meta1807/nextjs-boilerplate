import React, { useContext } from "react"
import tw from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"
import { modalContext } from "./ModalContext"

const Modal: React.FC = () => {
  const { selectedData, setSelectedData } = useContext(modalContext)

  return (
    <>
      <AnimatePresence>
        {selectedData?.url && (
          <>
            <style
              dangerouslySetInnerHTML={{
                __html: `
              html { overflow: hidden; }
              ::-webkit-scrollbar {
                width: 0px;
                background: transparent; /* make scrollbar transparent */
              }
            `,
              }}
            />
            <motion.div
              tw="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={() => setSelectedData({})}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <div tw="relative w-full h-full flex justify-center overflow-y-auto">
                <div tw="flex items-center max-w-lg w-full p-4 cursor-pointer">
                  <img
                    tw="w-full max-h-screen object-cover rounded-lg"
                    src={selectedData?.url}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
