import React, { ReactNode } from "react"

export const modalContext = React.createContext({
  selectedData: null,
  setSelectedData: null,
})

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = React.useState({})

  return (
    <modalContext.Provider
      value={{ selectedData: data, setSelectedData: setData }}
    >
      {children}
    </modalContext.Provider>
  )
}
