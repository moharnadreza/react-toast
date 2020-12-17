import React from 'react'
import { Success, Close, Info, Warning } from '..'
import { Type } from '../../types'

interface IToastIcon {
  /** Icon type */
  type: Type
}

export const toastIcon = ({ type }: IToastIcon) => {
  switch (type) {
    case 'error':
      return <Close />
    case 'info':
      return <Info />
    case 'warning':
      return <Warning />
    default:
      return <Success />
  }
}
