import React, { FC } from 'react'
import { Close, Info } from './icons'
import './Toast.css'

interface IToast {
  backgroundColor: string
}

const Toast: FC<IToast> = ({ backgroundColor }) => {
  return (
    <div className="toast" style={{ backgroundColor }}>
      <div className="icon">
        <Info />
      </div>
      <div className="text">
        <p>Check your connection, please.</p>
      </div>
      <div className="close">
        <Close />
      </div>
    </div>
  )
}

export default Toast
