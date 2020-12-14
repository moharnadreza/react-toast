import React, { FC } from 'react'
import { Close, Success } from '../'
import { Toast, Position } from 'types'
import './Toast.css'

export interface IToast extends Toast {
  delay: number
  position?: Position
  onClose: (id: string) => void
}

const Toast: FC<IToast> = ({ id, type, content, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <div className="icon">
        <Success />
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="close" onClick={() => onClose(id)}>
        <Close />
      </div>
    </div>
  )
}

export default Toast
