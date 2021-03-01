import React from "react"
import { TwStyle } from "twin.macro"

export default interface ButtonProps {
  onClick?: Function
  name: string
  src?: string
  icon?: React.ReactNode
  disabled?: boolean
  active?: Boolean
  activeClasses?: TwStyle
}
